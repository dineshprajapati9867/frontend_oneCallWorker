import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { TextInput } from '@Primitives';
import { interfaces } from '@Utils';

interface PropsI {
  cardText: string;
  cardCredit?: string | number;
  addonError?: boolean;
  addonCreditValue: string | number;
  addNew?: string;
  active: boolean;
  buildingAddon?: interfaces.BuildAddOnAndAmenitiesI[];
  handleNewAddonText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelNewAddon?: () => void;
  onSaveClick: () => void;
  setMasterAddonInputOn: (value: boolean) => void;
  handleChangeAddonCredit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function BuildingAddonCardCreditButtons({
  cardText,
  cardCredit,
  active,
  addNew,
  addonCreditValue,
  addonError,
  buildingAddon,
  handleNewAddonText,
  onSaveClick,
  handleCancelNewAddon,
  setMasterAddonInputOn,
  handleChangeAddonCredit,
}: PropsI) {
  return addNew === 'new' ? (
    <>
      <Box className='addonName'>
        <TextInput
          type='text'
          onChange={handleNewAddonText}
          placeholder='Enter custom add on'
          error={addonError}
          className='input_controllers'
          onFocus={() => setMasterAddonInputOn(true)}
          onBlur={() => setMasterAddonInputOn(false)}
          variant='outlined'
        />
      </Box>
      <Box>
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

      <Box className='adding_credit_buttons'>
        {buildingAddon?.name?.length >= 1 ? (
          <Button
            size='small'
            variant='contained'
            onClick={onSaveClick}
            // disabled={!addonCreditValue}
          >
            Save
          </Button>
        ) : (
          <Button
            size='small'
            variant='contained'
            onClick={handleCancelNewAddon}
            onFocus={() => setMasterAddonInputOn(true)}
            onBlur={() => setMasterAddonInputOn(false)}
          >
            Cancel
          </Button>
        )}
      </Box>
    </>
  ) : (
    <Box>
      <Typography
        variant='h6'
        className='card_text'
        sx={{
          fontWeight: active ? 500 : 400,
        }}
        gutterBottom
      >
        {cardText || 'Add'}
      </Typography>
      {cardCredit && (
        <Typography
          // onClick={(e) => onClickAddCreditToMaster(e, cardId)}
          className='card_text'
          sx={{
            fontWeight: active ? 500 : 400,
            // cursor: isMaster ? 'pointer' : 'none',
          }}
          gutterBottom
        >
          Cost per Unit {cardCredit || 0}
        </Typography>
      )}
    </Box>
  );
}

export default BuildingAddonCardCreditButtons;
