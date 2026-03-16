import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faBarsProgress, faBell, faCalendar, faChartColumn, faDownload, faEnvelopesBulk, faHome, faHouseLaptop, faListCheck, faNewspaper, faRankingStar, faTruck, faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-overview.webp" alt="Overview" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Overview
                        </Typography>
                        <Typography variant="body1">
                            The landing page of the Drivers Hub, with recent statistics and updates of the company.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ boxShadow: 3, mt: "15px" }}>
                    <CardMedia component="img" src="/images/feature-dlog.webp" alt="Deliveries" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faTruck} />&nbsp;&nbsp;Deliveries
                        </Typography>
                        <Typography variant="body1">
                            The core of the Drivers Hub that supports viewing a list of deliveries, exporting deliveries in CSV file format within the specified date range, plus top trucks/cargos/offences.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 10 }}>
                            *We consider all job as delivery log (dlog) due to legacy reasons, deliveries include cancelled jobs.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-statistics.webp" alt="Statistics" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faChartColumn} />&nbsp;&nbsp;Statistics
                        </Typography>
                        <Typography variant="body1">
                            Advanced statistics with charts and detailed information (e.g. most driven trucks) for any time frame and any user.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-profile.webp" alt="Profile + Banner Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;Profile & Banner Plugin
                        </Typography>
                        <Typography variant="body1">
                            A place where your information and statistics are shown.
                        </Typography>
                        <Typography variant="body1">
                            The banner may be automatically generated if the plugin is purchased, or set by the user.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 10 }}>
                            *Banner plugin is not included in basic product.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-ranking.webp" alt="Rankings" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faAnglesUp} />&nbsp;&nbsp;Rankings
                        </Typography>
                        <Typography variant="body1">
                            This encourages members to drive. The ranks have adjustable color and point requirements, which can be specified in API config. The rank roles may be synced to Discord as well.
                        </Typography>
                        <Typography variant="body1">
                            In addition, there is a "daily bonus" function, where members login to the Drivers Hub every day to claim extra bonus points.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-leaderboard.webp" alt="Leaderboard" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faRankingStar} />&nbsp;&nbsp;Leaderboard
                        </Typography>
                        <Typography variant="body1">
                            A comprehensive table where points of all members can be viewed.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-notification.webp" alt="Notifications" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faBell} />&nbsp;&nbsp;Notifications
                        </Typography>
                        <Typography variant="body1">
                            Notifications could be shown on Drivers Hub and/or forwarded to Discord via DM.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-economy.webp" alt="Economy Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faHouseLaptop} />&nbsp;&nbsp;Economy Plugin
                        </Typography>
                        <Typography variant="body1">
                            A complex economy system where drivers purchase garages and trucks, transfer virtual money, and even purchase virtual merchandise.
                        </Typography>
                        <Typography variant="body1">
                            Trucks have realistic attributes such as odometer and damage. Reaching a damage will require a service, and reaching a distance will require scrapping. All thresholds can be customized in API config.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-poll.webp" alt="Poll Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faBarsProgress} />&nbsp;&nbsp;Poll Plugin
                        </Typography>
                        <Typography variant="body1">
                            Collect opinions of drivers with this plugin, where you can create polls with up to 10 choices.
                        </Typography>
                        <Typography variant="body1">
                            Polls could be anonymous or identifible, with results visible before/after vote, or limited to staff. Poll modifications could be enabled/disabled as well.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-task.webp" alt="Task Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faBarsProgress} />&nbsp;&nbsp;Task Plugin
                        </Typography>
                        <Typography variant="body1">
                            TODOs manager for drivers and staff. Tasks can be created by everyone, and assigned to either specific users or all users of specific roles, while public task managers may grant bonus to those who completed the tasks.
                        </Typography>
                        <Typography variant="body1">
                            Recurring tasks are also supported, where an identical task is created automatically after due date.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-challenge.webp" alt="Challenge Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faListCheck} />&nbsp;&nbsp;Challenge Plugin
                        </Typography>
                        <Typography variant="body1">
                            <i>Drivers Hub's most automated and customizable plugin.</i>
                        </Typography>
                        <Typography variant="body1">
                            With this plugin, you can define various criteria and create various challenges for your drivers to haul cargo and create an active simulation environment. Whether a delivery passes the challenge, how the points are distributed, are all done automatically. However, you still can manually add or delete any delivery in case the automated system goes wrong.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-event.webp" alt="Event Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;Event Plugin
                        </Typography>
                        <Typography variant="body1">
                            A plugin where you can regularly view your events/convoys in a calendar, mark on the events you will attend and earn event points for participating in the events.
                        </Typography>
                        <Typography variant="body1">
                            Event notifications through via DM are also supported, with which you will receive a DM from the bot before the meetup time of the event. Upcoming events may also be forwarded to a Discord channel in public/private, configrued by admin.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-application.webp" alt="Application Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faEnvelopesBulk} />&nbsp;&nbsp;Application Plugin
                        </Typography>
                        <Typography variant="body1">
                            A plugin that has all the tools that you may need to manage and customize applications.
                        </Typography>
                        <Typography variant="body1">
                            There could be unlimited types of applications, each with specific staff roles (e.g. Human Resources / Division Staff) to handle the submissions, and dedicated Discord webhooks to forward new applications and updates to a Discord channel.
                        </Typography>
                        <Typography variant="body1">
                            Application forms are configured in JSON format and may be customized in API config.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-division.webp" alt="Division Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faWarehouse} />&nbsp;&nbsp;Division Plugin
                        </Typography>
                        <Typography variant="body1">
                            A plugin that adds realism to the simulation where drivers join a division, get their deliveries validated by division staff manually, earn extra points for delivering cargos in the division.
                        </Typography>
                        <Typography variant="body1">
                            The name of the divisions and points could be customized in API config, without limit on the number of divisions.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-downloads.webp" alt="Downloads Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faDownload} />&nbsp;&nbsp;Downloads Plugin
                        </Typography>
                        <Typography variant="body1">
                            A plugin which you can share internal files with members.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" src="/images/feature-announcement.webp" alt="Announcement Plugin" />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
                            <FontAwesomeIcon icon={faNewspaper} />&nbsp;&nbsp;Announcement Plugin
                        </Typography>
                        <Typography variant="body1">
                            A useful plugin where you can publish announcements such as Monthly News, Convoys publicly or privately. It could also forward the announcement to a Discord channel with mentions if specified.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Features;