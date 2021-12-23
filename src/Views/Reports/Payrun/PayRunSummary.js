import React from 'react'

function PayRunSummary() {
    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }

    const handleTableValues = () => {
        return(
            <div>
                  <table id="table" className="table table-striped mt-3" >
                        <thead>
                        
                            <tr>
                              
                              <th>Pay Run</th>
                              <th>Pay Period</th>
                              <th>Payment Date</th>
                              <th>Gross Wages</th>
                              <th>Allowances</th>
                              <th>Deductions</th>
                              <th>Taxes</th>
                              <th>Non-taxable Allowances</th>
                              <th>Post-tax Deductions</th>
                              <th>Net Pay</th>
                            </tr>
                        </thead>  
                        <tbody>
              
                            <tr>
                                <td><b>Total</b></td>
                            </tr>

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
              <CardHeader><h3>Pay Run Summary</h3></CardHeader>
              <CardBody>
              <form onSubmit={formik.handleSubmit}>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                
                  <hr/>
                    <div className="modal-body">
                      <div className="row">
                     
                      
                     
                       
                        
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Pay Item:</label>
                          <select name="accountType" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountType} className="form-control" required>
                            <option >All</option>
                            <option >Wages</option>
                            <option >Allowances</option>
                            <option >Deductions</option>
                            <option >Taxes</option>
                            <option >Non-Taxable Allowances</option>
                            <option >Post-tax Deductions</option>
                            <option >Employer Contributions</option>
                          </select>
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                       
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>From: </label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>To: </label>
                          <input className="form-control" type="date" name="endDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.errors.reference && formik.touched.reference  ? (<div className='error'>{formik.errors.reference}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2 pt-4">
                          <div className="form-group">
                            <button className = "btn" onClick = {(e) => handleUpdate(e)}>Update</button>
                          </div>
                        </div>
                     </div>  
                      <hr />
                    </div>
                </div>
              </div>
            </div>
                    </div>
                    </form>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    <div className = "text-center">
                    <h4><b> Pay Run Summary </b></h4>
                    
                    <h4>Name </h4>
                    <h4>Date </h4>
                  
                    </div>
                    <div>
                        {handleTableValues()}
                    </div>
                    
                    </div>
        </div>
    )
}

export default PayRunSummary
