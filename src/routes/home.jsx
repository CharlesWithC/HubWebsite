import { useState, useRef, useEffect } from 'react';

import { Grid, Card, CardContent, CardMedia, Typography, Table, TableBody, TableRow, TableCell, List, ListItem, ListItemText, ListItemIcon, MobileStepper, Button, Box } from '@mui/material';
import { HandshakeRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, ChevronRightRounded } from '@mui/icons-material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLightbulb, faListCheck, faMap, faServer, faWindowMaximize, faCalendar, faTrophy, faChartSimple, faCrown, faDesktop } from '@fortawesome/free-solid-svg-icons';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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

const VERIFIED_WEBP = <img width="15px" style={{ display: "inline", position: "relative", top: "-1px" }} src="/images/verified.webp" height="15px" />;

const Home = () => {
    const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
    const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'x' }, [autoplayPlugin.current]);
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        emblaApi?.scrollNext();
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        emblaApi?.scrollPrev();
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => setActiveStep(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                                The Drivers Hub Project
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "5px" }}>
                                This is an advanced Drivers Hub solution for Euro Truck Simulator 2 / American Truck Simulator VTCs.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "5px" }}>
                                This project was started in May 2022, originally solo-built by <span style={{ color: "#5BA3F5" }}><a href="https://charlws.com/" target="_blank" rel="noreferrer">CharlesWithC</a></span> for <span style={{ color: "#5BA3F5" }}>At The Mile Logistics</span> for internal use, then grew to become a <span style={{ color: "#5BA3F5" }}>public service</span>, and finally <span style={{ color: "#5BA3F5" }}>open-sourced</span> in December 2025.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "5px" }}>
                                It was created out of <span style={{ color: "#5BA3F5" }}>interest and passion</span>, as a <span style={{ color: "#5BA3F5" }}>technical experiment</span> to architect and optimize interesting things.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "5px" }}>
                                Give it a <span style={{ color: "#fcd116" }}>⭐ star</span> and read the <span style={{ color: "#5BA3F5" }}><a href="https://wiki.charlws.com/books/chub/page/2025-dec-an-update" target="_blank" rel="noreferrer">blog post</a></span> to learn about the reason that the project was open-sourced.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "5px" }}>
                                This website is the home page for the open-source project. For managed service providers, check <span style={{ color: "#5BA3F5" }}><a href="https://github.com/CharlesWithC/HubWebsite/wiki/Managed-Service-Providers" target="_blank" rel="noreferrer">this wiki page</a></span>.
                            </Typography>
                            <CardMedia component="img" image="/images/user-banner.webp" sx={{ width: window.innerWidth >= 960 ? "80%" : "100%", borderRadius: "5px" }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                                <HandshakeRounded />&nbsp;&nbsp;Partners
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <a href="https://truckyapp.com/" target="_blank" rel="noreferrer">
                                        <CardMedia component="img" image="/images/trucky.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                    </a>
                                </Grid>
                                <Grid size={12}>
                                    <a href="https://discord.gg/trucksim" target="_blank" rel="noreferrer">
                                        <CardMedia component="img" image="/images/trucksim.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                    </a>
                                </Grid>
                                <Grid size={12}>
                                    <a href="https://discord.gg/nK5hxkXfnv" target="_blank" rel="noreferrer">
                                        <CardMedia component="img" image="/images/ocsc.webp" sx={{ width: window.innerWidth > 960 && window.innerWidth < 1280 ? "100%" : "80%", borderRadius: "5px", margin: "auto" }} />
                                    </a>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
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
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                                <FontAwesomeIcon icon={faCrown} />&nbsp;&nbsp;Special Recognition
                            </Typography>
                            <Typography variant="body1" sx={{ mb: "10px" }}>
                                These are communities that provided extraordinary support to the project, especially in the early period.
                            </Typography>
                            <List>
                                <ListItem sx={{ px: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <ChevronRightRounded sx={{ fontSize: 24 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<a href="https://hub.atmvtc.com/" target="_blank" rel="noreferrer">At The Mile Logistics</a>} />
                                </ListItem>
                                <ListItem sx={{ px: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <ChevronRightRounded sx={{ fontSize: 24 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<a href="https://drivershub.ets2mcg.org/" target="_blank" rel="noreferrer">ETS2MCG</a>} />
                                </ListItem>
                                <ListItem sx={{ px: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <ChevronRightRounded sx={{ fontSize: 24 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<a href="https://hub.plvtc.com/" target="_blank" rel="noreferrer">Pean Logistics</a>} />
                                </ListItem>
                                <ListItem sx={{ px: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <ChevronRightRounded sx={{ fontSize: 24 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<a href="https://hub.v-spedition.de/" target="_blank" rel="noreferrer">Reamonn Spedition und Lagerung</a>} />
                                </ListItem>
                                <ListItem sx={{ px: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <ChevronRightRounded sx={{ fontSize: 24 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<a href="https://hub.foxlog-group.de/" target="_blank" rel="noreferrer">FoxLog-Group</a>} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mb: "10px" }}>
                                <FontAwesomeIcon icon={faDesktop} />&nbsp;&nbsp;Screenshots
                            </Typography>
                            <Box sx={{ width: "100%", flexGrow: 1 }}>
                                <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
                                    <Box sx={{ display: 'flex' }}>
                                        {images.map((image, index) => (
                                            <Box key={index} sx={{ flex: '0 0 100%', minWidth: 0 }}>
                                                <Box
                                                    component="img"
                                                    sx={{ display: 'block', overflow: 'hidden', width: '100%' }}
                                                    src={image}
                                                    alt=""
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <MobileStepper
                                    sx={{ background: "none" }}
                                    steps={images.length}
                                    position="static"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button variant="contained" size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
                                            Next <KeyboardArrowRightRounded />
                                        </Button>
                                    }
                                    backButton={
                                        <Button variant="contained" size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            <KeyboardArrowLeftRounded /> Back
                                        </Button>
                                    }
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;