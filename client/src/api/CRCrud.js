import axios from 'axios';

const URL = 'https://bit-hub-22ky.onrender.com';


// addsubject api
export const addCR = async(data) => {
    try{
        console.log(data);
       return await axios.post(`${URL}/register`,data);
    }
    catch(err){
        console.log("Error occurs while running addsubject function",err);
    }
};

// view  subject api
export const getCR = async(id) => {
    // id can be null if we need to view all subject
    id = id || '';
    try{
       return await axios.get(`${URL}/cr/${id}`);
    }
    catch(err){
        console.log("Error occurs while running getsubject function",err);
    }
};

// update subject api
export const updateCR = async(data,id) => {
    try{
       return await axios.patch(`${URL}/cr/${id}`,data);
    }
    catch(err){
        console.log("Error occurs while running updatesubject function");
    }
};

// delete subject api
export const deleteCR = async(id) => {
    try{
       return await axios.delete(`${URL}/cr/${id}`);
    }
    catch(err){
        console.log("Error occurs while running deletesubject function");
    }
};