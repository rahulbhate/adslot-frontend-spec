import React from 'react';
import moment from 'moment';
const BookingDetails = ({index, name, id, quantity=0, rate = 0, cost=0 , startDate, endDate}) => {
  return (
    <>
  <tbody>
    <tr className="table-success">
      <th scope="row">{index}</th>
      <td>{id}</td>
      <td>{name}</td>
      <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(quantity)}</td>
      <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'AUD' }).format(rate)}</td>
      <td>{quantity/1000 * rate}</td>
      <td>{moment(startDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
      <td>{moment(endDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
    </tr>
  </tbody>
    </>
  );
};

export default BookingDetails;
