import mongoose, { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  publishYear: { type: Number },
  quantity: { type: Number, required: true, min: 0 },
  lastCheckout: { type: Date },
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: { type: Object },
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);