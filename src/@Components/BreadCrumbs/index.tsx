import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface BreadCrumbsItemI {
  name: string;
  link?: string;
  onClick?: () => void;
}

interface BreadCrumbsPropsI {
  item: BreadCrumbsItemI[];
}

/**
 * A component that displays the breadcrumbs for the current page.
 * @param {BreadCrumbsPropsI} props - The props for the component.
 * @returns A component that displays the breadcrumbs for the current page.
 */
function BreadCrumbs(props: BreadCrumbsPropsI) {
  const { item } = props;
  const navigate = useNavigate();

  /**
   * Handles navigation to the given path.
   * @param {string | undefined} path - the path to navigate to.
   * @returns None
   */
  const handleNavigation = (path: string | undefined) => {
    if (path) {
      navigate(path);
    }
  };

  /**
   * Handles display of breadcrumbs.
   */
  const handleBreadcrumbs = (data: BreadCrumbsItemI, index: number) => {
    if (data.name !== '') {
      return (
        <Box display='flex' alignItems='center' key={`breadCrumbs-${index + 1}`}>
          <Typography
            variant='caption'
            color='secondary.dark'
            textTransform='uppercase'
            fontWeight={`${index === item.length - 1 ? 600 : 400}`}
            marginX={(theme) => theme.spacing(4)}
          >
            /
          </Typography>
          <Typography
            sx={{ cursor: data.link || data.onClick ? 'pointer' : 'default' }}
            variant='caption'
            color='secondary.dark'
            textTransform='uppercase'
            fontWeight={`${index === item.length - 1 ? 600 : 400}`}
            onClick={data.onClick ? data.onClick : () => handleNavigation(data.link)}
          >
            {data.name}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box display='flex' alignItems='center'>
      {item.map((data, index) =>
        data.name !== '' && index === 0 ? (
          <Typography
            sx={{ cursor: data.link || data.onClick ? 'pointer' : 'default' }}
            key={`breadCrumbs-${index + 1}`}
            variant='caption'
            color='secondary.dark'
            textTransform='uppercase'
            fontWeight={`${index === item.length - 1 ? 600 : 400}`}
            onClick={data.onClick ? data.onClick : () => handleNavigation(data.link)}
          >
            {data.name}
          </Typography>
        ) : (
          handleBreadcrumbs(data, index)
        ),
      )}
    </Box>
  );
}
export default BreadCrumbs;
