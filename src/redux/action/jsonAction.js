export const JSON_DATA = "JSON_DATA"


export const jsonData = () => (dispatch) =>{
    const responseData = require('../../utils/assets/data/data.json')
    // console.log(responseData.data[0].gallery);
    dispatch({
        type: JSON_DATA,
        payload: responseData
    })
}
