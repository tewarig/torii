import React from 'react';
import { Select }from "@chakra-ui/react"


function Options({ value , handleChange}) {
    return (
        <>
            <Select placeholder="All" margin="1.5%" value={value} onChange={handleChange} >
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="css">CSS</option>
            <option value="sass">SASS</option>
            <option value="scss">SCSS</option>
            <option value="less">LESS</option>
            <option value="stylus">STYLUS</option>
            <option value="c++">C++</option>
            <option value="motion">Motion</option>
            <option value="Web Dev">Web Dev</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Deep Learning">Deep Learning</option>
            <option value="NLP">NLP</option>
            <option value="App Dev">App Dev</option>
            <option value="NOSQL">NOSQL</option>
            <option value="Database">Database</option>
            <option value="C">C</option>
            <option value="Lua">Lua</option>
            <option value="OpenCL">OpenCL</option>
            <option value="Photography">Photography</option>
            <option value="CLI">CLI</option>
            <option value="Web App">Web App</option>
            <option value="Ruby">Ruby</option>
            <option value="Angular">Angular</option>
            <option value="Python">Python</option>
            <option value="Automated-Testing">Automated Testing</option>
            <option value="Markdown">Markdown</option>
            <option value="GO">Go</option>
            <option value="PHP">PHP</option>
            <option value="Node">Node</option>
            <optioon value="Cryptocurrency"> Cryptocurrency </optioon>




 



  

           
            
          </Select>
 
        </>
    );
}

export default Options;