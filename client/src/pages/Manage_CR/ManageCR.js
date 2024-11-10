import React, { useState, useEffect, useRef } from "react";
import { addCR, getCR, updateCR, deleteCR } from "../../api/CRCrud";

const ManageCR = () => {
  const crData = {
    full_name: "",
    email: "",
    password: "",
    branch: "",
    sem: "",
  };

  const [crDataState, setCRDataState] = useState(crData);
  const [crList, setCRList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentCR, setCurrentCR] = useState(null);

  // Reference to the modal
  const modalRef = useRef(null);

  // Fetch data
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await getCR();
    console.log(res.data.data);
    setCRList(res.data.data);
    console.log(crList);
  };

  const onChangeHandler = (e) => {
    setCRDataState({ ...crDataState, [e.target.name]: e.target.value });
  };

  const onAddCR = async (e) => {
    e.preventDefault();
    try {
      console.log(crDataState);
      const res = await addCR(crDataState);
      if (res.status === 200) {
        getData();
        closeModal();
        window.location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

const onAddCr = () =>{
  setEditing(false);
  setCurrentCR('');
  setCRDataState(crData)
}

  const onEditCR = (cr) => {
    setEditing(true);
    setCurrentCR(cr);
    setCRDataState({
      full_name: cr.full_name,
      email: cr.email,
      branch: cr.branch,
      sem: cr.sem,
    });
  };

  const onUpdateCR = async (e) => {
    e.preventDefault();
    try {
      const res = await updateCR(crDataState, currentCR._id);
      if (res.status === 200) {
        setEditing(false);
        getData();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteCR = async (crId) => {
    const res = await deleteCR(crId);
    if (res.status === 200) {
      getData();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.click();
    }
  };

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
                  data-bs-target="#addCR"
                  onClick={() =>onAddCr()}
                >
                  Add CR
                </button>
              </th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {crList.map((cr) => (
              <tr key={cr._id}>
                <td></td>
                <td>{cr.full_name}</td>
                <td>{cr.email}</td>
                <td>{cr.branch}</td>
                <td>{cr.sem}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    data-bs-target="#addCR"
                    data-bs-toggle="modal"
                    onClick={() => onEditCR(cr)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => onDeleteCR(cr._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CR Modal Code */}
      <div
        className="modal fade"
        id="addCR"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={editing ? onUpdateCR : onAddCR}>
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-circle fs-3 me-2"></i>
                  {editing ? "Edit CR" : "Add CR"}
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
                      value={crDataState ? crDataState.full_name : ""}
                      type="text"
                      name="full_name"
                      placeholder="Enter Full Name"
                      className="form-control border-0 border-bottom shadow-none"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3">
                    <input
                      onChange={onChangeHandler}
                      value={crDataState ? crDataState.email : ""}
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control border-0 border-bottom shadow-none"
                    />
                  </div>
                </div>
                {!editing && (
                  <div className="row">
                    <div className="mb-3 ">
                      <input
                        onChange={onChangeHandler}
                        value={crDataState.password}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="form-control border-0 border-bottom shadow-none"
                      />
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <select
                        className="form-control border-0 border-bottom"
                        onChange={onChangeHandler}
                        name="branch"
                        value={crDataState ? crDataState.branch : ""}
                      >
                        <option disabled value="">
                          Select Branch
                        </option>
                        <option value="Computer">Computer Engineering</option>
                        <option value="Civil">Civil Engineering</option>
                        <option value="Electrical">Electrical Engineering</option>
                        <option value="Mechanical">Mechanical Engineering</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <select
                        className="form-control border-0 border-bottom"
                        onChange={onChangeHandler}
                        name="sem"
                        value={crDataState ? crDataState.sem : ""}
                      >
                        <option disabled value="">
                          Select Semester
                        </option>
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
                    onClick={editing ? (e) => onUpdateCR(e) : (e) => onAddCR(e)}
                  >
                    {editing ? "Update CR" : "Add CR"}
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

export default ManageCR;
