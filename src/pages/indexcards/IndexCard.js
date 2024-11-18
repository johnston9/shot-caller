/* Component in IndexCards to display each the Card */ 
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import styles from "../../styles/Indexes.module.css"; 
import IndexCardEdit from "./IndexCardEdit"; 

const IndexCard = (props ) => {
  const [showEdit, setShowEdit] = useState(false);
  const { setHasOrder, card, setIndexCards} = props;

  const {id, number, story, style} = card;

  const handleEdit = () => {
    setShowEdit(true);
      };
  
  const handleDelete = async () => {
  try {
      await axiosReq.delete(`/indexcards/${id}/`);
      setHasOrder(true);
  } catch (err) {
  }
  };
  return (
    <div>
      <Card className={`${styles.Card} text-center mr-1`}  >
        <Card.Header className={`pt-2 pb-0 ${styles.Top }`}>
          <Row >
            <Col className='mx-0 px-0' xs={1}></Col>
            <Col xs={10} className='mx-0 px-0 text-center'>
            <h5 className={` ${styles.Titlelist }`}>{number}
            </h5>
            </Col >
            <Col xs={1} className='text-center mx-0 px-0'>
            <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className='p-0' >
        <Row>
        <Col className='text-center mt-0' xs={12}>
            <div className={`${styles.DivSize } text-center px-1`}>
              {/* <Row>
              <Col xs={1} >
              <p className={`${styles.Title } mb-0 pb-0`}>S</p>
              <p className={`${styles.Title } mb-0 pb-0`}>t</p>
              <p className={`${styles.Title } mb-0 pb-0`}>o</p>
              <p className={`${styles.Title } mb-0 pb-0`}>r</p>
              <p className={`${styles.Title } mb-0 pb-0`}>y</p>
              </Col>
              <Col xs={11}>
              <p className={`mb-0 pb-0`}>{story} </p>
              </Col>
              </Row> */}
              <p className={`${styles.Title } mb-0 pb-0`}>Story</p>
              <p className={`mb-0 pb-0`}>{story} </p>
            </div>
            <hr className='my-0 py-0' />
            <div className={`${styles.DivSize } text-center px-1`}>
              <p className={`${styles.Title }`}>Style</p>
              <p className={`${styles.Italic } mb-0 pb-0`}>{style} </p>
            </div>
        </Col>
        </Row>
        </Card.Body>
      </Card>
      {!showEdit ?("") : (
      <IndexCardEdit
            setIndexCards={setIndexCards}
            card={card}
            number={number}
            id={id}
            setShowEdit={setShowEdit} 
            setHasOrder={setHasOrder} /> ) }
    </div>
  )
}

export default IndexCard