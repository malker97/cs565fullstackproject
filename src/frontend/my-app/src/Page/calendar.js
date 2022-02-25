import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import purple from "@material-ui/core/colors/purple";
import { Button, CardActionArea, CardActions } from "@mui/material";
import red from "@material-ui/core/colors/red";

// import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
const API_KEY = `${process.env.GCAL_API_KEY}`;
let calendars = [
  { calendarId: "zh-cn.usa#holiday@group.v.calendar.google.com" },
  { calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com", color: "#B241D1" }, //add a color field to specify the color of a calendar
  { calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com" }, //without a specified color, it defaults to blue (#4786ff)
  { calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com", color: "rgb(63, 191, 63)" }, //accepts hex and rgb strings (doesn't work with color names
];

class Example extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    );
  }
}

// const cards = [
//     {id: 1, startTime: '2022/03/09 0:00', endTime: '2022/03/11 0:00',location: 'Portland',description: 'Final Project Presentation', statu : "Down"},
//     {id: 2, startTime: '2022/03/09 0:00', endTime: '2022/03/11 0:00',location: 'Portland',description: 'Final Project Presentation', statu : "Down"},
//     {id: 3, startTime: '2022/03/09 0:00', endTime: '2022/03/11 0:00',location: 'Portland',description: 'Final Project Presentation', statu : "Down"},
//     {id: 4, startTime: '2022/03/09 0:00', endTime: '2022/03/11 0:00',location: 'Portland',description: 'Final Project Presentation', statu : "Down"},
//     {id: 5, startTime: '2022/03/09 0:00', endTime: '2022/03/11 0:00',location: 'Portland',description: 'Final Project Presentation', statu : "Down"},
// ];
// const theme = createTheme({
//     palette: {
//       primary: {
//         // Purple and green play nicely together.
//         main: '#42a5f5',
//       },
//       secondary: {
//         // This is green.A700 as hex.
//         main: '#d32f2f',
//       },
//     },
//   });
// const weather = "Portland, Oregon, United States: ☀️   +28°F";
// function Calendar() {
//     return(
//         <main>
//         <div>
//             <Grid container spacing={40}>
//                 {cards.map(card => (
//                     <Grid item key={card} sm={4} md={4} lg={4}>
//                         <Card >
//                             <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="140"
//                                 image="https://www.galchimia.com/wp-content/uploads/2021/06/how-to-crash-your-own-presentation.jpg"
//                                 alt="green iguana"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                 {card.startTime}
//                                 </Typography>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                 {card.endTime}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                 {weather}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                 {card.description}
//                                 </Typography>
//                             </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                             <ThemeProvider theme={theme}>
//                                 <Button size="small" color="primary">
//                                     Edit
//                                 </Button>
//                                 <Button size="small" color="secondary">
//                                     Delete
//                                 </Button>
//                             </ThemeProvider>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//         </main>
//     )
// }
export default Example;
