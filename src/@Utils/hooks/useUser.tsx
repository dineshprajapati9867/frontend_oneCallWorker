import React, { createContext, useContext, useState } from "react";
import { hooks } from "..";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { createProfileUser, getAllWorkersBasedOnSkill } from "@Utils/controllers/user";
import { createProfileI } from "@Utils/interfaces";

interface userI {
  openProfileDrawer: boolean;
  handleCloseProfileDrawer: () => void;
  handleOpenProfileDrawer: () => void;
  openCreateProfileModal: boolean;
  handleOpenCreateProfileModal: () => void;
  handleCloseCreateProfileModal: () => void;
  createProfileStep: string[];
  activeStep: number;
  handleBackForCreateProfile: () => void;
  handleNextForCreateProfile: () => void;
  openLogin: boolean;
  handleOpenLogin: () => void;
  handleCloseLogin: () => void;
  handleCreateProfile: (data) => void;
  isCreateProfilePending: boolean;
  useGetAllWorkersBasedOnSkill:(skill:string,page:number,limit:number)=>UseQueryResult<any>
}

const userContext = createContext<userI>({} as userI);

export const useUser = () => useContext(userContext);

const useUserData = () => {
  const { ShowApiErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
  const [openCreateProfileModal, setOpenCreateProfileModal] =
    hooks.useHashRouteToggle("create-profile");
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
  /**
   *  open and close Create Profile Modal
   */
  const handleOpenCreateProfileModal = () => {
    setOpenCreateProfileModal(true);
  };
  const handleCloseCreateProfileModal = () => {
    setOpenCreateProfileModal(false);
  };

  const handleBackForCreateProfile = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    } else {
      handleCloseCreateProfileModal();
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

  const createPayload = (data: createProfileI) => {
    return {
      ...data,
      experience: data.experience.value,
      languages: data.languages.map((val: { value: string }) => val.value),
      skills: data.skills.map((val: { value: string }) => val.value.toLowerCase()),
    };
  };
  const handleCreateProfile = (data:createProfileI) => {
   mutateCreateProfile(createPayload(data));
  };


  // get All worker based on skill

  const useGetAllWorkersBasedOnSkill=(skill:string,page:number,limit:number)=>{
    return  useQuery({
    queryKey:["getAllWorkersBasedOnSkill",skill,page,limit],
    queryFn:()=>getAllWorkersBasedOnSkill(skill,page,limit),
    enabled:!!skill,
    select:(data)=>data.data
  })
  }

  return {
    openProfileDrawer,
    handleOpenProfileDrawer,
    handleCloseProfileDrawer,
    handleOpenCreateProfileModal,
    handleCloseCreateProfileModal,
    openCreateProfileModal,
    createProfileStep,
    activeStep,
    handleNextForCreateProfile,
    handleBackForCreateProfile,
    openLogin,
    handleOpenLogin,
    handleCloseLogin,
    handleCreateProfile,
    isCreateProfilePending,
    useGetAllWorkersBasedOnSkill
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
