import React, { useState } from "react";

const Contact = () => {

  const [data,setData]=useState({
    fullname:"",
    Email:"",
    passwd:"",
    mobile:"",
    msg:""
  });

  const inputEvent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      }
    })

  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(` Your name is ${data.fullname}.Your Mobile number is ${data.mobile}.Your email is ${data.Email} and your password is ${data.passwd}. Here is what you want to say ${data.msg}`)
  }
  return (
    <>
      <div className="my-5">
        <h3 className="text-center">Contact us</h3>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-1">
                <label for="exampleInputnm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your Name"
                  required="true"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  placeholder="name@Example.com"
                  required="true"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputpass"
                  aria-describedby="emailHelp"
                  name="passwd"
                  value={data.passwd}
                  onChange={inputEvent}
                  placeholder="Enter the password"
                  required="true"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputMobile" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputmob"
                  aria-describedby="emailHelp"
                  name="mobile"
                  value={data.mobile}
                  onChange={inputEvent}
                  placeholder="Enter your mobile number"
                  required="true"
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputMsg" class="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputmsg"
                  aria-describedby="emailHelp"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  placeholder="Enter your message"
                  required="true"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
