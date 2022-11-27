import { Avatar } from '@mui/material'
import React from 'react'
import classes from './OrderDetails.module.css'
import PinDropIcon from '@mui/icons-material/PinDrop';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
const OrderDetails = (props) => {
  return (
    <div className={classes.orderdetails__item}>
        <Avatar sx={{width:"60px", height:"60px"}}>{props.action}</Avatar>
        <div className={classes.orderdetails__itemDetails}>
            <p className={classes.orderdetails__itemDetails__heading}>{props.action}</p>
            <div className={classes.orderdetails__itemDetails__subheading}><FastfoodIcon/> {props.dish} &nbsp;  <PinDropIcon/>{props.station}</div>
            <div className={classes.orderdetails__itemDetails__misc}><AccessTimeFilledIcon/> {props.duration} &nbsp; <InsertInvitationIcon/> {new Date(props.startTime).toString() } </div>
        </div>
    </div>
  )
}

export default OrderDetails