import React  from 'react';
import {Text ,Box ,useColorModeValue, Button, Icon} from "@chakra-ui/react";
import Callender from '../Comp/Callender';
import EventCard from '../Comp/EventCard';
import axios from 'axios';
import Skeletons from '../Comp/Skeleton';
import { FaPlus } from 'react-icons/fa';

import {SignedIn,SignedOut} from "@clerk/clerk-react";
import {Link} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import NewsLetter from '../Comp/NewsLetter';
import ScrollToTop from '../Comp/ScrollToTop';




function OpenSourceEvent(props) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const date = new Date();
    var n = date.getMonth();
    var d = date.getDate();
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"]

    var [finalMonth,setFinalMonth] = React.useState(month[n]);
    var [flag,setFlag] = React.useState(true);
      
    var [Data,setData] = React.useState(null);
    const fetchData = async() => {
        const response = await axios.get('https://toriii.herokuapp.com/event');
        setData(response.data);
        if(d>=24){
            toast('Looks like you missed a lot of events this month.. try checking out for next month',{icon:'😔'})
        }
        
    }
    React.useEffect(fetchData,[]);

    
    return (
        <>
        <ScrollToTop></ScrollToTop>
        <Box backgroundImage="https://inchilly.sirv.com/Images/jungle-lines-2.png">

        
       <Callender month={finalMonth} event="Events" changeMonth={(event)=>setFinalMonth(event.target.value)}></Callender> 
       <SignedIn>
            <Link to="/addEvent">
                         <Button position="fixed" right="5%" bottom="5%" borderRadius="25" >
                         <FaPlus/>
                     </Button>
                         </Link>
                     </SignedIn>
                     <SignedOut>
             
                     <Button position="fixed" right="5%" bottom="5%" borderRadius="25" onClick={()=>(toast('You need to sign in to add an  Event',{
                 duration: 6000,  
                   icon:'😞'
               }
               ))}>
            <FaPlus/>
        </Button>
        </SignedOut> 
       {Data ?
       <>
          { Data.filter(
              x => {
                  if(x.month == finalMonth){
                      return x;
                  }
              }
           ).sort((a,b)=>(a.date>b.date)? 1:((b.date>a.date)?-1:0)
           ).map(x=>( 
              <>  
            <EventCard
            id={x._id}
            ImageUrl={x.imageSrc}
            TextTitle={x.name}
            TextDes={x.description}
            Date={x.date}
            Month={x.month}
            Linki={x.eventLink}          
                        
            >

            </EventCard>
            </>
        
           ))
          
        
         }
           </>
           

           :
           <>
           <Skeletons></Skeletons>
           </>
       }
       
       <Toaster/>
       <NewsLetter></NewsLetter>
       
        </Box>
        </>
    );
}

export default OpenSourceEvent;