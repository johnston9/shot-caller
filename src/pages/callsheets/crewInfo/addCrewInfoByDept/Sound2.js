const Sound2 = ({handleChange, postData, setShow}) => {

<div>
        {/* Transport Manager 1  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Transport Manager 1</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: transpo1</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_1_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_name"
                value={transport_manager_1_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_1_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_1_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_email"
                value={transport_manager_1_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_1_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_1_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_1_phone"
                value={transport_manager_1_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_1_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Transport Manager 2  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Transport Manager 2</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: transpo1</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_2_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_2_name"
                value={transport_manager_2_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_2_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_2_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_2_email"
                value={transport_manager_2_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_2_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="transport_manager_2_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="transport_manager_2_phone"
                value={transport_manager_2_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.transport_manager_2_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Head Driver  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Head Driver</h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: headrive</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="head_driver_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="head_driver_name"
                value={head_driver_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.head_driver_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="head_driver_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="head_driver_email"
                value={head_driver_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.head_driver_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="head_driver_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="head_driver_phone"
                value={head_driver_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.head_driver_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        </div>
        {/* VEHICLES */}
        <div>
        <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >VEHICLES </h3> 
        <div className={`py-2 ${styles.White }`}>
        </div>
        {/* Car 1  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 1 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: carone</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car1_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car1_name"
                value={car1_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car1_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car1_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car1_email"
                value={car1_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car1_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car1_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car1_phone"
                value={car1_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car1_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row >
        {/* Car 2 */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 2 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cartwo</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car2_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car2_name"
                value={car2_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car2_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car2_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car2_email"
                value={car2_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car2_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car2_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car2_phone"
                value={car2_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car2_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Car 3  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 3 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: carthree</span> 
        </div> 
        <Row className="pb-3">
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car3_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car3_name"
                value={car3_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car3_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car3_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car3_email"
                value={car3_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car3_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="car3_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="car3_phone"
                value={car3_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.car3_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Truck 1  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 1 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck1</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck1_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck1_name"
                value={truck1_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck1_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck1_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck1_email"
                value={truck1_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck1_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck1_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck1_phone"
                value={truck1_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck1_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Truck 2  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 2 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck2</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck2_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_name"
                value={truck2_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck2_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_email"
                value={truck2_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck2_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck2_phone"
                value={truck2_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck2_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        {/* Truck 3  */}
        <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 3 </h5> 
        <div>
        <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck3</span> 
        </div>
        <Row>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck3_name" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_name"
                value={truck3_name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck3_email" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_email"
                value={truck3_email}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
            <Form.Group controlId="truck3_phone" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="truck3_phone"
                value={truck3_phone}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.truck3_phone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>
        <hr/>
        </div>}

export default Sound2