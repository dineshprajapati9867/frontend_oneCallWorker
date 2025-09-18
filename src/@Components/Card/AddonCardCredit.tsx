import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextInput from '../../@Primitives/Input/TextInput/TextInput';

interface PropsI {
  isMaster: boolean;
  active: boolean;
  cardText: string;
  newAddon: boolean;
  cardCredit: string;
  createNewAddon: {
    name: string;
    credit: string;
  };
  handleNewAddonText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddonCreditChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveNewAddon: (e: React.SyntheticEvent) => void;
  handleCancelButton?: (e: React.SyntheticEvent) => void;
}
function AddonCardCredit({
  isMaster,
  active,
  cardText,
  newAddon,
  createNewAddon,
  cardCredit,
  handleNewAddonText,
  handleAddonCreditChange,
  handleSaveNewAddon,
  handleCancelButton,
}: PropsI) {
  return (
    <Box>
      {newAddon && !isMaster ? (
        <Box>
          <Box className='addonName'>
            <TextInput
              type='text'
              value={createNewAddon.name}
              onChange={handleNewAddonText}
              placeholder='Enter custom add on'
              error={newAddon && !createNewAddon.name}
              className='input_controllers'
              variant='outlined'
            />
          </Box>
          <Box>
            <TextInput
              type='text'
              variant='outlined'
              value={createNewAddon.credit}
              onChange={handleAddonCreditChange}
              placeholder='00:00'
              error={newAddon && !createNewAddon.credit}
              className='input_controllers'
            />
          </Box>

          <Box className='adding_credit_buttons'>
            {!(createNewAddon.name && createNewAddon.credit) ? (
              <Button size='small' variant='contained' onClick={handleCancelButton}>
                Cancel
              </Button>
            ) : (
              <Button size='small' variant='contained' onClick={handleSaveNewAddon}>
                Save
              </Button>
            )}
          </Box>
        </Box>
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
          {cardCredit && !isMaster && (
            <Typography
              className='card_text'
              sx={{
                fontWeight: active ? 500 : 400,
              }}
              gutterBottom
            >
              Cost {cardCredit}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default AddonCardCredit;
