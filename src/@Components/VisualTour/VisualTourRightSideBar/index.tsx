import React from 'react';
import { Typography, Card, Box, styled, Stack, Checkbox, Button } from '@mui/material';
import { hooks, interfaces } from '@Utils';
import { PopoverModal } from '@AdminComponents';
import { SearchableDropDown, Loader, TextInput, CheckBox } from '@Primitives';
import { VisualTourTags } from '@Constants';
import { pattern } from '@Utils/pattern';
import { RedDeleteIcon } from '@Assets/@Icons/RedDeleteIcon';

const SideBarCard = styled(Card)(({ theme }) => ({
  height: theme.spacing(190),
  maxWidth: theme.spacing(246.5),
  background: theme.palette.primary.contrastText,
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(10),
  overflowY: 'auto',
  '.amenities_required': {
    color: theme.misc.darkRed,
  },
}));

const SideBarTextInput = styled(TextInput)(({ theme }) => ({
  width: '453px !important',
  '&.text-input-label': {
    color: theme.palette.secondary.dark[400],
    fontSize: '12px',
  },
  fontSize: '14px',
  color: theme.palette.secondary.dark[400],
}));

const SideBarCheckBox = styled(CheckBox)(({ theme }) => ({
  '.css-1m8jy6i-MuiTypography-root': {
    fontSize: theme.spacing(7),
    fontColor: theme.palette.primary.main,
  },
}));

const RightSideContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(267),
  wrap: 'noWrap',
  '.nav_container': {
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  '.right_header': {
    marginRight: theme.spacing(75.5),
  },
  '.input_containers': {
    padding: theme.spacing(8.5, 13, 8.5, 8.5),
    maxHeight: 'auto',
    borderLeft: `1px solid ${theme.misc.borderColor}`,
    borderTop: `1px solid ${theme.misc.borderColor}`,
    background: theme.palette.secondary.light,
  },
  '.right_side_footer': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(20, 0, 16.5, 0),
  },
  '.amenities_container': {
    marginTop: theme.spacing(5),
    maxHeight: theme.spacing(200),
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: theme.spacing(1),
    },
  },
  '.delete_button': {
    color: theme.misc.cardRed,
    background: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 8),
    borderRadius: theme.spacing(3),
    '&:hover': {
      background: theme.misc.backgroundSilver,
    },
  },
  '.required-button': {
    border: `2px solid ${theme.misc.deleteRed}`,
  },
  '.custom-tag-input': {
    '.MuiFormHelperText-root': {
      top: theme.spacing(22),
    },
  },
}));

interface VisualTourRightSideBarI {
  VisualTourImage: interfaces.VisualTourImageIWithOther;
  handleDeleteImage: (id: any) => void;
  isAmenitiesLoading: boolean;
  amenities: { id: string; name: string }[];
  handleSaveVisualTourImage: (visualTourImageValue: interfaces.VisualTourImageIWithOther) => void;
  handleDiscardVisualTour: (value: number) => void;
  clickOnSave: boolean;
  setClickOnSave: React.Dispatch<React.SetStateAction<boolean>>;
  clickedIndex: number;
  isAddPhotos: boolean;
  setIsAddPhotos: React.Dispatch<React.SetStateAction<boolean>>;
  setDisableAddPhotos: React.Dispatch<React.SetStateAction<boolean>>;
}

export function VisualTourRightSideBar({
  VisualTourImage,
  isAmenitiesLoading,
  amenities,
  handleDeleteImage,
  handleSaveVisualTourImage,
  handleDiscardVisualTour,
  clickOnSave,
  setClickOnSave,
  clickedIndex,
  isAddPhotos,
  setIsAddPhotos,
  setDisableAddPhotos,
}: VisualTourRightSideBarI) {
  const [visualTourImageValue, setVisualTourImageValue] =
    React.useState<interfaces.VisualTourImageIWithOther>({
      id: '',
      image: '',
      tag_name: '',
      description: '',
      capacity: '',
      amenities: [],
      other_tag_name: '',
      is_cover_image: false,
    });

  const { isVisualtourImageLoading } = hooks.usePublishProperty();

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  /**
   * React hook to set the value of the VisualTourImage state.
   * @param {VisualTourImage} VisualTourImage - the value to set the state to.
   * @returns None
   */
  React.useEffect(() => {
    if (VisualTourImage) {
      const newVisualtourImages = { ...VisualTourImage };
      newVisualtourImages.other_tag_name = '';
      if (!VisualTourTags.map((name) => name.label).includes(newVisualtourImages.tag_name)) {
        newVisualtourImages.other_tag_name = newVisualtourImages.tag_name;
      }
      setVisualTourImageValue(newVisualtourImages);
    }
  }, [VisualTourImage]);

  /**
   * Saves the current image to the user's computer.
   * @returns None
   */
  const handleSaveImage = () => {
    handleSaveVisualTourImage(visualTourImageValue);
    setClickOnSave(true);
    setDisableAddPhotos(false);
  };

  /**
   * Saves the current image to the user's computer.
   * @returns None
   */
  const handleSaveImageChanges = () => {
    handleSaveVisualTourImage(visualTourImageValue);
    handleDiscardVisualTour(clickedIndex);
    setClickOnSave(true);
    setIsAddPhotos(false);
    setDisableAddPhotos(false);
  };

  const handleDiscardImageChanges = () => {
    if (!VisualTourImage?.id) {
      handleDeleteImage(VisualTourImage?.id);
    } else {
      handleDiscardVisualTour(clickedIndex);
    }
    setClickOnSave(true);
    setIsAddPhotos(false);
    setDisableAddPhotos(false);
  };

  /**
   * Gets the value of the tag_name field of the visual tour image value.
   * @returns {string} - the value of the tag_name field of the visual tour image value.
   */
  const getTagValue = () => {
    if (!visualTourImageValue.tag_name) {
      return '';
    }
    return {
      value: visualTourImageValue.id,
      label: visualTourImageValue.tag_name,
    };
  };

  /**
   * Handles the disabling of save button on the mentioned conditions
   */
  const handleDisableSaveButton = () => {
    if (getTagValue()?.label === 'Other') {
      return (
        isVisualtourImageLoading ||
        !visualTourImageValue?.amenities.length ||
        !visualTourImageValue.tag_name ||
        !visualTourImageValue.other_tag_name
      );
    }
    return (
      isVisualtourImageLoading ||
      !visualTourImageValue?.amenities.length ||
      !visualTourImageValue.tag_name
    );
  };

  /**
   * Enables the opening of the pop up if the required conditions are met.
   */
  const handleEnableVisualTour = () => {
    if (getTagValue()?.label === 'Other') {
      return (
        visualTourImageValue?.amenities.length > 0 &&
        visualTourImageValue.tag_name &&
        visualTourImageValue.other_tag_name &&
        !clickOnSave &&
        isAddPhotos
      );
    }
    return (
      visualTourImageValue?.amenities.length > 0 &&
      visualTourImageValue.tag_name &&
      !clickOnSave &&
      isAddPhotos
    );
  };
  /**
   * Disable Add photos button
   */
  React.useEffect(() => {
    setDisableAddPhotos(handleDisableSaveButton());
  }, [handleDisableSaveButton()]);

  return (
    <RightSideContainer>
      <Box display='flex' justifyContent='flex-start' alignItems='center' className='nav_container'>
        <Box className='right_header' display='flex' justifyContent='center' alignItems='center'>
          <Checkbox
            checked={visualTourImageValue.is_cover_image}
            onChange={(e) => {
              setVisualTourImageValue({
                ...visualTourImageValue,
                is_cover_image: e.target.checked,
              });
              setClickOnSave(false);
              setIsAddPhotos(false);
            }}
            sx={(theme) => ({
              '& .MuiSvgIcon-root': {
                color: visualTourImageValue.is_cover_image
                  ? theme.text.lightBlue
                  : theme.misc.inactive,
              },
              borderRadius: '5px',
            })}
          />
          <Typography variant='body1'>Make this as cover image</Typography>
        </Box>
      </Box>
      <Box className='input_containers'>
        <Box>
          <SideBarCard>
            <Box>
              <SearchableDropDown
                value={getTagValue()}
                options={VisualTourTags}
                onChange={(e) => {
                  setVisualTourImageValue({
                    ...visualTourImageValue,
                    tag_name: e.label,
                    other_tag_name: '',
                  });
                  setClickOnSave(false);
                  setIsAddPhotos(false);
                }}
                label='Tag*'
                placeholder='Search'
              />
              {getTagValue()?.label === 'Other' ? (
                <Box
                  sx={(theme) => ({
                    paddingTop: theme.spacing(5),
                  })}
                >
                  <TextInput
                    value={visualTourImageValue.other_tag_name}
                    variant='outlined'
                    placeholder='Enter Tag Name'
                    required
                    className='custom-tag-input'
                    onChange={(e) => {
                      const value = e.target.value.slice(0, 50);
                      setVisualTourImageValue({
                        ...visualTourImageValue,
                        other_tag_name: value,
                      });
                      setClickOnSave(false);
                      setIsAddPhotos(false);
                    }}
                    helperText='Tag name is required'
                  />
                </Box>
              ) : null}
            </Box>
            <Box marginTop={15}>
              <TextInput
                value={visualTourImageValue.description}
                multiline
                rows={4}
                onChange={(e) => {
                  setVisualTourImageValue({
                    ...visualTourImageValue,
                    description: e.target.value,
                  });
                  setClickOnSave(false);
                  setIsAddPhotos(false);
                }}
                size='small'
                label='Description'
                type='text'
                variant='outlined'
                name='description'
                placeholder='Enter Description'
              />
            </Box>
            <Box marginTop={13}>
              <SideBarTextInput
                value={visualTourImageValue.capacity}
                onChange={(e) => {
                  if (pattern.positiveInteger.test(e.target.value)) {
                    setVisualTourImageValue({
                      ...visualTourImageValue,
                      capacity: e.target.value,
                    });
                    setClickOnSave(false);
                    setIsAddPhotos(false);
                  }
                }}
                size='small'
                label='Capacity'
                type='text'
                variant='outlined'
                name='capacity'
                placeholder='Enter Capacity'
                inputProps={{ min: '0' }}
              />
            </Box>
          </SideBarCard>
        </Box>
        <Box className='amenities_container'>
          {isAmenitiesLoading ? (
            <Loader type='section' />
          ) : (
            <SideBarCard>
              <Stack spacing={2}>
                <Typography
                  variant='subtitle1'
                  sx={(theme) => ({
                    color: theme.palette.secondary.dark,
                  })}
                >
                  Amenities
                  <span
                    className={!visualTourImageValue?.amenities.length ? 'amenities_required' : ''}
                  >
                    *
                  </span>
                </Typography>
                {amenities?.map((option) => {
                  const checked = !!visualTourImageValue.amenities?.find(
                    (amenityId) => amenityId === option.id,
                  );
                  return (
                    <SideBarCheckBox
                      key={option.id}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newAddons = [...visualTourImageValue.amenities, option.id];

                          setVisualTourImageValue({
                            ...visualTourImageValue,
                            amenities: newAddons,
                          });
                        } else {
                          const newAddons = visualTourImageValue.amenities.filter(
                            (amenityId) => amenityId !== option.id,
                          );
                          setVisualTourImageValue({
                            ...visualTourImageValue,
                            amenities: newAddons,
                          });
                        }
                        setClickOnSave(false);
                        setIsAddPhotos(false);
                      }}
                      checked={checked}
                      label={option.name}
                      size='small'
                      color='info'
                      sx={(theme: any) => ({
                        color: theme.palette.primary.main,
                      })}
                    />
                  );
                })}
              </Stack>
            </SideBarCard>
          )}
        </Box>
        <Box className='right_side_footer'>
          <Button
            variant='outlined'
            size='medium'
            type='button'
            onClick={handleSaveImage}
            disabled={handleDisableSaveButton()}
            className={
              !handleDisableSaveButton() && handleEnableVisualTour() ? 'required-button' : ''
            }
          >
            {isVisualtourImageLoading ? <Loader type='button' color='inherit' /> : ` Save & Next`}
          </Button>
          <Button
            variant='text'
            size='small'
            className='delete_button'
            onClick={() => {
              if (visualTourImageValue.image) {
                setOpenDeleteModal(true);
              }
              setClickOnSave(true);
              setIsAddPhotos(false);
            }}
            startIcon={<RedDeleteIcon />}
          >
            Delete this photo
          </Button>
        </Box>
        {openDeleteModal && (
          <PopoverModal
            open={openDeleteModal}
            close={() => setOpenDeleteModal(false)}
            handleDelete={() => {
              handleDeleteImage(VisualTourImage?.id);
              setOpenDeleteModal(false);
            }}
            popoverHeadingText='Are you sure you want to delete this image? Once deleted, image will be lost'
            confirmText='Delete'
          />
        )}
        {handleEnableVisualTour() && (
          <PopoverModal
            open={handleEnableVisualTour()}
            close={() => {
              setIsAddPhotos(false);
              setDisableAddPhotos(false);
            }}
            handleDelete={() => handleSaveImageChanges()}
            handleCancel={() => handleDiscardImageChanges()}
            popoverHeadingText='Save Changes?'
            popoverDescription='The changes that you made will be discarded, do you want to continue?'
            confirmText='Save Changes'
            cancelText='Discard'
          />
        )}
      </Box>
    </RightSideContainer>
  );
}
