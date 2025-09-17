<div>
    {/* image 1 2 */}
    <Row className="d-flex align-items-center">
    <Col xs={12} md={6} className={`pr-md-2`}>
    <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
    Image 1</p>
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
    <hr className="d-block d-md-none"/>
    </Col>
    <Col xs={12} md={6} className={`pr-md-2`}>
    <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
    Image 2</p>
    <Form.Group>
    {postData.image2Preview ? (
        postData.image2?.type === "application/pdf" ? (
        <>
            <iframe
            src={postData.image2Preview}
            width="40%"
            height="100px"
            style={{ borderRadius: 8, border: "none" }}
            title="PDF Preview"
            />
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload2"
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
                src={postData.image2Preview}
                rounded
            />
            </figure>
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload2"
            >
            Change the image
            </Form.Label>

        </>
        )
    ) : (
        <Form.Label
        htmlFor="image-upload2"
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
        id="image-upload2"
        accept="image/*,application/pdf"
        onChange={handleChangeImage2}
        ref={imageInput2}
    />
    </Form.Group>
    {errors?.image2?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
        {message}
    </Alert>
    ))}
    <hr className="d-block d-md-none"/>
    </Col>
    </Row>
    <hr className="d-none d-md-block"/>
    {/* image 3 4 */}
    <Row className="d-flex align-items-center">
    <Col xs={12} md={6} className={`pr-md-2`}>
    <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
    Image 3</p>
    <Form.Group>
    {postData.image3Preview ? (
        postData.image3?.type === "application/pdf" ? (
        <>
            <iframe
            src={postData.image3Preview}
            width="40%"
            height="100px"
            style={{ borderRadius: 8, border: "none" }}
            title="PDF Preview"
            />
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload3"
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
                src={postData.image3Preview}
                rounded
            />
            </figure>
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload3"
            >
            Change the image
            </Form.Label>
        </>
        )
    ) : (
        <Form.Label
        htmlFor="image-upload3"
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
        id="image-upload3"
        accept="image/*,application/pdf"
        onChange={handleChangeImage3}
        ref={imageInput3}
    />
    </Form.Group>
    {errors?.image3?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
        {message}
    </Alert>
    ))}
    <hr className="d-block d-md-none"/>
    </Col>
    <Col xs={12} md={6} className={`pr-md-2`}>
    <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
    Image 4</p>
    <Form.Group>
    {postData.image4Preview ? (
        postData.image4?.type === "application/pdf" ? (
        <>
            <iframe
            src={postData.image4Preview}
            width="40%"
            height="100px"
            style={{ borderRadius: 8, border: "none" }}
            title="PDF Preview"
            />
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload4"
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
                src={postData.image4Preview}
                rounded
            />
            </figure>
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload4"
            >
            Change the image
            </Form.Label>
        </>
        )
    ) : (
        <Form.Label
        htmlFor="image-upload4"
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
        id="image-upload4"
        accept="image/*,application/pdf"
        onChange={handleChangeImage4}
        ref={imageInput4}
    />
    </Form.Group>
    {errors?.image4?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
        {message}
    </Alert>
    ))}
    <hr className="d-block d-md-none"/>
    </Col>
    </Row>
    <hr className="d-none d-md-block"/>
    {/* image 5 */}
    <Row>
    <Col xs={12} md={{span: 6, offset: 3}} className={`pr-md-2`}>
    <p className={`${styles.BoldScene} text-center mb-2 mt-md-0 mt-2`} >
    Image 5</p>
    <Form.Group>
    {postData.image5Preview ? (
        postData.image5?.type === "application/pdf" ? (
        <>
            <iframe
            src={postData.image5Preview}
            width="40%"
            height="100px"
            style={{ borderRadius: 8, border: "none" }}
            title="PDF Preview"
            />
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload5"
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
                src={postData.image5Preview}
                rounded
            />
            </figure>
            <Form.Label
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            htmlFor="image-upload5"
            >
            Change the image
            </Form.Label>
        </>
        )
    ) : (
        <Form.Label
        htmlFor="image-upload5"
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
        id="image-upload5"
        accept="image/*,application/pdf"
        onChange={handleChangeImage5}
        ref={imageInput5}
    />
    </Form.Group>
    {errors?.image5?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
        {message}
    </Alert>
    ))}
    <hr className="d-block d-md-none"/>
    </Col>   
    </Row>
    <hr className="d-none d-md-block"/>
</div>