import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';

const services = [
  {
    title: 'Birthday Party',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: <CakeIcon sx={{ fontSize: 50, color: '#c1a581' }} />,
  },
  {
    title: 'Business Meetings',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: <MeetingRoomIcon sx={{ fontSize: 50, color: '#c1a581' }} />,
  },
  {
    title: 'Wedding Party',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: <EventIcon sx={{ fontSize: 50, color: '#c1a581' }} />,
  },
];

const Service = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', padding: '50px 20px' }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 'bold', marginBottom: '30px' }}
        >
          Catering Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index} textAlign="center">
              <Box>{service.icon}</Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: 'bold', marginTop: '10px' }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginTop: '10px' }}
              >
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Service;


