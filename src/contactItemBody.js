import React from 'react';

function contactItemBody ({name, tag}) {
    return (
        <div className='contact-item_body'>
            <h3 className='contact-item_title'>{name}</h3>
            <p className='contact-item_username'>@{tag}</p>
        </div>
    );
}

export default contactItemBody;