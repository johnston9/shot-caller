import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Button } from 'react-bootstrap';
import TopBox from '../../components/TopBox';
import { PostDropdown } from '../../components/PostDropdown';
import ScheduleCharacters from './ScheduleCharacters';

const ScheduleScene = (props) => {
    useRedirect("loggedOut");
    const history = useHistory();
    const [show, setShow] = useState(false);
    const {day_id, day, id, day_order_number, date, number, 
        act, title, int_ext, start_time, end_time, content, location,
        filming_location, day_night, time, action, info,
        character1, character1_costume, character2, 
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10,
        character10_costume, character11, character11_costume, character12,
        character12_costume, character1_calltime, character1_pickup,
        character2_calltime, character2_pickup, character3_calltime,
        character3_pickup, character4_calltime, character4_pickup,
        character5_calltime, character5_pickup, character6_calltime, 
        character6_pickup, character7_calltime, character7_pickup,
        character8_calltime, character8_pickup, character9_calltime, 
        character9_pickup, character10_calltime, character10_pickup,
        character11_calltime, character11_pickup, character12_calltime, 
        character12_pickup, other_characters, other_characters_costumes,
        background_artists, background_artists_costumes,
        other_characters_calltimes, other_characters_pickups,
        background_artists_calltimes, background_artists_pickups,
        new_info, new_content, } = props

        const handleEdit = () => {
            history.push(`/schedule/scenes/edit/${id}/`);
          };
        
          const handleDelete = async () => {
            try {
              await axiosReq.delete(`/schedule/scenes/${id}/`);
              history.goBack();
            //   history.push(`/days/${day_id}/`);
            } catch (err) {
              // console.log(err);
            }
          };

    return (
        <div className={`mt-4 p-3 ${styles.SceneBox}`} >
            <Row className='mb-2'>
                <Col className='mx-0 px-0' xs={1}></Col>
                <Col className='text-center mx-0 px-0' xs={10}>
                <p>Day Id {day_id} - Day {day} - Date {date} Scene Id {id} </p>
                </Col>
                <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Day Order {day_order_number} - Start {start_time} End {end_time} - Filming Location {filming_location}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Act {act} - Scene {number} Location {location} - {int_ext} {day_night} {time}</p>
                <p>Heading {title} - Action {action}</p>
                <p>Info {info}</p>
                <p>Content {content}</p>
                <p>New Content  {new_content} </p>
                </Col>
            </Row>
            {/* characters */}
            <Row className='my-3'>
                    <Col className="text-center">
                        <Button onClick={() => setShow(show => !show)} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                        Characters
                        </Button>
                    </Col>
            </Row>
            <Row>
                <Col>
                    {!show ?("") : (
                    <ScheduleCharacters
                    character1={character1} character1_costume={character1_costume}
                    character1_calltime={character1_calltime} character1_pickup={character1_pickup}
                    character2={character2} character2_costume={character2_costume}
                    character2_calltime={character2_calltime} character2_pickup={character2_pickup}
                    character3={character3} character3_costume={character3_costume}
                    character3_calltime={character3_calltime} character3_pickup={character3_pickup}
                    character4={character4} character4_costume={character4_costume}
                    character4_calltime={character4_calltime} character4_pickup={character4_pickup}
                    character5={character5} character5_costume={character5_costume}
                    character5_calltime={character5_calltime} character5_pickup={character5_pickup}
                    character6={character6} character6_costume={character6_costume}
                    character6_calltime={character6_calltime} character6_pickup={character6_pickup}
                    character7={character7} character7_costume={character7_costume}
                    character7_calltime={character7_calltime} character7_pickup={character7_pickup}
                    character8={character8} character8_costume={character8_costume}
                    character8_calltime={character8_calltime} character8_pickup={character8_pickup}
                    character9={character1} character9_costume={character9_costume}
                    character9_calltime={character9_calltime} character9_pickup={character9_pickup}
                    character10={character10} character10_costume={character10_costume}
                    character10_calltime={character10_calltime} character10_pickup={character10_pickup}
                    character11={character11} character11_costume={character11_costume}
                    character11_calltime={character11_calltime} character11_pickup={character11_pickup}
                    character12={character12} character12_costume={character12_costume}
                    character12_calltime={character12_calltime} character12_pickup={character12_pickup}
                    other_characters={other_characters} other_characters_costumes={other_characters_costumes}
                    other_characters_calltimes={other_characters_calltimes} other_characters_pickups={other_characters_pickups}
                    background_artists={background_artists} background_artists_costumes={background_artists_costumes}
                    background_artists_calltimes={background_artists_calltimes} background_artists_pickups={background_artists_pickups}
                    /> 
                    ) }
                    </Col>
                </Row>
            <Row>
                <Col>
                <p>Next: {new_info} </p>
                </Col>
            </Row>      
        </div>
    )
}

export default ScheduleScene
