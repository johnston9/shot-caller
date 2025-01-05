/* Component rendered on the DeptPostsPage to display the 
   cover info for each Post
 * When clicked on it opens that Post's DeptPostPage */
import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { toast } from 'react-toastify';

const DeptPostTop = (props) => {
    const {
        fetchPosts,
        id,
        owner,
        name,
        profile_id,
        profile_image,
        position,
        title,
        departments,
        opened_id,
        updated_at,
        setPosts,
      } = props;

      const currentUser = useCurrentUser()
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/department/posts/${id}/edit`);
      };

      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/department/posts/${id}/`);
          toast.success(`Post" Deleted`);
          fetchPosts();
        } catch (err) {
          console.log(err);
        }
      };

      const handleDeptOpened = async () => {
        /* Function to create an openedDept instance
           for the Post */
        console.log("openeddept")
        try {
          const { data } = await axiosRes.post("/openedDept/", { post: id });
          setPosts((prevPosts) => ({
            // Update the post in the posts state with the opened_id
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, opened_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
        <Card className={ `${styles.PostCard} py-0 mt-0 mb-0`}>
        <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
          <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
          <Col xs={12} sm={3} className="my-0" >
          {/* small */}
          <div className='d-none d-sm-block'>
          <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
          <Col xs={3} className="pl-3 pr-0" >
          <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={45}/>
          </Link>
          </Col>
          <Col xs={9} className="pl-2 pr-0" >
          <div className={`${styles.Content4} pl-2 ml-2`}>
          <p>
          <span className={`pb-0`}>{name} </span>
          </p>
          <p>
          <span className='ml-0 '>{position}</span>
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
          <p><span className={`${styles.Italic}`}>{name} </span>
          </p>
          <p className=''>
          {position}
          </p>
          <p className={ `text-center  ${styles.Date}`}>{updated_at}
          </p>
          </Col>
          <Col xs={2} className="d-flex align-items-center" >
          <Row>
          <Col>
          <div className={`${styles.Icon}`} >
          {is_owner && (
          <PostDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
          />
          ) } 
          </div>
          </Col>
          <Col>
          </Col>
          </Row>
          </Col>
          </Row>  
          </div> 
          </Col> 
          {/* Dept and Title small and mobile */}
          <Col xs={12} sm={6} className="py-1" >
          <Link to={`/department/posts/${id}`}>
          {opened_id ? (
            <Row className={`${styles.ContentOpened} py-0 my-0 mr-1 ml-1`}>
            <Col xs={12} 
            className={` text-center`} >
            <Row>
            <Col className='px-0 mx-0' xs={12}>
                {departments && <p className='pb-0 mb-0'
                style={{ textTransform: 'capitalize' }}>
                  {departments}</p>}
              </Col>
            </Row>
            <Row>
            <Col xs={12} className={`text-center px-0 mx-0 ${styles.Content4}`} >
            {title && <span className={`text-center px-0 mx-0 ${styles.ContentTitleOpened}`}
               style={{ fontStyle: 'italic' }}> {title}</span>}
            </Col>
            </Row>
            </Col>
            </Row>
          ) : (
            <Row onClick={handleDeptOpened}
               className={`${styles.ContentUnOpen} py-0 my-0 mr-1 ml-1`}>
              <Col xs={12} 
              className={` text-center`} >
              <Row>
              <Col className='px-0 mx-0' xs={12}>
                {departments && <p 
                style={{ textTransform: 'capitalize'}}>
                  {departments}</p>}
              </Col>
              </Row>
              <Row>
              <Col xs={12} className={`text-center px-0 mx-0 ${styles.Content4}`} >
              {title && <span className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`}
               style={{ fontStyle: 'italic' }}> {title}</span>}
              </Col>
              </Row>
              </Col>
              </Row>
          )}
          </Link>
          </Col>
          {/* edit and date small */}
          <Col xs={12} sm={3} className="my-0 " >
          <div className='d-none d-sm-block'>
          <Row className="d-flex align-items-center">
          <Col className="pl-0 pr-0" sm={10} >
          <p className={ `text-center  ${styles.Date}`}>{updated_at}
          </p>
          </Col>
          <Col sm={2}
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
        </Card>
      </div>
    )
}

export default DeptPostTop