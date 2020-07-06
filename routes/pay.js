var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  




  
  // Set your secret key. Remember to switch to your live secret key in production!
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  const stripe = require('stripe')('sk_test_51H1xHnBqnWC7oDMfpj92qYO1Bo0Zkx5rOmkJqTu0VRwhSQni0fLCNm9ClJsCSh0wbzdCZnPTxs9msOLfzIgAaXjA00Hh5NnSUB');

  const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000,
  currency: 'cad',
  payment_method_types: ['card'],
  receipt_email: 'jenny.rosen@example.com',
  });
  





  res.json({client_secret: paymentIntent.client_secret});
});

module.exports = router;
