import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getAgedPayableReferences } from '../Apis/ApiForAgedPayableReference';

function AgedPayableTable() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [items, setItems] = useState([])
    const [taxRates, setTaxRates] = useState()

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAgedPayableReferences()
        setItems(contents)
      }
      fetchItems()
    }, []);
    return (   
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader></CardHeader>
                <CardBody>
                  <div className="container">
                      <div className="mt-3">
                          <h3>Aged Payables</h3>
                          <table className="table table-striped mt-3 text-center">
                          <thead>
                            <tr>
                              <th>Ref</th>
                              <th>From</th>
                              <th>Date</th>
                              <th>Due Date</th>
                              <th>Planned Date</th>
                              <th>Paid</th>
                              <th>Due</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                <td>
                                    {contents.reference}
                                </td>
                                  <td>
                                      
                                  </td>
                                  <td>
                                      {contents.startDate}  
                                  </td>
                                  <td>
                                      {contents.endDate}
                                  </td>
                                  <td>
                                     <input type = "date"></input>
                                  </td>
                                  <td>paid</td>
                                  <td>due</td>
                                  </tr>
                              ))
                              }
                          </tbody>
                          </table>
                      </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>     
       
    )
}

export default AgedPayableTable
