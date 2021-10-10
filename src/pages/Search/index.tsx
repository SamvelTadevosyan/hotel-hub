import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker';
import { History } from 'history';

import { Button } from '../../components/Button';
import { actions } from '../../store/actions';

import 'react-datepicker/dist/react-datepicker.css';
import './index.css'

interface SearchProps {
  history: History,
}

export function Search(props: SearchProps): JSX.Element {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (startDate !== null && endDate !== null) {
      dispatch({
        type: actions.SET_RANGE,
        data: { startDate, endDate},
      });
      props.history.push('/hotels')

    } else {
      setErrorMessage("Please choose valid Date")
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="item">
          <span className="label">
            From:
          </span>
          <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
        <div className="item">
          <span className="label">
            To:
          </span>
          <DatePicker className="date-picker" selected={endDate} onChange={(date) => {
            setEndDate(date);
          }}/>
        </div>
        <div className="item">
          <Button
            label="Search"
            onClick={handleSearch}
          />
        </div>
      </div>
      {
        errorMessage ? (
          <div style={{
            color: '',
          }}>{errorMessage}</div>
        ) : null
      }
    </div>
  );
}
