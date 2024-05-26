const API_URL = 'https://spicy-mighty-quesadilla.glitch.me';

const fetchData = async (endpoint, option = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, option);
    
    if (!response.ok) throw new Error(response.status);

    return await response.json();
  
  } catch (error) {
    console.error(`Ошибка запроса ${error}`);
  }
}

const fetchProductsByCategory = (category) => 
  fetchData(`/api/products/category/${category}`);


const fetchCartItems = async (ids) => 
  fetchData(`/api/products/list/${ids.join(",")}`); 


const submitOrder = async (storeId, products) => 
  fetchData(`/api/orders`, 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({storeId, products})
    }
  );


export {API_URL, fetchProductsByCategory, fetchCartItems, submitOrder};