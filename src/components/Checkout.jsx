// CheckoutPage.js
import React, { useState } from 'react';
import { useProductContext } from '../ProductContext';
import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
const CheckoutPage= () => {
  const [province, setProvince] = React.useState('');

  const Navigate = useNavigate()

  const handleChange = (event) => {
    setProvince(event.target.value);
  };
  const { selectedProduct } = useProductContext();

  const [quantity, setQuantity] = useState(1);
  const [userProfit, setUserProfit] = useState(0);


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1 > 0 ? quantity - 1 : 1); // Ensure quantity doesn't go below 1
  };

  const handleProfitChange = (event) => {
    setUserProfit(parseFloat(event.target.value) || 0);
  };


  const handleCheckoutButton = ()=>{

    Navigate('/checkout/payment')

    
  }

  const handleCancelButton = ()=>{

    Navigate('/')

    
  }

  console.log(`profit handle==>` ,handleProfitChange)
  const deliveryPrice = 120;


  const selectedProductPrice = selectedProduct && selectedProduct.price;
  const priceWithoutCurrency = selectedProductPrice ? +selectedProductPrice.replace('$', '') : 0;
  const totalPrice = priceWithoutCurrency * quantity + userProfit + deliveryPrice;

      console.log(`total price==>` , totalPrice)

      console.log(selectedProduct);


     
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
      {selectedProduct && (
        <>
       <img src={selectedProduct.image} style={{borderRadius:'5px', height:'100px'}} alt="" />
          <p>Name: {selectedProduct.productName}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Quantity: {quantity}</p>
          <p>Delievery Price: {deliveryPrice}</p>
          <Button variant="outlined" onClick={handleIncrement}>
            +
          </Button> 
          <Button variant="outlined"  onClick={handleDecrement}>
            -
          </Button>
          <p>My Profit: </p>
          <TextField
           
            value={userProfit}
            onChange={handleProfitChange}
          />
          <p>Total Price: {totalPrice}</p>

          <div style={{display:'flex',  gap:'5px' , justifyContent:'center'}}>
          <Button style={{marginBottom:'1rem'}} variant='contained'onClick={handleCheckoutButton}>Checkout</Button>



          <Button  style={{marginBottom:'1rem' , backgroundColor:'red'}} variant='contained'onClick={handleCancelButton}>Cancel</Button>
          

          </div>
        </>
      )}
    </Card>
    </div>
  </Grid>
</Grid>





   

   

  </div>
  );
};

export default CheckoutPage;
