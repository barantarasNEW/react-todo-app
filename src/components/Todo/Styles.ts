import {styled} from "@mui/material/styles";
import {Input, List, ListItem, ListItemButton, ListItemIcon, TextField, TextFieldVariants} from "@mui/material";
import Box from "@mui/material/Box";

export const StyledList = styled(List)({
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 20
});


export const StyledListItem = styled(ListItem)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 5
});

export const StyledTextField = styled(TextField)<any>(({checked}) => ({
  textDecoration: `${checked ? 'line-through' : 'none'}`,
}));

export const StyledListItemIcon = styled(ListItemIcon)`
  & {
    min-width: auto !important;
  }
`;
