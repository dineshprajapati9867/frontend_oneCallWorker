import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { ActiveTickmark } from '@Icons';
import { hooks, interfaces, validationPatterns } from '@Utils';
import { AddonCardStyles } from '@Constants/CommonStyledComponents';
import TextInput from '../../@Primitives/Input/TextInput/TextInput';
import AddonCardCredit from './AddonCardCredit';

export const AddonCardContainer = styled(Box)(({ theme }) => ({
  ...AddonCardStyles(theme),

  '.card_content': {
    padding: 0,
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

export interface AddonCardI {
  cardText: string;
  cardCredit: string;
  cardIcon: string;
  active: boolean;
  cardId: string;
  isMaster: boolean;
  onChangeActive: (event: React.SyntheticEvent, id: string) => void;

  newAddon?: boolean;
  handleNewAddonText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddonCreditChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveNewAddon: (e: React.SyntheticEvent) => void;
  handleCancelButton?: (e: React.SyntheticEvent) => void;

  // onClickAddCreditToMaster: (e: React.SyntheticEvent, cardId: string) => void;
  // handleSaveCreditToMaster: (e: React.SyntheticEvent, cardId: string) => void;
  // handleCancelCreditMaster: (e: React.SyntheticEvent, cardId: string) => void;
  setMasterAddonInputOn: (isInventoryMasterActive: boolean) => void;
  // handleAddCostingMaster?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  creditToMaster?: boolean;
  isCreditSaved?: boolean;
  isSelected: string;
}

/**
 * A component that renders a card for an addon.
 */
function AddonCard({
  cardText,
  cardCredit,
  cardIcon,
  active,
  isMaster,
  onChangeActive,
  cardId,
  newAddon = false,
  handleNewAddonText,
  handleAddonCreditChange,
  handleSaveNewAddon,
  handleCancelButton,

  // handleSaveCreditToMaster,
  // handleCancelCreditMaster,
  // onClickAddCreditToMaster,
  setMasterAddonInputOn,
  // handleAddCostingMaster,
  creditToMaster,
  isCreditSaved,
  isSelected,
}: AddonCardI) {
  const { createNewAddon } = hooks.usePublishProperty();

  const [addonCreditValue, setAddonCreditValue] = React.useState(cardCredit || '');

  const { setInventoryAddOn, inventoryAddOn } = hooks.usePublishProperty();

  React.useEffect(() => {
    setAddonCreditValue(cardCredit);
  }, [isSelected, cardCredit, cardId]);

  /**
   * handle to save the credit value to required addon
   * @param creditValue credit value
   */
  const handleSaveCreditToMaster = (creditValue: number | string) => {
    setInventoryAddOn(
      inventoryAddOn.map((inventory: interfaces.InventoryAddOnI) => {
        if (inventory.id === isSelected) {
          return {
            ...inventory,
            addOnList: inventory.addOnList.map((_addon) => {
              if (_addon.id === cardId) {
                return {
                  ..._addon,
                  credit: creditValue,
                };
              }
              return { ..._addon };
            }),
          };
        }
        return inventory;
      }),
    );
  };

  /**
   * To change the credit value
   */
  const handleChangeAddonCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const validateCredit =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);

    if (validateCredit) {
      setAddonCreditValue(e.target.value);
      handleSaveCreditToMaster(e.target.value);
    }
  };

  return (
    <AddonCardContainer
      onClick={(e) => {
        if (newAddon) {
          return newAddon;
        }
        if (creditToMaster) {
          return creditToMaster;
        }
        return onChangeActive(e, cardId);
      }}
    >
      <Box
        className='addon_card'
        sx={{
          border: active && !newAddon ? '2px solid #000000' : '1px solid #E7E7E7',
        }}
      >
        {!newAddon && active && (
          <Box className='addon_tick_mark'>
            <ActiveTickmark />
          </Box>
        )}
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
          {!isCreditSaved && isMaster && active ? (
            <Box className='addonName'>
              <Typography
                variant='h6'
                className='card_text'
                sx={{
                  fontWeight: active ? 500 : 400,
                }}
              >
                {cardText}
              </Typography>
            </Box>
          ) : (
            <AddonCardCredit
              isMaster={isMaster}
              active={active}
              cardText={cardText}
              newAddon={newAddon}
              createNewAddon={createNewAddon}
              cardCredit={cardCredit}
              handleNewAddonText={handleNewAddonText}
              handleAddonCreditChange={handleAddonCreditChange}
              handleSaveNewAddon={handleSaveNewAddon}
              handleCancelButton={handleCancelButton}
            />
          )}

          {isMaster && active && (
            <Box className='masterAddonCredit'>
              <Typography className='masterAddonCost' variant='subtitle2'>
                Cost
              </Typography>
              <TextInput
                variant='outlined'
                className='input_controllers'
                type='text'
                placeholder='00.00'
                onFocus={() => setMasterAddonInputOn(true)}
                onBlur={() => setMasterAddonInputOn(false)}
                required
                value={addonCreditValue}
                error={!addonCreditValue}
                onChange={handleChangeAddonCredit}
              />
            </Box>
          )}
        </Box>
      </Box>
    </AddonCardContainer>
  );
}

export default AddonCard;
