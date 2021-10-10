import * as React from 'react';
import isEqual from 'lodash.isequal';
import {NamedExoticComponent, PropsWithChildren} from "react";

export const memoWrapper = (component: React.FunctionComponent<any>): NamedExoticComponent<PropsWithChildren<any>> => {
  const areEqual = (prevProps: any, nextProps: any): boolean => isEqual(prevProps, nextProps);
  return React.memo(component, areEqual);
};


export const sorter = (sortAttribute: string, asc = false) => (a: {[key: string]: any}, b: {[key: string]: any}) => {
  if (a[sortAttribute] > b[sortAttribute]) {
    return asc ? 1 : -1;
  }
  if (a[sortAttribute] < b[sortAttribute]) {
    return asc ? -1 : 1;
  }
  return 0;
}

export const getNumOfDays = (startDate: Date | null, endDate: Date | null): number => {
  if (startDate === null || endDate === null) {
    return 0;
  }
  return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
};

