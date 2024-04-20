import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { gettoken } from "../Localstorage/Store";
import axios from "axios";
import { CaptureFinger } from "../mfs100";

const Profile = () => {
  const tokenvalue = gettoken();
  const [fname,setfname] = useState('')
  const [lname,setlname] = useState('')
  const [email,setemail] = useState('')
  const [number,setnumber] = useState('')
  const [fingerprint_img,setfingerprint_img] = useState('')
  const [fingerprint_key,setfingerprint_key] = useState('')
  const [userdata,setuserdata] = useState({})
  const [updateres,setupdateres] = useState(false)


const sumbitprofile = async() =>{
    const data = {
        first_name: fname,
        last_name: lname,
        email,
        mobile:number,
        fingerprint_key,
        fingerprint_img,
      };
        const response = await axios.patch(
          `http://localhost:8000/api/user/${tokenvalue[0]._id}`,
          data
        );
        console.log("resons", response);
        setupdateres(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);


}


const CaptureFingerPrint = () => {
    try {
      const client = new CaptureFinger();
      if (client.data.AnsiTemplate) {
        setfingerprint_key(client.data.AnsiTemplate);
        setfingerprint_img(client.data.BitmapData);
      } else {
        setfingerprint_key("");
        setfingerprint_img("");
      }
    } catch (error) {
      setfingerprint_key("");
      setfingerprint_img("");
    }
  };


  useEffect(() => {
    const userinfo = async () => {
      let url = `http://localhost:8000/api/user/${tokenvalue[0]._id}`;
      const response = await axios.get(url);
      console.log("user info", response);
      setuserdata(response.data.data)
      setfname(response.data.data.first_name)
      setlname(response.data.data.last_name)
      setemail(response.data.data.email)
      setnumber(response.data.data.mobile)
      setfingerprint_img(response.data.data.fingerprint_img)
      setfingerprint_key(response.data.data.fingerprint_key)
    };

    userinfo();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 70px",
            }}
          >
            <div className="form-group " style={{ width: "45%" }}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
                value={fname}
                onChange={(e)=>{setfname(e.target.value)}}
              />
            </div>
            <div
              className="form-group"
              style={{ width: "45%", marginTop: "0px" }}
            >
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Last Name"
                value={lname}
                onChange={(e)=>{setlname(e.target.value)}}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 70px",
            }}
          >
            <div className="form-group" style={{ width: "45%" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div
              className="form-group"
              style={{ width: "45%", marginTop: "0px" }}
            >
              <label htmlFor="number">Mobile No:</label>
              <input
                type="text"
                className="form-control"
                id="number"
                placeholder="Enter Number"
                value={number}
                onChange={(e)=>{setnumber(e.target.value)}}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 70px",
              border: "1px solid #e6e6e6",
            }}
          >
            <img src={`data:image/png;base64,${fingerprint_img}`} onClick={()=>{CaptureFingerPrint()}} alt="404" width="200px" height="220px" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 70px",
            }}
          >
            <button type="button" onClick={()=>{sumbitprofile()}} className="btn btn-primary">
              Submit
            </button>
          </div>
            <div
          class="alert alert-success"
          style={{
            color: "white",
            width: "90%",
            margin:'10px 70px',
            display: updateres == true ? "block" : "none",
          }}
          role="alert"
        >
          Update Profile Successfully
        </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
