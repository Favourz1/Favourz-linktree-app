import React from 'react';



export default function LinksSection(prop){
    return(
            <a className='links-section-wrapper' href={prop.href} id={prop.id}>
                {prop.text}                
            </a>
    )
}