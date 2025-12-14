import BreadCrumbs from "@Components/BreadCrumbs";
import { Box, styled } from "@mui/material";
import { BasicModal } from "@Primitives/index";
import React from "react";
import { CreateProfileHeader } from "./Components/CreateProfileHeader";
import { hooks } from "@Utils/index";
import PersonalInformation from "./Components/PersonalInformation";
import { useForm } from "react-hook-form";
import { CreateProfileFooter } from "./Components/CreateProfileFooter";
import SkillInformation from "./Components/SkillInformation";
import LocationInformation from "./Components/LocationInformation";
interface PropsI {
  open: boolean;
  onClose: () => void;
}
const ProfileStyled = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const ScrollContent = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  paddingLeft: theme.spacing(16),
  paddingBottom: theme.spacing(16),
  marginTop: theme.spacing(54),
  marginBottom: 75,
}));

const CreateProfileModal = ({ open, onClose }: PropsI) => {
  const { control, watch, setValue } = useForm();
  const {
    createProfileStep,
    activeStep,
    handleBackForCreateProfile,
    handleNextForCreateProfile,
  } = hooks.useUser();
  return (
    <BasicModal open={open} close={onClose} fullScreen>
      <ProfileStyled>
        <CreateProfileHeader
          activeStep={activeStep}
          steps={createProfileStep}
          onClose={onClose}
        />
        <ScrollContent>
          {activeStep === 1 && (
            <PersonalInformation setValue={setValue} control={control} watch={watch} />
          )}
          {activeStep === 2 && <SkillInformation setValue={setValue} watch={watch} control={control} />}
          {activeStep === 3 && <LocationInformation control={control} />}
        </ScrollContent>
        <CreateProfileFooter
          activeStep={activeStep}
          handleBack={handleBackForCreateProfile}
          handleNext={handleNextForCreateProfile}
        />
      </ProfileStyled>
    </BasicModal>
  );
};

export default CreateProfileModal;
