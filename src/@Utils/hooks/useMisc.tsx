import { createContext, useContext, useState, useCallback } from "react";
import { getAllWorkerList, getPostalCode } from "@Utils/controllers/misc";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { uploadImageToS3 } from "../controllers/misc";
import { hooks } from "..";
interface MiscI {
  handleUploadImages: (files: File[]) => Promise<string[] | null>;
  isUploadFileLoading: boolean;
  useGetPostalCode: (
    pincode: string,
  ) => UseQueryResult<{ city: string; state: string }>;
  useGetAllWorkerList: (limit:number) => UseQueryResult<any>;
}

interface UploadFileResponse {
  url: string;
  file_name: string;
}
const MiscContext = createContext<MiscI>({} as MiscI);

export const useMisc = () => useContext(MiscContext);

function useMiscProvider() {
  const { ShowErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
  const [isUploadFileLoading, setIsUploadFileLoading] = useState(false);

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

        if (uploadedFiles.length) {
          ShowSuccessSnackBar(
            `${uploadedFiles.length} file(s) uploaded successfully`,
          );
        }

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

  const useGetAllWorkerList = (limit:number) => {
    return useQuery({
      queryKey: [limit],
      queryFn: () => getAllWorkerList(limit),
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

  return {
    /**
     * Public file upload
     */
    handleUploadImages,
    isUploadFileLoading,
    useGetPostalCode,
    useGetAllWorkerList,
  };
}

export function ProvideMisc({ children }: { children: React.ReactNode }) {
  const value = useMiscProvider();
  return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
}
