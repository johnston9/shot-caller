<div className="text-center">

      {/* GRIP */}
      <div >
      <h5 className={`mt-4 mb-0 py-1 ${styles.SubTitle }`} >GRIP</h5> 
      {/* Key Grip */} 
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Key Grip </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: keygrip </span> 
      </div> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_name"
              value={keygrip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_email"
              value={keygrip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_phone"
              value={keygrip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Best Boy Grip */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Best Boy Grip </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: bbgrip </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_name"
              value={best_boy_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_email"
              value={best_boy_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_phone"
              value={best_boy_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Dolly Grip */} 
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Dolly Grip </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: dolgrip </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_name " className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_name"
              value={dolly_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_email"
              value={dolly_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_phone"
              value={dolly_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Swing G&E 1 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Swing G/E 1 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: swing1 </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_name"
              value={swing_ge1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_email"
              value={swing_ge1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_phone"
              value={swing_ge1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Swing G&E 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Swing G/E 2 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: swing2 </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_name"
              value={swing_ge2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_email"
              value={swing_ge2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_phone"
              value={swing_ge2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Swing G&E 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Swing G/E 3 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: swing3 </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_name"
              value={swing_ge3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_email"
              value={swing_ge3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_phone"
              value={swing_ge3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Swing G&E 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Swing G/E 4 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: swing4 </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_name"
              value={swing_ge4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_email"
              value={swing_ge4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_phone"
              value={swing_ge4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Swing G&E 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Swing G/E 5 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: swing5 </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_name"
              value={swing_ge5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_email"
              value={swing_ge5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_phone"
              value={swing_ge5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
    </div>