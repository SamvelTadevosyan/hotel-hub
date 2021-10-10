import React from 'react';
import isEmpty from 'lodash.isempty';
import isFunction from 'lodash.isfunction';

import { Button } from "../../components/Button";
import { HotelInterface } from '../../interfaces/hotelInterface';
import { sorter } from '../../utils';

import './index.css'

interface SortingProps {
  data: HotelInterface[],
  onSort: (data: []) => void,
}

export function Sorting(props: SortingProps): JSX.Element {
  const handleSort = (type: string): void => {
    if (!isEmpty(props.data) && isFunction(props.onSort)) {
      const sorted: HotelInterface[] = [...props.data].sort(sorter(type));
      props.onSort(sorted);
    }
  };

  return (
    <div className="sort-block">
      <Button
        data="name"
        onClick={handleSort}
        label="Sort by Name"
        customClassName="custom-button"
      />
      <Button
        data="price"
        onClick={handleSort}
        label="Sort by Price"
        customClassName="custom-button"
      />
    </div>
);
}
