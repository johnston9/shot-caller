import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router';
import { useRedirect } from '../../hooks/Redirect';
import { Button } from 'react-bootstrap';
import { PostDropdown } from '../../components/PostDropdown';
import ScheduleCharacters from './ScheduleCharacters';
import SchedSceneInfo from './SchedSceneInfo';

const ScheduleScene = (props) => {
    useRedirect("loggedOut");
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {sceneAll, id, number, int_ext, start_time, end_time,
        location, filming_location, day_night, action, pages,
        new_info, style } = props

        const handleEdit = () => {
            history.push(`/schedule/scenes/edit/${id}/`);
          };
        
          const handleDelete = async () => {
            try {
              await axiosReq.delete(`/schedule/scenes/${id}/`);
              history.goBack();
            } catch (err) {
            }
          };

    return (
        <div style={style} className={`px-4 pt-3  ${styles.Bold}`} > 
            <Row  >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Bright}`}>
                        Info
                    </Button>
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{start_time}</p>
                    <p className='mb-0'>{end_time}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{day_night}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
                {/* cast */}
                <Col xs={1} md={1} className="mx-0 px-0">
                    <Button onClick={() => setShow(show => !show)} 
                    className={`${btnStyles.Button} ${btnStyles.Bright}`}>
                    Cast
                    </Button>
                </Col>
                {/* edit */}
                <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Order}`}>
                        Order
                    </Button>
                    <PostDropdown
                        className={`${styles.Drop }`}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            {/* cast */}
                    {!show ?("") : (                       
                    <ScheduleCharacters {...sceneAll}
                    // character1={character1} character1_costume={character1_costume}
                    // character1_calltime={character1_calltime} character1_pickup={character1_pickup}
                    // character2={character2} character2_costume={character2_costume}
                    // character2_calltime={character2_calltime} character2_pickup={character2_pickup}
                    // character3={character3} character3_costume={character3_costume}
                    // character3_calltime={character3_calltime} character3_pickup={character3_pickup}
                    // character4={character4} character4_costume={character4_costume}
                    // character4_calltime={character4_calltime} character4_pickup={character4_pickup}
                    // character5={character5} character5_costume={character5_costume}
                    // character5_calltime={character5_calltime} character5_pickup={character5_pickup}
                    // character6={character6} character6_costume={character6_costume}
                    // character6_calltime={character6_calltime} character6_pickup={character6_pickup}
                    // character7={character7} character7_costume={character7_costume}
                    // character7_calltime={character7_calltime} character7_pickup={character7_pickup}
                    // character8={character8} character8_costume={character8_costume}
                    // character8_calltime={character8_calltime} character8_pickup={character8_pickup}
                    // character9={character9} character9_costume={character9_costume}
                    // character9_calltime={character9_calltime} character9_pickup={character9_pickup}
                    // character10={character10} character10_costume={character10_costume}
                    // character10_calltime={character10_calltime} character10_pickup={character10_pickup}
                    // character11={character11} character11_costume={character11_costume}
                    // character11_calltime={character11_calltime} character11_pickup={character11_pickup}
                    // character12={character12} character12_costume={character12_costume}
                    // character12_calltime={character12_calltime} character12_pickup={character12_pickup}
                    // other_characters={other_characters} other_characters_costumes={other_characters_costumes}
                    // other_characters_calltimes={other_characters_calltimes} other_characters_pickups={other_characters_pickups}
                    // background_artists={background_artists} background_artists_costumes={background_artists_costumes}
                    // background_artists_calltimes={background_artists_calltimes} background_artists_pickups={background_artists_pickups}
                    /> 
                    ) }
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <SchedSceneInfo {...sceneAll}/> 
                    ) }
                    </Col>
                </Row>
                {/* next */}
                {new_info ? (
                    <Row>
                    <Col className={`mb-0 mt-4 py-2 ${styles.Next1}`}>
                    <p className="mb-0" >Next: {new_info} </p>
                    </Col>
                </Row> 
                ) : ("") }     
        </div>
    )
}

export default ScheduleScene
