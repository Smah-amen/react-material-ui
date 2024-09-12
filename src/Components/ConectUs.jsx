
import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const ConectUs = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width:"auto",
        backgroundImage: 'url("photo2.jpg") ', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed",
        
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '400px',
          // width: '100%',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h1" style={{ marginBottom: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          Connect With Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Phone" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Button variant="contained" style={{ padding: '10px 20px', backgroundColor: '#c1a581', color: 'white' }}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConectUs;
