import { Box, Drawer, styled, useMediaQuery } from "@mui/material";
import React, { Activity } from "react";
import { CreateProfileHeader } from "./Components/CreateProfileHeader";
import { hooks, interfaces } from "@Utils/index";
import PersonalInformation from "./Components/PersonalInformation";
import { useForm } from "react-hook-form";
import { CreateProfileFooter } from "./Components/CreateProfileFooter";
import SkillInformation from "./Components/SkillInformation";
import LocationInformation from "./Components/LocationInformation";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileStyled = styled("form")(({ theme }) => ({
  // height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const ScrollContent = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    // overflowY: "auto",
    marginRight: theme.spacing(isMobile ? 8 : 16),
    paddingLeft: theme.spacing(isMobile ? 8 : 16),
    paddingBottom: theme.spacing(16),
    marginTop: isMobile ? theme.spacing(54) : 0,
    marginBottom: isMobile ? 75 : 0,
  }),
);

const CreateProfileModal = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const isModal = location.state?.modal;
  const { control, watch, setValue, handleSubmit } = useForm({
    mode: "onChange",
  });
  const {
    createProfileStep,
    activeStep,
    handleBackForCreateProfile,
    handleNextForCreateProfile,
    handleCreateProfile,
    isCreateProfilePending,
    // useGetProfileData,
  } = hooks.useUser();
  const { isUploadFileLoading } = hooks.useMisc();
  //const { data } = useGetProfileData();

  const onSubmit = (data: interfaces.createProfileI) => {
    handleCreateProfile(data);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const IsButtonDisabled = () => {
    if (activeStep === 1) {
      return (
        !watch("profile") ||
        !watch("first_name") ||
        !watch("last_name") ||
        !watch("email") ||
        !watch("mobile_number") ||
        !watch("age") ||
        !watch("gender")
      );
    }

    if (activeStep === 2) {
      return (
        !watch("skills")?.length ||
        !watch("experience") ||
        !watch("days")?.length
      );
    }

    if (activeStep === 3) {
      if (isCreateProfilePending || isUploadFileLoading) {
        return true;
      }
      return (
        !watch("address_one") ||
        !watch("area") ||
        !watch("pincode") ||
        !watch("state") ||
        !watch("city")
      );
    }
    return false;
  };
  const content = () => {
    return (
      <ProfileStyled onSubmit={handleSubmit(onSubmit)}>
        <CreateProfileHeader
          activeStep={activeStep}
          steps={createProfileStep}
          onClose={handleClose}
          handleSaveAndNext={handleSubmit(onSubmit)}
          isBtnLoading={isCreateProfilePending}
        />
        <ScrollContent isMobile={isMobile}>
          <Activity mode={activeStep === 1 ? "visible" : "hidden"}>
            <PersonalInformation
              setValue={setValue}
              control={control}
              watch={watch}
            />
          </Activity>
          {activeStep === 2 && (
            <SkillInformation
              setValue={setValue}
              watch={watch}
              control={control}
            />
          )}
          {activeStep === 3 && (
            <LocationInformation
              setValue={setValue}
              watch={watch}
              control={control}
            />
          )}
        </ScrollContent>
        <CreateProfileFooter
          activeStep={activeStep}
          handleBack={handleBackForCreateProfile}
          handleNext={handleNextForCreateProfile}
          isButtonDisabled={IsButtonDisabled()}
        />
      </ProfileStyled>
    );
  };
  if (!isMobile) {
    return content();
  }
  return (
    <>
      <Drawer
        sx={{
          ".MuiPaper-root": {
            width: "100vw",
          },
        }}
        anchor="right"
        open={isModal && isMobile}
        onClose={handleClose}
      >
        {content()}
      </Drawer>
    </>
  );
};

export default CreateProfileModal;
