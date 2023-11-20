import React from "react";

import { Box} from "@mui/material"

function SubHeader() {
    return (
        <Box style={{
            display: "flex",
            // justifyContent: "flex-end",
            background: "linear-gradient(to bottom, #4239C8 0%,#322E83 100%)",
            color: "#EEF3FD",
            textAlign: "left",
          }}>
            <h1>Champions League</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam numquam similique fugiat quia mollitia maxime</p>
        </Box>
    );
}
export default SubHeader;