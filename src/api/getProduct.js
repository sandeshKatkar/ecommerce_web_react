export const getProduct=async () => {
    const response= await fetch('https://dummyjson.com/products/category/groceries?limit=25' , {method:'GET',});
   
    return await response.json();
}



     