import React, { useState } from "react";
import "../Styles/contactform.scss";
import { app } from "../Firebase";
import { getDatabase, ref, push, set } from "firebase/database";

function Contactform(props) {
    
   
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    education: "",
    taluka: "",
    district: "",
    message: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const contactRef = ref(db, "contacts");
    const newContactRef = push(contactRef);

    set(newContactRef, {
      name: formData.name,
      number: formData.number,
      education: formData.education,
      taluka: formData.taluka,
      district: formData.district,
      message: formData.message,
    }).then(() => {
      setFormData({
        name: "",
        number: "",
        education: "",
        taluka: "",
        district: "",
        message: "",
      });
      alert("Message submitted successfully!");
    }).catch((error) => {
      console.error("Error adding document: ", error);
      alert("An error occurred while submitting the message.");
    });
  };

  console.log(props.data)
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
        
    <div className="contact-form parent">
      <div className="contact-form-cont cont">
        <div className="conatct-tag">
          <h2>{data.form_h2}</h2>
        </div>
        <div className="form-section">
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder={data.form_name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <div className="number-edu">
              <input
                type="number"
                placeholder={data.form_number}
                value={formData.number}
                required
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
              <input
                type="text"
                placeholder={data.form_education} 
                value={formData.education}
                required
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              />
            </div>
            <div className="number-edu">
              <input
                type="text"
                placeholder={data.form_Taluka} 
                value={formData.taluka}
                required
                onChange={(e) => setFormData({ ...formData, taluka: e.target.value })}
              />
              <input
                type="text"
                placeholder={data.form_District}
                value={formData.district}
                required
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder={data.form_Message}
              value={formData.message}
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit" className="btn">{data.form_Submit}</button>
          </form>
        </div>
      </div>
    </div>

    </>
        );
      })}

      
    </>
    

  );
}

export default Contactform;
