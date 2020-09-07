import React from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";

function Main() {
  return (
      <div>
        <h1>Prayer Room</h1>
        <MDBBtn color="secondary">
            <MDBIcon icon="plus" className="mr-1" /> Add Person
        </MDBBtn>
        <MDBBtn color="info">
            <MDBIcon icon="pray" className="mr-1" /> Pray Now
        </MDBBtn>
        <MDBBtn color="secondary">
            <MDBIcon icon="list" className="mr-1" /> View List
        </MDBBtn>
        <hr />
        <h3>How it works:</h3>
        <ol>
            <li>Add a new person to pray for</li>
            <li>Add things to pray about for that person</li>
            <li>Add relations of that person to another (commonly spouse)</li>
            <li>Pray for different categories and topics</li>
        </ol>
      </div>
  );
}

export default Main;
