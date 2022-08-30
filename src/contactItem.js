import React from 'react';
import contactItemBody from './contactItemBody';
import contactItemImage from './contactItemImage';

function contactItem ({imageUrl, name, tag}) {
    return (
        <div className='contact-item'>
            <contactItemImage imageUrl={imageUrl}/>
            <contactItemBody name={name} tag={tag}/>
        </div>
    );
}

export default contactItem;