/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Box, CardContent, Typography } from '@mui/material/';
import { ActiveTickmark } from '@Icons';
import { hooks, interfaces, validationPatterns } from '@Utils';
import { WifiCard, WifiInput } from '@Constants/CommonStyledComponents';

interface AddonWifiCardI {
  active: boolean;
  cardId: string;
  cardIcon: string;
  cardText: string;
  onChangeActive: (event: React.SyntheticEvent, id: string) => void;
  wifiData: {
    _id: string;
    input_name: string;
    placeHolder: string;
    value: string;
  }[];
  setBuildingAddonInputOn: (isBuildingAddonInputOn: boolean) => void;
  // cardCredit?: string | number;
  // costType?: string;
}

export function AmenityWifiCard({
  active,
  cardIcon,
  cardText,
  cardId,
  wifiData,
  onChangeActive,
  setBuildingAddonInputOn,
}: // cardCredit,
// costType,
AddonWifiCardI) {
  const { currentMasterTab, setPropertyAmenities } = hooks.usePublishProperty();

  const [amenitiesWifiSpeed, setAmenitiesWifiSpeed] = React.useState(wifiData[0].value || '');
  const [amenitiesWifiBandWidth, setAmenitiesWifiBandWith] = React.useState(
    wifiData[1].value || '',
  );

  /**
   * Debounces the amenities values value by 1000 milliseconds.
   */
  const debouncedAmenitiesWifiSpeed = hooks.useDebounce(amenitiesWifiSpeed, 500);
  const debouncedAmenitiesWifiBandWidth = hooks.useDebounce(amenitiesWifiBandWidth, 500);

  /**
   * Handles the first input field.
   * @param {any} e - the event object
   * @returns None
   */
  const handleFirstInput = (e: any) => {
    e.preventDefault();
    const validatedSpeed =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);

    if (validatedSpeed) {
      setAmenitiesWifiSpeed(e.target.value);
    }
  };

  /**
   * Handles the input of the second number in the range.
   * @param {any} e - the event object
   * @returns None
   */
  const handleSecondInput = (e: any) => {
    const validatedBandWidth =
      e.target.value.length <= 10 &&
      validationPatterns.pattern.allowOnlyNumbers.test(e.target.value);
    e.preventDefault();

    if (validatedBandWidth) {
      setAmenitiesWifiBandWith(e.target.value);
    }
  };

  /**
   * Updates the build amenities for Wifi to have the given input value.
   */
  const updateBuildAmenitiesForWifi = (
    buildAmenities: interfaces.BuildAddOnAndAmenitiesI[],
    index: number,
    inputValue: string,
  ) =>
    buildAmenities.map((amenity: interfaces.BuildAddOnAndAmenitiesI) => {
      if (amenity.name === 'Wifi' && amenity.amenity_type === 'building') {
        const newInputs = amenity.inputs.map((input: any, _index: number) => {
          const { _id, ...inputWithoutId } = input;
          if (index === _index) {
            return {
              ...inputWithoutId,
              value: inputValue,
            };
          }
          return inputWithoutId;
        });
        return { ...amenity, inputs: newInputs };
      }
      return amenity;
    });

  /**
   * Updates the buildAddons list to include the new buildAddon.
   */
  React.useEffect(() => {
    setPropertyAmenities((buildAmenities: any[]) =>
      updateBuildAmenitiesForWifi(buildAmenities, 0, debouncedAmenitiesWifiSpeed),
    );
  }, [currentMasterTab, debouncedAmenitiesWifiSpeed]);

  /**
   * Updates the buildAddons list to include the new buildAddon for the given index.
   */
  React.useEffect(() => {
    setPropertyAmenities((buildAmenities: any[]) =>
      updateBuildAmenitiesForWifi(buildAmenities, 1, debouncedAmenitiesWifiBandWidth),
    );
  }, [currentMasterTab, debouncedAmenitiesWifiBandWidth]);

  return (
    <Box onClick={(e) => onChangeActive(e, cardId)}>
      <WifiCard
        sx={(theme) => ({
          width: 418,
          minHeight: 153,
          maxHeight: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: active
            ? `2px solid ${theme.palette.primary.dark}`
            : `1px solid ${theme.palette.primary.light}`,
          boxShadow: 'none',
          borderRadius: theme.spacing(5),
          position: 'relative',
        })}
      >
        {active && wifiData && (
          <Box
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}
          >
            <ActiveTickmark />
          </Box>
        )}

        <CardContent
          sx={{
            textAlign: 'center',
            padding: 0,
            '&:last-child': {
              paddingBottom: 10,
            },
          }}
        >
          <Box display='flex' width='100%'>
            <Box
              sx={(theme) => ({
                height: theme.spacing(22),
                width: theme.spacing(22),
                position: 'relative',
                marginTop: active ? theme.spacing(12) : 0,
              })}
            >
              <img src={cardIcon} alt='cardIcon' />
              <Typography
                variant='h6'
                sx={(theme) => ({
                  fontWeight: active ? 500 : 400,
                  position: 'abosulte',
                  color: theme.text.label,
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
                    placeholder={wifiData[0].placeHolder}
                    variant='outlined'
                    type='text'
                    onChange={handleFirstInput}
                    label={wifiData[0].input_name}
                    onFocus={() => setBuildingAddonInputOn(true)}
                    onBlur={() => setBuildingAddonInputOn(false)}
                    labelsx={(theme) => ({
                      marginLeft: theme.spacing(1.5),
                    })}
                    required
                    value={amenitiesWifiSpeed.replace(/^0+/, '')}
                    error={!amenitiesWifiSpeed}
                  />
                  <WifiInput
                    placeholder={wifiData[1].placeHolder}
                    variant='outlined'
                    type='text'
                    onChange={handleSecondInput}
                    label={wifiData[1].input_name}
                    onFocus={() => setBuildingAddonInputOn(true)}
                    onBlur={() => setBuildingAddonInputOn(false)}
                    labelsx={(theme) => ({
                      marginLeft: theme.spacing(6.5),
                    })}
                    required
                    value={amenitiesWifiBandWidth.replace(/^0+/, '')}
                    error={!amenitiesWifiBandWidth}
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
