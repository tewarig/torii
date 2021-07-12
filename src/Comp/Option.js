import React from 'react';
import { Select }from "@chakra-ui/react"


function Options({ value , handleChange}) {
    return (
        <>
            <Select placeholder="All" margin="1.5%" value={value} onChange={handleChange} >
            <option value="css">CSS</option>
            <option value="sass">SASS</option>
            <option value="scss">SCSS</option>
            <option value="less">LESS</option>
            <option value="stylus">STYLUS</option>
            <option value="c">C++</option>
            <option value="motion">Motion</option>
            <option value="web">Web Dev</option>
            <option value="machine">Machine Learning</option>
            <option value="deep">Deep Learning</option>
            <option value="nlp">NLP</option>
            <option value="javascript">Javascript</option>
            <option value="css">CSS</option>
            <option value="sass">SASS</option>
            <option value="scss">SCSS</option>
            
          </Select>
 
        </>
    );
}

export default Options;