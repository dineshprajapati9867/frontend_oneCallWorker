import { Checkbox, styled } from '@mui/material';

export interface PropsI {}

const CheckboxN = styled(Checkbox)(() => ({
  fontSize: 20,
}));

export function CustomCheckbox(props: PropsI) {
  return <CheckboxN {...props} />;
}
