import React  from 'react';
import {Text ,Box ,useColorModeValue} from "@chakra-ui/react";
import Callender from '../Comp/Callender';
import EventCard from '../Comp/EventCard';
import axios from 'axios';
import Skeletons from '../Comp/Skeleton';


function OpenSourceEvent(props) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const date = new Date();
    var n = date.getMonth();
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nove","December"]

    var [finalMonth,setFinalMonth] = React.useState(month[n]);
    var [flag,setFlag] = React.useState(false);
      
    var [Data,setData] = React.useState(null);
    const fetchData = async() => {
        const response = await axios.get('https://toriii.herokuapp.com/event');
        const {data} = response;
        setData(data);
        
    }
    React.useEffect(fetchData,[]);
 
    return (
        <Box backgroundImage="https://inchilly.sirv.com/Images/jungle-lines-2.png">

        
       <Callender month={finalMonth} changeMonth={(event)=>setFinalMonth(event.target.value)}></Callender>  

       {Data ?
       <>
          { Data.filter(
              x => {
                  if(x.month == finalMonth){
                      return x;
                  }
                //   setFlag(false);
              }
           ).map(x=>( 
              <>  
            <EventCard
            id={x._id}
            ImageUrl={x.imageSrc}
            TextTitle={x.name}
            TextDes={x.description}
            Date={x.date}
            Month={x.month}
            linki={x.eventLink}          
                        
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
       {
           flag && 
           <>
           opps! nothing found
           </>
       }

       
        </Box>
    );
}

export default OpenSourceEvent;