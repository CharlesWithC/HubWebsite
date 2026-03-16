import React, { lazy, Suspense, useState, useEffect, useRef, useCallback } from 'react';

import { Card, Box, Tabs, Tab, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

import axios from 'axios';

const TileMapComponent = lazy(() => import('../components/tilemap'));
const TileMap = (props) => (
    <Suspense><TileMapComponent {...props} /></Suspense>
);

function tabBtnProps(index, current) {
    return {
        id: `map-tab-${index}`,
        'aria-controls': `map-tabpanel-${index}`,
        style: { color: current === index ? "#5BA3F5" : 'inherit' }
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`map-tabpanel-${index}`}
            aria-labelledby={`map-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Map = () => {
    const SERVER_ID = { 0: 2, 1: 50, 3: 10 };

    const [tab, setTab] = React.useState(0);

    const [points, setPoints] = useState([]);
    const [boundary, setBoundary] = useState({});
    const [displayUser, setDisplayUser] = useState({});

    const handleChange = (event, newValue) => {
        setTab(newValue);
        setPoints([]);
    };

    const boundaryRef = useRef(boundary);
    const tabRef = useRef(tab);
    useEffect(() => {
        boundaryRef.current = boundary;
    }, [boundary]);
    useEffect(() => {
        tabRef.current = tab;
    }, [tab]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            if (SERVER_ID[tabRef.current] !== undefined && boundaryRef.current.x1 !== undefined) {
                let server_id = SERVER_ID[tabRef.current];
                const response = await fetch(`https://tracker.ets2map.com/v3/area?x1=${boundaryRef.current.x1}&y1=${boundaryRef.current.y2}&x2=${boundaryRef.current.x2}&y2=${boundaryRef.current.y1}&server=${SERVER_ID[tabRef.current]}`);
                const data = await response.json();
                if (server_id !== SERVER_ID[tabRef.current]) {
                    return;
                }
                if (data.Data !== null) {
                    const points = data.Data.map(item => ({ x: item.X, y: item.Y, info: { ...item } }));
                    setPoints(points);
                } else {
                    setPoints([]);
                }
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const [cityIDs, setCityIDs] = useState({});
    const [companyIDs, setCompanyIDs] = useState({});
    const [cargoIDs, setCargoIDs] = useState({});

    useEffect(() => {
        async function loadIDs() {
            let resp = await axios({ url: `game-data.json` });
            setCityIDs(resp.data.city);
            setCompanyIDs(resp.data.company);
            setCargoIDs(resp.data.cargo);
        }
        loadIDs();
    }, []);

    const handlePointClick = useCallback((data) => {
        let info = data.info;
        if (info.Job !== undefined && info.Job.LoadName !== "") {
            if (cargoIDs[info.Job.LoadName.replace("cargo.", "")] !== undefined) {
                info.cargo = cargoIDs[info.Job.LoadName.replace("cargo.", "")];
            } else {
                info.cargo = info.Job.LoadName.replace("cargo.", "");
            }
            if (companyIDs[info.Job.SourceCompany.replace("company.permanent.", "")] !== undefined && cityIDs[info.Job.SourceCity.replace("city.", "")] !== undefined) {
                info.source = companyIDs[info.Job.SourceCompany.replace("company.permanent.", "")] + ", " + cityIDs[info.Job.SourceCity.replace("city.", "")];
            } else {
                info.source = info.Job.SourceCompany.replace("company.permanent.", "") + ", " + info.Job.SourceCity.replace("city.", "");
            }
            if (companyIDs[info.Job.DestinationCompany.replace("company.permanent.", "")] !== undefined && cityIDs[info.Job.DestinationCity.replace("city.", "")] !== undefined) {
                info.destination = companyIDs[info.Job.DestinationCompany.replace("company.permanent.", "")] + ", " + cityIDs[info.Job.DestinationCity.replace("city.", "")];
            } else {
                info.destination = info.Job.DestinationCompany.replace("company.permanent.", "") + ", " + info.Job.DestinationCity.replace("city.", "");
            }
        }
        setDisplayUser(info);
    }, [cityIDs, companyIDs, cargoIDs]);

    return (
        <Card>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tab} onChange={handleChange} aria-label="map tabs" slotProps={{ indicator: { style: { backgroundColor: "#5BA3F5" } } }}>
                    <Tab label="ETS2" {...tabBtnProps(0, tab)} />
                    <Tab label="ETS2 ProMods" {...tabBtnProps(1, tab)} />
                    <Tab label="ETS2 ProMods Classic" {...tabBtnProps(2, tab)} />
                    <Tab label="ATS" {...tabBtnProps(3, tab)} />
                    <Tab label="ATS ProMods" {...tabBtnProps(4, tab)} />
                </Tabs>
            </Box>
            {tab === 0 && <TabPanel value={tab} index={0}>
                <TileMap tilesUrl={"https://map.charlws.com/ets2/base/tiles"} title={<>Euro Truck Simulator 2 - Base Map<br />Live data feed: TruckersMP EU SIM 1</>} points={points} onBoundaryChange={setBoundary} onPointClick={handlePointClick} />
            </TabPanel>}
            {tab === 1 && <TabPanel value={tab} index={1}>
                <TileMap tilesUrl={"https://map.charlws.com/ets2/promods/tiles"} title={<>Euro Truck Simulator 2 - ProMods Map<br />Live data feed: TruckersMP EU PM</>} points={points} onBoundaryChange={setBoundary} onPointClick={handlePointClick} />
            </TabPanel>}
            {tab === 2 && <TabPanel value={tab} index={2}>
                <TileMap tilesUrl={"https://map.charlws.com/ets2/promods-classic/tiles"} title={<>Euro Truck Simulator 2 - ProMods Classic Map<br />Live data feed: NO DATA</>} points={points} onBoundaryChange={setBoundary} onPointClick={handlePointClick} />
            </TabPanel>}
            {tab === 3 && <TabPanel value={tab} index={3}>
                <TileMap tilesUrl={"https://map.charlws.com/ats/base/tiles"} title={<>American Truck Simulator - Base Map<br />Live data feed: TruckersMP US SIM</>} points={points} onBoundaryChange={setBoundary} onPointClick={handlePointClick} />
            </TabPanel>}
            {tab === 4 && <TabPanel value={tab} index={4}>
                <TileMap tilesUrl={"https://map.charlws.com/ats/promods/tiles"} title={<>American Truck Simulator - ProMods Map<br />Live data feed: NO DATA</>} points={points} onBoundaryChange={setBoundary} onPointClick={handlePointClick} />
            </TabPanel>}
            <Dialog open={displayUser.MpId !== undefined} onClose={() => setDisplayUser({})}>
                <DialogTitle>{displayUser.userid === undefined ? <>TruckersMP Player</> : <>Drivers Hub Driver</>}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>Name</Typography>
                            <Typography variant="body2">{displayUser.Name}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>TruckersMP</Typography>
                            <Typography variant="body2"><a href={`https://truckersmp.com/user/${displayUser.MpId}`} target="_blank" rel="noreferrer">{displayUser.MpId}</a></Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>Player ID</Typography>
                            <Typography variant="body2">{displayUser.PlayerId}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>X</Typography>
                            <Typography variant="body2">{displayUser.X}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>Y</Typography>
                            <Typography variant="body2">{displayUser.Y}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>Heading</Typography>
                            <Typography variant="body2">{displayUser.Heading}</Typography>
                        </Grid>
                        {displayUser.Job !== undefined && <>
                            {displayUser.cargo === undefined && <>
                                <Grid size={4}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Status</Typography>
                                    <Typography variant="body2">Free Roaming</Typography>
                                </Grid></>}
                            {displayUser.cargo !== undefined && <>
                                <Grid size={4}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Cargo</Typography>
                                    <Typography variant="body2">{displayUser.cargo}</Typography>
                                </Grid>
                                <Grid size={4}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Source</Typography>
                                    <Typography variant="body2">{displayUser.source}</Typography>
                                </Grid>
                                <Grid size={4}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Destination</Typography>
                                    <Typography variant="body2">{displayUser.destination}</Typography>
                                </Grid></>}
                        </>}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="primary" onClick={() => { setDisplayUser({}); }}>Close</Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default Map;