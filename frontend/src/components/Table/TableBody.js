import React from 'react';
import Rating from 'react-rating';
import moment from 'moment';

export default function TableBody(props) {
  const { body } = props;
  const rows = body.map((row, index)=>{
    return (
      <tr key={index}>
        <td>{moment(row.data).format("L")}</td>
        <td>{row.nome}</td>
        <td>
          <Rating 
            emptySymbol={<i className="far fa-star"></i>}
            fullSymbol={<i style={{color: 'orange'}} className="fas fa-star"></i>} 
            initialRating={row.nota} 
            readonly="true"
          />
        </td>
      </tr>
    );
  })

  return (
    <tbody>
      {rows}
    </tbody>
  );
}
