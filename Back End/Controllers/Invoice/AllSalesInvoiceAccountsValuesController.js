
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema


var { AllSalesInvoiceAccountsValuesSchema } = require("../../Models/Invoice/AllSalesInvoiceAccountsValuesSchema")

 //Now to use router.ger to use properties of the schema like find collection, post collection, etc

 //To use this post requeest we need to type localhost:3001/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
     AllSalesInvoiceAccountsValuesSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving AllSalesInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Router for postting only approved addAccounts

 router.post('/approved', (req, res) => {
    AllSalesInvoiceAccountsValuesSchema.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving AllSalesInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
    });

});

 //Making a route to post the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


 
 

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
   console.log("got hit")
     var emp = new AllSalesInvoiceAccountsValuesSchema({

      description : req.body.description,
      description2 : req.body.description2,
      description3 : req.body.description3,

      priceForTotalUnits : req.body.priceForTotalUnits,
      priceForTotalUnits2 : req.body.priceForTotalUnits2,
      priceForTotalUnits3 : req.body.priceForTotalUnits3,

      discInDigits : req.body.discInDigits,
      discInDigits2 : req.body.discInDigits2,
      discInDigits3 : req.body.discInDigits3,

      priceTotalUnitsWithoutSalesTaxVATAfterDiscount : req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount,
      priceTotalUnitsWithoutSalesTaxVATAfterDiscount2 : req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount2,
      priceTotalUnitsWithoutSalesTaxVATAfterDiscount3 : req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount3,
      
      salesTaxVATinValue : req.body.salesTaxVATinValue,
      salesTaxVATinValue2 : req.body.salesTaxVATinValue2,
      salesTaxVATinValue3 : req.body.salesTaxVATinValue3,

      salesPriceAfterDiscountandInclusiveofSalesTaxVAT : req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT,
      salesPriceAfterDiscountandInclusiveofSalesTaxVAT2 : req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT2,
      salesPriceAfterDiscountandInclusiveofSalesTaxVAT3 : req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT3,
      
      pricePerUnitWithoutSalesTaxVAT : req.body.pricePerUnitWithoutSalesTaxVAT,
      pricePerUnitWithoutSalesTaxVAT2 : req.body.pricePerUnitWithoutSalesTaxVAT2,
      pricePerUnitWithoutSalesTaxVAT3 : req.body.pricePerUnitWithoutSalesTaxVAT3,

      priceTotalUnitsWithoutSalesTaxVAT : req.body.priceTotalUnitsWithoutSalesTaxVAT,
      priceTotalUnitsWithoutSalesTaxVAT2 : req.body.priceTotalUnitsWithoutSalesTaxVAT2,
      priceTotalUnitsWithoutSalesTaxVAT3 : req.body.priceTotalUnitsWithoutSalesTaxVAT3,

      to:req.body.to,
      type: req.body.type,
      expectedDate: req.body.expectedDate,
      paidAmount: req.body.paidAmount,
      dueAmount: req.body.dueAmount,
      startDate: req.body.startDate,
      endDate:req.body.endDate,
      sentStatus:req.body.sentStatus,
      overallStatus:req.body.overallStatus,
      reference:req.body.reference,
      transactionType:req.body.transactionType,
      invoice:req.body.invoice,
      invoice2:req.body.invoice,
      invoice3:req.body.invoice,

      groupingReferenceNumber:req.body.groupingReferenceNumber,

      accountName:req.body.accountName,
      accountName1:req.body.accountName1,
      accountName2:req.body.accountName2,
      accountName3:req.body.accountName3,

      accountType:req.body.accountType,
      accountType2:req.body.accountType2,
      accountType3:req.body.accountType3,


      total:req.body.total,

      qty:req.body.qty,
      qty2:req.body.qty2,
      qty3:req.body.qty3,

      unitPrice:req.body.unitPrice,
      unitPrice2:req.body.unitPrice2,
      unitPrice3:req.body.unitPrice3,

      discPercentage:req.body.discPercentage,
      discPercentage2:req.body.discPercentage2,
      discPercentage3:req.body.discPercentage3,

      taxAmount:req.body.taxAmount,

      taxAmountSingle:req.body.taxAmountSingle,
      taxAmountSingle2:req.body.taxAmountSingle2,
      taxAmountSingle3:req.body.taxAmountSingle3,

      taxRate:req.body.taxRate,
      taxRate2:req.body.taxRate2,
      taxRate3:req.body.taxRate3,
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });


 //Building router for updating with router.put

 /*router.post('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        name:req.body.name,
        addAccountstitle: req.body.addAccountstitle,
        addAccountscontent: req.body.addAccountscontent,
        status: req.body.status
       
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    AllSalesInvoiceAccountsValuesSchema.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in AllSalesInvoiceAccountsValuesSchema Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    AllSalesInvoiceAccountsValuesSchema.findById(id, (err, invoice) => {
      if (!invoice) {
        res.status(404).send("invoice not found");
      } else {

        invoice.description = req.body.description;
        invoice.description2 = req.body.description2;
        invoice.description3 = req.body.description3;
        invoice.transactionType = req.body.transactionType,
        invoice.priceForTotalUnits = req.body.priceForTotalUnits;
        invoice.priceForTotalUnits2 = req.body.priceForTotalUnits2;
        invoice.priceForTotalUnits3 = req.body.priceForTotalUnits3;

        invoice.discInDigits = req.body.discInDigits;
        invoice.discInDigits2 = req.body.discInDigits2;
        invoice.discInDigits2 = req.body.discInDigits3;

        invoice.priceTotalUnitsWithoutSalesTaxVATAfterDiscount = req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount;
        invoice.priceTotalUnitsWithoutSalesTaxVATAfterDiscount2 = req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount2;
        invoice.priceTotalUnitsWithoutSalesTaxVATAfterDiscount3 = req.body.priceTotalUnitsWithoutSalesTaxVATAfterDiscount3;
        
        invoice.salesTaxVATinValue = req.body.salesTaxVATinValue;
        invoice.salesTaxVATinValue2 = req.body.salesTaxVATinValue2;
        invoice.salesTaxVATinValue3 = req.body.salesTaxVATinValue3;

        invoice.salesPriceAfterDiscountandInclusiveofSalesTaxVAT = req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT;
        invoice.salesPriceAfterDiscountandInclusiveofSalesTaxVAT2 = req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT2;
        invoice.salesPriceAfterDiscountandInclusiveofSalesTaxVAT3 = req.body.salesPriceAfterDiscountandInclusiveofSalesTaxVAT3;
    

        invoice.pricePerUnitWithoutSalesTaxVAT= req.body.pricePerUnitWithoutSalesTaxVAT;
        invoice.pricePerUnitWithoutSalesTaxVAT2= req.body.pricePerUnitWithoutSalesTaxVAT2;
        invoice.pricePerUnitWithoutSalesTaxVAT3= req.body.pricePerUnitWithoutSalesTaxVAT3;

        invoice.priceTotalUnitsWithoutSalesTaxVAT= req.body.priceTotalUnitsWithoutSalesTaxVAT;
        invoice.priceTotalUnitsWithoutSalesTaxVAT2= req.body.priceTotalUnitsWithoutSalesTaxVAT2;
        invoice.priceTotalUnitsWithoutSalesTaxVAT3 = req.body.priceTotalUnitsWithoutSalesTaxVAT3;

        
        invoice.startDate = req.body.startDate;
        invoice.startDate2 = req.body.startDate2;
        invoice.startDate3 = req.body.startDate3;

        invoice.endDate = req.body.endDate;
        invoice.endDate2 = req.body.endDate2;
        invoice.endDate3 = req.body.endDate3;

        invoice.reference = req.body.reference;
        invoice.reference2 = req.body.reference2;
        invoice.reference3 = req.body.reference3;

        invoice.total = req.body.total;
        invoice.total2 = req.body.total2;
        invoice.total3 = req.body.total3;

        invoice.to = req.body.to;
        invoice.to2 = req.body.to2;
        invoice.to3 = req.body.to3; 

        invoice.type = req.body.type;
        invoice.expectedDate = req.body.expectedDate;
        invoice.paidAmount = req.body.paidAmount;
        invoice.dueAmount = req.body.dueAmount;
        invoice.sentStatus = req.body.sentStatus;
        invoice.overallStatus = req.body.overallStatus;
        invoice.invoice = req.body.invoice;
        invoice.groupingReferenceNumber = req.body.groupingReferenceNumber;

        invoice.accountName = req.body.accountName;
        invoice.accountName1 = req.body.accountName1,
        invoice.accountName2 = req.body.accountName2;
        invoice.accountName3 = req.body.accountName3;

        invoice.accountType = req.body.accountType;
        invoice.accountType2 = req.body.accountType2;
        invoice.accountType3 = req.body.accountType3;

        invoice.qty = req.body.qty;
        invoice.qty2 = req.body.qty2;
        invoice.qty3 = req.body.qty3;

        invoice.unitPrice = req.body.unitPrice;
        invoice.unitPrice2 = req.body.unitPrice2;
        invoice.unitPrice3 = req.body.unitPrice3;

        invoice.discPercentage = req.body.discPercentage;
        invoice.discPercentage2 = req.body.discPercentage2;
        invoice.discPercentage3 = req.body.discPercentage3;

        invoice.taxAmount = req.body.taxAmount;

        invoice.taxAmountSingle = req.body.taxAmountSingle
        invoice.taxAmountSingle2 = req.body.taxAmountSingle2
        invoice.taxAmountSingle3 = req.body.taxAmountSingle3
        
        invoice.taxRate = req.body.taxRate;
        invoice.taxRate2 = req.body.taxRate2;
        invoice.taxRate3 = req.body.taxRate3;
        invoice
          .save()
          .then((invoice) => {
            res.json(invoice);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  AllSalesInvoiceAccountsValuesSchema.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving AllSalesInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


