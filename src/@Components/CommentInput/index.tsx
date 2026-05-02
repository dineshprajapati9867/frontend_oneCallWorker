import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  SxProps,
  FormHelperText,
  Typography,
  Theme,
  TextField,
  Box,
  Avatar,
  Button,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ErrorIcon } from "@Assets/@Icons/ErrorIcon";
import { SmallInfoIcon } from "@Icons/SmallInfoIcon";
import { ToolTip } from "@Primitives/Tooltip";

export interface TextInputI {
  type?: string;
  size?: "small" | "medium";
  label?: string;
  placeholder?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  helperText?: string | null;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
  rows?: string | number;
  minRows?: string | number;
  maxRows?: string | number;
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  variant?: "outlined" | "standard" | "filled";
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
  preContent?: string | React.ReactNode;
  postButtonText?: string | React.ReactNode;
  autoComplete?: string;
  sx?: SxProps<Theme>;
  labelsx?: SxProps<Theme>;
  formControlSx?: SxProps;
  preContentSx?: SxProps;
  postContentSx?: SxProps;
  inputProps?: any;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  inputRef?: any;
  onKeyDown?: (e: any) => void;
  onPaste?: (e: any) => void;
  isTooltipIcon?: boolean;
  toolTipText?: string;
  inputHeight?:number
  avatarSrc?:string
}

const FormControlComponent = styled(FormControl)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
}));

const InputLabelComponent = styled(InputLabel)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 400,
  color: theme.palette.secondary.dark,
  position: "unset",
  transform: "none",
  marginBottom: theme.spacing(2),
  "&.Mui-error": {
    color: `${theme.palette.secondary.dark} !important`,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.primary,
    opacity: 1,
  },
}));

const TextFieldComponent = styled(TextField)<{inputHeight:number}>(({ theme,inputHeight }) => ({
  ".MuiInputBase-root": {
    ...theme.typography.inputValue,
    backgroundColor: theme.misc.lightAsSilver,
    height:`${inputHeight}px`,
    padding: 0,
    "fieldset > legend": {
      width: "0",
    },
    ".MuiOutlinedInput-input": {
      ...theme.typography.inputValue,
      padding: theme.spacing(0, 4),
      color: theme.palette.primary.main,
      "&:disabled": {
        background: theme.misc.lightAsSilver,
        cursor: "not-allowed",
      },
      "&.Mui-disabled": {
        color: theme.misc.lightAsSilver,
        WebkitTextFillColor: theme.palette.text.primary,
      },
    },
    ".MuiInput-input": {
      ...theme.typography.inputValue,
      padding: theme.spacing(5, 4),
    },
    "&.Mui-disabled": {
      ".MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    fieldset: {
      borderColor: theme.misc.naturalLight,
    },
  },
  ".MuiFormHelperText-root": {
    ...theme.typography.body2,
    marginLeft: "0",
    marginTop: theme.spacing(1),
    display: "none",
  },
  ".Mui-error:after": {
    borderColor: theme.misc.darkRed,
    borderWidth: "2px",
  },
  '.MuiInputAdornment-root':{
    paddingLeft:theme.spacing(2.5)
  },
  '.postButtonText':{
    marginRight:theme.spacing(2.5)
  }
}));



function CommentInput(props: TextInputI) {
      const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const {
    type,
    size,
    label,
    placeholder,
    name,
    value,
    defaultValue,
    helperText,
    error,
    variant,
    disabled,
    required,
    multiline,
    rows,
    minRows,
    maxRows,
    preContent=true,
    postButtonText,
    onChange,
    autoComplete,
    sx,
    labelsx,
    formControlSx,
    preContentSx,
    postContentSx,
    className,
    onFocus,
    onBlur,
    inputRef,
    autoFocus,
    onPaste,
    isTooltipIcon,
    toolTipText,
    inputHeight=50,
    avatarSrc
  } = props;

  /**
   * Controlled pasted for number type component
   */
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = e.clipboardData || window.Clipboard;
    const pastedText = clipboardData.getData("text");

    if (type === "number") {
      e.preventDefault();
      const cleanedNumber = pastedText.replace(/\D/g, "");

      document.execCommand("insertText", false, cleanedNumber);
      const inputElement = e.currentTarget.querySelector(
        "input",
      ) as HTMLInputElement;
      if (inputElement && onChange) {
        onChange({
          target: {
            ...inputElement,
            name,
            value: inputElement.value,
          },
        });
      }
    }

    if (onPaste) {
      onPaste(e);
    }
  };


  return (
    <FormControlComponent
      sx={{ width: "100%", ...formControlSx, position: "relative" }}
      error={error}
      disabled={disabled}
      className={className}
    >
      {label  && (
        <Box display="flex" alignItems="center">
          <InputLabelComponent
            htmlFor={`text-input-${name || "box"}`}
            required={required}
            sx={labelsx}
          >
            {label}
          </InputLabelComponent>
          <Box mb={2} ml={2.5}>
            {isTooltipIcon && (
              <ToolTip title={toolTipText}>
                <Box>
                  <SmallInfoIcon />
                </Box>
              </ToolTip>
            )}
          </Box>
        </Box>
      )}
      <TextFieldComponent
        {...props}
        autoComplete={autoComplete}
        sx={{
          ...sx,
        }}
        fullWidth
        hiddenLabel
        label=""
        id={`text-input-${name || "box"}`}
        type={type || "text"}
        size={size || "small"}
        variant={variant}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        onPaste={handlePaste}
        inputHeight={inputHeight}
        InputProps={{
          startAdornment: avatarSrc ? (
            <InputAdornment position="start" sx={preContentSx}>
              <Avatar variant="rounded" src={avatarSrc}/>
            </InputAdornment>
          ) : null,
          endAdornment: postButtonText ? (
            <InputAdornment position="end" sx={postContentSx}>
              <Button size={isMobile?'small':"medium"} className="postButtonText" variant="contained">
                {postButtonText}
              </Button>
            </InputAdornment>
          ) : null,
        }}
        inputRef={inputRef}
      />

      {error && helperText ? (
        <FormHelperText
          sx={() => ({
            display: "flex",
            marginLeft: 0,
            position: "absolute",
            top: 61,
          })}
        >
          <ErrorIcon />{" "}
          <Typography
            variant="body2"
            component="span"
            sx={(theme) => ({
              marginLeft: theme.spacing(1.25),
              color: theme.palette.error.main,
            })}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      ) : null}
    </FormControlComponent>
  );
}

export default CommentInput;
