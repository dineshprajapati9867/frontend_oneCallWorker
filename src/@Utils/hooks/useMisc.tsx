import { createContext, useContext, useState, useCallback } from "react";
import {
  createReview,
  getAllSkillsCategory,
  getPostalCode,
  getWorkerProfile,
  searchWorkersBySkills,
} from "@Utils/controllers/misc";
import {
  useQuery,
  UseQueryResult,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
} from "@tanstack/react-query";
import React from "react";
import { uploadImageToS3 } from "../controllers/misc";
import { hooks, interfaces } from "..";
import { useNavigate } from "react-router-dom";
interface MiscI {
  handleUploadImages: (files: File[]) => Promise<string[] | null>;
  isUploadFileLoading: boolean;
  useGetPostalCode: (
    pincode: string,
  ) => UseQueryResult<{ city: string; state: string }>;
  useGetAllSkillsCategory: (limit: number) => UseQueryResult<any>;
  useSearchWorkersBySkills: (
    search: string,
    limit: number,
  ) => UseInfiniteQueryResult<any>;
  useGetWorkerDetailsById: (
    id: string,
  ) => UseInfiniteQueryResult<interfaces.createProfileI>;
  handleCreateReview: (data: interfaces.CreateReviewI) => void;
  isCreateReviewLoading: boolean;
}

interface UploadFileResponse {
  url: string;
  file_name: string;
}
const MiscContext = createContext<MiscI>({} as MiscI);

export const useMisc = () => useContext(MiscContext);

function useMiscProvider() {
  const navigate=useNavigate()
  const { ShowErrorSnackBar } = hooks.useSnackBar();
  const [isUploadFileLoading, setIsUploadFileLoading] = useState(false);
  const { ShowSuccessSnackBar, ShowApiErrorSnackBar } = hooks.useSnackBar();
  /**
   * Generic function to upload files in public bucket
   */
  const handleUploadImages = useCallback(
    async (files: File[]): Promise<UploadFileResponse[] | null> => {
      if (!files?.length) return null;
      setIsUploadFileLoading(true);

      try {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("files", file);
        });

        const response = await uploadImageToS3(formData);

        const uploadedFiles: UploadFileResponse[] =
          response?.data?.results?.map((r: UploadFileResponse) => ({
            url: r.url,
            file_name: r.file_name,
          })) || [];

        // if (uploadedFiles.length) {
        //   ShowSuccessSnackBar(
        //     `${uploadedFiles.length} file(s) uploaded successfully`,
        //   );
        // }

        return uploadedFiles;
      } catch (err: any) {
        ShowErrorSnackBar(err?.message || "Failed to upload file(s)");
        return null;
      } finally {
        setIsUploadFileLoading(false);
      }
    },
    [],
  );

  const useGetAllSkillsCategory = (limit: number) => {
    return useQuery({
      queryKey: [limit],
      queryFn: () => getAllSkillsCategory(limit),
      select: (data) => data.data,
      gcTime: 0,
    });
  };
  /**
   * get the city and state by Postcode
   */
  const useGetPostalCode = (pincode: string) => {
    return useQuery({
      queryKey: ["postalcode", pincode],
      queryFn: () => getPostalCode(pincode),
      gcTime: 0,
      enabled: !!pincode,
      select: (data) => data.data,
    });
  };

  /**
   *   search
   */
  const useSearchWorkersBySkills = (search: string, limit: number = 10) => {
    return useInfiniteQuery({
      queryKey: ["workers", search],

      queryFn: ({ pageParam = 1 }) =>
        searchWorkersBySkills(search, pageParam, limit),

      initialPageParam: 1,

      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.hasMore ? allPages.length + 1 : undefined;
      },

      select: (data) => ({
        ...data,
        pages: data.pages.map((page) => page.data),
      }),

      enabled: !!search,
    });
  };

  const useGetWorkerDetailsById = (id: string) => {
    return useQuery({
      queryKey: [id],
      queryFn: () => getWorkerProfile(id),
      select: (data) => data.data.profile,
      gcTime: 0,
    });
  };

  /**
   *  Create Review
   */
  const { mutate: mutateCreateReview, isPending: isCreateReviewLoading } =
    useMutation({
      mutationFn: createReview,
      onSuccess() {
        ShowSuccessSnackBar("Review submitted successfully");
        navigate(-1)
      },
      onError: (err) => {
        ShowApiErrorSnackBar(err);
      },
    });

  const handleCreateReview = async (data: interfaces.CreateReviewI) => {
   let uploadedImages = [];

  if (data.images?.length > 0) {
    const files = data.images.map((img) => img.file);
    uploadedImages = await handleUploadImages(files);
  }
    const payload = {
      ...data,
      images: uploadedImages,
    };
    mutateCreateReview(payload);
  };
  return {
    /**
     * Public file upload
     */
    handleUploadImages,
    isUploadFileLoading,
    useGetPostalCode,
    useGetAllSkillsCategory,

    useSearchWorkersBySkills,
    useGetWorkerDetailsById,
    handleCreateReview,
    isCreateReviewLoading,
  };
}

export function ProvideMisc({ children }: { children: React.ReactNode }) {
  const value = useMiscProvider();
  return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
}
