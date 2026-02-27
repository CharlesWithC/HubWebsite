import { useState, useRef, useEffect } from 'react';
import { HandshakeRounded, InfoRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { Grid, Card, CardContent, CardMedia, Typography, Table, TableBody, TableRow, TableCell, List, ListItem, ListItemText, ListItemSecondaryAction, MobileStepper, Button, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLightbulb, faListCheck, faMap, faServer, faWindowMaximize, faCalendar, faTrophy, faChartSimple, faUnlock, faAd, faCrown, faDesktop } from '@fortawesome/free-solid-svg-icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    '/images/screenshot-1.webp',
    '/images/screenshot-2.webp',
    '/images/screenshot-3.webp',
    '/images/screenshot-4.webp',
    '/images/screenshot-5.webp',
    '/images/screenshot-6.webp',
    '/images/screenshot-7.webp',
    '/images/screenshot-8.webp',
    '/images/screenshot-9.webp',
    '/images/screenshot-10.webp',
    '/images/screenshot-11.webp',
    '/images/screenshot-12.webp',
];

const Home = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [applyMask, setApplyMask] = useState(false);
    const imgRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 600 && imgRef.current && containerRef.current) {
                const aspectRatio = imgRef.current.naturalWidth / imgRef.current.naturalHeight;
                const displayedWidth = aspectRatio * containerRef.current.offsetHeight;
                setApplyMask(displayedWidth > containerRef.current.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imgRef, containerRef]);

    return <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                            <InfoRounded />&nbsp;&nbsp;The Drivers Hub Project (CHub)
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "5px" }}>
                            This is an advanced Drivers Hub solution for Euro Truck Simulator 2 / American Truck Simulator VTCs.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "5px" }}>
                            This project was started by <span style={{ color: "#5BA3F5" }}><a href="https://charlws.com/" target="_blank" rel="noreferrer">CharlesWithC</a></span> in May 2022, initially for <span style={{ color: "#5BA3F5" }}>At The Mile Logistics</span>, then grew to become a public service. It was created out of <span style={{ color: "#5BA3F5" }}>interest and passion</span>, as a <span style={{ color: "#5BA3F5" }}>technical experiment</span> to architect and optimize interesting things.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "5px" }}>
                            The project was <span style={{ color: "#5BA3F5" }}>open-sourced</span> in December 2025 on <span style={{ color: "#5BA3F5" }}><a href="https://github.com/CharlesWithC" target="_blank" rel="noreferrer">GitHub</a></span>.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "5px" }}>
                            Give it a <span style={{ color: "#fcd116" }}>⭐ star</span> and read the <span style={{ color: "#5BA3F5" }}><a href="https://wiki.charlws.com/books/chub/page/2025-dec-an-update" target="_blank" rel="noreferrer">blog post</a></span> about why the decision was made.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "5px" }}>
                            This website is the home page for the open-source project. To create or manage a Drivers Hub, please visit <span style={{ color: "#5BA3F5" }}><a href="https://admin.chub.page/" target="_blank" rel="noreferrer">CHub Portal</a></span>.
                        </Typography>
                        <CardMedia component="img" image="/images/user-banner.webp" sx={{ width: "80%", borderRadius: "5px" }} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                            <HandshakeRounded />&nbsp;&nbsp;Partners
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <a href="https://truckyapp.com/" target="_blank" rel="noreferrer">
                                    <CardMedia component="img" image="/images/trucky.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="https://discord.gg/trucksim" target="_blank" rel="noreferrer">
                                    <CardMedia component="img" image="/images/trucksim.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="https://discord.gg/nK5hxkXfnv" target="_blank" rel="noreferrer">
                                    <CardMedia component="img" image="/images/ocsc.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                </a>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faLightbulb} />&nbsp;&nbsp;Highlights
                        </Typography>
                        {window.innerWidth >= 960 && <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <FontAwesomeIcon icon={faServer} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <b>Efficient Backend</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        API performance and stability are of top priority.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <FontAwesomeIcon icon={faWindowMaximize} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <b>Modern Frontend</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        No-bloat web client built under Material Design.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faMap} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Route Replay</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        See how the drivers reached their destination.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faImage} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Profile Banner</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        Automatically updated profile banner, showing role and statistics.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faListCheck} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Challenges</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        Automatically managed challenges that boosts driver activity.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Economy</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        Purchase garages and trucks, transfer virtual money and even purchase virtual merchandise.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Event Calendar</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        See all the events in a calendar, clearly and easily.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <FontAwesomeIcon icon={faTrophy} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <b>Advanced Rewards</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        Multiple customized ranking systems, job bonus and daily bonus.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <FontAwesomeIcon icon={faChartSimple} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <b>Advanced Statistics</b>
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        Real-time statistics on any date/time range and details like most-driven trucks.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>}
                        {window.innerWidth < 960 && <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <FontAwesomeIcon icon={faServer} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <b>Efficient Backend</b><br />
                                        API performance and stability are of top priority.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <FontAwesomeIcon icon={faWindowMaximize} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#11b17f" }}>
                                        <b>Modern Frontend</b><br />
                                        No-bloat web client built under Material Design.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faMap} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Route Replay</b><br />
                                        See how the drivers reached their destination.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faImage} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Profile Banner</b><br />
                                        Automatically updated profile banner, showing role and statistics.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faListCheck} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Challenges</b><br />
                                        Automatically managed challenges that boosts driver activity.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Economy</b><br />
                                        Purchase garages and trucks, transfer virtual money and even purchase virtual merchandise.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#e28843" }}>
                                        <b>Event Calendar</b><br />
                                        See all the events in a calendar, clearly and easily.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <FontAwesomeIcon icon={faTrophy} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <b>Advanced Rewards</b><br />
                                        Multiple customized ranking systems, job bonus and daily bonus.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <FontAwesomeIcon icon={faChartSimple} />
                                    </TableCell>
                                    <TableCell sx={{ border: "none", pb: "2px", color: "#f6529a" }}>
                                        <b>Advanced Statistics</b><br />
                                        Real-time statistics on any date/time range and details like most-driven trucks.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faCrown} />&nbsp;&nbsp;Special Guests
                        </Typography>
                        <Typography variant="body1" sx={{ mb: "10px" }}>
                            They are VTCs who provided extraordinary support to the project. You could check their Drivers Hub to know how it works :)
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary={<a href="https://hub.atmvtc.com/" target="_blank" rel="noreferrer">At The Mile Logistics</a>} />
                                <ListItemSecondaryAction>
                                    <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<a href="https://drivershub.ets2mcg.org/" target="_blank" rel="noreferrer">ETS2MCG</a>} />
                                <ListItemSecondaryAction>
                                    <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<a href="https://hub.plvtc.com/" target="_blank" rel="noreferrer">Pean Logistics</a>} />
                                <ListItemSecondaryAction>
                                    <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<a href="https://hub.v-spedition.de/" target="_blank" rel="noreferrer">Reamonn Spedition und Lagerung</a>} />
                                <ListItemSecondaryAction>
                                    <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<a href="https://hub.foxlog-group.de/" target="_blank" rel="noreferrer">FoxLog-Group</a>} />
                                <ListItemSecondaryAction>
                                    <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faDesktop} />&nbsp;&nbsp;Screenshots
                        </Typography>
                        <Box sx={{ width: "100%", flexGrow: 1 }}>
                            <AutoPlaySwipeableViews
                                axis="x"
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((image, index) => (
                                    <div key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={image}
                                                alt=""
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                sx={{ background: "none" }}
                                steps={images.length}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === images.length - 1}
                                    >
                                        Next
                                        <KeyboardArrowRightRounded />
                                    </Button>
                                }
                                backButton={
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleBack}
                                        disabled={activeStep === 0}
                                    >
                                        <KeyboardArrowLeftRounded />
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>;
};

export default Home;