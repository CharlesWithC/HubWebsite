import './App.css';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import { Card, CardContent, Typography, Button, Grid, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './routes/home';
import Map from './routes/map';
import Features from './routes/features';

import { getDesignTokens } from './designs';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import TopBar from './components/topbar';
import SideBar from './components/sidebar';

const drivershub = `    ____       _                         __  __      __
   / __ \\_____(_)   _____  __________   / / / /_  __/ /_
  / / / / ___/ / | / / _ \\/ ___/ ___/  / /_/ / / / / __ \\
 / /_/ / /  / /| |/ /  __/ /  (__  )  / __  / /_/ / /_/ /
/_____/_/  /_/ |___/\\___/_/  /____/  /_/ /_/\\__,_/_.___/
                                                      `;

function App() {
    useEffect(() => {
        console.log(drivershub);
        console.log("The Drivers Hub Project");
        console.log(`Copyright (C) 2022-2026 CharlesWithC All rights reserved.`);
    }, []);

    useEffect(() => {
        const logoUrl = "/images/logo.webp";

        // Update favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = logoUrl;
        document.head.appendChild(link);

        // Update apple touch icon
        const appleLink = document.querySelector("link[rel~='apple-touch-icon']") || document.createElement('link');
        appleLink.rel = 'apple-touch-icon';
        appleLink.href = logoUrl;
        document.head.appendChild(appleLink);
    }, []);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeMode = prefersDarkMode ? 'dark' : 'light';
    const muiTheme = { "dark": "dark", "light": "light" };
    const designTokens = getDesignTokens(themeMode);
    const theme = useMemo(
        () => createTheme(designTokens, muiTheme[themeMode]),
        [designTokens, themeMode],
    );
    const uTheme = useTheme();
    const isMd = useMediaQuery(uTheme.breakpoints.up('md'));

    const location = useLocation();
    const [sidebarForceHidden, setSidebarForceHidden] = useState(false);
    const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 600);
    const [topbarHidden, setTopbarHidden] = useState(false);
    useEffect(() => {
        const handle = () => {
            setSidebarForceHidden(false);
            if (window.innerWidth >= 600) {
                setSidebarHidden(false);
            } else {
                setSidebarHidden(true);
            }
            setTopbarHidden(false);
        };
        handle();
        window.addEventListener('resize', handle);
        return () => {
            window.removeEventListener('resize', handle);
        };
    }, [location.pathname]);

    const [cookieSettings, setCookieSettings] = useState(localStorage.getItem("cookie-settings"));
    const updateCookieSettings = useCallback((settings) => {
        setCookieSettings(settings);
        localStorage.setItem("cookie-settings", settings);
    }, []);
    useEffect(() => {
        if (cookieSettings === "analytical") {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SLZ5TY9MVN';
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-SLZ5TY9MVN');
        }
    }, [cookieSettings]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {!topbarHidden &&
                <TopBar sidebarWidth={260}></TopBar>
            }
            {!sidebarForceHidden &&
                <SideBar width={260}></SideBar>
            }
            {/* For mobile view, use a "menu button" on topbar, click it to show a full-width sidebar, without banner on top and with a close button on top */}
            <div style={(!sidebarHidden && { position: "relative", left: "260px", top: !topbarHidden ? "80px" : "0", width: "calc(100vw - 260px)", height: !topbarHidden ? "calc(100vh - 80px)" : "100vh", overflow: "hidden" })
                || (sidebarHidden && { position: "relative", left: "0", top: !topbarHidden ? "80px" : "0", width: "calc(100vw)", height: !topbarHidden ? "calc(100vh - 80px)" : "100vh", overflow: "hidden" })}>
                {cookieSettings === null && !sidebarForceHidden && <>
                    <Card sx={{ position: "fixed", zIndex: 1000, bottom: "10px", right: "10px", width: window.innerWidth <= 420 ? "calc(100vw - 20px)" : "400px" }}>
                        <CardContent>
                            <Typography variant="h6">
                                We value your privacy
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                                We use necessary cookies for smooth functionality and rely on Google Analytics to anonymously track user interactions, helping us improve the site.<br />
                                By clicking "Accept", you consent to analytical cookie usage. Otherwise only essential cookies will be used.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                    <Button onClick={() => { updateCookieSettings("analytical"); }} variant="contained" color="success" sx={{ width: "100%" }}>
                                        Accept
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                    <Button onClick={() => { updateCookieSettings("essential"); }} variant="contained" color="secondary" sx={{ width: "100%" }}>
                                        Decline
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </>}
                <SimpleBar style={{ padding: "20px", height: "100%", backgroundColor: theme.palette.background.default }} >
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 120px)' }}>
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/map" element={<Map />}></Route>
                            <Route exact path="/features" element={<Features />}></Route>
                            <Route path="*" element={<Home />}></Route>
                        </Routes>
                        <footer style={{ marginTop: 'auto' }}>
                            {isMd && <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px", color: theme.palette.text.secondary }}>
                                <Typography variant="body2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                                    &copy; 2022-2026 <a href="https://charlws.com/" target="_blank" rel="noreferrer">CharlesWithC</a>
                                </Typography>
                                <Typography variant="body2" sx={{ marginLeft: "auto", alignSelf: 'flex-end', textAlign: "right", fontWeight: "bold" }}>
                                    <a href="https://github.com/CharlesWithC" target="_blank" rel="noreferrer">GitHub</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://git.charlws.com/users/charles/projects" target="_blank" rel="noreferrer">GitLab</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://discord.gg/wNTaaBZ5qd" target="_blank" rel="noreferrer">Discord</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://github.com/CharlesWithC/HubWebsite/wiki" target="_blank" rel="noreferrer">Wiki</a>
                                </Typography>
                            </div>}
                            {!isMd && <div style={{ alignItems: 'center', marginTop: "20px", color: theme.palette.text.secondary }}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    &copy; 2022-2026 <a href="https://charlws.com/" target="_blank" rel="noreferrer">CharlesWithC</a>
                                    <br />
                                    <a href="https://github.com/CharlesWithC" target="_blank" rel="noreferrer">GitHub</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://git.charlws.com/users/charles/projects" target="_blank" rel="noreferrer">GitLab</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://discord.gg/wNTaaBZ5qd" target="_blank" rel="noreferrer">Discord</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://github.com/CharlesWithC/HubWebsite/wiki" target="_blank" rel="noreferrer">Wiki</a>
                                </Typography>
                            </div>}
                        </footer>
                    </div>
                </SimpleBar>
            </div>
        </ThemeProvider>
    );
}

export default App;
