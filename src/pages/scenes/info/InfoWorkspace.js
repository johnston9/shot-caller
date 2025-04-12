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
        <div className={`px-3 pt-1 ${styles.SubTitle2 }`}> 
        <div className={`mt-0 pb-2 `}>
            <span className={`float-right ${styles.Close }`} 
            onClick={() => setShowWorkInfo(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >Instructions </h5>
            </div>
            <p>
            1. Collaborate on the Scene by department in one of three categories, 
            "Requirements", "Workspace" and "Finals".</p>
            <p>2. Ideally the Director and their assistants will use the "Requirements" category to
            show what is needed then collaborate with the department heads and their assistants in the "Workspace".</p>
           <p>3. The "Finals" is the used to contain the the final outcome and choices.
            </p>
            <p>4. Use the Workspace Guide to indicate which
                Departments Workspaces will be used for this Scene.
                The Universal Workspace can be used for all work on the scene, including the 
                "Requirements" and "Finals", or in conjunction with one or a number of departments.
            </p>
            <p>
            5. Also ideally any Location, Character or Prop in the production encounter for
            the first time in the Script should be collaborated on in the Scene and Department
            where it occurs.
            </p>
            <p>
            Department heads can use the "Quick Find Posts" page to quickly find their department posts
            the "Requirements" ones being returned in Scene order.
            </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoWorkspace