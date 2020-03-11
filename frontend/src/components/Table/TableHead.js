import React from 'react';

export default function TableHead(props) {  
  const headers = props.headers.map((head, index)=> {
    return(
      <th key={index}>{head}</th>
    );
  })

  return (
    <thead>
      <tr>
        {headers}
      </tr>
    </thead>
  );
}
