import React from 'react';

function contactItemImage ({imageUrl}) {
    return (
        <div className='contact-item_image'>
            <img src={imageUrl} alt='avatar'/>
        </div>
    )
}

export default contactItemImage;