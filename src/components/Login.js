import React from "react";

function Login() {
  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Login Here</h2>
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
                {/* <font color="red">{{msg}}</font> */}
                <form className="main_form">
                  <div className="row">
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
                      <label for="email">Password:</label>
                      <input
                        className="form-control"
                        placeholder="password"
                        id="password"
                        type="password"
                        name="password"
                      />
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
    </>
  );
}

export default Login;
