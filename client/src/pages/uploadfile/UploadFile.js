import React, { useState, useEffect } from "react";
import "./UploadFile.css";
import { uploadFile } from "../../api/CrudApi";
import { getSubject } from "../../api/SubjectCrudApi";
import { useUserContext } from '../../context/UserContext'
function UploadFile() {

  const [file, setFile] = useState(null);
  const { details } = useUserContext();

  const [inputformData, inputsetFormData] = useState({
    uploadedfilename: "",
    description: "",
    authorName: "",
    branch: "",
    semester: "",
    subject: "",
    resourceType: "",
    status: details[0] ? "accept" : "pending"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    inputsetFormData({
      ...inputformData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputformData)
    await uploadFile(file, inputformData);
    console.log(file, inputformData);
    inputsetFormData({
      uploadedfilename: "",
      description: "",
      authorName: "",
      branch: "",
      semester: "",
      subject: "",
      resourceType: "",
      status: ""
    });
    setFile("");
  };

  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    getSubjectList();
  }, []);

  const getSubjectList = async () => {
    let res = await getSubject();
    setSubjectList(res.data);
  };
  return (
    <>
      <div className="container mt-2">
        <div className="row d-flex justify-content-center">
          {/* Question Paper Card */}
          <div className="card bg-light mb-3 mx-3" style={{ "maxWidth": "18rem" }}>
            <div className="card-header">Question Paper</div>
            <div className="card-body">
              <p className="card-text">
                First Year - 10 <br />
                Computer Branch - 10 <br />
                Civil Branch - 10 <br />
                Electrical Branch - 10 <br />
                Mechanical Branch - 10 <br />
              </p>
            </div>
          </div>
          {/* Question Bank Card */}
          <div className="card bg-light mb-3 mx-3" style={{ "maxWidth": "18rem" }}>
            <div className="card-header">Question Bank</div>
            <div className="card-body">
              <p className="card-text">
                First Year - 10 <br />
                Computer Branch - 10 <br />
                Civil Branch - 10 <br />
                Electrical Branch - 10 <br />
                Mechanical Branch - 10 <br />
              </p>
            </div>
          </div>
          {/* Notes Card */}
          <div className="card bg-light mb-3 mx-3" style={{ "maxWidth": "18rem" }}>
            <div className="card-header">Notes</div>
            <div className="card-body">
              <p className="card-text">
                First Year - 10 <br />
                Computer Branch - 10 <br />
                Civil Branch - 10 <br />
                Electrical Branch - 10 <br />
                Mechanical Branch - 10 <br />
              </p>
            </div>
          </div>
          {/* Refrence Book Card */}
          <div className="card bg-light mb-3 mx-3" style={{ "maxWidth": "18rem" }}>
            <div className="card-header">Refrence Book</div>
            <div className="card-body">
              <p className="card-text">
                First Year - 10 <br />
                Computer Branch - 10 <br />
                Civil Branch - 10 <br />
                Electrical Branch - 10 <br />
                Mechanical Branch - 10 <br />
              </p>
            </div>
          </div>
        </div>
        <div className="row shadow d-flex justify-content-around py-3">
          {/* descprition for filling Inputs */}
          <div className="col-md-5 border p-3">
            <h1 className="mb-3">Filled Information</h1>
            <div className="mb-4">
              <strong>File Name:</strong> Question Paper 2023 Chemistry
            </div>
            <div className="mb-4">
              <strong>Author Name:</strong> Ayan Shiekh
            </div>
            <div className="mb-4">
              <strong>Resource Type:</strong> Question Paper
            </div>
            <div className="mb-4">
              <strong>Branch:</strong> First Year
            </div>
            <div className="mb-4">
              <strong>Semester:</strong> 1 Sem
            </div>
            <div className="mb-4">
              <strong>Subject:</strong> Chemistry
            </div>
            <div className="mb-4">
              <strong>Description:</strong> "Question Paper 2023 Chemistry from DBATU" refers to a question paper for the subject of Chemistry from Dr. Babasaheb Ambedkar Technological University (DBATU) for the year 2023. This question paper is a written assessment tool that is used to evaluate students' understanding of the subject and their ability to apply the concepts they have learned. It typically covers a range of topics within the field of chemistry that were taught during the corresponding academic year.
            </div>

          </div>
          {/* uploading resource form */}
          <div className="col-md-6  border p-3">
            <h1 >Upload New Resource</h1>


            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="uploadedfilename"
                  placeholder="Enter File Name"
                  value={inputformData.uploadedfilename}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="authorName"
                  name="authorName"
                  placeholder="Enter Author Name"
                  value={inputformData.authorName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <select
                  className="form-select border-0 border-bottom"
                  id="resourceType"
                  name="resourceType"
                  value={inputformData.resourceType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select resource type
                  </option>
                  <option value="paper">Question Paper</option>
                  <option value="bank">Question Bank</option>
                  <option value="book">Refernce Book</option>
                  <option value="notes">Notes</option>
                  {/* <!-- Add more options here --> */}
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select border-0 border-bottom"
                  id="branch"
                  name="branch"
                  value={inputformData.branch}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select branch
                  </option>
                  <option value="first">First Year</option>
                  <option value="computer">Computer Engineering</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  {/* <!-- Add more options here --> */}
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select border-0 border-bottom"
                  id="semester"
                  name="semester"
                  value={inputformData.semester}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select semester
                  </option>
                  <option value="1-Sem">1 Sem</option>
                  <option value="2-Sem">2 Sem</option>
                  <option value="3-Sem">3 Sem</option>
                  <option value="4-Sem">4 Sem</option>
                  <option value="5-Sem">5 Sem</option>
                  <option value="6-Sem">6 Sem</option>
                  <option value="7-Sem">7 Sem</option>
                  <option value="8-Sem">8 Sem</option>
                  {/* <!-- Add more options here --> */}
                </select>
              </div>
              {
                inputformData.branch && inputformData.semester && (
                  subjectList.map((subject) => {
                    if (
                      subject.subbranch === inputformData.branch &&
                      subject.subsemester === inputformData.semester
                    ) {
                      return (
                        <div className="mb-3" key={subject.subname}>
                          <select
                            className="form-select border-0 border-bottom"
                            id="subject"
                            name="subject"
                            value={inputformData.subject}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="" disabled>
                              Select subject
                            </option>

                            <option value={subject.subname}>{subject.subname}</option>
                          </select>
                        </div>
                      );
                    } else {
                      return null; // Render nothing if the condition is not met
                    }
                  })
                )
              }
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Enter Description"
                  value={inputformData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="custom-file">
                <input type="file" onChange={handleFileChange} className="custom-file-input mb-3" />
              </div>

              <button type="submit" className="btn btn-outline-dark shadow-none w-100">
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default UploadFile;
