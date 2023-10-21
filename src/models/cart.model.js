import mongoose from "mongoose";

const cartCollection ='cart';

const cartShema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
      },
      products: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', 
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
        },
      ],
      totalPrice: {
        type: Number,
        required: true,
      },
});

const cartModel = mongoose.model(cartCollection, cartShema);

export default cartModel;