import axios from 'axios';

const URL = 'http://localhost:8000/api';

export const uploadFile = async(file,inputformData) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(inputformData));

    try {
      await axios.post(`${URL}/uploadresourse`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
};

export const getStudentResorce = async(semester,branch) =>{
  try{
    
    return await axios.get(`${URL}/studentresource`,{
      params :{
        semester,branch
      }
    });
 }
 catch(err){
     console.log("Error occurs while running fetchstudents function",err);
 }
}

export const fetchFile = async(semester, branch, resourceType,subject) =>{
  try{
    return await axios.get(`${URL}/resource`,{ params: {
      semester, branch, resourceType ,subject
    }});
 }
 catch(err){
     console.log("Error occurs while running fetchfiles function",err);
 }
}

export const fetchLateshFile = async() =>{
  try{
    return await axios.get(`${URL}/resources`);
 }
 catch(err){
     console.log("Error occurs while running fetchLateshFile function",err);
 }
}

export const downloadFile = async(id) =>{
  try {
    const res = await axios.get(
      `${URL}/download/${id}`,
      { responseType: "blob" }
    );
    const blob = new Blob([res.data], { type: res.data.type });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "file.pdf";
    // link.download = res.headers["content-disposition"].split("filename=")[1];
    link.click();
  } catch (error) {
    console.log(error);
  }
}

export const  deleteResource = async(id) =>{
  
  try{
    return await axios.delete(`${URL}/deleteresourse/${id}`);
 }
 catch(err){
     console.log("Error occurs while running fetchfiles function",err);
 }
}

export const  getData = async(id) =>{
  try{
    return await axios.get(`${URL}/getData/${id}`);
 }
 catch(err){
     console.log("Error occurs while running fetchfiles function",err);
 }
}

export const updateResource = async(id) =>{
  try{
    return await axios.patch(`${URL}/updatestatus/${id}`);
 }
 catch(err){
     console.log("Error occurs while running updating status function",err);
 }
}