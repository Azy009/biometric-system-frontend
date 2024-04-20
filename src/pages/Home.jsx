import React from "react";
import Header from "../Components/Header";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.avif";
import img8 from "../images/img8.webp";
import img9 from "../images/img9.jpg";
import img11 from "../images/img11.webp";
import img12 from "../images/img12.webp";
import img13 from "../images/img13.jpg";
import img14 from "../images/img4.webp";
import img15 from "../images/img15.webp";
import Footer from "../Components/Footer";
const Home = () => {

  return (
    <div>
      <Header />
      <section
        className="sale-banenr banner-style2 design2 "
        style={{ marginBottom: "10px" }}
      >

        <div style={{margin:"18px 32px",display:'flex',gap:'12px',flexWrap:'wrap'}}>
          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img5} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Pink Grapefruit Shower Gel Sabina</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 800 MRP<span style={{textDecoration:'line-through'}}> 1000</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>


          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img6} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Strawberry Shower Gel</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 700 MRP<span style={{textDecoration:'line-through'}}> 900</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img7} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Shea Shower Cream</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 800 MRP<span style={{textDecoration:'line-through'}}> 1200</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img9} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>British Rose Shower Gel</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 900 MRP<span style={{textDecoration:'line-through'}}> 1500</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img8} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Shea Body Butter</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 500 MRP<span style={{textDecoration:'line-through'}}> 1000</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img11} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Tea Tree Oil</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 500 MRP<span style={{textDecoration:'line-through'}}> 700</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img12} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Blissful Strawberry EDT</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 850 MRP<span style={{textDecoration:'line-through'}}> 1400</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img13} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Skin-loving Multitasking</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 800 MRP<span style={{textDecoration:'line-through'}}> 1000</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img14} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Loyalty Club</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 900 MRP<span style={{textDecoration:'line-through'}}> 1000</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>

          <div className="card border around" style={{ width: "18rem",border:'1px solid rgba(0,0,0,0.2)',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',borderRadius:"4px" }}>
            <img src={img15} style={{width:"100%",height:'250px'}} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{fontWeight:'600',textAlign:'center',padding:'0px',color:'#333'}}>Head to Cream</h5>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text" style={{padding:'2px 12px',lineHeight:'20px',textAlign:'center',fontWeight:'700',color:"#333"}}>
              Rs. 830 MRP<span style={{textDecoration:'line-through'}}> 1000</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',padding:'8px'}}>
              <a href="#" className="btn btn-primary" style={{fontWeight:'600'}}>
                Add To Cart
              </a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
