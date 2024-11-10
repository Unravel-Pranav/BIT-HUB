import React, { useState, useEffect } from 'react'
import BarComponent from '../../components/OneResource'
import SidebarFilter from '../../components/SideFilterComponent';
import { fetchFile, fetchLateshFile } from '../../api/CrudApi';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ResultDisplay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const semesterURL = queryParams.get('semester');
  const branchURL = queryParams.get('branch');
  const resourceTypeURL = queryParams.get('resourceType');
  const subjectURL = queryParams.get('subject');


  const [fileUrls, setFileUrls] = useState([]);
  const [isget, setisget] = useState(false)

  const fetchFiles = async () => {
    const res = await fetchFile(semesterURL, branchURL, resourceTypeURL, subjectURL);
    setFileUrls(res.data);
    setisget(true);
    console.log(fileUrls)

  };

  const fetchlatestFiles = async () => {
    const res = await axios.get('http://localhost:8000/api/accpetedresource')
    // const res = await fetchLateshFile();
    setFileUrls(res.data.data);
    setisget(true);
    console.log(fileUrls)
  };

  useEffect(() => {
    if ((semesterURL && branchURL && resourceTypeURL && subjectURL)) {

      fetchFiles();
    }
    else {
      fetchlatestFiles();
    }

  }, [])




  const handleChildValue = (value) => {
    setFileUrls(value);
    if (value) {
      setisget(true);
    }
    else {
      setisget(false);
    }

  };
  return (
    <>
      <div className='container-fluid mt-4 mb-3'>
        <div className='row'>
          <div className='mx-2 col-md-3 shadow border rounded-3 p-4'>
            <SidebarFilter onChildValueChange={handleChildValue} />
          </div>
          {isget ? (<div className='col-md-8 '>
            {fileUrls.map((e) => (
              e.status === 'accept' && (
                <div key={e._id} className='container p-2 mb-2 border'>
                  <BarComponent key={e._id} data={e} />
                </div>
              )
            ))}

          </div>) : (<div className='col-md-8 '>
            <h1>No record found</h1>
          </div>)
          }
        </div>
      </div>
    </>
  )
}
