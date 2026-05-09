import React from "react";

function Signup() {
  return (
    <div className="container mt-5" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="text-center mb-4">
            <h1 className="fs-2">Signup now</h1>
            <p className="text-muted">
              Or track your existing{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                application
              </a>
            </p>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100 fs-5 p-2">
              Sign Up
            </button>
          </form>

          <p className="text-center text-muted mt-4 mb-5" style={{ fontSize: "12px" }}>
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
