import React, { useState, useEffect } from 'react';
import { fetchFile } from '../api/CrudApi';
import { getSubject } from "../api/SubjectCrudApi";


const SidebarFilter = (props) => {
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');


  const ApplyFilter = async () => {
    const res = await fetchFile(semester, branch, resourceType, selectedSubject);
    props.onChildValueChange(res.data);
  }
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    getSubjectList();
  }, []);

  const getSubjectList = async () => {
    let res = await getSubject();
    setSubjectList(res.data);
  };
  return (
    <div className="sidebar-filter">
      <h5>Filter Options</h5>
      <div className="mb-3">
        <select className="form-control border-0 border-bottom" id="semester" value={semester}
          onChange={(e) => setSemester(e.target.value)}>
          <option disabled defaultValue>Select Semester</option>
          <option value="1-Sem">1 Sem</option>
          <option value="2-Sem">2 Sem</option>
          <option value="3-Sem">3 Sem</option>
          <option value="4-Sem">4 Sem</option>
          <option value="5-Sem">5 Sem</option>
          <option value="6-Sem">6 Sem</option>
          <option value="7-Sem">7 Sem</option>
          <option value="8-Sem">8 Sem</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-control border-0 border-bottom" id="branch" value={branch}
          onChange={(e) => setBranch(e.target.value)}>
          <option disabled defaultValue>Select Branch</option>
          <option value="first">First Year</option>
          <option value="computer">Computer Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="electrical">Electrical Engineering</option>
          <option value="mechanical">Mechanical Engineering</option>
        </select>
      </div>

      {branch && semester && (
          <div className="mb-3">
            <select
              className="form-control border-0 border-bottom"
              value={selectedSubject} // Use selectedSubject for value
              onChange={(e) => setSelectedSubject(e.target.value)}
              required
            >
              <option value="">Select subject</option>
              {subjectList.map((subject) => {
                if (subject.subbranch === branch && subject.subsemester === semester) {
                  return (
                    <option key={subject.subname} value={subject.subname}>
                      {subject.subname}
                    </option>
                  );
                } else {
                  return null;
                }
              })}
            </select>
          </div>
        )}


      <div className="mb-3">
        <select className="form-control border-0 border-bottom"  value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}>
          <option >Select Resource Type</option>
            <option value="paper">Question Papers</option>
            <option value="bank">Question Bank</option>
            <option value="notes">Notes</option>
            <option value="book">Reference Books</option>
        </select>
      </div>

      <button className="btn btn-success w-100 shadow-none me-lg-3 me-2 p-2" onClick={ApplyFilter}>
        Find Resourses
      </button>

    </div>
  );
};

export default SidebarFilter;
