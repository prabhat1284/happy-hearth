import React from "react";

function Home() {
  return (
    <>
      <section className="slider_section">
        <div className="banner_main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mapimg">
                <div className="text-bg">
                  <h1>
                    The latest <br />{" "}
                    <strong className="black_bold">furniture Design</strong>
                    <br />
                  </h1>
                  <a href="/">
                    Shop Now <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="text-img">
                  <figure>
                    <img src="/images/bg.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- discount --> */}
      <div className="container">
        <div
          id="myCarousel"
          className="carousel slide banner_Client"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption text">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong className="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption text">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong className="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption text">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong className="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end discount --> */}

      {/* <!-- trending --> */}
      <div className="trending">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>
                  Trending <strong className="black">Categories</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margitop">
              <div className="trending-box">
                <figure>
                  <img src="/images/1.jpg" alt="" />
                </figure>
                <h3>Outdoor</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="trending-box">
                <figure>
                  <img src="/images/2.jpg" alt="" />
                </figure>
                <h3>Living Room</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margitop">
              <div className="trending-box">
                <figure>
                  <img src="/images/3.jpg" alt="" />
                </figure>
                <h3>Bedroom Lighting</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end trending --> */}

      {/* <!-- our brand --> */}
      <div className="brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>
                  Featured <strong className="black">Brands</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="brand-bg">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
              <div className="brand-box">
                <i>
                  <img src="/icon/p1.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
              <div className="brand-box">
                <i>
                  <img src="/icon/p2.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="brand-box">
                <i>
                  <img src="/icon/p3.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="brand-box">
                <i>
                  <img src="/icon/p4.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end our brand --> */}
    </>
  );
}

export default Home;
