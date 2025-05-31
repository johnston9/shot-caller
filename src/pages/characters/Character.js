/* Component in CharacterPage to display the Character data */
import React from 'react'
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Card from "react-bootstrap/Card";
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetCharacterContext } from '../../contexts/CharLocatContex';
import { toast } from 'react-toastify';
import { useSetImageContext } from '../../contexts/ImageContext';

const Character = (props) => {
    const setImage = useSetImageContext();
    const setCharacter = useSetCharacterContext();
    const { number,
            role,
            username,
            id,
            actor,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,  
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/characters/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/characters/${id}/`);
          toast.success(`Character "${role}" Deleted`);
          history.push(`/characters`);
        } catch (err) {
        }
      };

      const handleClickMoods = () => {
       /* Functions take the user to the Character's Moodboards
        * They set the Character Context
        * This will be read on App.js page and passed
          as a filter to the /character/moodshots Route */
        setCharacter(role);
        history.push(`/character/moodshots`);
    
      };
    
      const handleClickAddMoods = () => {
        /* Functions take the user to the Character's Moodboards Create Form
        * They set the Character Context
        * This will be read on App.js page and passed
          as a filter to the /character/moodshot/create Route  */
        setCharacter(role);
        history.push(`/character/moodshot/create`);
    
      };

      const handleClickFullM = () => {
        console.log(makeup_image);
        console.log("full");
        setImage(makeup_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC1 = () => {
        console.log(costume1_image);
        console.log("full");
        setImage(costume1_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC2 = () => {
        console.log(costume2_image);
        console.log("full");
        setImage(costume2_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC3 = () => {
        console.log(costume3_image);
        console.log("full");
        setImage(costume3_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC4 = () => {
        console.log(costume4_image);
        console.log("full");
        setImage(costume4_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC5 = () => {
        console.log(costume5_image);
        console.log("full");
        setImage(costume5_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC6 = () => {
        console.log(costume6_image);
        console.log("full");
        setImage(costume6_image); 
        history.push(`/fullshot`);  
      };

      const handleClickFullC7 = () => {
        console.log(costume7_image);
        console.log("full");
        setImage(costume7_image); 
        history.push(`/fullshot`);  
      };

    return (
        <div className={`mb-3`}>
            {/* Moodboard */}
            <Row className={`${styles.ButtonLine} mt-2 mx-1 d-flex align-items-center `}>
                <Col className='text-center mx-0 px-0' xs={1}></Col>
                <Col xs={10} sm={5} className='text-center mx-0 px-0'>
                    <p className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodboards
                    </p>
                </Col>
                <Col xs={5} className='d-none d-sm-block text-center mx-0 px-0'>
                    <p className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodboard
                    </p>
                </Col>
                <Col className='text-center px-0 mx-0' xs={1}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <h5 className={`text-center py-1 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>CHARACTER - {role} </h5>
             <div className={`${styles.Header} pb-3 px-3`}>
             {/* callname */}
            <Row>
            <Col className='text-center my-3'>
            <div className='mb-3'>
            <span className={`py-1 px-1 px-md-5 ${styles.BoldTitleCall } `} >
            CALLNAME: {username}
            </span>  
            </div>
            </Col>
            </Row>
            {/* role number actor */}
            <Row className='mb-md-3 text-center'>
                <Col xs={6} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>ROLE</p>
                {/* <p className={`${styles.BoldScene} `}>Role</p> */}
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role} pb-0`}>{role} </p>
                </div>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>NUMBER</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role} pb-0`}>{number} </p>
                </div>
                </Col>
                <Col xs={12} md={4} className='text-center px-0 mx-0'>
                <p className={`${styles.BoldTitle} 
                  mb-2 text-center mx-1 mx-sm-5`} >ACTOR</p>
                <div className={`${styles.Para}`}> 
                <p className={`${styles.Role}`}>{actor} </p>
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-0 mb-3`}/>
            </Col>
            </Row>
            {/* mobile email agent */}
            <Row className='mb-md-3 text-center'>
                <Col xs={12} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>MOBILE</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{mobile} </p>
                </div>
                </Col>
                <Col xs={12} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>EMAIL</p>
                <div className={`${styles.Para}`}> 
                <p className={`${styles.Role}`}>{email} </p>
                </div>
                </Col>
                <Col xs={12} md={4} className='text-center px-0 mx-0'>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>
                    AGENT - AGENT PHONE</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{agent} </p>
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-0 mb-3`}/>
            </Col>
            </Row>
            {/* makeup - commute 
            - agent email (pickup_address_2 is being used for this) */}
            <Row className='mb-md-3'>
                <Col xs={6} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} d-none d-sm-block mb-2 text-center mx-1 mx-sm-5`}>
                MAKEUP TIME</p>
                <p className={`${styles.BoldTitle} d-block d-sm-none mb-2 text-center mx-1 mx-sm-5`}>
                MAKEUP</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{make_up_time} </p>
                </div>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} d-none d-sm-block mb-2 text-center mx-1 mx-sm-5`}>
                COMMUTE TIME</p>
                <p className={`${styles.BoldTitle} d-block d-sm-none mb-2 text-center mx-1 mx-sm-5`}>
                    COMMUTE </p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{commute_time} </p>
                </div>
                </Col>
                <Col className='text-center px-0 mx-0' xs={12} md={4}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>
                    AGENT EMAIL</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{pickup_address_2} </p>
                </div>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`d-none d-md-block mt-0 mb-3`}/>
            </Col>
            </Row>
            <Row className='mb-md-3'>
            <Col xs={12} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`} >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>
                    PICKUP ADDRESS</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{pickup_address} </p>
                </div>
                </Col>
                <Col xs={12} md={4} className={`${styles.BorderRight} 
                text-center px-0 mx-0`}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>DIET</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{diet} </p>
                </div>
                </Col>
                <Col xs={12} md={4} className="text-center px-0 mx-0" >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>
                    REQUIREMENTS/NOTES</p>
                <div className={`${styles.Para}`}>
                <p className={`${styles.Role}`}>{requirements} </p>
                </div>
                </Col>
            </Row>
            </div>
            <h5 className={`text-center py-1 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Makeup / Costumes</h5>
             <div className={`${styles.Headerv} pb-3 px-3`}>
            {/* makeup/costume 1 */}
            <Row className='text-center py-0 mt-3'>
            <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-5`}>
            {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {makeup_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>MAKEUP</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} 
                    src={makeup_image} alt="makeup image"  />
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullM() }>FULLSIZE</p>
                    </>
                }
                {makeup &&  <> 
                <p className={`${styles.Role}`}>{makeup} </p>
                </>}
            </div> */}
            <Card className='mx-3 mx-md-5'>
            <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullM() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {makeup_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>MAKEUP</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={makeup_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume1 &&  <> 
                <p className={`${styles.Role}`}>{makeup} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
            </Card>
            </Col>    
            <Col xs={12} md={6} className={`text-center px-0 mx-0 mb-5`}>
            {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume1_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>COSTUME 1</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} 
                    src={costume1_image} alt="costume 1" />
                </div>
                <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC1() }>FULLSIZE</p>
                    </>
                }
                {costume1 &&  <> 
                <p className={`${styles.Role}`}>{costume1} </p>
                </>}
            </div> */}
            <Card className='mx-3 mx-md-5'>
            <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC1() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume1_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>COSTUME 1</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume1_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume1 &&  <> 
                <p className={`${styles.Role}`}>{costume1} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={` mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* costume 2/3 */}
            <Row className='text-center'>
                <Col className={`text-center px-0 mx-0 mb-5`} xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume2_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 2</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume2_image} 
                    alt="costume 2"  />
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC2() }>FULLSIZE</p>
                    </>
                }
                {costume2 &&  <> 
                <p className={`${styles.Role}`}>{costume2} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC2() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume2_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 2</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume2_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume2 &&  <> 
                <p className={`${styles.Role}`}>{costume2} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>
                <Col className='text-center px-0 mx-0 mb-5' xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume3_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 3</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume3_image} 
                    alt="costume 3"/>
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC3() }>FULLSIZE</p>
                    </>
                }
                {costume3 &&  <> 
                <p className={`${styles.Role}`}>{costume3} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC3() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume3_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 3</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume3_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume3 &&  <> 
                <p className={`${styles.Role}`}>{costume3} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={` mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* costume 4/5 */}
            <Row className='text-center'>
                <Col className={`text-center px-0 mx-0 mb-5`} xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume4_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 4</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume4_image}
                     alt="costume 4" />
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC4() }>FULLSIZE</p>
                    </>
                }
                {costume4 &&  <> 
                <p className={`${styles.Role}`}>{costume4} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC4() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume4_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 4</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume4_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume4 &&  <> 
                <p className={`${styles.Role}`}>{costume4} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>
                <Col className='text-center px-0 mx-0 mb-5' xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume5_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 5</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume5_image}
                     alt="costume 5" />
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC5() }>FULLSIZE</p>
                    </>
                }
                {costume5 &&  <> 
                <p className={`${styles.Role}`}>{costume5} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC5() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume5_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 5</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume5_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume5 &&  <> 
                <p className={`${styles.Role}`}>{costume5} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            {/* break */}
            <Row>
            <Col xs={12}>
            <hr className={`mt-0 mb-5 d-none d-md-block`}/>
            </Col>
            </Row>
            {/* costume 6/7 */}
            <Row className='text-center'>
                <Col className={`text-center px-0 mx-0 mb-5`} xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume6_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 6</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume6_image}
                     alt="costume 6"/>
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC6() }>FULLSIZE</p>
                    </>
                }
                {costume6 &&  <> 
                <p className={`${styles.Role}`}>{costume6} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC6() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume6_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 6</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume6_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume6 &&  <> 
                <p className={`${styles.Role}`}>{costume6} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>   
                <Col className='text-center px-0 mx-0 mb-5' xs={12} md={6}>
                {/* <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
                {costume7_image && <> 
                    <p className={`${styles.BoldTitle} mb-3 mx-sm-5`}>COSTUME 7</p>
                    <div className={`${styles.ImageBox2} py-md-3 px-1 px-sm-2 px-md-3 mb-md-3`}>
                    <Image className={styles.Images} src={costume7_image}
                     alt="costume 7"/>
                    </div>
                    <p className={`text-center ${styles.FullsizeText }`}
                    onClick={() => handleClickFullC7() }>FULLSIZE</p>
                    </>
                }
                {costume7 &&  <> 
                <p className={`${styles.Role}`}>{costume7} </p>
                </>}
                </div> */}
                <Card className='mx-3 mx-md-5'>
                <Card.Header className={`py-0 ${styles.TopCard }`}>
                </Card.Header>
                <Card.Body onClick={() => handleClickFullC7() } className={`text-center p-md-5 `}  >
                    <Row>
                    <Col className='text-center mt-0' xs={12}>
                    {costume7_image && <> 
                    <p className={`${styles.BoldTitle} mb-md-3 mx-sm-3 mx-md-5`}>
                        COSTUME 7</p>
                    <div className='px-0 mb-0'>
                        <Image className={styles.ImagesIndex} 
                        src={costume7_image} alt="image" />
                        </div>
                    </>}
                </Col>
                </Row>
                <Row >
                <Col xs={12} className='mx-0 px-0 '>
                <div className={`py-2 px-3 ${styles.TopCard2 }`}>
                {costume7 &&  <> 
                <p className={`${styles.Role}`}>{costume7} </p>
                </>}
                </div>
                </Col >
                </Row>
                </Card.Body>
                </Card>
                </Col>          
            </Row>
            </div>
        </div>
    )
}

export default Character