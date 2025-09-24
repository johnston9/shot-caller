/* Component in the CharactersAdd Component to add new characters 
   to the project */ 
import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { toast } from 'react-toastify';
import { axiosReq } from "../../../api/axiosDefaults";
import { useCharactersContext, useSetCharactersContext } from "../../../contexts/Scene_chars_locs";

const NewCharacter = ({setShowAdd} ) => {
    const characters = useCharactersContext();
    const setCharacters = useSetCharactersContext();
    const [errors] = useState({});

    const [postData, setPostData] = useState({
      number: "",
      role: "",
      username: "",
    });

    const { number,
      role,
      username,
    } = postData;

    const handleChange = (event) => {
      setPostData({
        ...postData,
        role: event.target.value,
      });
    };

      /* Function to create an array of unused character numbers, 1-30,
       "unusedNumbers", for the Character Number select dropdown */

    const castNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]

      const usedNumbers = characters.results.map((char) => (
      char.number));

      const unusedNumbers = castNumbers.filter(
        number => !usedNumbers.includes(number));

    const handleChange2 = (event) => {
      /* Function to set the number and username
         when a number, 1-30, is selected */
      const castnumber = event.target.value;
      const usernamecast = `cast${castnumber}`;
      setPostData({
        ...postData,
        number: event.target.value,
        username: usernamecast,
      });
    };

    /* Function to create an array of unused character numbers, 31-100,
       "unusedNumbersMore", for the Character Number select dropdown */
    const castNumbersMore = [
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    ]
    const usedNumbersMore = characters.results.map((char) => (
      char.number));
    const unusedNumbersMore = castNumbersMore.filter(
      number => !usedNumbersMore.includes(number));
    
      console.log(usedNumbersMore);
      console.log(unusedNumbersMore);

    const handleChangeMore = (event) => {
      /* Function to set the number and username
        when a number, 31-100, is selected */
      const castnumber = event.target.value;
      const usernamecast = `cast${castnumber}`;
      setPostData({
        ...postData,
        number: event.target.value,
        username: usernamecast,
      });
    };
    
    /* Function to create an array of unused character numbers, 101-200,
       "unusedNumbersMore", for the Character Number select dropdown */
    const castNumbersMore2 = [
      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 
      111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 
      121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
      131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
      141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
      151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
      161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
      181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
      191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    ]
    const usedNumbersMore2 = characters.results.map((char) => (
      char.number));
    const unusedNumbersMore2 = castNumbersMore2.filter(
      number => !usedNumbersMore2.includes(number));

    const handleChangeMore2 = (event) => {
      /* Function to set the number and username
        when a number, 31-100, is selected */
      const castnumber = event.target.value;
      const usernamecast = `cast${castnumber}`;
      setPostData({
        ...postData,
        number: event.target.value,
        username: usernamecast,
      });
    };

      // cancel
      const cancel = () => {
        setPostData({
          number: "",
          role: "",
        })
      }
    
      const handleSubmit = async (event) => {

        event.preventDefault();

        const formData = new FormData();  

        formData.append("number", number);
        formData.append("role", role);
        formData.append("username", username);
        try {
            const { data } = await axiosReq.post("/characters/", formData);
            setCharacters((prevChars) => ({
                ...prevChars,
                results: [data, ...prevChars.results],
              }));
              setPostData({
                role: "",
                number: "",
                username: "",
              });
              toast.success(`Character "${role}" Added`);
            console.log(data);
          } catch (err) {
            console.log(err);
          }
    }
    
    const buttons = (
      <div className="mb-2 text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-4`}
          onClick={cancel}
        >
          Cancel
        </Button>
        <Button className={`px-3 px-md-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Create
        </Button>
      </div>
    );

    return (
          <div className="px-3 mb-4" > 
          <Row >
          <Col className={`px-0 ${styles.Back }`} xs={12} md={{span: 8, offset: 2 }} >
          <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`} >
            ADD NEW CHARACTER</h5> 
            <Form className="mt-0 " onSubmit={handleSubmit}>
            <Row>
                <Col xs={{span: 6, offset: 3 }} className="d-flex justify-content-center" >
                <Form.Group controlId="role" className={`${styles.Width2} text-center`}  >
                        <Form.Label className={`${styles.BoldScene} `} >Role</Form.Label>
                        <Form.Control 
                        className={styles.Input}
                        type="text"
                        name="role"
                        value={role}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.role?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                    ))}
                </Col>
            </Row>
            <Row>
                {/* 1 - 30 */}
                <Col xs={6} md={4} className="px-0 d-flex justify-content-center" >
                <Form.Group controlId="number" className={`${styles.Width2} text-center`} >
                        <Form.Label className={` ${styles.BoldScene} `} >Number 1 - 30</Form.Label>
                        <Form.Control as="select"
                        className={styles.InputChar}
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange2}
                        aria-label="character1 select">
                          <option  ></option>
                          { (unusedNumbers.map((number) => (
                            <option key={number} value={number} >
                              {number}</option>
                          ) )) }
                        </Form.Control>
                    </Form.Group>
                    {errors?.number?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                    ))}
                </Col>
                {/* 31 - 100 */}
                <Col xs={6} md={4} className="px-0 d-flex justify-content-center" >
                <Form.Group controlId="number" className={`${styles.Width2} text-center`} >
                        <Form.Label className={` ${styles.BoldScene} `} >Number 31 -100</Form.Label>
                        <Form.Control as="select"
                        className={styles.InputChar}
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChangeMore}
                        aria-label="character1 select">
                          <option  ></option>
                          { (unusedNumbersMore.map((number) => (
                            <option key={number} value={number} >
                              {number}</option>
                          ) )) }
                        </Form.Control>
                    </Form.Group>
                    {errors?.number?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                    ))}
                </Col>
                {/* 100 - 200 */}
                <Col xs={{span: 8, offset: 2 }} md={{span: 4, offset: 0 }} className="d-flex justify-content-center px-0" >
                <Form.Group controlId="number" className={`${styles.Width2} text-center`} >
                        <Form.Label className={` ${styles.BoldScene} `} >Number 101 - 200</Form.Label>
                        <Form.Control as="select"
                        className={styles.InputChar}
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChangeMore2}
                        aria-label="character1 select">
                          <option  ></option>
                          { (unusedNumbersMore2.map((number) => (
                            <option key={number} value={number} >
                              {number}</option>
                          ) )) }
                        </Form.Control>
                    </Form.Group>
                    {errors?.number?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                    ))}
                </Col>
            </Row>
            <Row>
              <Col>
                <div className= {`px-0 my-3`} >{buttons} </div>
              </Col>
            </Row>
          </Form>
          </Col>
          </Row>
          <Row className=''>
          <Col xs={2} ></Col>
          <Col xs={8}>
          <hr className={`${styles.Break1}`}/>
          </Col>
          </Row>
          </div>         
    )
}

export default NewCharacter
