import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import { Button, Card, CardActions, CardContent, CardMedia, List, Rating, Tooltip, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import img1 from '../assets/Hero_Homepage_Accessories_Family_Q4FY22_VP2-859x540.avif'
import img2 from '../assets/microsoft-surface-500x500.webp'
import img3 from '../assets/c43c33fbadc434d69e14ce0ea87066dd.jpg'
import img4 from '../assets/four.jpg'
import img5 from '../assets/five.webp'
import img6 from '../assets/download_4__1_3.jpg.jpeg'
import img7 from '../assets/airdot.webp'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from 'react-bootstrap';

import { useProductContext } from '../ProductContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCartQuantity, increaseCartQuantity } from '../store/productsSlice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Dashboard() {
  const isSmallerScreen = useMediaQuery('(max-width:500px)');

  //* logic for apply redux
  const { cartItems } = useSelector(state => state.productCount);
  const dispatch = useDispatch()

  const [value, setValue] = React.useState(2);
  const Navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const productList = [
    {
      id: 1,
      productName: 'Product 1',
      description: 'Description for Product 1',
      image: img7,
      price: '$100'
    },
    {
      id: 2,
      productName: 'Product 2',
      description: 'Description for Product 2',
      image: img7,
      price: '$100'
    },
    {
      id: 3,
      productName: 'Product 3',
      description: 'Description for Product 3',
      image: img7,
      price: '$100'
    },
    {
      id: 4,
      productName: 'Product 4',
      description: 'Description for Product 3',
      image: img7,
      price: '$100'
    },
    {
      id: 5,
      productName: 'Product 5',
      description: 'Description for Product 5',
      image: img7,
      price: '$100'
    },
    {
      id: 6,
      productName: 'Product 6',
      description: 'Description for Product 6',
      image: img7,
      price: '$100'
    },
    {
      id: 7,
      productName: 'Product 7',
      description: 'Description for Product 7',
      image: img7,
      price: '$100'
    },
    {
      id: 8,
      productName: 'Product 8',
      description: 'Description for Product 8',
      image: img7,
      price: '$100'
    },
   

  ];

  const { setSelectedProduct } = useProductContext();

  const HandlePlaceOrder = (product) => {

    setSelectedProduct(product);

    Navigate('/checkout');

  }

  const downloadImage = (imageSrc, imageName) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

        <Box>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={isSmallerScreen ? 50 : 100}
            slidesPerView={isSmallerScreen ? 1 : 3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><Image src={img1} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
            <SwiperSlide><Image src={img2} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
            <SwiperSlide><Image src={img3} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
            <SwiperSlide><Image src={img4} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
            <SwiperSlide><Image src={img5} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>

            ...
          </Swiper>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>




              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 270,
                  }}
                >

                  <Image style={{ overflow: 'hidden' }} src={img6}></Image>

                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 270,
                  }}
                >
                  <Image src={img7}></Image>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                  <h1>Hot Products</h1>
                </Paper>
              </Grid>

              <Grid container spacing={3}>
                {productList.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={3}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={product.productName}
                        height="300"
                        image={product.image} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.productName}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', gap: '7rem' }}>
                          <Button variant="contained" size="small" 
                          onClick={() => {
                            let item = null;
                            item = {...product, quantity: 1};
                            dispatch(addToCart(item));}}>
                            Add Product
                          </Button>
                          {/* onClick={() => HandlePlaceOrder(product)} */}
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            <Divider/>             
            <div style={{marginTop:'5rem'}}>
            <Link>See All</Link>
              </div>              

            <Copyright sx={{ pt: 4 }} />
          </Container>

        </Box>
  );

}
