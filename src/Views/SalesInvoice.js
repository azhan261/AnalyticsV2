import React, { useState, useEffect }   from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function SalesInvoice() {
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
                          <h3>Invoices</h3>
                          <table className="table table-striped mt-3 text-center">
                          <thead>
                            <tr>
                              <th>Date </th>
                              <th>Reference</th>
                              <th>Due Date</th>
                              <th>Total</th>
                              <th>Paid</th>
                              <th>Credited</th>
                              <th>Due</th>
                            </tr>
                          </thead>
                          <tbody>
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

export default SalesInvoice
