import * as React from 'react';
import Grow from '@material-ui/core/Grow';
import { TransitionGroup } from 'react-transition-group';


export default function GrowTransition({ children }) {

    const childrenList = [
        ...children
    ]

    return (
        <TransitionGroup>
            {childrenList.map((item, index) => (
                <Grow  key={index} timeout={300}>
                    {item}
                </Grow>
            ))}
        </TransitionGroup>
    );
}
