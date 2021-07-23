import React from 'react';
import {SignIn} from '@clerk/clerk-react';
import {colorMode ,toggleColorMode,useColorMode} from '@chakra-ui/react';
import './darkMode.css';


function Sign(props) {
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
        <>
        <br/>
        <SignIn routing="path" path="/sign-in"  />
        </>
    );
}

export default Sign;