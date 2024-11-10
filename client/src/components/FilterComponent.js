import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../pages/home/home.css";
import { getSubject } from "../api/SubjectCrudApi";


const FilterComponent = () => {
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [subjectList, setSubjectList] = useState([]);
  
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    getSubjectList();
  }, []);

  const getSubjectList = async () => {
    let res = await getSubject();
    setSubjectList(res.data);
  };
  return (
    <div className="container filter shadow rounded-3">
      <div className="row filterbar border rounded-3 p-3">
        {/* Semester dropdown */}
        <div className="col-md-6 mb-3">
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
        {/* Branch dropdown */}
        <div className="col-md-6 mb-3">
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
        {/* Resource Type */}
        <div className="col-md-6 mb-3">
          <select className="form-control border-0 border-bottom" value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}>
            <option disabled>Select Resource Type</option>
            <option value="paper">Question Paper</option>
            <option value="bank">Question Bank</option>
            <option value="book">Refernce Book</option>
            <option value="notes">Notes</option>
          </select>
        </div>
        {/* Subject dropdown */}
        {branch && semester && (
          <div className="col-md-6 mb-3">
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
        <div className="col-md-12 mb-2 w-100 d-flex justify-content-center">
          <Link to={`/resource/?semester=${semester}&branch=${branch}&resourceType=${resourceType}&subject=${selectedSubject}`} className="btn btn-success w-100 shadow-none me-lg-3 me-2 p-2">
            Find Resourse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;