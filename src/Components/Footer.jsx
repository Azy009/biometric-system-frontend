import React from 'react'

const Footer = () => {
  return (
<footer className="footer">
  <div className="container">
    <div className="row module-wrapper">
      <div className="col-md-3 col-sm-6">
        <div className="widget">
          <div className="widget-title">
            <h4>Recent posts</h4>
          </div>{/* end title */}
          <div className="recent-post-widget">
            <ul className="recent-posts">
              <li>
                <p><a href="blog-single-1.html" title>
                    {/* <img src="upload/blog_01.jpg" alt className="alignleft" /> */}
                    How to find best hair Care?</a></p>
                <span>12 May 2014</span>
              </li>
              <li>
                <p><a href="blog-single-1.html" title>
                    {/* <img src="upload/blog_02.jpg" alt className="alignleft" /> */}
                    What About Your Website?</a></p>
                <span>06 May 2014</span>
              </li>
            </ul>{/* end latest-tweet */}
          </div>{/* end twitter-widget */}
        </div>{/* end widget */}
      </div>{/* end col */}
      <div className="col-md-3 col-sm-6">
        <div className="widget">
          <div className="widget-title">
            <h4>Twitter Feed</h4>
          </div>{/* end widget */}
          <div className="twitter-widget">
            <ul className="latest-tweets">
              <li>
                <p><a href="#" title>@Market</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
                <span>2 hours ago</span>
              </li>
              <li>
                <p><a href="#" title>@Website</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
                <span>2 hours ago</span>
              </li>
            </ul>{/* end latest-tweet */}
          </div>
        </div>{/* end widget */}
      </div>{/* end col */}
      <div className="col-md-3 col-sm-6">
        <div className="widget">
          <div className="widget-title">
            <h4>Contact Details</h4>
          </div>
          <ul className="site-links">
            <li><i className="fa fa-link" /> Webmasteryazy.netlify.com</li>
            <li><i className="fa fa-envelope" /> info@yoursite.com</li>
            <li><i className="fa fa-phone" /> +91 8483945965</li>
            <li><i className="fa fa-fax" /> +91 4856679888</li>
            <li><i className="fa fa-home" /> re-45 s4-block Jai Park</li>
          </ul>
        </div>{/* end widget */}
      </div>{/* end col */}
      <div className="col-md-3 col-sm-6">
        <div className="widget">
          <div className="widget-title">
            <h4>Useful Links</h4>
          </div>
          <ul className="site-links">
            <li><a href="index-2.html">Default Version</a></li>
            <li><a href="index-boxed.html">Boxed Version</a></li>
            <li><a href="team.html">Our Team Members</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="contact.html">Get In Touch</a></li>
          </ul>
        </div>{/* end widget */}
      </div>{/* end col */}
    </div>{/* end row */}
  </div>
</footer>

  )
}

export default Footer