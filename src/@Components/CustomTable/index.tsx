import DataTable from 'react-data-table-component';
import { Box, Checkbox, styled } from '@mui/material';
import type { TableProps } from 'react-data-table-component';
import { Loader } from '@Primitives';

const BoxContainer = styled(Box)(({ theme }) => ({
  '.rdt_TableCell': {
    ...theme.typography.body2,
    color: theme.palette.primary.main,
    padding: theme.spacing(8),
  },
  '.rdt_TableRow': {
    cursor: 'pointer',
    '.MuiButtonBase-root': {
      minWidth: theme.spacing(20),
      minHeight: theme.spacing(20),
    },
    '&:hover': {
      '.menuIcon': {
        opacity: 1,
        cursor: 'pointer',
      },
    },
    '.menuIcon': {
      opacity: 0,
    },
  },
}));
const CheckboxN = styled(Checkbox)(() => ({
  '.MuiSvgIcon-root ': {
    fontSize: 16,
  },
}));

interface PropsI extends TableProps<any> {
  activeRowId?: string | number | null;
}

/**
 * A custom table component that can be used to display data in a table.
 * @param {PropsI} props - The props to pass to the DataTable component.
 * @returns A custom table component that can be used to display data in a table.
 */
function CustomTable(props: PropsI) {
  const { customStyles, activeRowId = '' } = props;

  const conditionalRowStyles = [
    {
      when: (row: any) => {
        const rowId = row._id || row.id;
        return rowId === activeRowId;
      },
      style: {
        backgroundColor: '#EEEEEE  !important',
        '& .menuIcon': {
          opacity: '1 !important',
        },
      },
    },
  ];

  return (
    <BoxContainer>
      <DataTable
        {...props}
        customStyles={
          customStyles || {
            rows: {
              style: {
                border: 'none  !important',
              },
            },
          }
        }
        selectableRowsComponent={CheckboxN}
        // onSelectedRowsChange={handleChange}
        highlightOnHover
        // persistTableHead
        responsive
        conditionalRowStyles={conditionalRowStyles}
        progressComponent={<Loader type='table' />}
      />
    </BoxContainer>
  );
}

export default CustomTable;
