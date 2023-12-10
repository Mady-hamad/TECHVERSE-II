// CheckoutPage.js
import React, { Fragment, useState } from 'react';
import { useProductContext } from '../ProductContext';
import { Box, Button, Card, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import img7 from '../assets/airdot.webp'
import { decrementQ, incrementQ, removeFromCart } from '../store/productsSlice';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
const CheckoutPage= () => {
  const [province, setProvince] = React.useState('');
  //* logic for apply redux
  const { cartItems } = useSelector(state => state.productCount);
  const dispatch = useDispatch();

  const Navigate = useNavigate()

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  const [quantity, setQuantity] = useState(1);
  const [userProfit, setUserProfit] = useState(0);
  const [itemProfits, setItemProfits] = useState({});

  const calculateItemProfit = (item, profitValue) => {
    setItemProfits((prevProfits) => ({
      ...prevProfits,
      [item.id]: profitValue,
    }));
  };

  const totalProfit = Object.values(itemProfits).reduce((acc, profit) => acc + profit, 0);

  const handleCheckoutButton = ()=>{
    Navigate('/checkout/payment')
  }

  const handleCancelButton = ()=>{
    Navigate('/')
  }

  const deliveryPrice = 120;


  const selectedProductPrice = cartItems && cartItems.price;
  const priceWithoutCurrency = selectedProductPrice ? +selectedProductPrice.replace('$', '') : 0;
  const totalPrice = priceWithoutCurrency * quantity + userProfit + deliveryPrice;


     
  return (
    <div className='parent'>

<Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
  <div style={{padding:'20px'}} className='child1'>
    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CustomerName"
            name="firstName"
            label="Customer Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PhoneNumber"
            name="PhoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid>
        <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Province</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={province}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Sindh</MenuItem>
        <MenuItem value={20}>Punjab</MenuItem>
        <MenuItem value={30}>Kpk</MenuItem>
        <MenuItem value={30}>Balochistan</MenuItem>

      </Select>
    </FormControl>

        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Sector/Block/Area Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="House/Bulding/Apartment Number"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Road Name/Street Number"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Nearest LandMark"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
   
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </div>
  </Grid>
  <Grid item xs={8}>
  <div style={{padding:'20px', fontFamily:'sans-serif'}} className="child2">
    <Card style={{backgroundColor:'#fafafa', marginTop:'5rem' , borderRadius:'5px'}} variant="outlined">
      <h2>Order Summary</h2>
      {cartItems.length > 0 && (
        <Fragment>
        {cartItems.map((item,index)=>(
          <Box>
            <Box key={index} sx={{display:"flex", justifyContent:"space-evenly", py:1}}>
            <Box>
  
         <img src={item.image} style={{borderRadius:'5px', height:'100px'}} alt="ProductImage" />
            </Box>
            <Box>
            <p>Name: {item.productName}</p>
            <p>Price: {item.price}</p>
            <p>Delievery Price: {deliveryPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <Button variant="outlined" onClick={() => dispatch(incrementQ(item))}>
              +
            </Button> 
            <Button variant="outlined" onClick={() => dispatch(decrementQ(item))}>
              -
            </Button>
            </Box>
            <Box>
            <p>My Profit: </p>
            <TextField  value={itemProfits[item.id] || 0} onChange={(event) => calculateItemProfit(item, parseFloat(event.target.value))} />
            <p>Total Price: {itemProfits[index]}</p>
            <Button variant="contained" color="error" onClick={() => dispatch(removeFromCart(item))}> Remove </Button>
            </Box>
          </Box>
            <Divider/>
            </Box>
            ))}
            <div style={{display:'flex',  gap:'5px' , justifyContent:'center', paddingTop:"16px"}}>
            <Button style={{marginBottom:'1rem'}} variant='contained'onClick={handleCheckoutButton}>Checkout</Button>
            <Button  style={{marginBottom:'1rem' , backgroundColor:'red'}} variant='contained'onClick={handleCancelButton}>Cancel</Button>
            <p>Total Profit: {totalProfit}</p>
            </div>
            </Fragment>
      )}
    </Card>
    </div>
  </Grid>
</Grid>





   

   

  </div>
  );
};

export default CheckoutPage;
