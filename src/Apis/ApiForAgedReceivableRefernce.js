//getting API for showing all the data
export const getAgedReceivableReferences = () => fetch("https://313.com.pk/agedReceivableReference").then(res => res.json())

//getting API for inserting the data
export const createAgedReceivableReferences = (todo) => fetch("https://313.com.pk/agedReceivableReference/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAgedReceivableReference = (todo, id) => fetch(`https://313.com.pk/agedReceivableReference/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAgedReceivableReference = (id) => fetch(`https://313.com.pk/agedReceivableReference/${id}`).then(res => res.json())