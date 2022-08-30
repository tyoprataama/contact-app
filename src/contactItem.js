import React from 'react';
import contactItemImage from './contactItemImage';
import contactItemBody from './contactItemBody';

function contactItem ({imageUrl, name, tag}) {
    return (
        <div className='contact-item'>
            <contactItemImage imageUrl={imageUrl}/>
            <contactItemBody name={name} tag={tag}/>
        </div>
    );
}

export default contactItem;