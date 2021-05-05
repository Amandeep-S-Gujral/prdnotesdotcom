import React, { useState } from "react"
import postData from '../../dispatcher/postData'

let SectionOne = () => {
  let [data, setData] = useState({})
  let [res, setRes] = useState()

  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  let handleClick = () => {
    setRes('')
    if (data.email !== undefined) {
      let sendData = { ...data, subscribe: true }

      //post data dispatcher is called to create doc db
      postData(sendData, 'subscriber', setRes)
      setData({ email: '' })
    }
  }
  return (
    <div className="sec" id="sec1">
      <div >
        <h1>Compile and share product knowledge</h1>
        <p>
          We compile and share knowledge on the domain of product management spread across internet for you.
          </p>
        <input id='subEmail' type='email' name='email' placeholder='Email address e.g. xyz@gmail.com' onChange={handleChange} value={data.email} /><br /><label>{res}</label><br />
        <button id="subBtn" onClick={handleClick}>
          Get access to <br />latest content on<br /> Product Management <br /><span id="subNow">Subscribe Now!</span>
        </button><br />

      </div>
      <img
        src="https://ik.imagekit.io/prdnotes/Landing_page/Asset_6.png"
        alt="product management illustration by prdnotes.com"
      />
    </div>
  )
}

export default SectionOne