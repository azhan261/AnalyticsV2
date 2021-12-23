import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getAddAccounts } from '../../../../Apis/ApiForAddAccount'
import ModalTest from './Modals/ModalTest'

function AllAccounts() {
    const location = useLocation();
    
    const history = useHistory()
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const accounts = await getAddAccounts()
        setItems(accounts)
      }
      fetchItems()
    }, [])
    return (
        <div>
            <button>
                <ModalTest /> 
            </button>
            <div>
            <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader></CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Code</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Tax Rate</th>
                              <th>YTD</th>
                              <th colSpan="3">Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                            items.map(accounts => (
                                <tr key={accounts._id}>
                                <td>
                                    {accounts.code}
                                </td>
                                <td>
                                    {accounts.name}
                                </td>
                                <td>
                                    {accounts.accountType}
                                </td>
                                <td>
                                    {accounts.tax}
                                </td>
                                <td>
                                <Link to={{
                                        pathname: '/ledger',
                                        state: accounts,
                                      }} className = "text-dark">{accounts.total}
                                </Link>
                                </td>
                                <td>
                                     
                                  </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
            </div>
        </div>
    )
}

export default AllAccounts
