//getting API for showing all the data

import axios from 'axios';

export const getSalesInvoices = () => fetch("https://313.com.pk/salesInvoice").then(res => res.json())
export const getCurrentLiabilityInvoices = () => fetch("https://313.com.pk/currentLiability").then(res => res.json())
export const getNonCurrentLiabilityInvoices = () => fetch("https://313.com.pk/nonCurrentLiability").then(res => res.json())
export const getEquityInvoices = () => fetch("https://313.com.pk/equity").then(res => res.json())


//export const getAnswers = () => fetch("https://313.com.pk//answers").then(res => res.json())

export const getAllSalesInvoiceAccountsValuesController = id => (
	console.log(id),
	axios.post(`https://313.com.pk/all-sales-accounts`)
		.then(res => res.data, )
)
export const getAllSalesInvoiceAccountsSpecificValuesController = id => (
	console.log(id),
	axios.post(`https://313.com.pk/all-sales-accounts/specific/${id}`)
		.then(res => res.data, )
)

export const createAllSalesInvoiceAccountsValuesController = (todo) => fetch("https://313.com.pk/all-sales-accounts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})

//getting API for inserting the data
export const createSalesInvoice = (todo) => fetch("https://313.com.pk/salesInvoice/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const createCurrentLiabilityInvoice = (todo) => fetch("https://313.com.pk/currentLiability/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const createNonCurrentLiabilityInvoice = (todo) => fetch("https://313.com.pk/nonCurrentLiability/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createEquityInvoice = (todo) => fetch("https://313.com.pk/equity/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateSalesInvoice = (todo, id) => fetch(`https://313.com.pk/salesInvoice/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})

export const updateCurrentLiabilityInvoice = (todo, id) => fetch(`https://313.com.pk/currentLiability/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


export const updateNonCurrentLiabilityInvoice = (todo, id) => fetch(`https://313.com.pk/nonCurrentLiability/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateEquityInvoice = (todo, id) => fetch(`https://313.com.pk/equity/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getSalesInvoice = (id) => fetch(`https://313.com.pk/salesInvoice/${id}`).then(res => res.json())
export const getCurrentLiabilityInvoice = (id) => fetch(`https://313.com.pk/currentLiability/${id}`).then(res => res.json())
export const getNonCurrentLiabilityInvoice = (id) => fetch(`https://313.com.pk/nonCurrentLiability/${id}`).then(res => res.json())
export const getEquityInvoice = (id) => fetch(`https://313.com.pk/equity/${id}`).then(res => res.json())