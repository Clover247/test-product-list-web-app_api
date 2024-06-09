import { Schema, model } from "mongoose";
import { Product } from "../types/product";

const productSchema = new Schema<Product>({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  count: { type: Number, required: true },
  size: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  weight: { type: String, required: true },
  comments: [
    {
      id: { type: String, required: true },
      productId: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: String, required: true },
    },
  ],
});

export default model<Product>("Product", productSchema);
