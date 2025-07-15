/* Component in the Edit to display and edit the Callsheet Background 
 * Contains the Background component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import Background from './Background';
import BackgroundAddBG from './BackgroundAddBG';

const BgPageAddBG = (props) => {
    const {background, handleMount} = props;

  return (
    <div className='mt-3'>
        {/* MEDIUM */}
        <div className='d-none d-md-block'>
        {/* titles */}
        <Row >
        <Col md={6}>
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
            <p className='mb-0'>Type</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Info</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Edit</p>
            </Col>
        </Row>
        </Col>
        <Col md={6}>
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                <p className='mb-0'>Type</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'></p>
                </Col>
        </Row> 
        </Col>
        </Row>
        {/* items  */}
        <Row>
            {background.results.length ? (
                background.results.map((back, index) => (
                    <Col md={6} >
                    <BackgroundAddBG
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...back}
                        handleMount={handleMount}
                        back={back} 
                        key={back.id} />
                    </Col>
                ))) : ("")}
        </Row>
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
        {/* titles */}
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
            <p className='mb-0'>Type</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Info</p>
            </Col>
        </Row>
        {/* items background */}
        <Row>
            {background.results.length ? (
                background.results.map((back, index) => (
                    <Col md={12} >
                    <BackgroundAddBG
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...back}
                        back={back} 
                        key={back.id} />
                    </Col>
                ))) : ("")}
        </Row>
        </div>
    </div>
  )
}

export default BgPageAddBG