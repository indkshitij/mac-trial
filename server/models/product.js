import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      default: 0,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Electronics", "Footwear", "Mobiles", "Accessories"],
        message: "{VALUE} is not a valid category",
      },
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
    },

    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default productModel;
