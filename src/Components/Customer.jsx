import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const customers = [
  {
    name: 'John Doe',
    time: "2015- 01 Jan ",
    image: '/public/images/food1.jpg',
    description: 'Taste the delicious foods in Asia',
  },
  {
    name: 'Jane Smith',
    time: "2015- 01 Jan ",
    image: '/public/images/food2.jpg',
    description: 'Taste the delicious foods in Asia',
  },
  {
    name: 'Alice Johnson',
    time: "2015- 01 Jan ",
    image: '/public/images/food3.jpg',
    description: 'Taste the delicious foods in Asia',
  },
];

const Customer = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }} >
    <Typography variant="h4" component="h1" align="center" gutterBottom>
    Recent Posts
    </Typography>
    <Grid container spacing={2}>
      {customers.map((customer) => (
        <Grid item xs={12} sm={6} md={4} key={customer.id}>
          <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={customer.image} alt={customer.name} style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
            <Box sx={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              {customer.time}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {customer.description}
              </Typography>
         
              <Typography variant="body2" color="textSecondary">
                {customer.name}   

              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </div>
)
};

export default Customer;


