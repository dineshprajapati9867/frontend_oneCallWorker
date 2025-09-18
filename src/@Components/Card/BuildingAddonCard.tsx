import { Box, styled, Typography } from '@mui/material';
import { ActiveTickmark } from '@Icons';
import { TextInput } from '@Primitives';
import { useState } from 'react';
import { hooks, interfaces, validationPatterns } from '@Utils';
import { AddonCardStyles } from '@Constants/CommonStyledComponents';
import BuildingAddonCardCreditButtons from './BuildingAddonCreditButtons';

export const BuildingAddonContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(100),
  minHeight: theme.spacing(76.5),
  maxHeight: theme.spacing(220),
  borderRadius: theme.spacing(5),
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  '.card_content': {
    padding: 0,
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 0,
    },
  },

  ...AddonCardStyles(theme),

  '.addon_container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.addon_icon': {
    marginBottom: theme.spacing(14),
    marginLeft: theme.spacing(5),
  },
}));

interface PropsI {
  cardText: string;
  cardIcon: string;
  active: boolean;
  cardId: string;
  isBuildingAddon?: boolean;
  cardCredit?: string | number;
  costType?: string;
  addonError?: boolean;
  handleNewAddonText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeActive: (event: React.SyntheticEvent, id: string) => void;
  handleSaveNewAddon?: () => void;
  handleCancelNewAddon?: () => void;
  buildingAddon?: interfaces.BuildAddOnAndAmenitiesI[];
  addNew?: string;
  isCardDisabled?: boolean;
}

export function BuildingAddonCard({
  cardText,
  cardIcon,
  active,
  cardId,
  cardCredit,
  costType,
  isBuildingAddon = false,
  addonError,
  buildingAddon,
  addNew,
  isCardDisabled,
  onChangeActive,
  handleNewAddonText,
  handleSaveNewAddon,
  handleCancelNewAddon,
}: PropsI) {
  const { setBuildAddOnList, setPropertyAmenities } = hooks.usePublishProperty();

  const { ShowInfoSnackBar } = hooks.useSnackBar();

  const [masterAddonInputOn, setMasterAddonInputOn] = useState(false);

  const [addonCreditValue, setAddonCreditValue] = useState(cardCredit || '');

  /**
   * to update the credit value of building addon
   */
  const updateBuildAddonOrAmenitiesCredit = (
    buildAddonsOrAmenities: interfaces.BuildAddOnAndAmenitiesI[],
    creditValue: number | string,
  ) =>
    buildAddonsOrAmenities.map((addon: any) => {
      if (addon.id === cardId) {
        return { ...addon, credit: creditValue };
      }
      return addon;
    });

  /**
   * To change the credit value
   */
  const handleChangeAddonCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/\s/g, '');

    if (rawValue !== sanitizedValue) {
      ShowInfoSnackBar('Space not allowed');
    }

    const validateCredit =
      sanitizedValue.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(sanitizedValue) &&
      parseInt(sanitizedValue, 10) !== 0;

    if (validateCredit) {
      setAddonCreditValue(sanitizedValue);

      if (isBuildingAddon) {
        if (cardText !== 'Meeting Room') {
          setBuildAddOnList((buildAddons: interfaces.BuildAddOnAndAmenitiesI[]) =>
            updateBuildAddonOrAmenitiesCredit(buildAddons, sanitizedValue),
          );
        } else {
          setBuildAddOnList((buildAddons: interfaces.BuildAddOnAndAmenitiesI[]) =>
            updateBuildAddonOrAmenitiesCredit(buildAddons, 0),
          );
        }
      } else {
        setPropertyAmenities((buildAmenities: any[]) =>
          updateBuildAddonOrAmenitiesCredit(buildAmenities, sanitizedValue),
        );
      }
    } else {
      // optionally update state if invalid, like for visual feedback
      setAddonCreditValue(sanitizedValue);
    }
  };

  /**
   * handles the card click function
   */
  const handleCardClick = (e: React.MouseEvent) => {
    if (!masterAddonInputOn && addNew !== 'new' && !isCardDisabled) {
      onChangeActive(e, cardId);
    }
  };

  /**
   * on save click function for custom addon
   */
  const onSaveClick = (e: React.MouseEvent) => {
    handleSaveNewAddon();
    onChangeActive(e, cardId);
  };

  return (
    <BuildingAddonContainer
      onClick={handleCardClick}
      sx={{
        border: active ? '2px solid #000000' : '1px solid #E7E7E7',
      }}
    >
      {active && (
        <Box className='addon_tick_mark'>
          <ActiveTickmark />
        </Box>
      )}
      {cardText && cardIcon && cardId ? (
        <Box className='addon_container'>
          <Box className='addon_icon'>
            <img src={cardIcon} alt='cardIcon' width='44px' height='44px' />
          </Box>
          <Typography
            variant='h6'
            className='card_text'
            sx={{
              fontWeight: active ? 500 : 400,
            }}
            gutterBottom
          >
            {cardText}
          </Typography>
          {active && isBuildingAddon && (
            <Box className='masterAddonCredit'>
              <Typography className='masterAddonCost' variant='subtitle2'>
                Cost per {costType}
              </Typography>
              <TextInput
                variant='outlined'
                className='input_controllers'
                type='text'
                placeholder='00.00'
                onFocus={() => setMasterAddonInputOn(true)}
                onBlur={() => setMasterAddonInputOn(false)}
                // required
                value={addonCreditValue}
                // error={!addonCreditValue}
                onChange={handleChangeAddonCredit}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Box>
          <Box className='card_content'>
            <img
              src={
                cardIcon ||
                'https://wybrid-vendor-portal-public.s3.ap-south-1.amazonaws.com/add.1659001278772.png'
              }
              alt='cardIcon'
              width='44px'
              height='44px'
            />

            <BuildingAddonCardCreditButtons
              cardText={cardText}
              cardCredit={cardCredit}
              handleNewAddonText={handleNewAddonText}
              addonError={addonError}
              addonCreditValue={addonCreditValue}
              buildingAddon={buildingAddon}
              addNew={addNew}
              onSaveClick={onSaveClick}
              handleCancelNewAddon={handleCancelNewAddon}
              active={active}
              cardId={cardId}
              setMasterAddonInputOn={setMasterAddonInputOn}
              handleChangeAddonCredit={handleChangeAddonCredit}
            />
          </Box>
        </Box>
      )}
    </BuildingAddonContainer>
  );
}
