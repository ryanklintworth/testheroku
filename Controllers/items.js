// CONTROLLERS FILE SETUP
//————7 restful routes————

// =======================
//      DEPENDENCIES
// =======================
const express = require('express');
const router = express.Router();
const Item = require('../models/item_schema.js');
// =======================
//  	    ROUTES
// =======================



// =======================
//    	   GET
// =======================
// router.get('/', (req, res) => {
//   Item.find({}, (error, allItems) => {
//     res.render(
//       'index.ejs',
//       {
//         items: allItems
//       }
//     )
//   })
// })

app.get('/' , (req, res) => {
  res.send('display items page');
});


// =======================
//     		 SHOW
// =======================



// =======================
//      	 EDIT
// =======================



// =======================
//     	   NEW
// =======================



// =======================
//     		 PUT
// =======================



// =======================
//       	 POST
// =======================



// =======================
//        DELETE
// =======================


module.exports = router;
