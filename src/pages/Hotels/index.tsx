import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce'

import { Input } from '../../components/Input';
import { Range } from '../../components/Range';
import { Hotel } from '../../views/HotelCard';
import { Sorting } from '../../views/Sorting';

import { loadHotels } from '../../store/actions';
import { HotelInterface, RangeInterface } from '../../interfaces/hotelInterface';
import { selectHotelsInRange, selectLoading, selectRange } from '../../store/selectors';

import { getNumOfDays } from '../../utils';

import './index.css'
import {History} from "history";

interface HotelsProps {
  history: History,
}

export function Hotels(props: HotelsProps): JSX.Element {
  //store
  const dispatch = useDispatch();
  const hotels = useSelector(selectHotelsInRange);
  const range: RangeInterface = useSelector(selectRange);
  const loading = useSelector(selectLoading);
  if (range.startDate === null || range.endDate === null) {
    props.history.push('/')
  }
  //state
  const [searchValue, setSearchValue] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [filteredHotels, setFilteredHotels] = useState<HotelInterface[]>([]);

  //inner functionality
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const debouncedSearchHandler = useCallback(
    debounce(handleSearch, 300)
    , []);

  const handleRange = (value: string) => {
    setPriceRange(value)
  };

  const debouncedRangeHandler = useCallback(
    debounce(handleRange, 200)
    , []);

  useEffect(() => {
    loadHotels(dispatch);
  }, []);

  useEffect(() => {
    if (searchValue || priceRange) {
      const filteredHotels = hotels.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
          && parseInt(item.price) <= parseInt(priceRange || '500')
      })
      setFilteredHotels(filteredHotels);
    } else {
      setFilteredHotels(hotels);
    }
  }, [searchValue, priceRange, hotels, loading])

  return (
    <div className="block">
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="container head" />
          <div className="container sort" >
            <span>
              Total Nights: {getNumOfDays(range.startDate, range.endDate)}
            </span>
            <Sorting
              data={filteredHotels}
              onSort={setFilteredHotels}
            />
          </div>
          <div className="container filter">
            <div>
              <Input onChange={debouncedSearchHandler} />
            </div>
            <div>
              <Range
                step={5}
                min={100}
                max={1000}
                initialValue="500"
                label="Price Filter"
                onChange={debouncedRangeHandler}
              />
            </div>
          </div>
          <div className="container hotels">
            {
              filteredHotels && filteredHotels.map((hotel) => {
                return (
                  <Hotel
                    {...hotel}
                  />
                )
              })
            }
          </div>
        </>
      )}
    </div>
  );
}
