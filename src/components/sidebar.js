import { HomeRounded, StarRounded, FlightTakeoff, MapRounded, StorageRounded, WebRounded } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const bannerRef = useRef(null);
    const [simpleBarStyle, setSimpleBarStyle] = useState({
        maxHeight: `100vh`,
        height: `100vh`,
    });
    useEffect(() => {
        const handleImageLoad = () => {
            const sidebarBanners = document.querySelectorAll('.sidebar-banner');
            const visibleSidebarBanner = Array.from(sidebarBanners).find(
                (banner) => banner.offsetParent !== null
            );
        };

        let currentBannerRef = bannerRef.current;

        if (currentBannerRef) {
            if (currentBannerRef.complete) {
                handleImageLoad();
            } else {
                currentBannerRef.addEventListener('load', handleImageLoad);
            }
        }

        return () => {
            if (currentBannerRef) {
                currentBannerRef.removeEventListener('load', handleImageLoad);
            }
        };
    }, [bannerRef]);

    const [reload, setReload] = useState(+new Date());
    useEffect(() => {
        const handleReloadEvent = () => {
            setReload(+new Date());
        };
        window.addEventListener("reloadSideBar", handleReloadEvent);
        return () => {
            window.removeEventListener("reloadSideBar", handleReloadEvent);
        };
    }, []);
    useEffect(() => {
        window.addEventListener("toggleSidebar", handleDrawerToggle);
        return () => {
            window.removeEventListener("toggleSidebar", handleDrawerToggle);
        };
    }, []);

    const menuName = { "home": "Home", "features": "Features", "live_map": "Live Map", "backend": "Backend Repo", "frontend": "Frontend Repo", "external": "Managed Service" };
    const menuIcon = { "home": <HomeRounded />, "features": <StarRounded />, "live_map": <MapRounded />, "backend": <StorageRounded />, "frontend": <WebRounded />, "external": <FlightTakeoff /> };
    const menuRoute = { "home": "/", "features": "/features", "live_map": "/map", "backend": "https://github.com/CharlesWithC/HubBackend", "frontend": "https://github.com/CharlesWithC/HubFrontend", "external": "https://github.com/CharlesWithC/HubWebsite/wiki/Managed-Service-Providers" };

    let menu = [["home", "features", "live_map"], ["backend", "frontend"], ["external"]];

    let routeIndex = {};
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].length; j++) {
            routeIndex[menuRoute[menu[i][j]]] = i * 10 + j;
        }
    }
    let path = window.location.pathname;
    let matchedPath = false;
    if (Object.keys(routeIndex).includes("/" + path.split("/")[1])) {
        matchedPath = true;
        if (selectedIndex !== routeIndex["/" + path.split("/")[1]]) {
            setSelectedIndex(routeIndex["/" + path.split("/")[1]]);
        }
    }
    if (Object.keys(routeIndex).includes("/" + path.split("/")[1] + "/" + path.split("/")[2])) {
        matchedPath = true;
        if (selectedIndex !== routeIndex["/" + path.split("/")[1] + "/" + path.split("/")[2]]) {
            setSelectedIndex(routeIndex["/" + path.split("/")[1] + "/" + path.split("/")[2]]);
        }
    }
    if (!matchedPath && selectedIndex !== -1) { setSelectedIndex(-1); }

    const sidebar = <SimpleBar key='sidebar-simplebar' style={simpleBarStyle}>
        <List key="0" sx={{ paddingTop: '10px' }}>
            <ListItem key={`navbtn-banner`} sx={{ padding: '5px' }}>
                <Link to="/">
                    <img className="sidebar-banner" src={"/images/banner.webp"} alt="" ref={bannerRef} />
                </Link>
            </ListItem>
        </List>
        {menu.map((subMenu, subIndex) => (
            <div key={`navlist-${subMenu}-${subIndex}`}>
                <List sx={{ margin: "0px 10px 0 10px" }}>
                    {subMenu.map((menuID, btnIndex) => {
                        const item = <ListItem key={`navbtn-${menuID}-${btnIndex}`} disablePadding>
                            <ListItemButton selected={selectedIndex === subIndex * 10 + btnIndex}
                                onClick={(event) => handleListItemClick(event, subIndex * 10 + btnIndex)}>
                                <ListItemIcon sx={{ minWidth: "40px" }}>
                                    {menuIcon[menuID]}
                                </ListItemIcon>
                                <ListItemText primary={menuName[menuID]} />
                            </ListItemButton>
                        </ListItem>;
                        return <>{menuRoute[menuID].startsWith("/") ?
                            <Link key={`navlink-${menuID}-${btnIndex}`} to={`${menuRoute[menuID]}`}>
                                {item}
                            </Link> :
                            <a href={menuRoute[menuID]} target="_blank" rel="noreferrer">{item}</a>}
                        </>;
                    })}
                </List>
                {subIndex !== menu.length - 1 && <Divider key={`divider-${subIndex}`} />}
            </div>
        ))}
    </SimpleBar>;

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: props.width },
                flexShrink: { sm: 0 },
            }}
            aria-label="sidebar"
            do-reload={reload}
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
                }}
            >
                <div style={{ overflow: "hidden" }}>
                    {sidebar}
                </div>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
                    overflow: "hidden",
                }}
                open
            >
                <div style={{ overflow: "hidden" }}>
                    {sidebar}
                </div>
            </Drawer>
        </Box>
    );
};

SideBar.propTypes = {
    width: PropTypes.number,
};

export default SideBar;