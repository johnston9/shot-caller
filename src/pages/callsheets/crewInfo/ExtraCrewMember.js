/* Component in the ExtraCrewInfo Component to display the  
   Crew member's details  */
   import React, { useState } from 'react';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   import { PostDropdown } from '../../../components/PostDropdown';
   import { axiosReq } from '../../../api/axiosDefaults';
   import EditExtraCrewMem from './EditExtraCrewMem';
   
   const ExtraCrewMember = (props) => {
       const [showEdit, setShowEdit] = useState(false);
   
       const { 
        handleMount,
        id,
        name,
        position,
        email,
        phone,         
         } = props
   
       const [crewNew, setCrewNew] = useState({
            id1: id,
            name1: name,
            position1: position,
            email1: email,
            phone1: phone,
       });
   
       const { 
        name1,
        position1,
        email1,
        phone1,
         } = crewNew;
   
       const handleEdit = () => {
           setShowEdit(showEdit => !showEdit)
         };
       
       const handleDelete = async () => {
           try {
               await axiosReq.delete(`/extracrewinfo/${id}/`);
               handleMount();
           } catch (err) {
           }
       };
   
       return (
           <div > 
            {/* desktop */}
            <div className='d-none d-lg-block'>
            <Row className='text-center' >
                <Col xs={12} md={3} >
                  <p className={`${styles.CrewInfoP} `}>{position1}</p>
                </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} `}>{name1} </p>
                </Col>
                <Col xs={6} md={2} >
                    <p className={`${styles.CrewInfop} `}>{phone1}</p>
                    </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} text-center `}>{email1}</p>
                </Col>
                <Col className={`mx-0 px-0 `} md={1}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            </div>
            {/* mobile */}
            <div className='d-block d-lg-none'>
            <Row className='text-center' >
                <Col xs={2} ></Col>
                <Col xs={8} >
                  <p className={`${styles.CrewInfoP} `}>{position1}</p>
                </Col>
                <Col xs={2} className='px-0 mx-0' >
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={6} >
                  <p className={`${styles.CrewInfop} `}>{name1} </p>
                </Col>
                <Col xs={6} >
                    <p className={`${styles.CrewInfop} `}>{phone1}</p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12} >
                  <p className={`${styles.CrewInfop}`}>{email1}</p>
                </Col>
            </Row>
            </div>
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditExtraCrewMem
                    setCrewNew={setCrewNew}
                    setShowEdit={setShowEdit}
                    {...crewNew}/> 
                    ) }
                </Col>
            </Row>  
            {/* hr */}
            <Row>
            <Col className='mx-md-5'>
            <hr/>
            </Col>
            </Row>
           </div>
       )
   }

export default ExtraCrewMember