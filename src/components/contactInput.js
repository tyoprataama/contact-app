import React from 'react';

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: '',
        }
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    }
    onNameChangeHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        })
    }
    onTagChangeHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value,
            }
        })
    }
    render() {
        return(
            <form className='contact-input'>
                <input type='text' placeholder='Nama'/>
                <input type='text' placeholder='Tag'/>
                <button type='submit'>Tambah</button>
            </form>
        )
    }
}
export default ContactInput;