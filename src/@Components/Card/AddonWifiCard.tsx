/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Box, CardContent, Typography } from '@mui/material/';
import { ActiveTickmark } from '@Icons';
import { hooks, interfaces, validationPatterns } from '@Utils';
import { WifiCard, WifiInput } from '@Constants/CommonStyledComponents';
import TextInput from '../../@Primitives/Input/TextInput/TextInput';

interface AddonWifiCardI {
  active: boolean;
  cardId: string;
  cardIcon: string;
  cardText: string;
  onChangeActive: (event: React.SyntheticEvent, id: string) => void;
  wifiData: {
    input_name: string;
    placeHolder: string;
    value: string;
  }[];
  setBuildingAddonInputOn: (isBuildingAddonInputOn: boolean) => void;
  cardCredit?: string | number;
  costType?: string;
  isCardDisabled?: boolean;
}

export function AddonWifiCard({
  active,
  cardIcon,
  cardText,
  cardId,
  wifiData,
  onChangeActive,
  setBuildingAddonInputOn,
  cardCredit,
  costType,
  isCardDisabled,
}: AddonWifiCardI) {
  const { currentMasterTab, setBuildAddOnList } = hooks.usePublishProperty();

  const [addonWifiSpeed, setAddonWifiSpeed] = React.useState(wifiData[0].value || '');
  const [addonWifiBandWidth, setAddonWifiBandWidth] = React.useState(wifiData[1].value || '');
  const [addonCreditValue, setAddonCreditValue] = React.useState(cardCredit || '');

  /**
   * Debounces the addon wifi values by 1000 milliseconds.
   */
  const debouncedAddonWifiSpeed = hooks.useDebounce(addonWifiSpeed, 500);
  const debouncedAddonWifiBandwidth = hooks.useDebounce(addonWifiBandWidth, 500);

  /**
   * Handles the first input field.
   * @param {any} e - the event object
   * @returns None
   */
  const handleFirstInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const validatedSpeed =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);

    if (validatedSpeed) {
      setAddonWifiSpeed(e.target.value);
    }
  };

  /**
   * Handles the input of the second number in the range.
   * @param {any} e - the event object
   * @returns None
   */
  const handleSecondInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedBandWidth =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);
    e.preventDefault();

    if (validatedBandWidth) {
      setAddonWifiBandWidth(e.target.value);
    }
  };

  /**
   * Updates the build addon for Wifi to have the given input value.
   */
  const updateBuildAddonForWifi = (
    buildAddons: interfaces.BuildAddOnAndAmenitiesI[],
    index: number,
    inputValue: string,
  ) =>
    buildAddons.map((addon: any) => {
      if (addon.name === 'Wifi' && addon.addon_type === 'building') {
        const newInputs = addon.inputs.map((input: any, _index: number) => {
          const { _id, ...inputWithoutId } = input;
          if (index === _index) {
            return {
              ...inputWithoutId,
              value: inputValue,
            };
          }
          return inputWithoutId;
        });
        return { ...addon, inputs: newInputs };
      }
      return addon;
    });

  /**
   * Updates the buildAddons list to include the new buildAddon.
   */
  React.useEffect(() => {
    setBuildAddOnList((buildAddons: any[]) =>
      updateBuildAddonForWifi(buildAddons, 0, debouncedAddonWifiSpeed),
    );
  }, [debouncedAddonWifiSpeed, currentMasterTab]);

  /**
   * Updates the buildAddons list to include the new buildAddon for the given index.
   */
  React.useEffect(() => {
    setBuildAddOnList((buildAddons: any[]) =>
      updateBuildAddonForWifi(buildAddons, 1, debouncedAddonWifiBandwidth),
    );
  }, [debouncedAddonWifiBandwidth, currentMasterTab]);

  /**
   * to update the credit value of building addon
   */
  const updateBuildAddonCredit = (
    buildAddons: interfaces.BuildAddOnAndAmenitiesI[],
    creditValue: number | string,
  ) =>
    buildAddons.map((addon: any) => {
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
    const validateCredit =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);

    if (validateCredit) {
      setAddonCreditValue(e.target.value);
      setBuildAddOnList((buildAddons: interfaces.BuildAddOnAndAmenitiesI[]) =>
        updateBuildAddonCredit(buildAddons, e.target.value),
      );
    }
  };

  return (
    <Box
      onClick={(e) => {
        if (!isCardDisabled) {
          onChangeActive(e, cardId);
        }
      }}
    >
      <WifiCard
        sx={(theme) => ({
          width: 418,
          minHeight: 153,
          maxHeight: 200,
          border: active
            ? `2px solid ${theme.palette.primary.dark}`
            : `1px solid ${theme.palette.primary.light}`,
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme.spacing(5),
          position: 'relative',
        })}
      >
        {active && wifiData && (
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <ActiveTickmark />
          </Box>
        )}

        <CardContent
          sx={{
            padding: 0,
            textAlign: 'center',
            '&:last-child': {
              paddingBottom: 10,
            },
          }}
        >
          <Box display='flex' width='100%'>
            <Box
              sx={(theme) => ({
                width: theme.spacing(22),
                height: theme.spacing(22),
                position: 'relative',
                marginTop: active ? theme.spacing(12) : 0,
              })}
            >
              <img src={cardIcon} alt='cardIcon' />
              <Typography
                variant='h6'
                sx={(theme) => ({
                  fontWeight: active ? 500 : 400,
                  color: theme.text.label,
                  position: 'abosulte',
                  paddingTop: theme.spacing(17.5),
                })}
                gutterBottom
              >
                {cardText}
              </Typography>
            </Box>
            {active && (
              <Box>
                <Box display='flex' marginTop={10}>
                  <WifiInput
                    variant='outlined'
                    type='text'
                    label={wifiData[0].input_name}
                    placeholder={wifiData[0].placeHolder}
                    onFocus={() => setBuildingAddonInputOn(true)}
                    onBlur={() => setBuildingAddonInputOn(false)}
                    labelsx={(theme) => ({
                      marginLeft: theme.spacing(1.5),
                    })}
                    required
                    value={addonWifiSpeed.replace(/^0+/, '')}
                    onChange={handleFirstInput}
                    error={!addonWifiSpeed}
                  />
                  <WifiInput
                    variant='outlined'
                    type='text'
                    label={wifiData[1].input_name}
                    placeholder={wifiData[1].placeHolder}
                    onFocus={() => setBuildingAddonInputOn(true)}
                    onBlur={() => setBuildingAddonInputOn(false)}
                    labelsx={(theme) => ({
                      marginLeft: theme.spacing(6.5),
                    })}
                    required
                    value={addonWifiBandWidth.replace(/^0+/, '')}
                    error={!addonWifiBandWidth}
                    onChange={handleSecondInput}
                  />
                </Box>
                <Box className='masterAddonCredit'>
                  <Typography className='masterAddonCost' variant='subtitle2'>
                    Cost per {costType}
                  </Typography>
                  <TextInput
                    variant='outlined'
                    className='input_controllers'
                    type='text'
                    placeholder='00.00'
                    onFocus={() => setBuildingAddonInputOn(true)}
                    onBlur={() => setBuildingAddonInputOn(false)}
                    required
                    value={addonCreditValue}
                    error={!addonCreditValue}
                    onChange={handleChangeAddonCredit}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </CardContent>
      </WifiCard>
    </Box>
  );
}
