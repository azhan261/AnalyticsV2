import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getAgedReceivableReferences } from '../Apis/ApiForAgedReceivableRefernce';

function AgedReceivablesTable() {
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [items, setItems] = useState([])
  const [taxRates, setTaxRates] = useState()

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getAgedReceivableReferences()
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
                        <h3>Aged Receivables</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                          <tr>
                            <th>To</th>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Due Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                
                            <th>Due</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            items.map(contents => (
                                <tr key={contents._id}>
                                <td>
                                    {contents.to}
                                </td>
                                <td>
                                    {contents.startDate}
                                </td>
                                <td>
                                    {contents.reference}
                                </td>
                                <td>
                                    {contents.endDate}
                                </td>
                                <td>
                                    {contents.total}
                                </td>
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

export default AgedReceivablesTable
