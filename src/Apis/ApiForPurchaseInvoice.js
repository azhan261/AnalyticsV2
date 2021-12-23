import axios from "axios"

//getting API for showing all the data
export const getPurchaseInvoices = () => fetch("https://313.com.pk/purchaseInvoice").then(res => res.json())
export const getDirectCostsInvoices = () => fetch("https://313.com.pk/directCosts").then(res => res.json())
export const getCurrentAssetsInvoices = () => fetch("https://313.com.pk/currentAssets").then(res => res.json())
export const getNonCurrentAssetsInvoices = () => fetch("https://313.com.pk/nonCurrentAssets").then(res => res.json())
export const getFixedAssetsInvoices = () => fetch("https://313.com.pk/fixedAssets").then(res => res.json())



//getting API for inserting the data
export const createPurchaseInvoice = (todo) => fetch("https://313.com.pk/purchaseInvoice/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const getAllPurchaseInvoiceAccountsValuesController = id => (
	console.log(id),
	axios.post(`https://313.com.pk/all-purchase-accounts`)
		.then(res => res.data, )
)
export const getAllPurchaseInvoiceAccountsSpecificValuesController = id => (
	console.log(id),
	axios.post(`https://313.com.pk/all-purchase-accounts/specific/${id}`)
		.then(res => res.data, )
)


export const createDirectCostsInvoice = (todo) => fetch("https://313.com.pk/directCosts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createAllPurchaseInvoiceAccountsValues = (todo) => fetch("https://313.com.pk/all-purchase-accounts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createCurrentAssetsInvoice = (todo) => fetch("https://313.com.pk/currentAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createNonCurrentAssetsInvoice = (todo) => fetch("https://313.com.pk/nonCurrentAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createFixedAssetsInvoice = (todo) => fetch("https://313.com.pk/fixedAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePurchaseInvoice = (todo, id) => fetch(`https://313.com.pk/purchaseInvoice/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateDirectCostsInvoice = (todo, id) => fetch(`https://313.com.pk/directCosts/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateCurrentAssetsInvoice = (todo, id) => fetch(`https://313.com.pk/currentAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateNonCurrentAssetsInvoice = (todo, id) => fetch(`https://313.com.pk/nonCurrentAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateFixedAssetsInvoice = (todo, id) => fetch(`https://313.com.pk/fixedAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

//getting API for getting specific data
export const getPurchaseInvoice = (id) => fetch(`https://313.com.pk/purchaseInvoice/${id}`).then(res => res.json())
export const getDirectCostsInvoice = (id) => fetch(`https://313.com.pk/directCosts/${id}`).then(res => res.json())
export const getCurrentAssetsInvoice = (id) => fetch(`https://313.com.pk/currentAssets/${id}`).then(res => res.json())
export const getNonCurrentAssetsInvoice = (id) => fetch(`https://313.com.pk/nonCurrentAssets/${id}`).then(res => res.json())
export const getFixedAssetsInvoice = (id) => fetch(`https://313.com.pk/fixedAssets/${id}`).then(res => res.json())
