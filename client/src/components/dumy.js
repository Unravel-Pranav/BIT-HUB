import React, { Component } from "react";

class DependentDropdown extends Component {
  state = {
    branch: "none",
    semester: "none",
    subject: "none",
    semesters: {
      cse: ["Semester 1", "Semester 2", "Semester 3"],
      ece: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
      // Add more semesters for other branches
    },
    subjects: {
      cse: {
        "Semester 1": ["Subject 1", "Subject 2", "Subject 3"],
        "Semester 2": ["Subject 4", "Subject 5", "Subject 6"],
        // Add subjects for other semesters in CSE
      },
      ece: {
        "Semester 1": ["Subject A", "Subject B", "Subject C"],
        "Semester 2": ["Subject X", "Subject Y", "Subject Z"],
        // Add subjects for other semesters in ECE
      },
      // Add subjects for other branches
    },
  };

  handleBranchChange = (event) => {
    const selectedBranch = event.target.value;
    this.setState({
      branch: selectedBranch,
      semester: "none",
      subject: "none",
    });
  };

  handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    this.setState({
      semester: selectedSemester,
      subject: "none",
    });
  };

  render() {
    const { branch, semester, subject, semesters, subjects } = this.state;

    const branchOptions = [
      { value: "none", label: "Select Branch" },
      { value: "cse", label: "Computer Science" },
      { value: "ece", label: "Electronics & Communication" },
      // Add more branches as needed
    ];

    const semesterOptions = semesters[branch]?.map((sem) => (
      <option key={sem} value={sem}>
        {sem}
      </option>
    ));

    const subjectOptions = subjects[branch]?.[semester]?.map((sub) => (
      <option key={sub} value={sub}>
        {sub}
      </option>
    ));

    return (
      <div>
        <label htmlFor="branch">Select Branch:</label>
        <select id="branch" value={branch} onChange={this.handleBranchChange}>
          {branchOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="semester">Select Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={this.handleSemesterChange}
          disabled={branch === "none"}
        >
          <option value="none">Select Semester</option>
          {semesterOptions}
        </select>

        <label htmlFor="subject">Select Subject:</label>
        <select
          id="subject"
          value={subject}
          disabled={semester === "none"}
        >
          <option value="none">Select Subject</option>
          {subjectOptions}
        </select>
      </div>
    );
  }
}

export default DependentDropdown;
