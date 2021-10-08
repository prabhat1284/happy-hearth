import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/webapi/usersignup", user).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Register Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- map --> */}
      <div className="contact">
        <div className="container-fluid padddd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
              <form className="main_form" onSubmit={onRegister}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="name">Name:</label>
                    <input
                      className="form-control"
                      placeholder="Name"
                      type="text"
                      value={user.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="email">Email:</label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      type="text"
                      value={user.username}
                      onChange={handleChange}
                      name="username"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="password">Password:</label>
                    <input
                      className="form-control"
                      placeholder="password"
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={handleChange}
                      name="password"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="phone">Mobile Number:</label>
                    <input
                      className="form-control"
                      placeholder="Phone"
                      id="phone"
                      type="number"
                      value={user.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="address">Address:</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={user.address}
                      onChange={handleChange}
                      id="address"
                    ></textarea>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="city">City:</label>
                    <select
                      id="city"
                      value={user.city}
                      onChange={handleChange}
                      name="city"
                    >
                      <option>Select City</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                    </select>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="gender">Gender:</label>
                    <select
                      id="gender"
                      value={user.gender}
                      onChange={handleChange}
                      name="gender"
                    >
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="send">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end map --> */}
    </>
  );
}

export default Register;
