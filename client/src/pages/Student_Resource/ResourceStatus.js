import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getStudentResorce,
  updateResource,
  deleteResource,
  fetchLateshFile,
} from "../../api/CrudApi";
import { useUserContext } from "../../context/UserContext";

const ManageStudentResources = () => {
  const { details } = useUserContext();
  const [loading, setLoading] = useState(false)
  const [resourceList, setResourceList] = useState([]);

  console.log(details)
  useEffect(() => {
    getResourceList();
  }, []);

  const getResourceList = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/studentresource/')
      setResourceList(res.data.data)
    } catch (error) {
      console.log(error)
    }

  };

  const onUpdateResource = async (id) => {
    setLoading(true);
    const res = await updateResource(id);
    if (res.status === 200) {
      getResourceList();
    }
    setLoading(false);
  };

  const onDeleteResource = async (resourceId) => {
    setLoading(true);
    const res = await deleteResource(resourceId);
    if (res.status === 200) {
      getResourceList();
    }
    setLoading(false);
  };


  const downloadFile = async (resource) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/download/${resource._id}`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = resource.filename.split("-")[1];

      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Author Name</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              Array.isArray(resourceList) && resourceList.length > 0 ? (
                resourceList.map((resource) =>
                  resource.status === "pending" && (
                    <tr key={resource._id}>
                      <td>{resource.authorName}</td>
                      <td>{resource.branch}</td>
                      <td>{resource.semester}</td>
                      <td>{resource.subject}</td>
                      <td>
                        <button type="button" onClick={() => downloadFile(resource)} className="btn btn-success">
                          <i className="bi bi-download"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => onUpdateResource(resource._id)}
                        >
                          Accepted
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => onDeleteResource(resource._id)}
                        >
                          Rejected
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No resources available
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageStudentResources;
