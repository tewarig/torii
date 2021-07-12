import React from 'react';
import {Stack , Skeleton} from "@chakra-ui/react";

function Skeletons(props) {
    return (
        <div>
               <Stack padding="5%">
               <Skeleton height="10px" />
               <Skeleton height="20px" />
               <Skeleton height="30px" />
               <Skeleton height="10px" />
               <Skeleton height="20px" />
               <Skeleton height="30px" />
               <Skeleton height="10px" />
               <Skeleton height="20px" />
               <Skeleton height="30px" />
               <Skeleton height="10px" />
               <Skeleton height="20px" />
               <Skeleton height="30px" />
               <Skeleton height="10px" />
               <Skeleton height="20px" />
               
               </Stack>
            
        </div>
    );
}

export default Skeletons;