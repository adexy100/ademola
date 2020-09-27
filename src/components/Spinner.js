import React from 'react';
import { withRouter } from "react-router-dom";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  )
}

export default withRouter(Spinner);