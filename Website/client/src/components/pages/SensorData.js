import React, { useEffect, useState } from 'react';

function SensorData() {

  const [sdata, setSdata] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    //fetch repos
    fetch(`https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/appwebsite-uirte/service/sensorData/incoming_webhook/sensorData`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const data_array = [];
      data_array[0] = data.sensors[0].temperature;
      data_array[1] = data.sensors[0].humidity;
      data_array[2] = data.sensors[0].waterlevel;
      data_array[3] = data.sensors[0].lightvalue;
      data_array[4] = data.sensors[0].tds;
      data_array[5] = data.sensors[0].ph;
      setSdata(data_array);
    });
  };
     return (
      <div className='settings'>
        <h1>Sensor Data</h1>
        <h1>{sdata}</h1>
      </div>
    );
}

export default SensorData;