import React from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";

function Main() {
  return (
      <div>
        <h1>Prayer Room</h1>
        <MDBBtn color="primary">
            <MDBIcon icon="plus" className="mr-1" /> Add Prayer
        </MDBBtn>
        <MDBBtn color="default">
            <MDBIcon icon="pray" className="mr-1" /> Pray Now
        </MDBBtn>
      </div>
  );
}

export default Main;
