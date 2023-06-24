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
        admin,
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
            <Row className='text-center' >
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfoP} `}>{position1}</p>
                </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} `}>{name1} </p>
                </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} `}>{email1}</p>
                </Col>
                {admin ? (
                    <>
                    <Col xs={4} md={2} >
                    <p className={`${styles.CrewInfop} `}>{phone1}</p>
                    </Col>
                    <Col className={`mx-0 px-0 `} xs={2} md={1}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </>
                ) : (
                    <Col xs={6} md={3} >
                    <p className={`${styles.CrewInfop} `}>{phone1}</p>
                    </Col>
                ) }
              </Row>
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
           </div>
       )
   }

export default ExtraCrewMember