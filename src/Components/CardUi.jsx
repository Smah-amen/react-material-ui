import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const CardUi = () => {
  const cardData = [
    {
      image: "imge 1.jpg",
      title: "John Smooth",
      subtitle: "Restaurant Owner",
    },
    {
      image: "imge 2.jpg",
      title: "Rebecca Welson",
      subtitle: "Head Chef",
    },
    {
      image: "imge 3.jpg",
      title: "Kharl Branyt",
      subtitle: "Chef",
    },
    {
      image: "imge 4.jpg",
      title: "Luke Simon",
      subtitle: "Chef",
    },
  ];

  const iconColor = "#d4a657"; 

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300, width: '100%', objectFit: 'cover' }} 
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="facebook" href="#">
                  <FacebookIcon sx={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="twitter" href="#">
                  <TwitterIcon sx={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="instagram" href="#">
                  <InstagramIcon sx={{ color: iconColor }} />
                </IconButton>
                <IconButton aria-label="google" href="#">
                  <GoogleIcon sx={{ color: iconColor }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardUi;




