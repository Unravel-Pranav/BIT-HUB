import React, { useState, useEffect, useRef } from "react";
import { addSubject, getSubject, updateSubject, deleteSubject } from "../../api/SubjectCrudApi";

const AddSubject = () => {
  const initialSubjectData = {
    subname: "",
    subbranch: "",
    subsemester: ""
  };

  const [subjectData, setSubjectData] = useState(initialSubjectData);
  const [subjectList, setSubjectList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentSubjectId, setCurrentSubjectId] = useState(null);

  // Reference to the modal close button
  const modalRef = useRef(null);

  useEffect(() => {
    getSubjectList();
  }, []);

  const getSubjectList = async () => {
    let res = await getSubject();
    setSubjectList(res.data);
    console.log(res);
  };

  const onChangeHandler = (e) => {
    setSubjectData({ ...subjectData, [e.target.name]: e.target.value });
  };

  const onAddSubject = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateSubject(currentSubjectId, subjectData);
      } else {
        await addSubject(subjectData);
      }
      setSubjectData(initialSubjectData);
      getSubjectList();
      setIsEdit(false);
      setCurrentSubjectId(null);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditSubject = (subject) => {
    setSubjectData(subject);
    setIsEdit(true);
    setCurrentSubjectId(subject._id);
  };

  const onDeleteSubject = async (id) => {
    await deleteSubject(id);
    getSubjectList();
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.click();
    }
  };

  const updateSubjet = async(e) =>{
    e.preventDefault();
    try {
      const res = await updateSubject(subjectData, currentSubjectId);
      if (res.status === 200) {
        setIsEdit(false);
        getSubjectList();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-dark shadow-none me-lg-3 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#addSubject"
                >
                  {isEdit ? "Edit Subject" : "Add Subject"}
                </button>
              </th>
              <th>Subject Name</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjectList.map((subject) => (
              <tr key={subject._id}>
                <td></td>
                <td>{subject.subname}</td>
                <td>{subject.subbranch.charAt(0).toUpperCase() + subject.subbranch.slice(1).toLowerCase()} Engineering</td>
                <td>{subject.subsemester}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onEditSubject(subject)}
                    data-bs-toggle="modal"
                    data-bs-target="#addSubject"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => onDeleteSubject(subject._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


{/* subject modal */}
      <div
        className="modal fade"
        id="addSubject"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form >
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-circle fs-3 me-2"></i>
                  {isEdit ? "Edit Subject" : "Add Subject"}
                </h5>
                <button
                  type="reset"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={modalRef}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="mb-3">
                    <input
                      onChange={onChangeHandler}
                      value={subjectData.subname}
                      type="text"
                      name="subname"
                      placeholder="Enter Subject Name"
                      className="form-control border-0 border-bottom shadow-none"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <select
                        className="form-control border-0 border-bottom"
                        onChange={onChangeHandler}
                        value={subjectData.subbranch}
                        name="subbranch"
                      >
                        <option disabled value="">Select Branch</option>
                        <option value="computer">Computer Engineering</option>
                        <option value="civil">Civil Engineering</option>
                        <option value="electrical">Electrical Engineering</option>
                        <option value="mechanical">Mechanical Engineering</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <select
                        className="form-control border-0 border-bottom"
                        onChange={onChangeHandler}
                        value={subjectData.subsemester}
                        name="subsemester"
                      >
                        <option disabled value="">Select Semester</option>
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
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button
                    className="btn btn-dark shadow-none"
                    onClick={isEdit ? (e) => updateSubjet(e) : (e) => onAddSubject(e)}
                  >
                    {isEdit ? "Update Subject" : "Add Subject"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
