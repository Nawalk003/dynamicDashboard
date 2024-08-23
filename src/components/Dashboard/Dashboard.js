import React, { useState } from 'react';
import Category from '../Category/Category';


const Dashboard = () => {

  const data = require("../../assets/data.json");

  return (
    <>
      <div className='container-fluid px-3'>
        <div className="row justify-content-between">
          <div className="col-5">
            <span className="fw-bold">CNAPP Dashboard</span>
          </div>
          <div className="col-5">
            <button className="btn btn-outline-secondary mx-2">Add Widget <i className="bi bi-plus-lg"></i></button>
            <button className="btn btn-outline-secondary mx-2"><i className="bi bi-arrow-clockwise"></i></button>
            <button className="btn btn-outline-secondary mx-2"><i className="bi bi-three-dots-vertical"></i></button>
            <div className="btn-group mx-2" role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn btn-outline-secondary"><i className="bi bi-clock"></i></button>
              <button type="button" className="btn btn-outline-secondary">Last 2 Days</button>
            </div>
          </div>
        </div>

        <div className="container">
          <span>{data.categories.length}</span>
          {data.categories.map(cat => {
            <span key={cat.name}>{cat.name}</span>
          })}
          <div className='row'>
            <div className='col-2'> Widget</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
