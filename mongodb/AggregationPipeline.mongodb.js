use("ecommerce");

// db.products.aggregate([
//   {
//     $match: {
//       category: "Electronics",
//       //   price: { $gte: 1200 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       title: 1,
//       price: 1,
//       stock: 1,
//       rating: 1,
//       brand: 1,
//     },
//   },
// ]);

// db.products.aggregate([
//   {
//     $group: {
//       _id: "$category",

//       totalProducts: { $sum: 1 },

//   totalStock: {
//     $sum: {
//       $cond: [
//         { $ifNull: ["$stock", false] },
//         "$stock",
//         0
//       ]
//     }
//   },

//   totalQuantity: {
//     $sum: {
//       $cond: [
//         { $ifNull: ["$quantity", false] },
//         "$quantity",
//         0
//       ]
//     }
//   },

//   avgPrice: { $avg: "$price" },
//   avgRating: { $avg: "$rating" }
//     }
//   }
// ]);

db.products.aggregate([
  {
    $group: {
      _id: "$category",

      totalSale: { $sum: { $multiply: ["$price", "$rating"] } },

      avgRating: { $avg: "$rating" },
    },
  },
]);
