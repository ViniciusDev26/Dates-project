import React from 'react';
import Thead from './TableHead';
import Tbody from './TableBody';

export default function Table(props) {

  const { request } = props;

  return (
    <>
      <h5>{request.title}</h5>
      <table>
        <Thead headers={request.headers}/>
        <Tbody body={request.body}/>
      </table>
    </>
  );
}
