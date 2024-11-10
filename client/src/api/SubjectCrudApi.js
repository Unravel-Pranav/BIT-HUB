import axios from 'axios';

const URL = 'https://bit-hub-22ky.onrender.com/api';


// addsubject api
export const addSubject = async(data) => {
    try{
        console.log(data);
       return await axios.post(`${URL}/subjects`,data);
    }
    catch(err){
        console.log("Error occurs while running addsubject function",err);
    }
};

// view  subject api
export const getSubject = async(id) => {
    // id can be null if we need to view all subject
    id = id || '';
    try{
       return await axios.get(`${URL}/subjects/${id}`);
    }
    catch(err){
        console.log("Error occurs while running getsubject function",err);
    }
};

// update subject api
export const updateSubject = async(data,id) => {
    try{
       return await axios.put(`${URL}/subjects/${id}`,data);
    }
    catch(err){
        console.log("Error occurs while running updatesubject function");
    }
};

// delete subject api
export const deleteSubject = async(id) => {
    try{
       return await axios.delete(`${URL}/subjects/${id}`);
    }
    catch(err){
        console.log("Error occurs while running deletesubject function");
    }
};