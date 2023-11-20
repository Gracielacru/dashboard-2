import React from 'react';

import { Box, List, ListItem, ListItemIcon,  ListItemText } from '@mui/material';
import {
    HomeOutlined,
    ImageOutlined,
    VideocamOutlined,
    PieChartOutlineOutlined,
    AssignmentOutlined,
} from '@mui/icons-material';

const BG_ICON = { color: '#EEF3FD' };
function Menu() {
    //TODO: class name, sx pasarlo a un class, minusculas.
  return (
    <Box className= 'menu-box' sx={{ display: 'flex', justifyContent: 'center' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ImageOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VideocamOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PieChartOutlineOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
      </List>
    </Box>
  );
}
export default Menu;