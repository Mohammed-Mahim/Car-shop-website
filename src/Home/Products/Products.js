import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
    const [services, setServices] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container py-4 my-5">
         <span className="text-danger">Popular Cars</span>
          <h2 className="mx-2">Most Popular Cars <br /> In Our Shop</h2>
        <div className="services">
          <div className="row ">
            {services?.slice(0,6).map((pd) => (
              <div className="col-md-4 col-sm-12 py-3">
                <div className="service border border p-3">
                  <div className="services-img ">
                    <img className="w-100" src={pd?.img} alt="" />
                  </div>
                  <h2 className="text-danger">{pd?.name}</h2>
                  <h3 className="text-secondary">{pd?.price}</h3>
                  <p className="text-muted fw-light">{pd?.des}</p>
                  <Link to={`/products/${pd._id}`}>
                    <button className="btn btn-info" >Buy Now</button>
                  </Link>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    
    );
};

export default Products;