//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Teacher
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Teacher' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var AllPurchaseInvoiceAccountsValuesSchema = mongoose.model('AllPurchaseInvoiceAccountsValuesSchema', {
    from:{ type: String},
    type: {type: String},
    
    description: {type: String},
    description2: {type: String},
    description3: {type: String},

    priceForTotalUnits: {type: String},
    priceForTotalUnits2: {type: String},
    priceForTotalUnits3: {type: String},

    discInDigits: {type: String},
    discInDigits2: {type: String},
    discInDigits3: {type: String},

    priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount: {type: String},
    priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2: {type: String},
    priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3: {type: String},

    purchaseTaxVATinValue: {type: String},
    purchaseTaxVATinValue2: {type: String},
    purchaseTaxVATinValue3: {type: String},

    

    purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT: {type: String},
    purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2: {type: String},
    purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3: {type: String},

    pricePerUnitWithoutPurchaseTaxVAT: {type: String},
    pricePerUnitWithoutPurchaseTaxVAT2: {type: String},
    pricePerUnitWithoutPurchaseTaxVAT3: {type: String},

    priceTotalUnitsWithoutPurchaseTaxVAT: {type: String},
    priceTotalUnitsWithoutPurchaseTaxVAT2: {type: String},
    priceTotalUnitsWithoutPurchaseTaxVAT3: {type: String},

    purchaseTaxVAT: {type: String},
    purchaseTaxVAT2: {type: String},
    purchaseTaxVAT3: {type: String},

    expectedDate: {type: String},
    paidAmount: {type: String},
    dueAmount: {type: String},
    startDate:{ type: String },
    endDate: {type: String},
    sentStatus: {type: String},
    overallStatus: {type: String},   
    reference: {type: String},

    invoice:{type: String},
    invoice2:{type: String},
    invoice3:{type: String},

    groupingReferenceNumber:{type : String},

    accountName:{type: String},
    accountName1:{type: String},
    accountName2:{type: String},
    accountName3:{type: String},
    transactionType: {type: String},
    accountType: {type: String}, 
    accountType2: {type: String}, 
    accountType3: {type: String}, 
    taxAmount:{type: String},
    total: {type: String},
    qty: {type: String},
    qty2: {type: String},
    qty3: {type: String},

    unitPrice: {type: String},
    unitPrice2: {type: String},
    unitPrice3: {type: String},

    discPercentage: {type: String},
    discPercentage2: {type: String},
    discPercentage3: {type: String},

    taxRate: {type: String},
    taxRate2: {type: String},
    taxRate3: {type: String},
});

	


//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { AllPurchaseInvoiceAccountsValuesSchema };
