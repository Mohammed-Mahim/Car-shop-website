import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AddCar from "../AddCar/AddCar";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageService from "../ManageService/ManageService";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import "./AdminDashBoard.css";

const AdminDashBoard = () => {
  const [control, setControl] = useState("");
  const { admin,logOut } = useAuth();

  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-2 col-sm-12 mt-5">
              <div className="sidebar__container">
                  {
                    !admin ?
                    <ul>
                      <li
                        onClick={() => setControl("payment")}
                        className="admin-menu p-2"
                        >
                          Payment
                        </li>
                        <li
                        onClick={() => setControl("addreview")}
                        className="admin-menu p-2"
                        >
                          Add Review
                        </li>
                        <li
                          onClick={() => setControl("myorders")}
                          className="admin-menu p-2"
                        >
                          My Orders
                        </li>
                        <li
                          onClick={() => logOut("myorders")}
                          className="admin-menu p-2"
                        >
                         Logout
                        </li>
                    </ul> 

                    :
                    <ul>
                      <li
                      onClick={() => setControl("manageOrders")}
                      className="admin-menu p-2"
                      >
                        Manage All Orders
                      </li>
                      <li
                        onClick={() => setControl("AddCar")}
                        className="admin-menu p-2"
                      >
                        Add A Product
                      </li>
                      <li
                        onClick={() => setControl("makeadmin")}
                        className="admin-menu p-2"
                      >
                        Make Admin
                      </li>
                      <li
                        onClick={() => setControl("manageservice")}
                        className="admin-menu p-2"
                      >
                        Manage Product
                      </li>
                     
                      <li
                          onClick={() => logOut("myorders")}
                          className="admin-menu p-2"
                        >
                         Logout
                        </li>
                    </ul>
                  }
              </div>
            </div>
            <div className="col-md-10 col-sm-12 text-center  text-center">
              {control === "AddCar" && <AddCar></AddCar>}
              {control === "payment" && <Payment></Payment>}
               {control === "manageOrders" && <ManageAllOrders></ManageAllOrders>}
               {control === "manageservice" && <ManageService></ManageService>}
              {control === "makeadmin" && <MakeAdmin></MakeAdmin>}
               {control === "addreview" && <AddReview></AddReview>}
               {control === "myorders" && <MyOrders></MyOrders>} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;