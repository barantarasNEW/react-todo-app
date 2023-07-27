import {styled} from '@mui/material/styles';

export const StyledMain = styled('main')(() => ({
  flex: '1 1 auto'
}));

export const StyledWrapper = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));