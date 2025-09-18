import React, { useRef } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { CloseIcon } from '@Icons';
import { SearchableDropDown } from '../SearchableDropDown';
import BasicButton from '../../Button/BasicButton/BasicButton';

interface SingleOption {
  value: string;
  label: string;
  avatar?: string;
  email?: string;
}

interface SearchableDropDownWithDataI {
  headingText: string;
  options: SingleOption[];
}

export function SearchableDropDownWithData({ headingText, options }: SearchableDropDownWithDataI) {
  const UserRef = useRef<HTMLElement | null>(null);

  const [openSearchableInput, setOpenSearchableInput] = React.useState(false);

  const [selectedUser, setSelectedUser] = React.useState<SingleOption | null>({
    value: '',
    label: '',
    avatar: '',
    email: '',
  });
  const [allSelctedUser, setAllSelectedUser] = React.useState([selectedUser]);

  /**
   * Handles the change of the selected user.
   * @param {any} e - the event that is passed in.
   * @returns None
   */
  const handleChange = (e: any) => {
    const allSelectedUserArray = [...allSelctedUser, e];
    setSelectedUser(e);
    setAllSelectedUser(allSelectedUserArray);
  };

  /**
   * Removes the selected value from the array of selected values.
   * @param {any} value - the value to remove from the array of selected values.
   * @returns None
   */
  const handleRemoveSelected = (value: any) => {
    const filteredArray = allSelctedUser?.filter((item) => item?.value !== value);
    setAllSelectedUser(filteredArray);
  };

  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(15),
        border: `1px solid ${theme.misc.inactive}`,
        minHeight: theme.spacing(151),
        width: theme.spacing(292),
        borderRadius: theme.spacing(2.5),
      })}
    >
      <Typography
        variant='h6'
        sx={(theme) => ({
          color: theme.palette.primary.main,
        })}
      >
        {headingText}
      </Typography>
      <Box>
        {allSelctedUser?.length && (
          <Box>
            {allSelctedUser?.map((item, key) => (
              <Box
                width={524}
                height={50}
                display='flex'
                alignItems='center'
                padding={5}
                marginTop={15}
                position='relative'
                key={`${key + 1}`}
                sx={(theme) => ({
                  border: `1px solid ${theme.misc.borderColor}`,
                  borderRadius: theme.spacing(2.5),
                })}
              >
                <Box>
                  <Avatar
                    src={item?.avatar}
                    sx={(theme) => ({
                      width: theme.spacing(16),
                      height: theme.spacing(16),
                    })}
                  >
                    {item?.label}
                  </Avatar>
                </Box>
                <Box paddingLeft={4}>
                  <Typography
                    variant='body1'
                    sx={(theme) => ({
                      color: theme.misc.dropDownText,
                    })}
                  >
                    {item?.label}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={(theme) => ({
                      color: theme.text.tableHeader,
                    })}
                  >
                    {item?.email}
                  </Typography>
                </Box>
                <Box
                  position='absolute'
                  right={10}
                  top={15}
                  onClick={() => {
                    handleRemoveSelected(item?.value);
                    setOpenSearchableInput(false);
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  <CloseIcon />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box marginTop={15} marginBottom={15}>
        <BasicButton
          type='submit'
          variant='contained'
          color='secondary'
          size='custom'
          sx={(theme) => ({
            padding: theme.spacing(4, 7.5),
            background: theme.palette.primary.contrastText,
            borderRadius: theme.spacing(2.6),
            color: theme.palette.primary.main,
            textTransform: 'none',
            border: `1px solid ${theme.palette.secondary.dark}`,
            boxShadow: 'none',
          })}
          onClick={() => setOpenSearchableInput(true)}
        >
          {/* <CloseIcon width={16} height={16} stroke='#484848' /> */}
          <CloseIcon />
          <Typography variant='subtitle1' fontWeight={400} paddingLeft={5}>
            Add Sales Person
          </Typography>
        </BasicButton>
        <Box paddingTop={8}>
          {openSearchableInput && (
            <Box width={360} ref={UserRef}>
              <SearchableDropDown
                placeholder='Select'
                options={options}
                menuPortalTarget={UserRef.current}
                avatarLabel
                onChange={handleChange}
                value={allSelctedUser}
                isClearable={false}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
