// @flow
import React from 'react';
import Table from './table/Table';
import InputValuesComponent from './InputValueComponent/InputValuesComponent';
import './style/app.css';
import Time from "./table/Time";


const App = () => (
  <div>
      <Time />
    <InputValuesComponent />
    <Table />
  </div>
);

export default App;
