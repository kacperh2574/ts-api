import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, maxLength: 100, required: true },
  price: { type: Number, required: true },
  updateDate: { type: Date, default: Date.now },
});

export interface Product extends mongoose.Document {
  id: string;
  name: string;
  price: number;
  updateDate: Date;
}
