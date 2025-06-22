import express from 'express'
import adminAuth from '../middlewares/adminAuth.js'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders,verifyStripe } from '../controllers/orderController.js'
import authUser from '../middlewares/auth.js'
const orderRouter=express.Router()

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/userorders',authUser,userOrders)
orderRouter.post('/verifyStripe',authUser,verifyStripe)


export default orderRouter