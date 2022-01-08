import React from 'react'
import Box from '@material-ui/core/Box'


{/** It's a wrapper for Box with display=flex by default and that sets properties for each child
    Props: Box props component + 
            noMarginOnLast: Removes the effects of the last component
            childrenBoxProps: defines the properties of each child
    **/}
export default function Row({children,noMarginOnLast, childrenBoxProps, ...rest}) {
    return (
        <Box {...rest}  display={'flex'}>
            {
                (children && !children.map) && (
                    children
                )
            }
            {
                children?.map && children.map((Child, index)=>(
                    <Box key={index} {...(noMarginOnLast && (children.length-1 === index))?{}:{...childrenBoxProps}}>
                        {Child}
                    </Box>
                    
                ))
            }
            

        </Box>
    )
}