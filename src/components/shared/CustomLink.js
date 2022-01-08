import React from 'react'
import NextLink from 'next/link'
import { Link as MUILink } from '@material-ui/core';

{/** It's a Link component of material-UI that wraps around the Link component of nextjs
    Props: material-ui Link component props
    **/}
export default function CustomLink({ href, children, ...rest }) {
    return (
        <NextLink href={href?href:'/'} passHref>
            <MUILink color='inherit' variant="body2" {...rest}>{children}</MUILink>
        </NextLink>

    )
}


