/* Page to display the links to find Posts 
   by Department */
import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSetCategoryContext, useSetDeptContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import dep1 from "../../assets/dep1.png";
import dep2 from "../../assets/dep2.png";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";
import dep7 from "../../assets/dep7.png";
import dep8 from "../../assets/dep8.png";
import dep9 from "../../assets/dep9.png";
import dep10 from "../../assets/dep10.png";
import dep11 from "../../assets/dep11.png";
import dep12 from "../../assets/dep12.png";
import dep13 from "../../assets/dep13.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown } from '../../components/PostDropdown';
import TopBox from '../../components/TopBox';

const Departments = () => {
    useRedirect();
    const setDept = useSetDeptContext();
    const setCategory = useSetCategoryContext();
    const [postsAll, setPostsAll] = useState({ results: [] }); 
    const admin = true;
    const posts = postsAll.results;
    console.log(posts);

    const history = useHistory();

    useEffect(() => {
            /* Fetch all posts */
            const fetchPosts = async () => {
                try {
                    const { data } = await axiosReq.get(`/posts`);
                    setPostsAll(data);
                    console.log(data)
                } catch (err) {
                    console.log(err);
                  }
            }
            fetchPosts();
        }, []); 

    /* Functions to get each departments category total posts  */
 
    // CAMERA
    const camReqUnopen = posts.filter(post => post.departments === "camera" 
      && post.category === "requirements" && post.opened_id === null).length;

    const camWorkUnopen = posts.filter(post => post.departments === "camera" 
      && post.category === "workspace" && post.opened_id === null).length;

    const camFinUnopen = posts.filter(post => post.departments === "camera" 
      && post.category === "finals" && post.opened_id === null).length;

    const camReqOpen = posts.filter(post => post.departments === "camera" 
      && post.category === "requirements" && post.opened_id).length;

    const camWorkOpen = posts.filter(post => post.departments === "camera" 
      && post.category === "workspace" && post.opened_id).length;

    const camFinOpen = posts.filter(post => post.departments === "camera" 
      && post.category === "finals" && post.opened_id).length;

    // SOUND
    const souReqUnopen = posts.filter(post => post.departments === "sound" 
      && post.category === "requirements" && post.opened_id === null).length;

    const souWorkUnopen = posts.filter(post => post.departments === "sound" 
      && post.category === "workspace" && post.opened_id === null).length;

    const souFinUnopen = posts.filter(post => post.departments === "sound" 
      && post.category === "finals" && post.opened_id === null).length;

    const souReqOpen = posts.filter(post => post.departments === "sound" 
      && post.category === "requirements" && post.opened_id).length;

    const souWorkOpen = posts.filter(post => post.departments === "sound" 
      && post.category === "workspace" && post.opened_id).length;

    const souFinOpen = posts.filter(post => post.departments === "sound" 
      && post.category === "finals" && post.opened_id).length;

    // LOCATION
    const locReqUnopen = posts.filter(post => post.departments === "location" 
      && post.category === "requirements" && post.opened_id === null).length;

    const locWorkUnopen = posts.filter(post => post.departments === "location" 
      && post.category === "workspace" && post.opened_id === null).length;

    const locFinUnopen = posts.filter(post => post.departments === "location" 
      && post.category === "finals" && post.opened_id === null).length;

    const locReqOpen = posts.filter(post => post.departments === "location" 
      && post.category === "requirements" && post.opened_id).length;

    const locWorkOpen = posts.filter(post => post.departments === "location" 
      && post.category === "workspace" && post.opened_id).length;

    const locFinOpen = posts.filter(post => post.departments === "location" 
      && post.category === "finals" && post.opened_id).length;

      // SCRIPT
      const scrReqUnopen = posts.filter(post => post.departments === "script" 
        && post.category === "requirements" && post.opened_id === null).length;

      const scrWorkUnopen = posts.filter(post => post.departments === "script" 
        && post.category === "workspace" && post.opened_id === null).length;

      const scrFinUnopen = posts.filter(post => post.departments === "script" 
        && post.category === "finals" && post.opened_id === null).length;

      const scrReqOpen = posts.filter(post => post.departments === "script" 
        && post.category === "requirements" && post.opened_id).length;

      const scrWorkOpen = posts.filter(post => post.departments === "script" 
        && post.category === "workspace" && post.opened_id).length;

      const scrFinOpen = posts.filter(post => post.departments === "script" 
        && post.category === "finals" && post.opened_id).length;

      // ART
      const artReqUnopen = posts.filter(post => post.departments === "art" 
        && post.category === "requirements" && post.opened_id === null).length;

      const artWorkUnopen = posts.filter(post => post.departments === "art" 
        && post.category === "workspace" && post.opened_id === null).length;

      const artFinUnopen = posts.filter(post => post.departments === "art" 
        && post.category === "finals" && post.opened_id === null).length;

      const artReqOpen = posts.filter(post => post.departments === "art" 
        && post.category === "requirements" && post.opened_id).length;

      const artWorkOpen = posts.filter(post => post.departments === "art" 
        && post.category === "workspace" && post.opened_id).length;

      const artFinOpen = posts.filter(post => post.departments === "art" 
        && post.category === "finals" && post.opened_id).length;

      // makeup
      const makReqUnopen = posts.filter(post => post.departments === "make-up" 
        && post.category === "requirements" && post.opened_id === null).length;

      const makWorkUnopen = posts.filter(post => post.departments === "make-up" 
        && post.category === "workspace" && post.opened_id === null).length;

      const makFinUnopen = posts.filter(post => post.departments === "make-up" 
        && post.category === "finals" && post.opened_id === null).length;

      const makReqOpen = posts.filter(post => post.departments === "make-up" 
        && post.category === "requirements" && post.opened_id).length;

      const makWorkOpen = posts.filter(post => post.departments === "make-up" 
        && post.category === "workspace" && post.opened_id).length;

      const makFinOpen = posts.filter(post => post.departments === "make-up" 
        && post.category === "finals" && post.opened_id).length;

      // COSTUME
      const warReqUnopen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "requirements" && post.opened_id === null).length;

      const warWorkUnopen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "workspace" && post.opened_id === null).length;

      const warFinUnopen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "finals" && post.opened_id === null).length;

      const warReqOpen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "requirements" && post.opened_id).length;

      const warWorkOpen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "workspace" && post.opened_id).length;

      const warFinOpen = posts.filter(post => post.departments === "wardrobe" 
        && post.category === "finals" && post.opened_id).length;

      // CASTING
      const casReqUnopen = posts.filter(post => post.departments === "casting" 
        && post.category === "requirements" && post.opened_id === null).length;

      const casWorkUnopen = posts.filter(post => post.departments === "casting" 
        && post.category === "workspace" && post.opened_id === null).length;

      const casFinUnopen = posts.filter(post => post.departments === "casting" 
        && post.category === "finals" && post.opened_id === null).length;

      const casReqOpen = posts.filter(post => post.departments === "casting" 
        && post.category === "requirements" && post.opened_id).length;

      const casWorkOpen = posts.filter(post => post.departments === "casting" 
        && post.category === "workspace" && post.opened_id).length;

      const casFinOpen = posts.filter(post => post.departments === "casting" 
        && post.category === "finals" && post.opened_id).length;

      // CASTING
      const posReqUnopen = posts.filter(post => post.departments === "post" 
        && post.category === "requirements" && post.opened_id === null).length;

      const posWorkUnopen = posts.filter(post => post.departments === "post" 
        && post.category === "workspace" && post.opened_id === null).length;

      const posFinUnopen = posts.filter(post => post.departments === "post" 
        && post.category === "finals" && post.opened_id === null).length;

      const posReqOpen = posts.filter(post => post.departments === "post" 
        && post.category === "requirements" && post.opened_id).length;

      const posWorkOpen = posts.filter(post => post.departments === "post" 
        && post.category === "workspace" && post.opened_id).length;

      const posFinOpen = posts.filter(post => post.departments === "post" 
        && post.category === "finals" && post.opened_id).length;

      // PRODUCTION
      const proReqUnopen = posts.filter(post => post.departments === "production" 
        && post.category === "requirements" && post.opened_id === null).length;

      const proWorkUnopen = posts.filter(post => post.departments === "production" 
        && post.category === "workspace" && post.opened_id === null).length;

      const proFinUnopen = posts.filter(post => post.departments === "production" 
        && post.category === "finals" && post.opened_id === null).length;

      const proReqOpen = posts.filter(post => post.departments === "production" 
        && post.category === "requirements" && post.opened_id).length;

      const proWorkOpen = posts.filter(post => post.departments === "production" 
        && post.category === "workspace" && post.opened_id).length;

      const proFinOpen = posts.filter(post => post.departments === "production" 
        && post.category === "finals" && post.opened_id).length;

      // STUNTS
      const stuReqUnopen = posts.filter(post => post.departments === "stunts" 
        && post.category === "requirements" && post.opened_id === null).length;

      const stuWorkUnopen = posts.filter(post => post.departments === "stunts" 
        && post.category === "workspace" && post.opened_id === null).length;

      const stuFinUnopen = posts.filter(post => post.departments === "stunts" 
        && post.category === "finals" && post.opened_id === null).length;

      const stuReqOpen = posts.filter(post => post.departments === "stunts" 
        && post.category === "requirements" && post.opened_id).length;

      const stuWorkOpen = posts.filter(post => post.departments === "stunts" 
        && post.category === "workspace" && post.opened_id).length;

      const stuFinOpen = posts.filter(post => post.departments === "stunts" 
        && post.category === "finals" && post.opened_id).length;

      // ELECTRIC
      const eleReqUnopen = posts.filter(post => post.departments === "electric" 
        && post.category === "requirements" && post.opened_id === null).length;

      const eleWorkUnopen = posts.filter(post => post.departments === "electric" 
        && post.category === "workspace" && post.opened_id === null).length;

      const eleFinUnopen = posts.filter(post => post.departments === "electric" 
        && post.category === "finals" && post.opened_id === null).length;

      const eleReqOpen = posts.filter(post => post.departments === "electric" 
        && post.category === "requirements" && post.opened_id).length;

      const eleWorkOpen = posts.filter(post => post.departments === "electric" 
        && post.category === "workspace" && post.opened_id).length;

      const eleFinOpen = posts.filter(post => post.departments === "electric" 
        && post.category === "finals" && post.opened_id).length;

      // UNIVERSAL
      const uniReqUnopen = posts.filter(post => post.departments === "universal" 
        && post.category === "requirements" && post.opened_id === null).length;

      const uniWorkUnopen = posts.filter(post => post.departments === "universal" 
        && post.category === "workspace" && post.opened_id === null).length;

      const uniFinUnopen = posts.filter(post => post.departments === "universal" 
        && post.category === "finals" && post.opened_id === null).length;

      const uniReqOpen = posts.filter(post => post.departments === "universal" 
        && post.category === "requirements" && post.opened_id).length;

      const uniWorkOpen = posts.filter(post => post.departments === "universal" 
        && post.category === "workspace" && post.opened_id).length;

      const uniFinOpen = posts.filter(post => post.departments === "universal" 
        && post.category === "finals" && post.opened_id).length;

    /* The following 13 functions take the user to Posts
     * in a particular Department and Category
     * They set the Dept and Category Contexts 
     * This will be read on App.js page and passed
       as a filter to the /departments Route*/

       const handleClickCameraReq = () => {
        setDept("camera");
        setCategory("requirements");
        history.push(`/departments`);  
      };

      const handleClickCameraWor = () => {
        setDept("camera");
        setCategory("workspace");
        history.push(`/departments`); 
      };

      const handleClickCameraFin = () => {
        setDept("camera");
        setCategory("finals");
        history.push(`/departments`);  
      };

    const handleClickSoundReq = () => {
      setDept("sound");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickSoundWor = () => {
      setDept("sound");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickSoundFin = () => {
      setDept("sound");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickLocationReq = () => {
      setDept("location");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickLocationWor = () => {
      setDept("location");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickLocationFin = () => {
      setDept("location");
      setCategory("finals");
      history.push(`/departments`);  
    };
    
    const handleClickScriptReq = () => {
      setDept("script");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickScriptWor = () => {
      setDept("script");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickScriptFin = () => {
      setDept("script");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickArtReq = () => {
      setDept("art");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickArtWor = () => {
      setDept("art");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickArtFin = () => {
      setDept("art");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickMakeupReq = () => {
      setDept("make-up");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickMakeupWor = () => {
      setDept("make-up");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickMakeupFin = () => {
      setDept("make-up");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickMakeup = (category) => {
      setDept("make-up");
      setCategory(category);
      history.push(`/dept/category`);

    };

    const handleClickWardrobeReq = () => {
      setDept("wardrobe");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickWardrobeWor = () => {
      setDept("wardrobe");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickWardrobeFin = () => {
      setDept("wardrobe");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickWardrobe = (category) => {
      setDept("wardrobe");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickCastingReq = () => {
      setDept("casting");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickCastingWor = () => {
      setDept("casting");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickCastingFin = () => {
      setDept("casting");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickCasting = (category) => {
      setDept("casting");
      setCategory(category);
      history.push(`/departments`);
    }; 

    const handleClickPostReq = () => {
      setDept("post");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickPostWor = () => {
      setDept("post");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickPostFin = () => {
      setDept("post");
      setCategory("finals");
      history.push(`/dept/category`);  
    };

    const handleClickPost = (category) => {
      setDept("post");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickProductionReq = () => {
      setDept("production");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickProductionWor = () => {
      setDept("production");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickProductionFin = () => {
      setDept("production");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickProduction = (category) => {
      setDept("production");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickStuntsReq = () => {
      setDept("stunts");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickStuntsWor = () => {
      setDept("stunts");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickStuntsFin = () => {
      setDept("stunts");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickStunts = (category) => {
      setDept("stunts");
      setCategory(category);
      history.push(`/departments`);
    };

    const handleClickElectricReq = () => {
      setDept("electric");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickElectricWor = () => {
      setDept("electric");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickElectricFin = () => {
      setDept("electric");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickElectric = (category) => {
      setDept("electric");
      setCategory(category);
      history.push(`/departments`);
    };

    const handleClickUniversalReq = () => {
      setDept("universal");
      setCategory("requirements");
      history.push(`/departments`);  
    };

    const handleClickUniversalWor = () => {
      setDept("universal");
      setCategory("workspace");
      history.push(`/departments`); 
    };

    const handleClickUniversalFin = () => {
      setDept("universal");
      setCategory("finals");
      history.push(`/departments`);  
    };

    const handleClickUni = (category) => {
      setDept("universal");
      setCategory(category);
      history.push(`/departments`);
    };

    //    const handleClickCameraReq = () => {
    //     setDept("camera");
    //     setCategory("requirements");
    //     history.push(`/departments`);  
    //   };

    //   const handleClickCameraWor = () => {
    //     setDept("camera");
    //     setCategory("workspace");
    //     history.push(`/departments`); 
    //   };

    //   const handleClickCameraFin = () => {
    //     setDept("camera");
    //     setCategory("finals");
    //     history.push(`/departments`);  
    //   };

    // const handleClickCamera = (category) => {
    //   setDept("camera");
    //   setCategory(category);
    //   history.push(`/departments`);
    // };

    const handleClickSound = (category) => {
      setDept("sound");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickLocation = (category) => {
      setDept("location");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickScript = (category) => {
      setDept("script");
      setCategory(category);
      history.push(`/departments`);

    };

    const handleClickArt = (category) => {
      setDept("art");
      setCategory(category);
      history.push(`/departments`);

    };

    // const handleClickMakeup = (category) => {
    //   setDept("make-up");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickWardrobe = (category) => {
    //   setDept("wardrobe");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickCasting = (category) => {
    //   setDept("casting");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickPost = (category) => {
    //   setDept("post");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickProduction = (category) => {
    //   setDept("production");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickStunts = (category) => {
    //   setDept("stunts");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickElectric = (category) => {
    //   setDept("electric");
    //   setCategory(category);
    //   history.push(`/departments`);

    // };

    // const handleClickUni = (category) => {
    //   setDept("universal");
    //   setCategory(category);
    //   history.push(`/departments`);
    // };

    // const handleClickUniversal = () => {
    //   setDept("universal");
    //   setCategory("");
    //   history.push(`/departments`);
    // };

    return (
        <div>
            <TopBox title="Find Posts"/>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              onClick={() => history.goBack()}
              >
              Back
            </Button>
            <Container className={`my-3`}>
            <Row className='mb-3 mt-3'>
                <Col className='text-center' xs={4} >
                <Button onClick={() => history.push("/archived")} 
                  className={`${btnStyles.Button} py-0 px-2 ${btnStyles.Bright}`} >Starred
                      </Button>
                </Col>
                <Col className='text-center px-0' xs={4} >
                <Button onClick={() => history.push("/posts")}
                  className={`${btnStyles.Button} py-0 px-3 ${btnStyles.Bright}`} >All Posts
                    </Button>
                </Col>
                <Col className='text-center' xs={4} >
                <Button onClick={() => history.push("/liked")} 
                  className={`${btnStyles.Button} py-0 px-3 ${btnStyles.Bright}`}>Liked
                  </Button>
                </Col>
            </Row>
            <Row className='mt-1'>
                <Col className='text-center' >
                <Button onClick={() => history.push("/feed")} 
                  className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                  >
                    Feed
                    </Button>
                </Col>
            </Row>
            </Container>
            
            {/* Department Image all white with pics */}
            <div className='mt-5 pt-5'>
            <Row>
            <Col>
            <h3 className={`text-center mt-3`}>Posts by Department</h3>
              <p className='text-center'>Requirements and Finals post are ordered by Scene Number</p>
            </Col>
            </Row>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={2} md={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={8} md={4} >
                  <div className={` ${styles.CardBoxIm} py-2 px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep1})`
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    UNIVERSAL
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-2 pl-md-3 pl-lg-5`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-2 pr-md-3 pr-lg-5`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickUniversalReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{uniReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickUniversalWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickUniversalFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                  </Col>
              </Row>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* CAMERA 1*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    // style={{ backgroundColor: 'rgb(248 241 249)'}}
                    style={{
                      background: `url(${dep5})`,}}>
                    <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CAMERA
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq}`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-0 mt-1'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{camReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* SOUND 2 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    SOUND
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* LOCATION 3*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    LOCATION
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* SCRIPT 4*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    SCRIPT
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* ART 5*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    ART
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickArtReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{artReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickArtWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickArtFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* MAKEUP 6 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep7})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    MAKEUP
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickMakeupReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{makReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickMakeupWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickMakeupFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* WARDROBE 7 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    WARDROBE
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickWardrobeReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{warReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickWardrobeWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickWardrobeFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* CAMERA 8 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    CASTING
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickCastingReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{casReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickCastingWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickCastingFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* POST/VFX 9 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep7})`,
                    }}
                    >
                    <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    POST/VFX
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickPostReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{posReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickPostWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickPostFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* PRODUCTION 10 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    PRODUCTION
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickProductionReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{proReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickProductionWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickProductionFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* STUNTS 11*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep1})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    STUNTS/SFX
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickStuntsReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{stuReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickStuntsWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickStuntsFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              {/* ELECTRIC 12 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{
                      background: `url(${dep5})`,
                    }}
                    >
                      <Row className='my-2'>
                    <Col>
                    <h5 className={`text-center ${styles.White2} mt-2`} >
                    ELECTRIC/GRIP
                    </h5>
                    </Col>
                    </Row>
                    {/* read */}
                    <Row>
                      <Col xs={6}>
                      <p className={`${styles.WhiteText} pl-1`}>READ</p></Col>
                      <Col xs={6} >
                      <p className={`${styles.WhiteText} float-right pr-1`}>UNREAD</p></Col>
                    </Row>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickElectricReq() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{eleReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-3`}
                    onClick={() => handleClickElectricWor() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-3`}
                    onClick={() => handleClickElectricFin() }>
                    <Row className='py-0'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
              </Col>
              </Row>
            </div>

            {/* Department Image all white with color */}
            <div className='mt-4'>
            <Row>
            <Col>
            <h3 className={`text-center mt-3`}>Posts by Department</h3>
              <p className='text-center'>Requirements and Finals post are ordered by scene number</p>
            </Col>
            </Row>
              {/* Universal */}
              <Row className={`mt-1`} >
                  <Col xs={2} md={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={8} md={4} >
                  <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`${styles.WhiteRead} mt-1`}>
                    <Row>
                    <Col xs={12} className={``}><p className='pl-3'>Read <span className='pr-3 float-right'>Unread</span> </p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickUniversalReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{uniReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickUniversalWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickUniversalFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{uniFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{uniFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>UNIVERSAL</p>
                  </Col>
              </Row>
              {/* Camera Sound ... */}
              <Row className='px-2'>
              {/* CAMERA 1*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{camReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center pt-1 ${styles.Bold}`}>CAMERA</p>
              </Col>
              {/* SOUND 2 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickSoundReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{souReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickSoundWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickSoundFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{souFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{souFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SOUND</p>
              </Col>
              {/* LOCATION 3*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickLocationReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{locReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickLocationWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickLocationFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{locFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{locFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>LOCATION</p>
              </Col>
              {/* SCRIPT 4*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickScriptReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{scrReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickScriptWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickScriptFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{scrFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{scrFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>SCRIPT</p>
              </Col>
              {/* ART 5*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickArtReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{artReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickArtWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickArtFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{artFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className='d-block d-md-none'> FINALS</p>
                    <p className='d-none d-md-block'> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{artFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ART</p>
              </Col>
              {/* MAKEUP 6 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickMakeupReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{makReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickMakeupWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickMakeupFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{makFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{makFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>MAKEUP</p>
              </Col>
              {/* WARDROBE 7 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickWardrobeReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{warReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickWardrobeWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickWardrobeFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{warFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{warFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>WARDROBE</p>
              </Col>
              {/* CAMERA 8 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickCastingReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{casReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickCastingWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickCastingFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{casFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{casFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>CASTING</p>
              </Col>
              {/* POST/VFX 9 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickPostReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{posReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickPostWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickPostFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{posFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{posFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>POST/VFX</p>
              </Col>
              {/* PRODUCTION 10 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(223 254 240)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickProductionReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{proReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickProductionWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickProductionFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{proFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{proFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>PRODUCTION</p>
              </Col>
              {/* STUNTS 11*/}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: '#dbfaf9'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickStuntsReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{stuReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickStuntsWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickStuntsFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{stuFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{stuFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>STUNTS</p>
              </Col>
              {/* ELECTRIC 12 */}
              <Col className='px-2 px-md-2' xs={6} sm={4} md={3} lg={2} >
                    <div className={` ${styles.CardBox2} px-2`}
                    style={{ backgroundColor: 'rgb(248 241 249)'}}
                    >
                      {/* read */}
                    <div className={`d-none d-sm-block ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center pr-5`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center pl-4`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* read */}
                    <div className={`d-block d-sm-none ${styles.WhiteRead} mt-1`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`float-right`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.WhiteReq} mt-1`} 
                    onClick={() => handleClickElectricReq() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p className={`${styles.WhiteReq1} d-none d-sm-block`}> REQUIREMENTS</p>
                    <p className={`${styles.WhiteReq1} d-block d-sm-none`}> REQUIREM.</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`${styles.Red} float-left`}>{eleReqUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.WhiteReq} mt-1`}
                    onClick={() => handleClickElectricWor() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.WhiteReq} my-1`}
                    onClick={() => handleClickElectricFin() }>
                    <Row className='py-2 py-md-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{eleFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p > FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{eleFinUnopen}</p></Col>
                    </Row>
                    </div>
                    </div>
                    <p className={`text-center ${styles.Bold}`}>ELECTRIC/GRIP</p>
              </Col>
              </Row>
            </div>

            {/* old */}
            <Card className={` ${styles.Scene}`}>
                  <Card.Body>
                  <h3 className={`text-center mt-3`}>Posts by Department</h3>
                  <p className='text-center'>Requirements and Finals post are ordered by Scene Number</p>
                  {/* Universal */}
                  <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                      <Col className='px-0' xs={4} md={4} lg={4} >
                        {/* <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={dep1} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        </Card> */}
                        <Card className={` ${styles.CardBox}`}>
                        <Card.Img className={`text-center ${styles.UniImg}`} src={dep1} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickUni(category) } />
                        </Card>
                      </Col>
                  </Row>
                  {/* Camera Sound */}
                    <Row>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                    <Card className={` ${styles.CardBox} px-0`} >
                    {/* read */}
                    <div className={` ${styles.BlackRead}`}>
                    <Row>
                      <Col xs={6} className={`text-center`}><p>Read</p></Col>
                      <Col xs={6} className={`text-center`}><p>Unread</p></Col>
                    </Row>
                    </div>
                    {/* requirements */}
                    <div className={` ${styles.BlackReq}`} 
                    onClick={() => handleClickCameraReq() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camReqOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> REQUIREMENTS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camReqUnopen}</p></Col>
                    </Row>
                    {/* <Row>
                      <Col xs={6} className={`text-center`}><p>{camReqOpen} </p></Col>
                      <Col xs={6} className={`text-center`}><p>{camReqUnopen} </p></Col>
                    </Row> */}
                    </div>
                    {/* workspace */}
                    <div className={` ${styles.BlackWor}`}
                    onClick={() => handleClickCameraWor() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camWorkOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> WORKSPACE</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camWorkUnopen}</p></Col>
                    </Row>
                    </div>
                    {/* Finals */}
                    <div className={` ${styles.BlackFin}`}
                    onClick={() => handleClickCameraFin() }>
                    <Row className='py-2'>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-right ${styles.Red}`}>{camFinOpen}</p></Col>
                    <Col xs={8} className={`text-center`}>
                    <p> FINALS</p>
                    </Col>
                    <Col xs={2} className={`text-center px-0`}>
                    <p className={`float-left ${styles.Red}`}>{camFinUnopen}</p></Col>
                    </Row>
                    </div>
                      <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                      {/* <DeptDropdown  handleClick={(category) => handleClickCamera(category) } /> */}
                    </Card>
                        {/* <Card>
                        <Card.Img src={dep2} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCamera(category) } />
                        </Card> */}
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep3} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickSound(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep4} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickLocation(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep5} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickScript(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep6} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickArt(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep13} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickMakeup(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep7} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickWardrobe(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep8} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickCasting(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep9} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickPost(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep10} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickProduction(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep11} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickStunts(category) } />
                        </Card>
                      </Col>
                      <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                        <Card>
                        <Card.Img src={dep12} alt="Card image" />
                        <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                        <DeptDropdown depart handleClick={(category) => handleClickElectric(category) } />
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
            </Card>
        </div>
    )
}

export default Departments