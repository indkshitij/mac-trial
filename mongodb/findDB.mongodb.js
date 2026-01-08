use("ecommerce");

db.products.find();

// db.products.find({ price: { $gt: 2500, $lte: 5000 } });

// db.products.findOne({
//   _id:{ "695d1c5b16c97894bcccbc69"}
// });

// db.products.find({
//   $or: [{ category: "Electronics" }, { price: { $lte: 3499 } }],
// });

// db.products.find({
//   $and: [{ category: "Electronics" }, { price: { $lte: 3499 } }],
// });

// db.products.find({}, { name: 1, price: 1 });

db.products
  .find({}, { title: 1, name: 1, price: 1, _id: 0 })
  .skip(1)
  .sort({ price: -1 })
  .limit(2);
