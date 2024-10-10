import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter({text}) {
    return (
        <TypeAnimation
            sequence={[text,3000,"Android Developer",3000,""]}
            repeat={Infinity}
            style={
                {
                    whiteSpace:"pre-line",
                    display:'block',
                }
            }
        />
        
    )
}
