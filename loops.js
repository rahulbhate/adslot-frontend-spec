var filteredArray  = products.filter(function(array_el){
    return sellers.filter(function(anotherOne_el){
       return anotherOne_el.id === array_el.sellerId;
    }).length == 0
 });
products.forEach(function(product) {
    var result = sellers.filter(function(seller) {
        return seller.id === product.sellerId;
    });
    //delete products.sellerId;
    product.sellerName = (result[0] !== undefined) ? result[0].name : null;
    return {...product};
});
console.log(products);

var prod = products.map(function(product) {
  var result = sellers.filter(function(seller) {
      return seller.id === product.sellerId;
  });

  //delete products.sellerId;
 // product.sellerName = (result[0] !== undefined) ? result[0].name : null;
  return {...product, sellerName:(result[0] !== undefined) ? result[0].name : null };
});

let group = products.reduce((r, a) => {
        //console.log("a", a);
        //console.log('r', r);
        r[a.sellerId] = [...r[a.sellerId] || [], a];
        return r;
       }, {});
       console.log("group", group);

var filtered = [1, 2, 3, 4].map(e => {
        return e > 1;
      },[2, 4]); console.log(filtered);

      var filtered = [1, 2, 3, 4].filter(e => {
        return e > 1;
      },[2, 4]); console.log(filtered);

      function groupBy(OurArray, property) {  
        return OurArray.reduce(function (accumulator, object) { 
          // get the value of our object(age in our case) to use for group    the array as the array key
          const key = object[property]; 
          // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty
          if (!accumulator[key]) {      
            accumulator[key] = [];    
          }    
      // add the value to the array
          accumulator[key].push(object);
          // return the transformed array
        return accumulator;  
      // Also we also set the initial value of reduce() to an empty object
        }, {});
      } const groupedPeople = groupBy(products, 'sellerId');


      function join(lookupTable, mainTable, lookupKey, mainKey, select) {
        var l = lookupTable.length,
            m = mainTable.length,
            lookupIndex = [],
            output = [];
        for (var i = 0; i < l; i++) { // loop through l items
            var row = lookupTable[i];
            lookupIndex[row[lookupKey]] = row; // create an index for lookup table
        }
        for (var j = 0; j < m; j++) { // loop through m items
            var y = mainTable[j];
            var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
            output.push(select(y, x)); // select only the columns you need
        }
        return output;
    }; var result = join(brands, articles, "id", "brand_id", function(article, brand) {
        return {
            id: article.id,
            name: article.name,
            weight: article.weight,
            price: article.price,
            brand: (brand !== undefined) ? brand.name : null
        };
    });
    console.log(result);
    result = result.reduce(function (r, a) {
      key = a.brand || 'others';
      r[key] = r[key] || [];
      r[key].push(a);
      return r;
  }, Object.create(null));


  var dd =  products
  .map(product =>{
    var ee = sellers.filter(seller => seller.id === product.sellerId);
    var ff = bookings.map(booking => booking.productId === product.id);
    product.sellerName = (ee[0] !== undefined) ? ee[0].name : null;
    product.quantity = (ff[0] !== undefined) ? ff[0].quantity : null;
    console.log(ff);
    return {
      ...product
    }
  })
  .reduce((r, a) => {
    r[a.sellerId] = [...r[a.sellerId] || [], a];
    return r;
   }, {});

   var dd = bookings.reduce((r, a) => {
    r[a.productId] = [...r[a.productId] || [], a];
    return r;
   }, {});


   var prod = bookings.map(function(booking) {
    var result = products.filter(function(product) {
        return product.id === booking.productId;
    });
   
    //delete products.sellerId;
    booking.productName = (result[0] !== undefined) ? result[0].name : null;
    booking.rate = (result[0] !== undefined) ? result[0].rate : null;
    return {...booking};
}).filter(function(booking){ 
  return booking.endDate < new Date();
});

var prod = products.map(function(product) {
  var result = sellers.filter(function(seller) {
      return product.sellerId === seller.id;
  });
  //delete products.sellerId;
  products.sellerName = (result[0] !== undefined) ? result[0].name : null;
  return {...product};
})
// Adding new property to an object...
var kk = products.map(obj=> ({ ...obj, Active: 'false' }));

var prod = products.map(function(product) {
  var result = sellers.filter(function(seller) {
      return seller.id === product.sellerId;
  });
  var ff = bookings.map(booking => booking.productId === product.id);
  //delete products.sellerId;
 // product.sellerName = (result[0] !== undefined) ? result[0].name : null;
  return {...product, sellerName:(result[0] !== undefined) ? result[0].name : null,  quantity :(ff[0] !== undefined) ? ff[0].quantity : null };
});


//Use This Final Code: ---------------------
// Products with seller Names in  new array prod and keeps original products
// array as it is....

/*------------------------------------------------------------------------- 
var prod = products.map(function(product) {
  var sellerName = sellers.filter(function(seller) {
      return seller.id === product.sellerId;
  });
  var result = bookings.filter(function(booking){
    return booking.productId === product.id;
  })
  return {...product, ...booking, sellerName:(sellerName[0] !== undefined) ? sellerName[0].name : null, productName:(result[0] !== undefined) ? result[0].name : null};
});

var groupByProductId = bookings.reduce((r, a) => {
  r[a.productId] = [...r[a.productId] || [], a];
  return { ...r };
 }, {});

  var groupBySellerId = products.reduce((r, a) => {
    r[a.sellerId] = [...r[a.sellerId] || [], a];
    return r;
   }, {});

 var prodBookings = bookings.map(function(booking) {
  var result = products.filter(function(product) {
      return booking.productId === product.id;
  });
  return {...booking, productName:(result[0] !== undefined) ? result[0].name : null};
});
---------------------------------------------------------------------*/
Final Code  (26th November 2019)
var prod = products.map(function(product) {
  var sellerName = sellers.filter(function(seller) {
      return seller.id === product.sellerId;
  });
  var bookingData = bookings.filter(function(booking){
    return booking.productId === product.id;
  });

  return {...product,sellers: (groupBySellerId[0] !== undefined) ? groupBySellerId[0].name : null , sellerName:(sellerName[0] !== undefined) ? sellerName[0].name : null, productName:(result[0] !== undefined) ? result[0].name : null,bookingData};
});

var prod = products.map(function(product) {
  var sellerName = sellers.filter(function(seller) {
      return seller.id === product.sellerId;
  });
  var bookingData = bookings.filter(function(booking){
    return booking.productId === product.id;
  });  
  return {...product,  sellerName:(sellerName[0] !== undefined) ? sellerName[0].name : null, bookingData};
}).reduce((r, a, index) => {
  r[a.sellerName] = r[a.sellerName] || [];
  r[a.sellerName].push(a);
  return r;
 }, {});

var groupBySellerId = prod.reduce((r, a, index) => {
  r[a.sellerName] = r[a.sellerName] || [];
  r[a.sellerName].push(a);
  return r;
 }, {});

 Object.keys(prod).forEach(function(prop){ console.table(prod[prop])});
 Object.keys(prod).forEach(function(prop){ console.table(prod[prop][0])});
 Object.keys(prod).forEach(function(prop){ console.table(prod[prop][0].bookingData)});
 Object.keys(prod).forEach(function(prop){ console.table(prod[prop][1].bookingData)});

 Object.keys(prod).forEach(function(prop){
  prod[prop][0].bookingData.map(function(d){
    console.log(d.startDate, d.endDate, d.quantity, d.productId)
  })});
  Object.keys(prod).forEach(function(prop){
    console.log(prod[prop][0].bookingData.length) });

  Object.keys(prod).forEach(function(prop){
      console.log(prod[prop].length) });



      //Converting JSON object to JS object
    var obj = JSON.parse(prod);
    
     // Define recursive function to print nested values
     function printValues(obj) {
      for(var k in obj) {
          if(obj[k] instanceof Object) {
              printValues(obj[k]);
          } else {
            document.write(obj["startDate"] + obj["endDate"] + obj["quantity"] + obj["name"] + obj["productId"] + "<br>");
          };
      }
  };
  
  // Printing all the values from the resulting object
  printValues(prod);
  
  document.write("<hr>");

    // Define recursive function to print nested values
    function printValues(obj) {
      for(var k in obj) {
          if(obj[k] instanceof Array) {
              printValues(obj[k]);
          } else {
              document.write(obj[k]["id"] + obj[k]["name"] + obj[k]["rate"] + obj[k]["sellerId"] + obj[k]["sellerName"] + "<br>");
          };
      }
  };
  
  // Printing all the values from the resulting object
  printValues(prod);
  
  document.write("<hr>");











// https://stackoverflow.com/questions/6571551/shorthand-function-for-checking-whether-a-property-exists
const assert = {
  isTrue: (arg1, msg = '') =>
      (arg1 === true) ? console.info('PASSED: '+msg) : console.error('FAILED: ' + msg),
  isFalse: (arg1, msg = '') =>
      (arg1 === false) ? console.info('PASSED: '+msg) : console.error('FAILED: ' + msg)
}

const data = {
  flat: 42,
  nest: {
      foo: "foo one",
      bar: {
          can: "can one"
      }
  },
  arr : [ "joe" ],
  arr2: [ {magic: 'mike'}]
}

const propExists = (obj, path) => {
  return !!path.split(".").reduce((obj, prop) => {
      return obj && obj[prop] ? obj[prop] : undefined;
  }, obj)
}

assert.isTrue(propExists(data, "flat"),'simple test');
assert.isTrue(propExists(data, "nest.foo"),'2nd degree');
assert.isTrue(propExists(data, "nest.bar"),'obj');
assert.isTrue(propExists(data, "nest.bar.can"),'3rd degree');
assert.isTrue(propExists(data, "arr.0"),'array in obj');
assert.isTrue(propExists(data, "arr2.0.magic"), 'prop in object in array')

assert.isFalse(propExists(data, "xyz"), 'not there first sight');
assert.isFalse(propExists(data, "flat2.nosub"),'not there child');
assert.isFalse(propExists(data, "nest.foo.elvis"),'partially there');
assert.isFalse(propExists(data, "nest.bar.can.nope"),'tip of the leave');
assert.isFalse(propExists(data, "arr.1"),'wrong array index');
