import React from 'react';
import {SignUp} from '@clerk/clerk-react'
import {colorMode ,toggleColorMode,useColorMode} from '@chakra-ui/react';
import './darkMode.css';


function SignU(props) {
    const {colorMode , toggleColorMode }= useColorMode();
    const isDark = colorMode === 'dark';
    var bg = {
        backgroundColor : '#ddd',

    }
    const callFunction = () => {
        if(isDark){
        setTimeout(()=>{
          var x = document.getElementsByClassName('cl-component')[0];
          x.classList.add('dark');
        },2000);
    }else{
        setTimeout(()=>{
            var x = document.getElementsByClassName('cl-component')[0];
            x.classList.remove('dark');
          },2000);

    }
    }

    React.useEffect(callFunction,[isDark]);
    return (
        <div>
                        <>
            <br/>
            <SignUp routing="path" path="/sign-up"  />
            </>
        </div>
    );
}

export default SignU;