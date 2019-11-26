import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookingDetails from '../BookingDetails';
import TextInput from '../TextInput';
import Label from '../Label';
const  Bookings = (props) => {
    const [bookings, setBookings] = useState([{}]);
    const [products, setProducts] = useState([{}]);
    const [bookProd, setBookProd] = useState([{}]);
    const [sellers, setSellers] = useState([{}]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const fetchBookings = async () => {
          setLoading(true);
          const res = await axios.get('https://blooming-fortress-38880.herokuapp.com/bookings');
          setBookings(res.data.data);
          setLoading(false);
        };
        const fetchProducts = async () => {
            setLoading(true);
            const res = await axios.get('https://blooming-fortress-38880.herokuapp.com/products');
            setProducts(res.data.data);
            setLoading(false);
          };
          const fetchSellers = async () => {
            setLoading(true);
            const res = await axios.get('https://blooming-fortress-38880.herokuapp.com/sellers');
            setSellers(res.data.data);
            setLoading(false);
          };
        fetchBookings();
        fetchProducts();
        fetchSellers();
      }, []);

      // function groupBySeller(products){
      //   let group = products.reduce((r, a) => {
      //     //console.log("a", a);
      //     //console.log('r', r);
      //     r[a.sellerId] = [...r[a.sellerId] || [], a];
      //     return r;
      //    }, {});
      //    //console.log("group", group);
      // }
      function groupData(products, sellers){
        /* The method presented here modifies the articles 
        array in place by adding a new key-value-pair for brand. */
        var newArray = products.forEach(function(product) {
          var result = sellers.filter(function(seller) {
              return seller.id === product.sellerId;
          });
          delete products.sellerId;
          product.sellerName = (result[0] !== undefined) ? result[0].name : null;
          return result;
      });
      console.log(newArray);
      }

      var filteredProducts = search ? products.filter(
        (item) => {
          return item.name.toLowerCase().indexOf(
            search.toLowerCase()) !== -1;
        }
      ) : products
  
    function handleChange(event) {
        setSearch(event.target.value);
        console.log(search);
      }

     // groupBySeller(products);
     groupData(products,sellers);
    return(
        <div>
        <Label htmlFor="test" label="Search Products By Name:"/>
        <TextInput
        htmlId="searchText"
        placeholder="Search..."
        name="prodName"
        onChange={handleChange} 
       />
    
        Bookings .....
        <hr />
        <table className="table table-hover table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Rate</th>
            <th scope="col">Cost</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            </tr>
        </thead>
            { loading ? "loading....." :filteredProducts.map((booking, index) =>{
               return( 
                <BookingDetails name={booking.name} id={booking.id} index={index} quantity={booking.quantity}  rate={booking.rate} startDate={booking.startDate} endDate={booking.endDate} />
               )})}
            </table>
        </div>
    );
   
}
export default Bookings;