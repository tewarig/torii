import React from 'react';
import Callender from '../Comp/Callender';
import ProgramCard from '../Comp/ProgramCard';
import axios from 'axios';
import Skeletons from '../Comp/Skeleton';
import {SignedIn,SignedOut} from "@clerk/clerk-react";
import {Link} from 'react-router-dom';
import {Button} from "@chakra-ui/react";
import toast,{Toaster} from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import ScrollToTop from '../Comp/ScrollToTop';

function OpenProgram(props) {
    const date = new Date();
    var n = date.getMonth();
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"]

    var [finalMonth,setFinalMonth] = React.useState(month[n]);
    const [data,setData] = React.useState(null);
    const getData = async() => {
        const response = await axios.get('https://toriii.herokuapp.com/Program');
        const meow  = response.data;
        // console.log(meow);
        setData(meow);
        toast("Remember to checkout other open source programs in upcoming months" ,{icon:"👍"})
    }
        React.useEffect(getData,[]);




    return (
        <div>
            <ScrollToTop></ScrollToTop>
              <Callender
               event="Programs"
               month={finalMonth}
               changeMonth={(event)=>setFinalMonth(event.target.value)}

              >
 
              </Callender>
              <SignedIn>
            <Link to="/addProgram">
                         <Button position="fixed" right="5%" bottom="5%" borderRadius="25" >
                         <FaPlus/>
                     </Button>
                         </Link>
                     </SignedIn>
                     <SignedOut>
             
                     <Button position="fixed" right="5%" bottom="5%" borderRadius="25" onClick={()=>(toast('You need to sign in to add a Open Souce Program',{
                 duration: 6000,  
                   icon:'😞'
               }
               ))}>
            <FaPlus/>
        </Button>
        </SignedOut>
        {data ?
            <>
            {
                data.filter(
                     x=>{
                        if(x.month == finalMonth){
                          return x;
                        }
                     }
                    
                ).map(x=>(
                    <ProgramCard
                    id={x.id}
                    ImageUrl={x.imageSrc}
                    TextTitle={x.name}
                    TextDes={x.description}
                    Linki={x.eventLink}  
                    Youtube={x.youtube}  
                    Blog={x.blog}    
                                      
       
                   />
                ))
            }
            </>
         :
            <>
            <Skeletons></Skeletons>
            </>
        }
             <Toaster/> 
            
        </div>
    );
}

export default OpenProgram;


