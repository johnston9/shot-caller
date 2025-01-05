/* Component in the LatestPage to display the post's data
 * Latest is a department choice in the Depts-Xtra app */
import React from 'react';
import Card from "react-bootstrap/Card";

import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

const Latest = (props) => {
    const {
        id,
        owner,
        name,
        profile_id,
        profile_image,
        departments,
        position,
        title,
        content,
        image1,
        updated_at,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/latest/post/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/department/posts/${id}/`);
          toast.success(`Post" Deleted`); 
          history.goBack();
        } catch (err) {
        }
      };

    return (
        <div>
          <Card className={`${styles.PostCard}`}>
          <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
          <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
          <Col xs={12} sm={3} className="my-0" >
                {/* small */}
                <div className='d-none d-sm-block'>
                <Row >
                <Col xs={3} className="pl-3 pr-0" >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}/>
                </Link>
                </Col>
                <Col xs={9} className="pl-2 pr-0" >
                <div className={`${styles.Content4} pl-2 ml-3`}>
                <p>
                <span className=''>{name} </span>
                </p>
                <p className='pb-0 mb-0'>
                <span className='ml-0 pb-0 mb-0'>{position}</span>
                </p>
                </div>
                <div>
                </div>
                </Col>
                </Row>   
                </div>     
                {/* mobile */}
                <div className='d-sm-none'>
                <Row className='pb-0 mb-0'>
                <Col className='d-flex align-items-center pt-2 pb-0' xs={2}>
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}  />
                </Link>
                </Col>
                <Col xs={8} className="text-center" >
                <p>
                <span className=''>{name}</span>
                </p>
                <p className=''>
                {position}
                </p>
                </Col>
                <Col xs={2} 
                className="d-flex align-items-center" >
                {is_owner && (
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
                </Row> 
                <Row>
                <Col className='text-center' xs={12}>
                <p className={ `text-center  ${styles.Date}`}>{updated_at}</p>
                </Col>
                </Row>  
                </div> 
          </Col>    
          <Col xs={12} sm={6} className="text-center" >
            <Row className={`${styles.Content3} my-0 mr-1 ml-1`}>
                <Col className='px-0 mx-0' xs={12}>
                  {departments && <p style={{ textTransform: 'capitalize'}}>
                    {departments}</p>}
                </Col>
            </Row>
          </Col> 
          {/* edit and date small */}
          <Col xs={12} sm={3} className="my-0 " >
            <div className='d-none d-sm-block'>
            <Row >
            <Col className="d-flex align-items-center" sm={9} >
            <p className={ `text-center  ${styles.Date}`}>{updated_at}
            </p>
            </Col>
            <Col sm={3}
            className="d-flex align-items-center px-0 float-right" >
              <div className={`${styles.Icon}`} >
            {is_owner && (
            <PostDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            ) } 
            </div>
            </Col>
            </Row>   
            </div>     
            </Col>                
          </Row>
          </Card.Body>
          <Card.Body className="pt-3" >
              {title && <Card.Title style={{ fontStyle: 'italic' }}
                className="text-center">{title}</Card.Title>}
              <hr />
              {content && <Card.Text className={`${styles.Role}`}>{content}</Card.Text>}
          </Card.Body>
          <hr/>
          {/* image 1 */}
          <Row className='mb-2'>
            <Col xs={12} md={{span: 6, offset: 3}} className='mt-3 text-center' >
            <div className={`${styles.ImageBox} px-sm-2 px-md-5`}>
            <p className={`${styles.BoldTitle} mb-md-3 mx-sm-5`}>IMAGE</p>
                {image1 && <> 
                  <div className={`${styles.ImageBox2} px-1 py-md-3 px-md-2 mb-md-3`}>
                    <Card.Img src={image1} alt="image1" className={`${styles.Images}`}/>
                    </div>
                    </>
                    }
            </div>
            </Col>  
          </Row >
          </Card>
        </div>
    )
}

export default Latest