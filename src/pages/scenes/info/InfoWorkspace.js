/* Info component on the Scene Component
   for the Workspace Guide */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const InfoWorkspace = ({setShowWorkInfo}) => {
  return (
    <div>
      <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`px-3 py-2 ${styles.SubTitle6 }`}> 
        <div className={`mt-0 pb-2 `}>
            <span className={`float-right ${styles.Close }`} 
            onClick={() => setShowWorkInfo(false) } >Close</span> 
            <p className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >Instructions </p>
            </div>
            <p>
            1. Collaborate on the Scene by Department using the 
            "Requirements", "Workspace" and "Finals" categories.</p>
            <p className="pt-2">2. Use "Requirements" to inform
           what is needed then collaborate in the "Workspace".</p>
           <p className="pt-2">3. "Finals" is the used to contain the the final choices.
            </p>
            <p className="pt-2">
                4. The Universal Department can be used for all Scene worked or in conjunction with one or a number of departments.
            </p>
            <p className="pt-2">5. Use the Workspace Guide to indicate which
                Departments will be worked on for this Scene.</p>
            <p className="pt-2">
            6. Ideally, when Locations, Characters and Props first appear in the Script
            they should be collaborated on in the Scene and Department Workspace
            where they occur. Moodboards work in conjunction with the Workspace to aid this.
            </p>
            <p className="pt-2">
            7. The "Posts by Department" section on the "Quick Find Posts" page is designed to enable
            precise and quick work by Department in the Scenes Workspace.<br/>
            It can also be used to check in which Scenes departments have Requirements.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoWorkspace