import React, { useState } from 'react';
import Category from '../Category/Category';


const Dashboard = () => {

  const data = require("../../assets/data.json");

  return (
    <>
      <div className='container-fluid p-3 bg-info-subtle text-info-emphasis'>
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

        <div className="container-fluid px-1">
          {data.categories.map((category) =>
            <Category key={category.name} category={category} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
