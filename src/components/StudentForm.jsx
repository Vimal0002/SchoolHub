function StudentForm({ onSubmitSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess();
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Student Registration Form</h2>
      <div className="divider"></div>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Student Name</label>
        <div className="row">
          <input className="input" placeholder="First" />
          <input className="input" placeholder="Last" />
        </div>

        {/* DOB */}
        <label>Date of Birth</label>
        <input type="date" className="input" />

        {/* Gender */}
        <label>Gender</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Female</label>
        </div>

        {/* Address */}
        <label>Address</label>
        <input className="input" placeholder="Street Address" />
        <input className="input" placeholder="Street Address Line 2" />

        <div className="row">
          <input className="input" placeholder="City" />
          <input className="input" placeholder="Region" />
        </div>

        <div className="row">
          <input className="input" placeholder="Postal / Zip Code" />
          <select className="input">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        {/* Contact */}
        <label>Email</label>
        <input className="input" type="email" />

        <label>Phone Number</label>
        <input className="input" type="tel" />

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
