import React from "react";
import { Link } from "react-router-dom";

function DeadPage() {
  return (
    <div>
      <h1>
        404 Page Not Found, <Link to="/">Click to go home</Link>{" "}
      </h1>
    </div>
  );
}

export default DeadPage;
