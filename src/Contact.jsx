import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    Fname: "",
    Phone: "",
    Email: "",
    Message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((Preval) => {
      return {
        ...Preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e)=>
  {
    e.preventDefault();

    alert(`My Name is ${data.Fname}. My Phone Number ${data.Phone} and Email is ${data.Email}. My Message Is Here ${data.Message}`);

  }
  

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="Fname"
                  onChange={InputEvent}
                  value={data.Fname}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Phone"
                  name="Phone"
                  onChange={InputEvent}
                  value={data.Phone}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Example@example.com"
                  name="Email"
                  onChange={InputEvent}
                  value={data.Email}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    id="textAreaExample"
                    rows="4"
                    placeholder="Enter Your Message Here..."
                    name="Message"
                    onChange={InputEvent}
                    value={data.Message}
                  />
                </div>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
