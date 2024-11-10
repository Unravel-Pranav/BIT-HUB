
import axios from 'axios';
import React ,{useEffect, useState} from 'react';
import { deleteResource } from '../api/CrudApi';
import { useUserContext } from '../context/UserContext';


const BarComponent = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const { details } = useUserContext();
  useEffect(() => {
    // if token is not present, then redirect to the home page
    if (!localStorage.getItem("access_token")) {
      setEdit(false);
    } else {
      setEdit(true);
   
    }
  }, [details]);


  const downloadFile = async (id) => {
    try {
      const res = await axios.get(`https://bit-hub-22ky.onrender.com/api/download/${id}`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = data.filename.split("-")[1];

      link.click();
    } catch (error) {
      console.log(error);
    }
  };

const DeleteResource = async(id) =>{
  const data =await deleteResource(id)
console.log(data)
window.location.assign('/resource');
}

  return (
    <div className="d-flex justify-content-between align-items-center bg-white p-2">
      <span className="">{data.uploadedfilename}</span>
      <div>

        {edit && ((details.branch === data.branch) || (details.role === "admin")) ? (<button type="button" onClick={()=>DeleteResource(data._id)} className="btn btn-danger me-2">
          <i className="bi bi-trash"></i>
        </button>) : ("")}
      
        <button type="button" onClick={() =>downloadFile(data._id)} className="btn btn-success">

          <i className="bi bi-download"></i>
        </button>
      </div>
      
      {/* Conditionally render DocumentPreview */}
    </div>
  );
};

export default BarComponent;
