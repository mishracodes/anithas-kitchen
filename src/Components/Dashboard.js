import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import classes from './Dashboard.module.css'
import TimelapseIcon from '@mui/icons-material/Timelapse';
import TimelineIcon from '@mui/icons-material/Timeline';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import OrderDetails from './OrderDetails/OrderDetails';
import {collection, onSnapshot} from 'firebase/firestore'
import db from '../firebase'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [results, setresults] = useState(null)
    const [duration, setduration] = useState(0)
    const [avgDuration, setavgDuration] = useState(0)
    const [count, setcount] = useState(0)
   useEffect(() => {
     
    const actionRef = collection(db, "actions")

    const observer = onSnapshot(actionRef, docSnapshot => {
        setresults(
            docSnapshot.docs.map((e)=>({
                id:e.id, 
                data:e.data()
            }))
        )

        // ...
      }, err => {
        console.log(`Encountered error: ${err}`);
      })

      return ()=>{
        observer()
      }
      
   }, [])


useEffect(() => {
    getduration(results)
}, [results])


   const getduration=(results)=>{
    let sum=0
    let count=0
    if(results)
        results.forEach((item)=>{
                 sum=sum+parseInt(item.data.duration);
                 count++;
            //dur+=parseInt(item.data.duration)
        })
        if(sum!==0){
        setduration(sum)  
        setavgDuration(parseFloat((sum/count).toFixed(5))) 
        setcount(count)
        }   
    
   
   }

   const action = {
    labels: ['Bake','Barbecue','boil','Chop','Dress','Fry','Grill','Peel','Prepare','Presentaion','Saute','Toss'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 2, 1, 13, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          
          'rgba(255, 132, 99, 0.2)',
          'rgba(253, 162, 54, 0.2)',
          'rgba(255, 86, 206, 0.2)',
          'rgba(192, 192, 75, 0.2)',
          'rgba(255, 102, 153, 0.2)',
          'rgba(255, 64, 159, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          
          'rgba(255, 132, 99, 1)',
          'rgba(253, 162, 54, 1)',
          'rgba(255, 86, 206, 1)',
          'rgba(192, 192, 75, 1)',
          'rgba(255, 102, 153, 1)',
          'rgba(255, 64, 159, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dish = {
    labels: ['Burger','Cake','Coffee','Egg','Eggs','Fries','Lasagna','Momo','Paneer','Pizza','Salad','Tea'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 2, 1, 13, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          
          'rgba(255, 132, 99, 0.2)',
          'rgba(253, 162, 54, 0.2)',
          'rgba(255, 86, 206, 0.2)',
          'rgba(192, 192, 75, 0.2)',
          'rgba(255, 102, 153, 0.2)',
          'rgba(255, 64, 159, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          
          'rgba(255, 132, 99, 1)',
          'rgba(253, 162, 54, 1)',
          'rgba(255, 86, 206, 1)',
          'rgba(192, 192, 75, 1)',
          'rgba(255, 102, 153, 1)',
          'rgba(255, 64, 159, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const station = {
    labels: ['Boiler','Deepfrier','Dispatcher1','Dispatcher2','Griller','Misc','Oven1','Oven2','Prep','Saladbay'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 2, 1, 13, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          
          'rgba(255, 132, 99, 0.2)',
          'rgba(253, 162, 54, 0.2)',
          'rgba(255, 86, 206, 0.2)',
          'rgba(192, 192, 75, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          
          'rgba(255, 132, 99, 1)',
          'rgba(253, 162, 54, 1)',
          'rgba(255, 86, 206, 1)',
          'rgba(192, 192, 75, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
   
  return (
    <div className={classes.dashboard__main}>

    {results&&<div>
        <Card>
            <div className={classes.card__header}>Order Report</div>
            <div className={classes.oderreport__body}>
                <div className={classes.items}>
                    <TimelapseIcon sx={{width:"54px", height:"54px", color:"green"}}/>
                    <div className={classes.oderreport__itembody}>
                        <p className={classes.orderreport_itemsubheading}>Duration</p>
                        <p className={classes.orderreport_itemnumber}>{duration}</p>
                    </div>
                </div>

                <div className={classes.items}>
                    <TimelineIcon sx={{width:"54px", height:"54px", color:"blue"}}/>
                    <div className={classes.oderreport__itembody}>
                        <p className={classes.orderreport_itemsubheading}>Average Duration</p>
                        <p className={classes.orderreport_itemnumber}>{avgDuration}</p>
                    </div>
                </div>

                <div className={classes.items}>
                    <Filter9PlusIcon sx={{width:"54px", height:"54px", color:"red"}}/>
                    <div className={classes.oderreport__itembody}>
                        <p className={classes.orderreport_itemsubheading}>Count</p>
                        <p className={classes.orderreport_itemnumber}>{count}</p>
                    </div>
                </div>
            </div>
        </Card>

        <Card>
            <div className={classes.card__header}>Analysis</div>
            <div className={classes.oderreport__body}> 
            <Doughnut data={action} width={"300px"}/>
            </div>
            <div className={classes.oderreport__body}> 
            <Doughnut data={station} width={"300px"}/>
            </div>
            <div className={classes.oderreport__body}> 
            <Doughnut data={dish} width={"300px"}/>
            </div>
        </Card>

    </div>}
    

    <Card>
        <div className={classes.card__header}>Order Details</div>
        <div className={classes.orderdetails__body}>
            <div className={classes.order__details__filter}>
                <div className={classes.order__details__filter__items}>
                <label className={classes.details__filterLabel} htmlFor="Action">Choose the Action:</label>
                <select id="Action" name="Action">
                    <option defaultValue value=""> -- select an option -- </option>
                    <option value="Bake">Bake</option>
                    <option value="Barbecue">Barbecue</option>
                    <option value="boil">boil</option>
                    <option value="Chop">Chop</option>
                    <option value="Dress">Dress</option>
                    <option value="Fry">Fry</option>
                    <option value="Grill">Grill</option>
                    <option value="Peel">Peel</option>
                    <option value="Prepare">Prepare</option>
                    <option value="Presentaion">Presentaion</option>
                    <option value="Saute">Saute</option>
                    <option value="Toss">Toss</option>
                </select>
                </div>
                
                <div className={classes.order__details__filter__items}>
                <label className={classes.details__filterLabel} htmlFor="Dish">Choose the Dish:</label>
                <select id="Dish" name="Dish">
                    <option defaultValue value=""> -- select an option -- </option>
                    <option value="Burger">Burger</option>
                    <option value="Cake">Cake</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Egg">Egg</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Fries">Fries</option>
                    <option value="Lasagna">Lasagna</option>
                    <option value="Momo">Momo</option>
                    <option value="Paneer Tikka">Paneer Tikka</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Salad">Salad</option>
                    <option value="Tea">Tea</option>
                </select>
                </div>
                

                <div className={classes.order__details__filter__items}>
                <label className={classes.details__filterLabel} htmlFor="Station">Choose the Station:</label>
                <select id="Station" name="Station">
                    <option defaultValue value=""> -- select an option -- </option>
                    <option value="Boiler">Boiler</option>
                    <option value="Deepfrier">Deepfrier</option>
                    <option value="Dispatcher1">Dispatcher1</option>
                    <option value="Dispatcher2">Dispatcher2</option>
                    <option value="Griller">Griller</option>
                    <option value="Misc">Misc</option>
                    <option value="Oven1">Oven1</option>
                    <option value="Oven2">Oven2</option>
                    <option value="Prep">Prep</option>
                    <option value="Saladbay">Saladbay</option>
                </select>
                </div>
            </div>
            <div className={classes.order__details__table}>
                {results&& results.map((e)=>(<OrderDetails key={e.id} action={e.data.action} dish={e.data.dish} duration={e.data.duration} startTime={e.data.startTime} station={e.data.station}/>))}
            </div>
        </div>
    </Card>

   
       
    </div>
    
  )
}

export default Dashboard