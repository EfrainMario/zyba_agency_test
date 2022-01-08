import React from 'react'
import Box from '@material-ui/core/Box';
import CustomLink from '../../shared/CustomLink';


{/** The information that will be presented in the final component
    Props: Material-UI Button props +
        title (string): section title
        subtitles (string): each item in the section
    **/}
export default function FooterInfo({ title, subtitles }) {


    return (
        <Box mb={3}>
            {
                title && (
                    <Box fontSize={'subtitle2.fontSize'} fontWeight={'bold'} mb={2}>
                        {title}
                    </Box>
                )
            }

            {
                subtitles.map((text, index) => (
                    <Box key={index} mb={!!title ? undefined : .6}>
                        <CustomLink href="/" color="inherit" variant={!!title ? 'caption' : 'subtitle2'}
                            style={{ fontWeight: !!title ? undefined : 'bold', }}>
                            {text}
                        </CustomLink>
                    </Box>
                ))
            }
        </Box>
    )
}
