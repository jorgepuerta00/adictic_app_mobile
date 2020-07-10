import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './action';

const getProducts = "https://run.mocky.io/v3/8bbfe1e9-fc3b-48b8-bd0e-50983aca71c4"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkplbiBKb25lcyIsImlhdCI6MTU5MDExNzY2OH0.Z50ZjBVzVA8l5Lxzjku2q1edyOPboUEOMLOYufsSGm0";

export default function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(getProducts, {
            method: 'GET',
            headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer ' + token
                }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch(fetchProductsSuccess(data))
        })
        .catch((error) => {
            console.log(error)
            dispatch(fetchProductsError(error));
        });
    }
}