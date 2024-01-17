import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ProgramForm = ({
  setPrograms,
  programs,
  selectedProgram,
  addClick,
  setAddClick,
}) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [NameInput, setNameInput] = useState("");
  const [radioProgram, setRadioProgram] = useState("");
  const [radioRegistration, setRadioRegistration] = useState("");
  const [university, setUniversity] = useState("");
  const [certificate, setCertificate] = useState("");
  const [faculty, setFaculty] = useState("");
  const [duration, setDuration] = useState("");
  const [eligible, setEligible] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [editsave, seteditsave] = useState(false);

  useEffect(() => {
    // Update form fields when a program is selected
    if (!addClick) {
      setSelectedPrice(selectedProgram.selectedPrice);
      setSelectedDomain(selectedProgram.selectedDomain);
      setCheckbox(selectedProgram.checkbox);
      setNameInput(selectedProgram.name);
      setRadioProgram(selectedProgram.radioProgram);
      setRadioRegistration(selectedProgram.radioRegistration);
      setUniversity(selectedProgram.university);
      setCertificate(selectedProgram.certificate);
      setFaculty(selectedProgram.faculty);
      setDuration(selectedProgram.duration);
      setEligible(selectedProgram.eligible);
      setImage(selectedProgram.image);
      setDescription(selectedProgram.description);
    } else {
      setAddClick(false);
      setSelectedPrice("");
      setSelectedDomain("");
      setCheckbox(false);
      setNameInput("");
      setRadioProgram("");
      setRadioRegistration("");
      setUniversity("");
      setCertificate("");
      setFaculty("");
      setDuration("");
      setEligible("");
      setImage("");
      setDescription("");
    }
  }, [selectedProgram, addClick, setAddClick]);

  const handleSelectPrice = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleSelectDomain = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckbox(event.target.checked);
  };

  const handleName = (event) => {
    setNameInput(event.target.value);
  };

  const handleProgram = (event) => {
    setRadioProgram(event.target.value);
  };

  const handleRegistration = (event) => {
    setRadioRegistration(event.target.value);
  };

  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const handleCertificate = (event) => {
    setCertificate(event.target.value);
  };

  const handleFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleEligiblity = (event) => {
    setEligible(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDelete = () => {
    // Implement logic for delete action
    console.log("Deleted");
  };

  const handleEdit = () => {
    // Implement logic for delete action
    console.log("Edited");
    seteditsave(true);
  };

  const handleSave = async () => {
    if(NameInput &&  radioProgram && radioRegistration && university && certificate && faculty  && duration && eligible && image && description && selectedPrice && selectedDomain ){
    console.log(
      JSON.stringify({
        name: NameInput,
        program_type: radioProgram,
        registration_open: radioRegistration,
        university,
        certificate,
        faculty,
        duration,
        eligible_criteria: eligible,
        image_url: image,
        description,
        selectedPrice,
        selectedDomain,
        checkbox,
      })
      
    );
    const a=JSON.stringify({
      name: NameInput,
      program_type: radioProgram,
      registration_open: radioRegistration,
      university,
      certificate,
      faculty,
      duration,
      eligible_criteria: eligible,
      image_url: image,
      description,
      selectedPrice,
      selectedDomain,
      checkbox,
    });
    setPrograms([...programs, a]);
    try {
      const response = await axios.post("http://127.0.0.1:5000/hero/create", {
        name: NameInput,
        program_type: radioProgram,
        registration_open: radioRegistration,
        university,
        certificate,
        faculty,
        duration,
        eligible_criteria: eligible,
        image_url: image,
        description,
        selectedPrice,
        selectedDomain,
        checkbox,
      });

      if (response.ok) {
        console.log("Program saved successfully!");

        // Update the list of programs
        const newProgram = await response.json();
        setPrograms([...programs, newProgram]);
        // onSaveProgram(newProgram);
        {console.log(programs)}
        // Clear the form fields
        setSelectedPrice("");
        setSelectedDomain("");
        setCheckbox(false);
        setNameInput("");
        setRadioProgram("");
        setRadioRegistration("");
        setUniversity("");
        setCertificate("");
        setFaculty("");
        setDuration("");
        setEligible("");
        setImage("");
        setDescription("");

        // Optionally, close the popup or perform any other UI updates
        // setSelectedProgram(null);
      } else {
        console.error("Failed to save program");
        // Handle error
      }
    } catch (error) {
      console.error("Error while saving program:", error);
      // Handle error
    }

    }
    else{
      alert("Please fill the required fields");
    }
  };

  return (
    <div>
      <h1>Add program</h1>
      <div>* Required to save as program</div>
      <form>
        <h2> Confirm Program</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <label htmlFor="dropdown1">*Price</label>
            <br />
            <select
              id="dropdown1"
              value={selectedPrice}
              onChange={handleSelectPrice}
              className="chote-dabbe"
            >
              <option value="">Select...</option>
              <option value="INR 50,000">INR 50,000</option>
              <option value="INR 100,000">INR 100,000</option>
              <option value="INR 150,000">INR 150,000</option>
              <option value="INR 200,000">INR 200,000</option>
            </select>
            <br />
            You are licensed to sell on this price
          </div>

          <div>
            <label htmlFor="dropdown2">*Domain</label>
            <br />
            <select
              id="dropdown2"
              value={selectedDomain}
              onChange={handleSelectDomain}
              className="chote-dabbe"
            >
              <option value="">Select...</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Web3">Web3</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Data">Data</option>
            </select>
            <br />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id="checkbox"
              checked={checkbox}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="checkbox"
              style={{ marginLeft: "8px", fontSize: "14px" }}
            >
              Placement Assurance
            </label>
          </div>
        </div>
        <h2> Information</h2>
        <div className="can" style={{ display: "flex", gap: "20px" }}>
          <div>
            <label htmlFor="textInput">*Name: </label>
            <br />
            <input
              type="text"
              id="name"
              value={NameInput}
              onChange={handleName}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            />
          </div>

          <div>
            <label>*Program Type</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="FT"
                  checked={radioProgram === "FT"}
                  onChange={handleProgram}
                  disabled={selectedProgram && !editsave ? true : false}
                />
                FT
              </label>
              <label>
                <input
                  type="radio"
                  value="PT"
                  checked={radioProgram === "PT"}
                  onChange={handleProgram}
                  disabled={selectedProgram && !editsave ? true : false}
                />
                PT
              </label>
            </div>
          </div>

          <div>
            <label>*Registration Open</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="Yes"
                  checked={radioRegistration === "Yes"}
                  onChange={handleRegistration}
                  disabled={selectedProgram && !editsave ? true : false}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  checked={radioRegistration === "No"}
                  onChange={handleRegistration}
                  disabled={selectedProgram && !editsave ? true : false}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="can" style={{ display: "flex", gap: "20px" }}>
          <div>
            <label htmlFor="dropdown1">*University Name/Partner</label>
            <br />
            <select
              id="dropdown1"
              value={university}
              onChange={handleUniversity}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="dropdown2">*Certificate or Diploma</label>
            <br />
            <select
              id="dropdown2"
              value={certificate}
              onChange={handleCertificate}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            >
              <option value="">Select...</option>
              <option value="certificate">Certificate</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>

          <div>
            <label htmlFor="textField">*Faculty Profile</label>
            <br />
            <input
              type="text"
              id="textField"
              value={faculty}
              onChange={handleFaculty}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            />
          </div>
        </div>

        <div className="can" style={{ display: "flex", gap: "20px" }}>
          <div>
            <label htmlFor="input1">*Learning Hours/ Duration</label>
            <br />
            <input
              type="text"
              id="input1"
              value={duration}
              onChange={handleDuration}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            />
          </div>

          <div>
            <label htmlFor="input2">*Eligible Criteria</label>
            <br />
            <input
              type="text"
              id="input2"
              value={eligible}
              onChange={handleEligiblity}
              readOnly={selectedProgram && !editsave ? true : false}
              className="chote-dabbe"
            />
          </div>

          <div>
            <label htmlFor="input3">*Image URL</label>
            <br />
            <input
              type="text"
              id="input3"
              value={image}
              onChange={handleImage}
              className="chote-dabbe"
              readOnly={selectedProgram && !editsave ? true : false}
            />
          </div>
        </div>

        <div className="can">
          <label htmlFor="description">*Description:</label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            style={{ width: "65vw", height: "20vh" }}
            readOnly={selectedProgram && !editsave ? true : false}
          />
        </div>

        {/* Right Buttons - Save Draft and Save */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Delete Button */}
          <button type="button" onClick={handleDelete}>
            Delete
          </button>

          {/* Save Draft and Save Buttons */}
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleEdit}
              style={{ marginRight: "10px" }}
              disabled={selectedProgram && !editsave ? false : true}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={selectedProgram && !editsave ? true : false}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProgramForm;
