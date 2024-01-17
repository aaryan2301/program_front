import React from 'react';

const ProgramPopup = ({ program, onClose}) => {
  if (!program) {
    return null;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: 'white', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>{program.name}</h2>
      <p>Program Type: {program.program_type || 'N/A'}</p>
      <p>Registration Open: {program.registration_open ? 'Yes' : 'No'}</p>
      <p>University: {program.university || 'N/A'}</p>
      <p>Certificate/Diploma: {program.certificate || 'N/A'}</p>
      <p>Faculty: {program.faculty || 'N/A'}</p>
      <p>Learning Hours/Duration: {program.duration || 'N/A'}</p>
      <p>Eligible Criteria: {program.eligibility || 'N/A'}</p>
      <p>Image URL: {program.image || 'N/A'}</p>
      <p>Description: {program.description || 'N/A'}</p>
      {/* Add more fields as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProgramPopup;
