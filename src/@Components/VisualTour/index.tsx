import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  styled,
  Checkbox,
  IconButton,
} from '@mui/material';
import { interfaces, hooks } from '@Utils';
import { PlusIcon, DeleteIcon } from '@Icons';
import { Loader, SearchableDropDown, TextInput } from '@Primitives';
import { PopoverModal } from '@AdminComponents';
import { VisualTourTags } from '@Constants';
import { DragAndDropModal } from '../DragAndDrop/DragAndDropModal';
// import { VisualTourRightSideBar } from './VisualTourRightSideBar';
import { VisualTourLeftSideBar } from './VisualTourLeftSideBar';
import { VisualTourUploadImages } from './VisualTourUploadImages';

export interface VisualTourI {
  isSelected: number;
  visualTourImages: interfaces.VisualTourImageIWithOther[];
  handleSelectImage: (index: number) => void;
  handleNewPhotos: (files: any[]) => void;
  handleDeleteImage: (id: string, isSelected: number) => void;
  handleSaveVisualtourImage: (visualTourImageValue: interfaces.VisualTourImageIWithOther) => void;
  openVisualtourUploadModal: boolean;
  setOpenVisualtourUploadModal: (openVisualtourUploadModal: boolean) => boolean;
  // amenities: [];
  // isAmenitiesLoading: boolean;
}

const VisualTourContainer = styled(Box)(({ theme }) => ({
  '.required-button': {
    border: `2px solid ${theme.misc.deleteRed}`,
  },
  '.right_side_footer': {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(6, 12),
  },
}));

export function VisualTour({
  isSelected,
  visualTourImages,
  handleSelectImage,
  handleNewPhotos,
  handleDeleteImage,
  handleSaveVisualtourImage,
  openVisualtourUploadModal,
  setOpenVisualtourUploadModal,
}: // isAmenitiesLoading,
// amenities,
VisualTourI) {
  const { isVisualtourImageLoading } = hooks.usePublishProperty();

  const imageData =
    isSelected !== -1
      ? visualTourImages[isSelected]
      : {
          id: '',
          image: '',
          tag_name: '',
          description: '',
          capacity: '',
          amenities: [],
          other_tag_name: '',
          is_cover_image: false,
        };

  const [clickOnSave, setClickOnSave] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [isAddPhotos, setIsAddPhotos] = useState(false);
  const [disableAddPhotos, setDisableAddPhotos] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

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

  /**
   * React hook to set the value of the VisualTourImage state.
   */
  React.useEffect(() => {
    if (imageData) {
      const newVisualtourImages = { ...imageData };
      newVisualtourImages.other_tag_name = '';
      if (!VisualTourTags?.map((name) => name.label).includes(newVisualtourImages.tag_name)) {
        newVisualtourImages.other_tag_name = newVisualtourImages.tag_name;
      }
      setVisualTourImageValue(newVisualtourImages);
    }
  }, [imageData]);

  /**
   * Gets the image from the image data.
   * @param {interfaces.VisualTourImageIWithOther} _imageData - the image data to get the image from.
   * @returns {string} the image url.
   */
  const getImage = (_imageData: interfaces.VisualTourImageIWithOther): string => {
    if (_imageData && _imageData.image) {
      if (typeof _imageData.image === 'string') {
        return _imageData.image;
      }
      return _imageData?.imageUrl || '';
    }
    return '';
  };

  /**
   * Saves the current image to the user's computer.
   * @returns None
   */
  const handleSaveImage = () => {
    handleSaveVisualtourImage(visualTourImageValue);
    setClickOnSave(true);
    setDisableAddPhotos(false);
  };

  /**
   * Gets the value of the tag_name field of the visual tour image value.
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
      return isVisualtourImageLoading || !visualTourImageValue.other_tag_name;
    }
    return isVisualtourImageLoading || !visualTourImageValue.tag_name;
  };

  /**
   * Enables the opening of the pop up if the required conditions are met.
   */
  const handleEnableVisualTour = () => {
    if (getTagValue()?.label === 'Other') {
      return (
        visualTourImageValue.tag_name &&
        visualTourImageValue.other_tag_name &&
        !clickOnSave &&
        isAddPhotos
      );
    }
    return visualTourImageValue.tag_name && !clickOnSave && isAddPhotos;
  };

  /**
   * Saves the current image to the user's computer.
   * @returns None
   */
  const handleSaveImageChanges = () => {
    handleSaveVisualtourImage(visualTourImageValue);
    handleSelectImage(clickedIndex);
    setClickOnSave(true);
    setIsAddPhotos(false);
    setDisableAddPhotos(false);
  };

  const handleDiscardImageChanges = () => {
    if (!imageData?.id) {
      handleDeleteImage(imageData?.id!, isSelected);
    } else {
      handleSelectImage(clickedIndex);
    }
    setClickOnSave(true);
    setIsAddPhotos(false);
    setDisableAddPhotos(false);
  };

  return (
    <>
      <VisualTourContainer
        sx={() => ({
          overflow: 'hidden',
          position: 'absolute',
          top: 108,
          width: '100%',
          height: 'calc(100vh - 8rem - 3rem)',
          overflowY: 'scroll',
        })}
      >
        <Box
          sx={(theme) => ({
            padding: theme.spacing(14, 7.5, 15, 16.5),
          })}
        >
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Typography
                variant='h5'
                fontWeight={500}
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                Visual Tour
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                size='medium'
                onClick={() => {
                  setIsAddPhotos(true);
                  setOpenVisualtourUploadModal(true);
                }}
                startIcon={<PlusIcon />}
                disabled={visualTourImages.length > 0 && disableAddPhotos}
              >
                Add Photos
              </Button>
              <Box>
                <DragAndDropModal
                  subHeaderText='Please upload minimum 4 photos using one option from those given below'
                  open={openVisualtourUploadModal}
                  close={() => setOpenVisualtourUploadModal(false)}
                  handleAddImages={handleNewPhotos}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {!visualTourImages?.length ? (
          <Grid
            container
            sx={(theme) => ({
              height: '100%',
              paddingLeft: theme.spacing(18),
              paddingRight: theme.spacing(18),
              paddingBottom: theme.spacing(23.5),
              paddingTop: theme.spacing(11),
              borderTop: `1px solid ${theme.misc.borderColor}`,
            })}
          >
            <VisualTourUploadImages
              subHeaderText='Please upload minimum 4 photos using one option from those given below'
              handleAddImages={handleNewPhotos}
            />
          </Grid>
        ) : (
          <Grid
            container
            wrap='nowrap'
            sx={(theme) => ({
              borderTop: `1px solid ${theme.misc.borderColor}`,
            })}
          >
            <Grid item>
              <VisualTourLeftSideBar
                isSelected={isSelected}
                visualTourImages={visualTourImages}
                handleSelectImage={handleSelectImage}
                getImage={getImage}
                clickOnSave={clickOnSave}
                setClickedIndex={setClickedIndex}
                setIsAddPhotos={setIsAddPhotos}
              />
            </Grid>
            <Grid
              item
              sx={(theme) => ({
                width: '100%',
                borderLeft: `1px solid ${theme.misc.borderColor}`,
                marginBottom: theme.spacing(16),
              })}
            >
              <Box
                sx={(theme) => ({
                  padding: theme.spacing(4, 12, 8),
                  display: 'flex',
                  justifyContent: 'space-between',
                })}
              >
                <Box display='flex' justifyContent='space-between' alignItems='center' gap={6}>
                  <Box width={453} mt={5.5}>
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
                  </Box>
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
                        label='Other Name'
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
                <Box
                  className='right_header'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
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
              {isSelected !== -1 ? (
                <>
                  <CardMedia
                    component='img'
                    image={getImage(imageData)}
                    alt='Select any to view'
                    sx={(theme) => ({
                      width: '100%',
                      padding: theme.spacing(6, 12),
                      borderRadius: theme.spacing(1.5),
                      position: 'realative',
                      cursor: 'pointer',
                    })}
                  />
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      if (visualTourImageValue.image) {
                        setOpenDeleteModal(true);
                      }
                      setClickOnSave(true);
                      setIsAddPhotos(false);
                    }}
                    sx={(theme) => ({
                      position: 'absolute',
                      top: 189,
                      right: 10,
                      background: theme.palette.primary.contrastText,
                      border: `1px solid ${theme.misc.errorColor}`,
                      borderRadius: '9999px',
                      zIndex: '999',
                      '&:hover': {
                        background: theme.palette.primary.contrastText,
                      },
                    })}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Typography
                    sx={(theme) => ({
                      ...theme.typography.imageHeader,
                      position: 'absolute',
                      display: 'flex',
                      justifyContent: 'center',
                      top: 190,
                      left: 350,
                      padding: theme.spacing(0, 2),
                      minWidth: theme.spacing(45),
                      minHeight: theme.spacing(7.5),
                      maxHeight: theme.spacing(7.5),
                      fontWeight: 600,
                      color: theme.palette.primary.contrastText,
                      fontSize: theme.spacing(6),
                      textTransform: 'Uppercase',
                      backgroundColor:
                        imageData?.tag_name === '' ? theme.misc.selectedBlue : theme.text.label,
                      border:
                        imageData?.tag_name === ''
                          ? `1px dashed ${theme.palette.primary.contrastText}`
                          : 0,
                      borderRadius: imageData?.tag_name === 'Untagged' ? 0 : theme.spacing(1.5),
                    })}
                  >
                    {imageData?.tag_name || 'Untagged'}
                  </Typography>
                  <Box className='right_side_footer'>
                    <Button
                      variant='outlined'
                      size='medium'
                      type='button'
                      onClick={handleSaveImage}
                      disabled={handleDisableSaveButton()}
                      className={
                        !handleDisableSaveButton() && handleEnableVisualTour()
                          ? 'required-button'
                          : ''
                      }
                    >
                      {isVisualtourImageLoading ? (
                        <Loader type='button' color='inherit' />
                      ) : (
                        ` Save & Next`
                      )}
                    </Button>
                    {/* <Button
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
                    </Button> */}
                  </Box>
                </>
              ) : (
                <Card
                  sx={() => ({
                    height: '500px',
                    wrap: 'noWrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'none',
                  })}
                >
                  <CardContent
                    sx={(theme) => ({
                      color: `${theme.palette.secondary.dark} !important`,
                      fontSize: '20px',
                    })}
                  >
                    Select Image to Edit
                  </CardContent>
                </Card>
              )}
            </Grid>
            {/* <Grid item>
            {isSelected !== -1 && (
              <Box sx={() => ({})}>
                <VisualTourRightSideBar
                  // changeVisualTourImageValues={changeVisualTourImageValues}
                  VisualTourImage={imageData}
                  isAmenitiesLoading={isAmenitiesLoading}
                  amenities={amenities}
                  handleDeleteImage={(id) => handleDeleteImage(id, isSelected)}
                  handleSaveVisualTourImage={handleSaveVisualtourImage}
                  handleDiscardVisualTour={handleSelectImage}
                  clickOnSave={clickOnSave}
                  setClickOnSave={setClickOnSave}
                  clickedIndex={clickedIndex}
                  isAddPhotos={isAddPhotos}
                  setIsAddPhotos={setIsAddPhotos}
                  setDisableAddPhotos={setDisableAddPhotos}
                />
              </Box>
            )}
          </Grid> */}
          </Grid>
        )}
      </VisualTourContainer>
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

      {openDeleteModal && (
        <PopoverModal
          open={openDeleteModal}
          close={() => setOpenDeleteModal(false)}
          handleDelete={() => {
            handleDeleteImage(imageData?.id!, isSelected);
            setOpenDeleteModal(false);
          }}
          popoverHeadingText='Are you sure you want to delete this image? Once deleted, image will be lost'
          confirmText='Delete'
        />
      )}
    </>
  );
}
