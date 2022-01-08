import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

{/** A Button with loader
    Props: Material-UI Button props +
        loading (bool): if is true, apears a loading  component
    **/}
export default function LoadableButton({ loading, disabled, ...rest }) {
    return (
        <Box position={'relative'} color={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Button disabled={loading||disabled}
                variant='contained'
                color='primary.light'
                {...rest} />

            {
                !!loading && (
                    <CircularProgress
                        variant="indeterminate"
                        style={{
                            position: 'absolute',
                        }}
                        color='secondary'
                        size={24}
                        thickness={4}
                    />
                )
            }

        </Box>
    )
}
