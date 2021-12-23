//getting API for showing all the data
export const getTaxRates = () => fetch("https://313.com.pk/taxRate").then(res => res.json())

//getting API for inserting the data
export const createTaxRates = (todo) => fetch("https://313.com.pk/taxRate/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTaxRate = (todo, id) => fetch(`https://313.com.pk/taxRate/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTaxRate = (id) => fetch(`https://313.com.pk/taxRate/${id}`).then(res => res.json())