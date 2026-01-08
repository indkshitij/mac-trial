use("ecommerce");

db.dropDatabase()

db.products.insertMany([
  {
    name: "Wireless Mouse1",
    category: "Electronics",
    price: 799,
    stock: 50,
    brand: "Logitech",
    rating: 4.5,
    createdAt: new Date(),
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 3499,
    stock: 30,
    brand: "Keychron",
    rating: 4.7,
    createdAt: new Date(),
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 20,
    brand: "Nike",
    rating: 4.3,
    createdAt: new Date(),
  },
]);

db.products.insert({
  name: "Bluetooth Headphones",
  category: "Electronics",
  brand: "Sony",
  price: 2999,
  stock: 25,
  rating: 4.6,
  warranty: "1 Year",
  isAvailable: true,
  createdAt: new Date(),
});

db.products.insertOne({
  title: "iPhone 15",
  description: "Latest Apple smartphone",
  price: 79999,
  images: [
    "https://example.com/iphone1.jpg",
    "https://example.com/iphone2.jpg",
  ],
  category: "Mobiles",
  isAvailable: true,
  quantity: 15,
  createdAt: new Date(),
});
