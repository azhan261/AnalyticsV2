import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getAllPurchaseInvoiceAccountsValuesController } from '../../../Apis/ApiForPurchaseInvoice';

function PurchaseOverview() {
    const [items, setItems] = useState([])
    var count = 0
    useEffect(() => {
        const fetchPurchase = async () => {
            const contents = await getAllPurchaseInvoiceAccountsValuesController()
            setItems(contents)
        }
        fetchPurchase()
    }, []);
    
    const timerId = setTimeout(() => {
        sumOfValues()
      }, 2000);

      const sumOfValues = () => {
        var arrForTotalSales = [];
        var totForFixedAssets = 0;
        
        
        for(var i=0;i<items.length;i++){
            count = count + i
        }
       console.log(count)
       console.log(items.length)
        //setGrossProfit(totForSales - totForPurchase)
    }
    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }

    const handleTableValues = () => {
        return(
            <div>
                  <table id="table" className="table table-striped mt-3 text-center" >
                        <thead>

                            <tr>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Transaction</th>
                              <th>Reference</th>
                              <th>Debit</th>
                              <th>Credit</th>
                             
                             
                            </tr>
                        </thead>
  
                        <tbody>

                        </tbody>
                        </table>
            </div>
        )
    }
    const formik = useFormik({
        initialValues: {
            to: '',
            from: '',
            startDate: '',
            dueDate: '',
            invoice: '',
            reference: '',
            item: '',
            description:'',
            qty: '',
            unitPrice: '',
            disc: '',
            account:'',
            taxRate: '',
            amountPkr: '',
            name: '',
            total:'',
            accountPaid: '',
            amountCredit: '',
            amountDuePaid:'',
            amountTotalDebit:'',
            transactionType: '',
            amountPaidAmountValue: '',
            amountPaid:'',
            datePaid:'',
            paidTo: '',
            referencePaid: '',
            datePurchaseOrSalesTaxVat:'',
            accountNamePurchaseOrSalesTaxVat:'',
            valuePurchaseTaxVatDebit:'',
            valueSalesTaxVatCredit:'',
        },

        //4 Make onSubmit propert from handle what happens from data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },
        

        //5 Make validation property
        
        validate: values => {
            
   
            let errors = {}
  
            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.headOffice = "Please fill in School Head Office Name"
            }else if (!letters.test(values.headOfficeName)) {
                errors.headOffice = "Please enter a valid School Head Office Name"
            }
            if(!values.startDate){
              errors.startDate = "Please fill in Starting Date"
            }
            if(!values.dueDate){
              errors.dueDate = "Please fill in Due Date"
            }
            if(!values.productionDeadline){
                errors.productionDeadline = "Please fill in Production Deadline"
            }
            if(!values.deliveryDate){
                errors.size = "Please fill in Delivery Date"
            return errors
            }


        }


    })
    return (
        <div>
             <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader><h3>Purchase Overview</h3></CardHeader>
              <CardBody>
                    <b>Bills</b>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    <div>
                    <Link className = "btn btn-primary" to = "/new-purchase-invoice">New</Link>
                    </div>
                    <div>
                        <div>
                            <button className = "btn btn-info border">Draft <br/></button>
                            <button className = "btn btn-info border"><Link to = "/purchase-overview-detail" style = {{textDecoration : "none"}} className = "text-dark">Awaiting Approval ({items.length})</Link> <br/></button>
                            <button className = "btn btn-info border">Awaiting Payment<br/></button>
                            <button className = "btn btn-info border">Overdue<br/></button>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default PurchaseOverview
