import axios from 'axios';

const URL = 'http://localhost:8000/api';

export const loginUser = async(data) => {
    try{
        // console.log(data);
       return await axios.post(`${URL}/login`,data);
    }
    catch(err){
        console.log("Error occurs while running loginUser function",err);
    }
};