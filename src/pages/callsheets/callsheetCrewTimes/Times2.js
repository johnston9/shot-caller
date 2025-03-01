<div>
{/* casting and PA 4 n 5 */}
<div>

{/* Casting Director */}
{casting_director_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Casting Director</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{casting_director_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{casting_director_calltime} </p>
            </Col>
          </Row>
          </Col> )
}

{/* Pro Assistant 4 */}
{pro_assistant_4_calltime && 
        (<Col xs={12} md={6}>
        <Row className={` mx-0 `} >
          <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>Pro Assistant 4</p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>{pro_assistant_4_name} </p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
            <p className={`my-0 py-0 `}>{pro_assistant_4_calltime} </p>
          </Col>
        </Row>
        </Col> )
}
{/* Pro Assistant 5 */}
{pro_assistant_5_calltime && 
(<Col xs={12} md={6}>
<Row className={` mx-0 `} >
    <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
    <p className={`my-0 py-0 `}>Pro Assistant 5</p>
    </Col>
    <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
    <p className={`my-0 py-0 `}>{pro_assistant_5_name} </p>
    </Col>
    <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
    <p className={`my-0 py-0 `}>{pro_assistant_5_calltime} </p>
    </Col>
</Row>
</Col> )
}
</div>
{/* new */}
</div>