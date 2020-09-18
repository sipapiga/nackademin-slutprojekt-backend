const mongoose = require("mongoose");

const schema = {
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  longDesc: {
    type: String,
    required: true,
  },
  imgFile: {
    type: String,
  },
  category: {
    type: String,
  },
};

const productSchema = new mongoose.Schema(schema, { timestamps: true });

const Product = mongoose.model("product", productSchema);

module.exports = { Product };
