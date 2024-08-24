/* StoryInfo Info component on the Storyboard component
<div className={`${styles.Frame} mt-2`}>
<iframe title="Storyboard" src={template1} className={appStyles.iframeFull}
    alt="Storyboard"  />
</div>
*/
   import React from "react";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   
   const StoryInfo = () => {
     return (
       <div>
       <Row className="mb-3 mt-3">
         <Col className="d-none d-md-block" md={1}></Col>     
         <Col xs={12} md={10} >
           <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
           <h5 className={`text-center`} >INFO</h5>  
           <p>
           Use the "Add/Change Storyboard" tab to upload Storyboard PDF files
           in the Upload Storyboard form.
           </p>
           <p>
           Use the "Download Template" tab to download a Storyboard template 
           from the two stock ones if one is needed.
           </p>
           <p>
           Use the "Add/Change URL" tab to add or change the Storyboard Video URL
           if one exists.
           </p>
            </div>
         </Col>
       </Row>
       </div>
     )
   }

export default StoryInfo