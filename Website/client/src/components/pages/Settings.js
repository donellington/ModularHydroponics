import React from 'react';
// import "./App.css";

function Settings() {
  return (
    <div className='settings'>
      <h1>Settings</h1>
                  <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Change
            </button>
    </div>
  );
}

export default Settings;