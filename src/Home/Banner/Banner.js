import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
    
    <div className=" container-fluid bg-pic py-5 ">
        <div className="row ">
            <div className="col-md-12">
            <h1 className=" text-white my-5">QUALITY IN <br /> CAR MAINTENANCE</h1>
                <p className="w-75 mx-auto text-muted fw-bolder">Free Library’s $1M auto archives are moving to<br /> Philly’s world-famous car museum and to a Hershey attraction</p>
                <button className="btn btn-info">Schedule A Visit</button>
            </div>
            
            
        </div>
        
    </div>
    
    );
};

export default Banner;

