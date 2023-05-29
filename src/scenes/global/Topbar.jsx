import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();


  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <Tooltip title="Light/Dark" arrow>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>


        <Tooltip title="Notifications" arrow>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Setting" arrow>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile" arrow>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Logout" arrow>
          <IconButton onClick={handleLogOut}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>

      </Box>
    </Box>
  );
};

export default Topbar;
