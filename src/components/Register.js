import React from "react";

function Register() {
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
          <form>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
                <form className="main_form">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label for="name">Name:</label>
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
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
                        id="address"
                      ></textarea>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label for="city">City:</label>
                      <select className="form-control" id="city" name="city">
                        <option>Select City</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="gender">Gender:</label>
                      <label>Male</label>
                      <input type="radio" name="gender" value="male" />
                      &nbsp;&nbsp;
                      <label>Female</label>
                      <input type="radio" name="gender" value="female" />
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
          </form>
        </div>
      </div>
      {/* <!-- end map --> */}
    </>
  );
}

export default Register;
