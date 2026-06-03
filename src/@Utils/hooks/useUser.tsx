import React, { createContext, useContext, useState } from "react";
import { hooks, interfaces } from "..";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  createProfileUser,
 // getAllWorkersBasedOnSkill,
  getMyProfile,
  getWorkerProfile,
} from "@Utils/controllers/user";
import { createProfileI } from "@Utils/interfaces";

interface userI {
  openProfileDrawer: boolean;
  handleCloseProfileDrawer: () => void;
  handleOpenProfileDrawer: () => void;
  createProfileStep: string[];
  activeStep: number;
  handleBackForCreateProfile: () => void;
  handleNextForCreateProfile: () => void;
  openLogin: boolean;
  handleOpenLogin: () => void;
  handleCloseLogin: () => void;
  handleCreateProfile: (data:interfaces.createProfileI) => void;
  isCreateProfilePending: boolean;
  // useGetAllWorkersBasedOnSkill: (
  //   skill: string,
  //   page: number,
  //   limit: number,
  // ) => UseQueryResult<any>;
  useGetMyProfileData:()=>UseQueryResult<any>,
  useGetWorkerDetailsById:(id:string)=>UseQueryResult<any>
}

const userContext = createContext<userI>({} as userI);

export const useUser = () => useContext(userContext);

const useUserData = () => {
  const { ShowApiErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
  const { handleUploadImages } = hooks.useMisc();
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
  const createProfileStep = [
    "Personal Information",
    "Skill Information",
    "Location Information",
  ];
  const [activeStep, setActiveStep] = useState(1);
  const [openLogin, setOpenLogin] = useState(false);

  /*
   *  open and close Login
   */
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  /*
   *  open and close profile drawer
   */
  const handleOpenProfileDrawer = () => {
    setOpenProfileDrawer(true);
  };
  const handleCloseProfileDrawer = () => {
    setOpenProfileDrawer(false);
  };


  const handleBackForCreateProfile = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };
  const handleNextForCreateProfile = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  /**
   *  Create Proile
   */

  const { mutate: mutateCreateProfile, isPending: isCreateProfilePending } =
    useMutation({
      mutationFn: createProfileUser,
      onSuccess(data) {        
        ShowSuccessSnackBar("Sucess");
      },
      onError: (err) => {
        ShowApiErrorSnackBar(err);
      },
    });

  const createPayload = async (data: createProfileI) => {
    const [imageData, logoData] = await Promise.all([
      handleUploadImages(data.images.map((val) => val.file)),
      handleUploadImages([data.profile]),
    ]);
    return {
      ...data,
      profile: logoData?.[0] || null,
      images: imageData || [],
      experience: data.experience.value,
      languages: data.languages.map((val: { value: string }) => val.value),
      skills: data.skills.map((val: { value: string }) =>
        val.value.toLowerCase(),
      ),
    };
  };
  const handleCreateProfile = async (data: createProfileI) => {
    const result= await createPayload(data)
    mutateCreateProfile(result);
  };

  // get All worker based on skill

  // const useGetAllWorkersBasedOnSkill = (
  //   skill: string,
  //   page: number,
  //   limit: number,
  // ) => {
  //   return useQuery({
  //     queryKey: ["getAllWorkersBasedOnSkill", skill, page, limit],
  //     queryFn: () => getAllWorkersBasedOnSkill(skill, page, limit),
  //     enabled: !!skill,
  //     select: (data) => data.data,
  //   });
  // };
  // get All worker based on skill

  const useGetMyProfileData = (
  ) => {
    return useQuery({
      queryKey: ["getMyProfileData"],
      queryFn: () => getMyProfile(),
      // enabled:activeStep===1,
      select: (data) => data.data,
    });
  };

  const useGetWorkerDetailsById = (id:string
  ) => {
    return useQuery({
      queryKey: ["getWorkerDetailsById",id],
      queryFn: () => getWorkerProfile(id),
      enabled:!!id,
      select: (data) => data.data,
    });
  };

  return {
    openProfileDrawer,
    handleOpenProfileDrawer,
    handleCloseProfileDrawer,
    createProfileStep,
    activeStep,
    handleNextForCreateProfile,
    handleBackForCreateProfile,
    openLogin,
    handleOpenLogin,
    handleCloseLogin,
    handleCreateProfile,
    isCreateProfilePending,
    // useGetAllWorkersBasedOnSkill,
    useGetMyProfileData,
    useGetWorkerDetailsById
  };
};

interface ProvideUserI {
  children: React.ReactNode;
}

export function ProvideUser({ children }: ProvideUserI) {
  const userData = useUserData();
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
