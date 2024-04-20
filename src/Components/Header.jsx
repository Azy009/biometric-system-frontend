import React, { useEffect } from 'react'
import { gettoken, removeToken } from '../Localstorage/Store'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nvg = useNavigate()

  const tokenvalue = gettoken();
  useEffect(()=>{
    if(!tokenvalue){
  nvg('/login');
    }
  },[])
const remove = () =>{
  removeToken();
  nvg('/login')
}
  return (
<header className="header">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-12">
        <nav className="navbar yamm navbar-default">
          <div className="container-full">
            <div className="navbar-table">
              <div className="navbar-cell">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/" style={{color:'#0d9276',fontWeight:'700',fontSize:'29px',textWrap:'nowrap'}}>
                    {/* <img src="images/logo.png" alt="Ova" /> */}
                    FutureCart
                    </a>
                  <div>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="fa fa-bars" />
                    </button>
                  </div>
                </div>{/* end navbar-header */}
              </div>{/* end navbar-cell */}
              <div className="navbar-cell stretch">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                  <div className="navbar-cell">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="dropdown yamm-fw"><a href="#" data-toggle="dropdown" className="dropdown-toggle active">Home <b className="fa fa-angle-down" /></a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="yamm-content clearfix">
                              <div className="row-fluid">
                                <div className="col-md-3 col-sm-6">
                                  <p>Homepages</p>
                                  <ul>
                                    <li><a href="">Home Page 1</a></li>
                                    <li><a href="">Home Page 2</a></li>
                                    <li><a href="">Home Page 3</a></li>
                                    <li><a href="">Home Page 4</a></li>
                                    <li><a href="">Home Page 5</a></li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <p>Categories</p>
                                  <ul>
                                    <li><a href="">Home Care</a></li>
                                    <li><a href="">Sun Care</a></li>
                                    <li><a href="">Face Care</a></li>
                                    <li><a href="">Body Care</a></li>
                                    <li><a href="">Lip Care</a></li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <p>Blog Content</p>
                                  <ul>
                                    <li><a href="">Latest Content</a></li>
                                    <li><a href="">Trending Content</a></li>
                                    <li><a href="">Old Content</a></li>
                                    {/* <li><a href="gallery-4.html">Gallery Version Four</a></li>
                                    <li><a href="gallery-5.html">Gallery Version Masonry</a></li> */}
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <p>Subscribe Now</p>
                                  <div className="well">
                                    <form method="post">
                                      <input className="form-control" name="name" placeholder="Full Name" type="text" /> 
                                      <input className="form-control" name="username" placeholder="Your Email" type="email" />
                                      <button className="btn btn-primary" type="submit">Subscribe</button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown has-submenu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Account <span className="fa fa-angle-down" /></a>
                        <ul className="dropdown-menu start-left" role="menu">
                         
                          <li><a href="/profile">Profile</a></li>
                          <li><a href="testimonials.html">Addresses</a></li>
                          <li><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Order <span className="fa fa-angle-right" /></a>
                            <ul className="dropdown-menu show-left" role="menu">
                              <li><a href="#">Pending Order</a></li>
                              <li><a href="#">Delivered Order</a></li>
                              <li><a href="#">Cancelled Order</a></li>
                            </ul>
                          </li>
                          <li><a style={{cursor:'pointer'}} onClick={()=>{remove()}}>Logout</a></li>
                        </ul>
                      </li>
                      {/* <li className="dropdown has-submenu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Shop <span className="fa fa-angle-down" /></a>
                        <ul className="dropdown-menu start-left" role="menu">
                          <li><a href="shop.html">Shop Sidebar</a></li>
                          <li><a href="shop-1.html">Shop Fullwidth</a></li>
                          <li><a href="shop-single.html">Shop Single Fullwidth</a></li>
                          <li><a href="shop-single-1.html">Shop Single Sidebar</a></li>
                          <li><a href="shop-checkout.html">Shop Checkout</a></li>
                          <li><a href="shop-cart.html">Shopping Cart</a></li>
                        </ul>
                      </li> */}
                      <li><a href="services.html">Categories</a></li>
                      <li><a href="pricing.html">Testimonial</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>{/* end navbar-cell */}
                </div>{/* /.navbar-collapse */}        
              </div>{/* end navbar cell */}
            </div>{/* end navbar-table */}
          </div>{/* end container fluid */}
        </nav>{/* end navbar */}
      </div>{/* end col */}
    </div>{/* end row */}
  </div>{/* end container */}
</header>



  )
}

export default Header