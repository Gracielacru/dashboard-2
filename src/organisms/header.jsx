import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Paper, IconButton, InputBase, Box } from "@mui/material";
import { AccountCircleOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";

const ICON_STYLES = { color: "#9CA3AF" };
function Header() {
    return (
        <Paper elevation={3}>
            <Grid container sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <Box>
                    <IconButton type="button" sx={{p:"10px"}} aria-label="search">
                        <SearchOutlined sx={ICON_STYLES} />
                    </IconButton>
                    <InputBase
                        style={{ml:1, flex:1}} placeholder="Search here"
                    />
                </Box>
                <Grid item>
                    <IconButton>
                        <AccountCircleOutlined sx={ICON_STYLES} />
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined sx={ICON_STYLES} />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default Header;