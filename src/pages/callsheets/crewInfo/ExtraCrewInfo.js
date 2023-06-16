/* Form component to add extra crew members by department 
   These won't be on the Callsheet*/
   import React, { useEffect, useState } from "react";
   import Form from "react-bootstrap/Form";
   import Button from "react-bootstrap/Button";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../styles/Callsheets.module.css";
   import btnStyles from "../../styles/Button.module.css";
   import Alert from "react-bootstrap/Alert";
   import DropdownButton from 'react-bootstrap/DropdownButton'
   import { axiosReq } from "../../api/axiosDefaults";
   import { useCharactersContext } from "../../contexts/Scene_chars_locs";
   import { Dropdown } from "react-bootstrap";

const ExtraCrewInfo = () => {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        name: "",
        position: "",
        departments: "",
        email: "",
        phone: "",
    });

    const { 
        name,
        position,
        departments,
        email,
        phone,
    } = postData;

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

      const clear = () => {
        /* Function to clear Character values */
        setPostData({cast_number: "",
        name: "",
        position: "",
        departments: "",
        email: "",
        phone: "",
      })
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
  
        const formData = new FormData();
    
        formData.append("name", name);
        formData.append("position", position);
        formData.append("departments", departments);
        formData.append("email", email);
        formData.append("phone", phone);
      
        try {
          const {data} = await axiosReq.post("/extracrewinfo/", formData);
          console.log(data);
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }

      const buttons = (
        <div className="mb-2 text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
            onClick={clear}
          >
            Cancel
          </Button>
          <Button className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Add Cast
          </Button>
        </div>
      );

  return (
    <div>ExtraCrewInfo</div>
  )
}

export default ExtraCrewInfo