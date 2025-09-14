<div>
    {/* image 1/2 */}
    <Row>
    <Col md={6}>
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 1</p>
      <div className={`mt-3 p-0 d-flex flex-column justify-content-center`}>
           <Form.Group className="text-center pt-3">

                {postData.image1Preview ? (
                  postData.image1?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image1Preview}
                        width="40%"
                        height="100px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}
                        htmlFor="image-upload1"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.iframe}
                          width="70%"
                          height="120px"
                          style={{ borderRadius: 8, border: "none" }}
                          src={postData.image1Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}
                        htmlFor="image-upload1"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    htmlFor="image-upload1"
                  >
                    <Asset
                      src={Upload}
                      height={"40px"}
                      width={"40px"}
                      message="Upload Image or PDF"
                    />
                  </Form.Label>
                )}


                <Form.Control
                  type="file"
                  id="image-upload1"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage1}
                  ref={imageInput1}
                />
              </Form.Group>
              {errors?.image1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
      </div>
      <hr className={` d-block d-md-none`}/>
    </Col>
    <Col md={6} className="text-center">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 2</p>
    <div className={`mt-3 p-0 d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center" >
            {image2 ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image2} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue}`}
                    htmlFor="image-upload2"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                // className="my-1 ml-3"
                htmlFor="image-upload2"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 2"
                />
              </Form.Label>
            )}

            <Form.Control
              type="file"
              id="image-upload2"
              accept="image/*"
              onChange={handleChangeImage2}
              ref={imageInput2}
            />
          </Form.Group>
          {errors?.image2?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </div>
    <hr className={` d-block d-md-none`}/>
    </Col>   
    </Row>
    <hr className={`d-none d-md-block`}/>
    {/* image 3/4 */}
    <Row>
    <Col md={6} className="text-center">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 3</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center" >
            {image3 ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image3} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload3"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                htmlFor="image-upload3"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 3"
                />
              </Form.Label>
            )}

            <Form.Control
              type="file"
              id="image-upload3"
              accept="image/*"
              onChange={handleChangeImage3}
              ref={imageInput3}
            />
          </Form.Group>
          {errors?.image3?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Container>
    <hr className={` d-block d-md-none`}/>
    </Col>
    <Col md={6} className="text-center">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 4</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center">
            {image4 ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image4} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload4"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                htmlFor="image-upload4"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 4"
                />
              </Form.Label>
            )}

            <Form.Control
              type="file"
              id="image-upload4"
              accept="image/*"
              onChange={handleChangeImage4}
              ref={imageInput4}
            />
          </Form.Group>
          {errors?.image4?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Container>
    <hr className={` d-block d-md-none`}/>
    </Col>
    </Row>
    <hr className={`d-none d-md-block`}/>
    {/* image 5 */}
    <Row>
    <Col md={{span: 6, offset: 3}} className="text-center">
    <p className={`${styles.BoldScene} 
                mb-0 text-center mx-3`} >Image 5</p>
    <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
          <Form.Group className="text-center">
            {image5 ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image5} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload5"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                htmlFor="image-upload5"
              >
                <Asset3
                  src={Upload}
                  height={"20px"}
                  width={"20px"}
                  message="Upload Image 5"
                />
              </Form.Label>
            )}

            <Form.Control
              type="file"
              id="image-upload5"
              accept="image/*"
              onChange={handleChangeImage5}
              ref={imageInput5}
            />
          </Form.Group>
          {errors?.image5?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Container>
    </Col>
    </Row>
    </div>