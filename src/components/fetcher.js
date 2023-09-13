const BASE_URl = "http://localhost:4001";

export const fetcher = async (url)=> {
    let responseObject = {errorMessage: '', data: []};
    try
    {
        const response = await fetch( BASE_URl + url);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.errorMessage ='';
        responseObject.data=responseData;
    }
    catch (err) {
        responseObject.errorMessage=err.message;
    }
    return responseObject;
};

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = id => {
    return fetcher('/products?catId=' +id);
}

export const getProductById = id =>{
    return fetcher('/products/' + id);
}
export const getProductsByQuery = query => {
    return fetcher('/products?q=' + query);
}