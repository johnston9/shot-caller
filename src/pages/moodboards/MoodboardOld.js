<div>
<Card className={ `py-0 mt-1 mb-0 ${styles.MoodTop}`}>
<Link to={`/moodshots/${id}`}>
<Card.Body className={`py-0 px-0 ${styles.MoodTop}`}>
<Row className={`d-flex align-items-center pt-0 pb-0 my-0 pl-3`}>
<Col xs={12} sm={3} className="my-0" >
<div className='d-none d-sm-block'>
<Row >
<Col xs={3} className="pl-0 pr-0" >
<Link to={`/profiles/${profile_id}`}>
<Avatar src={profile_image} height={45}/>
</Link>
</Col>
<Col xs={9} className="pl-0 pr-0" >
<div className={`${styles.Content4} pl-2 ml-2`}>
<p>
<span className=''>{name} </span>
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
<div className='d-sm-none'>
<Row>
<Col className='d-flex align-items-center' xs={2}>
<Link to={`/profiles/${profile_id}`}>
<Avatar src={profile_image} height={45}  />
</Link>
</Col>
<Col xs={8} className="text-center" >
<p>
<span className=''>{name}</span>
</p>
<p className=''>
{position} - {updated_at}
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
<Col xs={12} sm={3} 
    className="px-0 d-flex align-items-center justify-content-center"> 
</Col>
</Row>   
</div> 
</Col> 
<Col xs={12} sm={6} className="my-1" >
<Row className={`${styles.Content3} pt-1 my-0 pt-1-0 pl-2 mr-2 `}>
<Col xs={12} 
className={` ${styles.Content4} text-center`} >
<Row>
<Col className='px-0 mx-0' xs={4}>
{number && <h5 style={{ fontWeight: '700' }}>Scene {number} </h5>}
</Col>
<Col className='px-0 mx-0' xs={4}>{location && <h5> {location}</h5>}
</Col>
<Col className='px-0 mx-0' xs={4}>{character && 
        <h5 style={{  fontWeight: '700' }}>
        {character} </h5>}  
</Col>
</Row>
<Row>
<Col xs={12} className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`} >
{title && <span style={{ fontStyle: 'italic' }}> {title}</span>}
</Col>
</Row>
</Col>
</Row>
</Col>
<Col xs={12} sm={3} className="my-2 " >
<div className='d-none d-sm-block'>
<Row >
<Col sm={3}
className="d-flex align-items-center px-0 float-right" >
{is_owner && (
<PostDropdown
handleEdit={handleEdit}
handleDelete={handleDelete}
/>
) } 
</Col>
<Col className="pl-0 pr-0" sm={9} >
<div className={`${styles.Content4} `}>
<p>
<span className={ ` text-center ${styles.Date}`}>{updated_at}</span>
</p>
</div>
</Col>
</Row>   
</div>     
</Col>
</Row>
</Card.Body>
</Link>
</Card> 

<Row className="mt-3 px-2">
              <Col>
              {hasLoaded ? (
                <>
                  {moodshots.results.length ? (
                      moodshots.results.map((shot) => (
                        <Col xs={12} sm={6} md={3}  
                         className="py-2 p-0 mx-0">
                        <MoodboardTop key={shot.id} {...shot} />
                        </Col>
                      ))) 
                  : (
                    <Container className={appStyles.Content}>
                      <Asset src={NoResults } message={message} />
                    </Container>
                  )}
                </>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset spinner />
                </Container>
              )}  
              </Col>
</Row> 
</div>