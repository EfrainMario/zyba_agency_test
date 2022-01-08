import React from 'react'
import Button from '@material-ui/core/Button'



{/** A wrapper for material-ui's Button component
    Props: Button material-ui props +
        selected (bool): if the item is selected
    **/}
export default function CategoryItem({selected, ...rest}) {
    return (
        <Button size='small' elevation={0} variant={selected? 'contained' : 'outlined'} color={selected ? 'primary' : 'default'} {...rest} fullWidth 
            style={{
                maxWidth: 200,
                marginRight: 8*2,
                width: '100%'
            }}/>
    )
}
