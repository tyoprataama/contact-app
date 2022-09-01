import React from 'react';

function DeleteBtn({id, onDelete}) {
    return <button className='contact-item_delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteBtn;