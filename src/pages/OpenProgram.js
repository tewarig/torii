import React from 'react';
import Callender from '../Comp/Callender';
import ProgramCard from '../Comp/ProgramCard';
import axios from 'axios';
import Skeletons from '../Comp/Skeleton';

function OpenProgram(props) {
    const date = new Date();
    var n = date.getMonth();
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"]

    var [finalMonth,setFinalMonth] = React.useState(month[n]);
    const [data,setData] = React.useState(null);
    const getData = async() => {
        const response = await axios.get('https://toriii.herokuapp.com/Program');
        const meow  = response.data;
        console.log(meow);
        setData(meow);
    }
        React.useEffect(getData,[]);




    return (
        <div>
              <Callender
               event="Programs"
               month={finalMonth}
               changeMonth={(event)=>setFinalMonth(event.target.value)}

              >

              </Callender>
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
              
            
        </div>
    );
}

export default OpenProgram;


