// import React from 'react';
// // import "./App.css";

// function AboutUs() {
//   return (
//     <div className='about us'>
//       <h1>About Us!</h1>
//     </div>
//   );
// }

// export default AboutUs;

import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Hydroponics</h1>
        <h2>What is Hydroponics?</h2>
        <br></br>
        <h5>
          Hydroponics combines the english words hydro, meaning water, and the
          greek word ponos, meaning labor, to describe this process of farming.
          This farming technique relies mainly on water to conduct the
          sustaining and maintaining of plants without the need for soil.
          However, this definition applies to plants that can be supported with
          gravel and other materials to provide structure.
        </h5>
        {/* <h2 className="subtopic">About Me</h2> */}
        <h2>What is Stem 'n' Leaf?</h2>
        {/* <h1>I'm Abdul Wahid Naafi</h1> */}
        {/* <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3> */}
        <br></br>
        <h5>
          Stem'n'Leaf is a modular hydroponics system designed to grow small
          plants. This system has a hardware and software component that works
          together to allow for the growth of a plant while being able to check
          it’s status through the internet on a laptop or other smart device. In
          order to create and monitor an environment sustaining growth, the
          hydroponics system will be modular with two main hardware components:
          a control and plant pod. There will be software components
          supplementing the hydroponics system that consist of a website, mobile
          application, database storage, a webserver, and micro controller
          processes. Our system fosters a “stem” and “leaf” concept where the
          control pod stores and can send nutrients to the garden pod. The
          control pod will contain the components necessary to supply and store
          nutrients for the plant within its garden pod. The garden pod will
          contain the plant and sensors that monitor the plant’s health and
          enough nutrients to maintain the plant growth independent of the
          central unit. The garden and control pod will be combined when plant
          pod resupply is necessary, but each unit will be able to operate
          separately. The intention is to allow for a more convenient system to
          allow for plant growth without the rest of the bulky components. The
          garden pod will be able to gather and communicate plant and nutrient
          data through a Wi-Fi and Bluetooth module that will be stored on an
          online database and viewed through a smart device or website. Our
          system will collect temperature, humidity, light, pH, and water
          levels. When the plant unit indicates an issue the user will be
          notified what the issue is so they can respond. The user will be able
          to connect the garden pod and control pod to resupply the garden pod.
          The garden pod can be scaled in quantity so that multiple units can
          resupply to a single control pod. All the components and subsystems
          working together should allow for a hydroponics system that is
          flexible to the user’s daily routine and living circumstances.
        </h5>
        {/* <h1 className="subtopic">About Me</h1> */}
        <h2> Why is hydroponics important?</h2>
        {/* <h1>I'm Abdul Wahid Naafi</h1> */}
        {/* <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3> */}
        <br></br>
        <h5>
          In the current times, hydroponics is a common investment for people to
          provide fresh food for themselves. The advantage of hydroponics is the
          reduction in water and space needed to grow plants. However, the
          disadvantage of hydroponics is the upfront cost, installation, and
          constant attention required. Hydroponics allows for higher plant
          density. While traditional farming requires large stretches of soil
          for plants to be put into the ground hydroponics takes a different
          approach to this. A hydroponic system can have an exponentially
          greater plant density than traditional farming techniques. While
          traditional farming requires the use of the ground and can only be
          planted at certain times of the year hydroponics can be planted year
          round. Hydroponic systems can also be stacked on top of each other or
          placed in very close proximity to one another without too many
          problems. This close proximity also helps with the germination of
          plants whereas in traditional farming farmers have to rely on insects
          and animals to germinate the plants. Hydroponic systems have the
          ability to control the specific set of nutrients that are involved in
          plant growth. Nutrients have always been an important part in plant
          growth and farmers have always used nutrients to change the
          composition of their soil with fertilizers and other types of soil
          helpers. Hydroponics farming allows for complete control over the
          nutrients that the plants encounter.
        </h5>

        <br></br>
      </div>
    );
  }
}
export default About;
