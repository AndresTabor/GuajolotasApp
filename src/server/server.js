const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KPh3SAlV37ExMwEtv3y41agIlf8HpYRRT8SNUyCRVB1tanjVJyOiLsbg0NNwm3K9DkMR1161LhrRZlrIk3Cn8aq00xiT2ow1P");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "mxn",
      description: "Guajolotas Products",
      payment_method: id,
      confirm: true, 
    });

    console.log(payment);
    
    
    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});