import React, { useEffect, useState, Text } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";

function PropChangeWatch({ a, b }) {
  useEffect(() => {
    console.log("pH changed to", a);
    console.log("tds changed to", b);
  }, [a]);

  return <div></div>;
}

function SensorData() {
  const [sdata, setSdata] = useState([]);
  const [phField, setPH] = useState("");
  const [tdsField, setTDS] = useState("");

  useEffect(() => {
    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/appwebsite-uirte/service/sensorData/incoming_webhook/sensorData"
    )
      .then((response) => response.json())
      .then((data) => {
        const data_array = [];
        data_array[0] = data.sensors[0].temperature;
        data_array[1] = data.sensors[0].humidity;
        data_array[2] = data.sensors[0].waterlevel;
        data_array[3] = data.sensors[0].lightvalue;
        data_array[4] = data.sensors[0].tds;
        data_array[5] = data.sensors[0].ph;
        setSdata(data_array);
      })
      .catch((error) => console.error(error));
  }, []);

  const tableData = [
    { name: "Temperature (fahrenheit)", value: sdata[0] },
    { name: "Humidity (%)", value: sdata[1] },
    { name: "Water Level (inches)", value: sdata[2] },
    { name: "Light Level (on = 1, off = 0)", value: sdata[3] },
    { name: "Total Dissolved Solids (mg/l)", value: sdata[4] },
    { name: "ph (acidic 0 - basic 14)", value: sdata[5] },
  ];

  const tableHead = [
    {
      dataField: "name",
      text: "Sensors",
      sort: true,
    },
    {
      dataField: "value",
      text: "Readings",
    },
  ];

  const titleStyle = {
    marginLeft: "20px",
    marginRight: "20px",
    padding: "10px",
  };

  const tableStyle = {
    fontSize: 15,
  };

  return (
    <div style={titleStyle}>
      <h1>Sensor Data</h1>
      <div style={tableStyle}>
        <BootstrapTable
          bootstrap4
          striped
          hover
          bordered
          keyField="name"
          data={tableData}
          columns={tableHead}
        />
      </div>
      <br></br>
      <div>
        {/* <form>
          <h2>User Adjustments</h2>
          <input id="setpH" name="setpH" type="text" />
          <label style={tableStyle} htmlFor="setpH">
            Set desired pH Level
          </label>

          <input id="setTDS" name="setTDS" type="text" />
          <label style={tableStyle} htmlFor="setTDS">
            Set desired tds Level
          </label>
          <br></br>
          <br></br>
          <button style={tableStyle}>Set Adjustments</button>
          <PropChangeWatch a={phField} b={tdsField} />
        </form> */}
      </div>
    </div>
  );
}

export default SensorData;
