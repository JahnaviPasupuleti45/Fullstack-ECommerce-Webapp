import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { backend_url, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backend_url + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
   const statusHandler=async (event,orderId)=>{
      try{
        const response= await axios.post(backend_url+"/api/order/status",{orderId,status:event.target.value},{headers:{token}})
        if(response.data.success){
            await fetchAllOrders()
        }
      }catch(err){
        console.log(err);
        toast.error(err.data.message)
      }
   }
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div>
      <h3>Order Page</h3>

      {orders.map((order, index) => (
        <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
          <img className="w-12" src={assets.parcel_icon} alt="" />
          <div>
            <div>
              {order.items.map((item, item_index) => {
                if (item_index === order.items.length - 1) {
                  return (
                    <p className="py-0.5" key={item_index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>
                    </p>
                  );
                } else {
                  return (
                    <p className="py-0.5" key={item_index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>,
                    </p>
                  );
                }
              })}
            </div>
            <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
            <div>
              <p>{order.address.street + ", "}</p>
              <p>
                {order.address.city +
                  ", " +
                  order.address.state +
                  " ," +
                  order.address.country +
                  " ," +
                  order.address.zipcode}
              </p>
            </div>
            <p>{order.address.phone}</p>
          </div>
          <div>
            <p className="text-sm sm:text-[15px]">Items :{order.items.length}</p>
            <p className="mt-3"> Method : {order.paymentMethod}</p>
            <p>Payment : {order.payment ? 'Done':"Pending"}</p>
            <p>Date : {new Date(order.date).toDateString()}</p>
          </div>
          <p className="text-sm sm:text-[15px] ml-2">{currency}{order.amount}</p>
          <select onChange={(e)=>{statusHandler(e,order._id)}} value={order.status} className="p-2 font-bold">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
