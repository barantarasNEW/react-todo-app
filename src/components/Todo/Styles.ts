import {styled} from "@mui/material/styles";
import {ListItem, ListItemIcon, TextField} from "@mui/material";

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
