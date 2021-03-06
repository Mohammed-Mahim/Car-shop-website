import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [services, setServices] = useState([])
  
    useEffect(()=>{
        fetch('https://limitless-hollows-16307.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="p-3 container">
        <h4 className="text-center text-danger">All Cars </h4>
        <div className="services">
          <div className="row">
            {services?.map((pd) => (
              <div className="col-md-4 col-sm-12 py-3">
                <div className="service border border p-3">
                  <div className="services-img ">
                    <img className="w-100" src={pd?.img} alt="" />
                  </div>
                  <h2 className="text-danger">{pd?.name}</h2>
                  <h3 className="text-secondary">{pd?.price}</h3>
                  <p className="text-muted fw-light">{pd?.des}</p>
                  <Link to={`/products/${pd._id}`}>
                    <button className="btn btn-info">Buy Now</button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    );
};

export default Explore;