import React, { useState} from "react"
import postData from '../../dispatcher/postData'
import "../../css/contactForm.css"

let ContactForm = () => {
    let [data, setData] = useState({})
    let [res, setRes] = useState()
    let handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    let handleSubmit = (e) => {
        
        //postData dispatcher is called to create doc db
        postData(data, 'contactForm', setRes)
        e.preventDefault()
        setData({ email: '', msg: '' })
    }
    return (
        <form id="contactForm" onSubmit={handleSubmit} >
            <label>Email<br /><input type='email' name='email' placeholder='xyz@gmail.com' onChange={handleChange} value={data.email} /></label><br /><br />
            <label>Message<br /><textarea name='msg' placeholder='share your feedback, suggestion & comments' onChange={handleChange} value={data.msg} /></label><br />
            <input type='submit' value='Submit' /><label>{res}</label>
        </form>
    )
}

export default ContactForm