import React, { Component } from 'react';
// import "./App.css";

var test_data = [];

class SensorData extends Component {
  
  state = {
    repos: [],
   isLoading: false
  };


  componentDidMount() {
    this.fetchData ();
  }

   fetchData = () => {

       //show progress bar
      this.setState({ isLoading: true });

      //fetch repos
      fetch(`https://secret-refuge-66400.herokuapp.com/api/sensor/getSensorData`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        test_data = data;
        if (Array.isArray(data)) {
          console.log(JSON.stringify(data));
          this.setState({ repos: data ,
                         isLoading: false});
        } else {
          this.setState({ repos: [],
                          isLoading: false  
                        });
        }
      });
  };

render(){
  const {sensordata} = this.state;

   return (
  <div className='settings'>
    <h1>Sensor Data</h1>
    <h1>{test_data}</h1>
  </div>
  );
}
}

export default SensorData;