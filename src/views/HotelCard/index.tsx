import React from 'react';
import { HotelInterface } from "../../interfaces/hotelInterface";
import { memoWrapper } from '../../utils';
import './index.css';

function HotelCard(props: HotelInterface) {
  return (
    <div className="card">
      <div className="row">
        <span className="name">Name: <span> {props.name}</span></span>
      </div>
      <div className="row">
        <span className="name">Price: <span> {props.price}</span></span>
      </div>
      <div className="row">
        <span className="name">City: <span> {props.city}</span></span>
      </div>
    </div>
  );
}

export const Hotel = memoWrapper(HotelCard);
