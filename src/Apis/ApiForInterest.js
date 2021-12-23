//getting API for showing all the data
export const getInterests = () => fetch("https://313.com.pk/purchase-sales-interest").then(res => res.json())

//getting API for inserting the data
export const createInterests = (todo) => fetch("https://313.com.pk/purchase-sales-interest/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateInterest = (todo, id) => fetch(`https://313.com.pk/purchase-sales-interest/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getInterest = (id) => fetch(`https://313.com.pk/purchase-sales-interest/${id}`).then(res => res.json())