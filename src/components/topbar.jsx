import { useState, useEffect, useRef } from "react";

import { AppBar, Box, Toolbar, Typography, LinearProgress, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { MenuRounded } from '@mui/icons-material';

import SimpleBar from 'simplebar-react';

import PropTypes from 'prop-types';

const TopBar = (props) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const appBarRef = useRef(null);
    const progressBarRef = useRef(null);
    const [progressBarStyle, setProgressBarStyle] = useState({});
    useEffect(() => {
        const updateProgressBarWidth = () => {
            const appBarElement = appBarRef.current;
            const progressBarElement = progressBarRef.current;

            if (appBarElement && progressBarElement) {
                const appBarRect = appBarElement.getBoundingClientRect();
                const progressBarStyle = {
                    left: `${appBarRect.left}px`,
                    width: `${appBarRect.width}px`,
                };
                setProgressBarStyle(progressBarStyle);
            }
        };

        updateProgressBarWidth();

        window.addEventListener('resize', updateProgressBarWidth);
        return () => {
            window.removeEventListener('resize', updateProgressBarWidth);
        };
    }, []);

    const [reload, setReload] = useState(+new Date());
    useEffect(() => {
        const handleReloadEvent = () => {
            setReload(+new Date());
        };
        window.addEventListener("reloadTopBar", handleReloadEvent);
        return () => {
            window.removeEventListener("reloadTopBar", handleReloadEvent);
        };
    }, []);

    useEffect(() => {
        const handleLoadingStartEvent = () => {
            setLoading(true);
        };
        const handleLoadingEndEvent = () => {
            setLoading(false);
        };
        window.addEventListener("loadingStart", handleLoadingStartEvent);
        window.addEventListener("loadingEnd", handleLoadingEndEvent);
        return () => {
            window.removeEventListener("loadingStart", handleLoadingStartEvent);
            window.removeEventListener("loadingEnd", handleLoadingEndEvent);
        };
    }, []);

    return (
        <div do-reload={reload}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar ref={appBarRef} position="static"
                    sx={{
                        width: { sm: `calc(100% - ${props.sidebarWidth}px)` },
                        ml: { sm: `${props.sidebarWidth}px` },
                        position: "fixed",
                        zIndex: "100"
                    }}>
                    <SimpleBar style={{
                        width: `calc(100vw${isSm ? '' : ` - ${props.sidebarWidth}px`})`,
                        maxWidth: `calc(100vw${isSm ? '' : ` - ${props.sidebarWidth}px`})`
                    }}>
                        <Toolbar>
                            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
                                <Typography variant="body2">
                                    {isSm && <IconButton onClick={() => {
                                        const toggleSidebar = new CustomEvent('toggleSidebar', {});
                                        window.dispatchEvent(toggleSidebar);
                                    }}><MenuRounded /></IconButton>}
                                </Typography>
                            </Box>
                            <a href="https://charlws.com/" target="_blank" rel="noreferrer">
                                <div className="user-profile" style={{ cursor: "pointer" }}>
                                    <div className="user-info">
                                        <div className="user-name">CharlesWithC</div>
                                    </div>
                                    <div className="user-avatar">
                                        <img src="https://charlws.com/me.png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </Toolbar>
                    </SimpleBar>
                </AppBar>
                <LinearProgress ref={progressBarRef} sx={{ ...progressBarStyle, top: "80px", position: "fixed", zIndex: 101, display: loading ? "block" : "none", '& .MuiLinearProgress-barColorPrimary': { backgroundColor: theme.palette.info.main } }} />
            </Box>
        </div >
    );
};

TopBar.propTypes = {
    sidebarWidth: PropTypes.number,
};

export default TopBar;