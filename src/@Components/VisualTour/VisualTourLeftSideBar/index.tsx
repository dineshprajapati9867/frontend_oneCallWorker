import React from 'react';
import { Box } from '@mui/material';
import { interfaces } from '@Utils';
import { SearchBox } from '@Primitives';
import { ImageCard } from '../ImageCard';

export interface LeftSideBarI {
  visualTourImages: interfaces.VisualTourImageIWithOther[];
  isSelected: number;
  handleSelectImage: (index: number) => void;
  getImage: (image: interfaces.VisualTourImageIWithOther) => string;
  clickOnSave: boolean;
  setClickedIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsAddPhotos: React.Dispatch<React.SetStateAction<boolean>>;
}

export function VisualTourLeftSideBar({
  visualTourImages,
  isSelected,
  handleSelectImage,
  getImage,
  clickOnSave,
  setClickedIndex,
  setIsAddPhotos,
}: LeftSideBarI) {
  const [searchInputvalue, setSearchInputvalue] = React.useState('');
  const [filteredResults, setFilteredResults] = React.useState(visualTourImages);

  /**
   * Filters the visual tour images based on the search value.
   * @param {string} searchValue - the search value to filter by
   * @returns None
   */
  const searchImages = (searchValue: string) => {
    setSearchInputvalue(searchValue);
    if (searchValue !== '') {
      const filteredData = visualTourImages.filter((visualTourImage) => {
        if (!visualTourImage.tag_name) {
          return 'untagged'.includes(searchValue.toLowerCase());
        }
        return visualTourImage.tag_name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(visualTourImages);
    }
  };

  /**
   * Handles the on click event on the cards
   */
  const handleCardClick = (index: number) => {
    if (clickOnSave || isSelected === -1) {
      handleSelectImage(isSelected === index ? -1 : index);
    } else {
      setClickedIndex(index);
    }
    setIsAddPhotos(true);
  };

  /**
   * Returns the list of cards to display in the visual tour.
   * @returns {Array<Card>} - the list of cards to display in the visual tour.
   */
  const getCards = () => (searchInputvalue.length > 1 ? filteredResults : visualTourImages);

  return (
    <Box
      sx={(theme) => ({
        maxWidth: 330,
        maxHeight: 1728,
        paddingLeft: theme.spacing(16.2),
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(6),
        paddingBottom: theme.spacing(12),
      })}
    >
      <Box
        sx={(theme) => ({
          paddingBottom: theme.spacing(10),
          marginBottom: 0,
        })}
      >
        <SearchBox
          searchVariant='OnBoarding'
          name='visualTour'
          value={searchInputvalue}
          placeholder='Search'
          size='small'
          variant='outlined'
          className='searchbox'
          onChange={(e) => searchImages(e.target.value)}
        />
      </Box>
      <Box
        sx={(theme) => ({
          maxHeight: 778,
          overflowY: 'scroll',
          paddingRight: theme.spacing(6),
          '&::-webkit-scrollbar': {
            width: 2,
          },
        })}
      >
        {getCards().map((visualTourImage, index) => (
          <Box key={`${index + 1}`} onClick={() => handleCardClick(index)}>
            <ImageCard
              VisualTourImage={getImage(visualTourImage)}
              tagName={!visualTourImage.id ? 'Not Saved' : visualTourImage?.tag_name || ''}
              isSelected={isSelected === index}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
