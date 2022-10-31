import React from 'react';



export default function LinksSection(prop){
    return(
            <a className='link-item' href={prop.href} id={prop.id} alt={prop.altText}>
                {prop.text}                
            </a>
    )
}