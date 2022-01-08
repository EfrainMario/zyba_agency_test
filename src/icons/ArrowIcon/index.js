import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'


export default function ArrowIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg width={52/5} height={20/5} viewBox="0 0 52 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 2L26 18L2 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    )
}
