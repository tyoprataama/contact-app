import React from 'react';
import contactItem from './contactItem';

function contactList ({contacts}) {
    return (
        <div className='contact-list'>
            {
                contacts.map((contact) => (
                    <contactItem key={contact.id} {...contact}/>
                ))
            }
        </div>
    )
}

export default contactList;