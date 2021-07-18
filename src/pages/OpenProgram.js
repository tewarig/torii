import React from 'react';
import Callender from '../Comp/Callender';
import ProgramCard from '../Comp/ProgramCard';


function OpenProgram(props) {
    const date = new Date();
    var n = date.getMonth();
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"]

    var [finalMonth,setFinalMonth] = React.useState(month[n]);


    return (
        <div>
              <Callender
               event="Programs"
               month={finalMonth}
               changeMonth={(event)=>setFinalMonth(event.target.value)}

              >

              </Callender>

            <ProgramCard
             id="kj4r43kbfekb4"
             ImageUrl="https://www.open-bio.org/wp-content/themes/obf-new/img/logos/obf_logo_icon-circle-tr.png"
             TextTitle="kuch bhi"
             TextDes="diodvdbofvbdfuvbdovbovurdvbdvd fosdov svisvdfvdfvov sovdfvndfvndoxlin o oivodfvnodflinvdfliv dffvldfnvdlfvndl "
             Linki="https://google.com"         
            
            

            >

            </ProgramCard>
              
            
        </div>
    );
}

export default OpenProgram;


