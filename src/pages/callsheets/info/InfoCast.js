// import React from 'react';
// import { useRedirect } from '../../../hooks/Redirect';
// import { Col, Row } from 'react-bootstrap';
// import styles from "../../../styles/ScheduleCreate.module.css";

// const InfoCast = (props) => {
//     useRedirect("loggedOut");
//     const {other_characters, background_artists, action, day_night } = props 
//   return (
//     <div>
//       <Row className='mt-2 text-center px-0 mx-0'>
//       <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
//           <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>Action</p>
//           <p className='mb-0'>{action}</p>                        
//           </Col>
//           <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
//           <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>D / N</p>
//           <p className='mb-0'>{day_night}</p>                        
//           </Col>
//       </Row>
//       <Row className='mt-2 text-center px-0 mx-0'>
//       <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={12}>
//           <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>BG / Standins</p>
//           <p className='mb-0'>{background_artists}</p>                        
//           </Col>
//       </Row>
//       {other_characters && (
//         <Row className='mt-2 text-center px-0 mx-0'>
//         <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={12}>
//             <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>Other Characters</p>
//             <p className='mb-0'>{other_characters}</p>                        
//             </Col>
//         </Row>
//       ) }
//     </div>
//   )
// }

// export default InfoCast