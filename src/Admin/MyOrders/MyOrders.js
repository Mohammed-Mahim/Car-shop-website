import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./MyOrders.css";

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [isCanceled, setIsCanceled] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isCanceled]);

    const handleCancel = id =>{
        fetch(`http://localhost:5000/myOrders/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(result=> {
            if(result.deletedCount){
                alert('Delete Successfully');
                setIsCanceled(true);
            }
            else{
                setIsCanceled(false);
            }
        });
    }
    return (
        <div className="orders">
            <h1 className="text-center my-5">Here is Your Orders</h1>
            <Table striped bordered hover className="table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Package Name</th>
                        <th>Package Price</th>
                        <th>Your Mobile</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
            {
                orders.map(or=> 
                    <tbody key={or._id}>
                        <tr>
                            <td>{or.orderTitle}</td>
                            <td>{or.bills}</td>
                            <td>{or.mobile}</td>
                
                            <td>{or.status}</td>
                            <td>
                                <button onClick={()=>handleCancel(or._id)} className="btn btn-danger">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                    )
            }
            </Table>
        </div>
    );
};

export default MyOrders;