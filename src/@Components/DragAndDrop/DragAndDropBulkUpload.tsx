import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button, IconButton, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { ExcelIcon, TrashIcon } from '@Icons';
import SpreedSheetIcon from '@Assets/images/spreadsheet.png';
import { EditContainer } from '@Constants/CommonStyledComponents';

export interface DragAndDropBulkUploadI {
  handleFileUpload: any;
  setLoadingModal: (value: boolean) => void;
  templatePath: string;
  dowmloadButtonText: string;
  dragAndDropText: string;
  confirmText?: string;
}

/**
 * A circular progress bar with a delete button.
 * @param {() => void} handleDelete - the function to call when the delete button is clicked.
 * @returns None
 */
function CircularProgressWithLabel({ handleDelete }: { handleDelete: () => void }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <IconButton onClick={handleDelete}>
        <TrashIcon />
      </IconButton>
    </Box>
  );
}

export function DragAndDropBulkUpload({
  handleFileUpload,
  setLoadingModal,
  templatePath,
  dowmloadButtonText,
  dragAndDropText,
  confirmText,
}: DragAndDropBulkUploadI) {
  const [file, setFile] = React.useState<any[]>([]);

  /**
   * A dropzone component that accepts a single file and returns the file's URL.
   * @param {Object} props - The props for the dropzone component.
   * @returns None
   */
  const { getRootProps, getInputProps } = useDropzone({
    accept:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((_file) =>
          Object.assign(_file, {
            preview: URL.createObjectURL(_file),
          }),
        ),
      );
    },
  });

  /**
   * Deletes the selected items from the file array.
   * @returns None
   */
  const handleDelete = () => {
    const filterd = file.filter((d) => d[0] !== undefined);
    setFile(filterd);
  };

  return (
    <Box className='dropzoneMain'>
      {!file[0] ? (
        <Box className='dropZoneContainer'>
          <Box {...getRootProps({ className: 'dropzone' })}>
            <Box className='dropZoneWrap'>
              <Box>
                <ExcelIcon />
                <Box className='noFloorPlan'>
                  <Typography variant='h6'>Upload Excel File</Typography>
                </Box>
                <Box className='filesText'>
                  <Typography variant='body1'>{dragAndDropText}</Typography>
                  <Typography variant='body1' className='blueText'>
                    Select files
                  </Typography>
                </Box>
                <Box className='textFormat'>
                  <Typography variant='body2'>File supported: XLSX or XLS</Typography>
                </Box>

                <input {...getInputProps()} />
              </Box>
              <Box>
                <Button
                  variant='outlined'
                  size='small'
                  sx={(theme) => ({
                    backgroundColor: theme.misc.greyBorder,
                    border: '1px solid',
                    borderColor: theme.misc.borderColor,
                    marginTop: theme.spacing(15),
                  })}
                >
                  <Link
                    to={templatePath}
                    target='_blank'
                    download
                    style={{ color: '#296B99', textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {dowmloadButtonText}
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <EditContainer>
          <Box className='filePreviewWrap'>
            <Typography variant='h5' className='fileHeading'>
              Upload File
            </Typography>
            <Typography variant='subtitle2' className='fileSubHeading'>
              Selected file:
            </Typography>
            <Box className='fileNameWrap'>
              <Box className='fileName'>
                <img src={SpreedSheetIcon} alt='SpreedSheetIcon' />
                <Typography variant='h6'>{file[0].name}</Typography>
              </Box>
              <Box className='progressWrap'>
                <CircularProgressWithLabel handleDelete={handleDelete} />
              </Box>
            </Box>
            <Box className='fileUploadFooter'>
              <Button size='medium' variant='outlined' type='submit' onClick={handleDelete}>
                Cancel
              </Button>
              <Button
                size='medium'
                variant='contained'
                onClick={() => {
                  handleFileUpload(file[0]);
                  setLoadingModal(true);
                }}
              >
                {confirmText || 'Upload'}
              </Button>
            </Box>
          </Box>
        </EditContainer>
      )}
    </Box>
  );
}
