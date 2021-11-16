import React from 'react';

const Footer = () => {
    return (
        <>
        <div className="container-fluid bg-dark text-white py-3">
            <div className="row">
           
            <div className="col-md-4 px-4">
            <div>
                    <h2>Contact</h2>
                    <p>Phone <br /> <span>11-55-777-88</span></p>
                    <p>Email <br /> <span>carShop.com</span></p>
                    <p>Address <br /> <span>123, New York , </span></p>
            </div>
            </div>
                <div className="col-md-4 px-4">
                <div>
                    <h2>Opening Hour</h2>
                    <ul>
                        <li>Sun:09:00 AM - 09:00 PM</li>
                        <li>Mon:09:00 AM - 09:00 PM</li>
                        <li>Tue:09:00 AM - 09:00 PM</li>
                        <li>Wed:09:00 AM - 09:00 PM</li>
                        <li>Thu:09:00 AM - 09:00 PM</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4 px-4">
                <div>
                    <h2>Support</h2>
                    <ul>
                        <li>Online Support</li>
                        <li>Free Consultancy</li>
                        <li>24/7 Service</li>
                        <li>Make Call</li>
                        <li>Contract Support</li>
                    </ul>
                </div>
                </div>
                <div className="copyright text-white flex justify-around text-center border-top">
                <p>Copyright &copy; 2021 Online Car Shop. Designed By Ah-Mahim</p>
                
            </div>
            </div>
        </div>
            
                
                

        </>
    );
};

export default Footer;