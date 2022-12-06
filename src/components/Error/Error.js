import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <h1 className="display-1">ERROR</h1>
                    <p className="lead">Something Get Error</p>
                    <Link to="/">
                      <i className="fa fa-arrow-left me-1"></i>
                      Return To HomePage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Error;
