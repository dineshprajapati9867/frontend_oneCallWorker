import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { hooks } from '@Utils';
import { theme } from '../../@Utils/theme';

export interface StepperI {
  steps: string[];
  activeStep: number;
  isDarkComplete?: boolean;
}

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#484848',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#484848',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.primary.light,
    borderTopWidth: 1,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.primary.light,
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    '& .QontoStepIcon-circle-border': {
      color: theme.misc.darkBlack,
      border: '1px solid',
      borderColor: theme.palette.primary.light,
      padding: 2,
      borderRadius: '50%',
    },
    '& .QontoStepIconAdmin-circle-border': {
      color: theme.misc.selectedBlue,
      border: '1px solid',
      borderColor: theme.palette.primary.light,
      padding: 2,
      borderRadius: '50%',
    },
  }),
  '& .QontoStepIcon-completedIcon': {
    color: theme.misc.activeGreen,
    backgroundColor: theme.misc.activeGreen,
    zIndex: 1,
    width: 12,
    height: 12,
    borderRadius: '50%',
  },
  '& .QontoStepIcon-circle': {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

/**
 * A custom StepIcon component for the QontoStepper component.
 * @param {StepIconProps} props - the props for the component.
 * @returns {JSX.Element} - the JSX element for the component.
 */
function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className='QontoStepIcon-completedIcon' />
      ) : (
        <div className='QontoStepIcon-circle-border'>
          <div className='QontoStepIcon-circle' />
        </div>
      )}
    </QontoStepIconRoot>
  );
}

/**
 * A custom StepIcon component for the QontoStepper component.
 * @param {StepIconProps} props - the props for the component.
 * @returns {JSX.Element} - the JSX element for the component.
 */
function QontoStepIconAdmin(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className='QontoStepIcon-completedIcon' />
      ) : (
        <div className='QontoStepIconAdmin-circle-border'>
          <div className='QontoStepIcon-circle' />
        </div>
      )}
    </QontoStepIconRoot>
  );
}

export default function HorizontalLabelPositionBelowStepper({
  steps,
  activeStep,
  isDarkComplete = false,
}: StepperI) {

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: theme.spacing(8),
                  color: theme.text.label,
                  lineHeight: theme.spacing(12),
                },
                '& .Mui-active': {
                  fontWeight: 500,
                  color: `${theme.palette.primary.main} !important`,
                  lineHeight: '125%',
                },
                '& .Mui-completed': {
                  fontWeight: `${400} !important`,
                  fontSize: theme.spacing(8),
                  color: `${theme.text.label} !important`,
                  lineHeight: theme.spacing(12),
                },
              }}
             StepIconComponent={ !isDarkComplete ? QontoStepIconAdmin : QontoStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
