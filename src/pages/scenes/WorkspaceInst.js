import React from 'react';
import styles from "../../styles/Scene.module.css";

const WorkspaceInst = ({}) => {
    return (
        <div className={`p-3 mb-3 ${styles.Instructions }`}>
            <h5 className='text-center'>Instructions</h5>
            <p>
                The Universal Workspace can be used to cover all work on the scene. It can also be
                used in conjunction with one or a number of departments. Or all work 
                can be done in departments. Use the Guide to indicate which.
            </p>
        </div>
    )
}

export default WorkspaceInst
