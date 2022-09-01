import React from 'react';
import ContactItemBody from './contactItemBody';
import ContactItemImage from './contactItemImage';
import DeleteBtn from './deleteBtn';

function ContactItem ({ imageUrl, name, tag, id, onDelete }) {
    return (
        <div className='contact-item'>
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
            <DeleteBtn id={id} onDelete={onDelete} />
        </div>
    );
}

export default ContactItem;