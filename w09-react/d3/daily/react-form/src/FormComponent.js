import React from "react";

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />
      <select name="destination" value={formData.destination} onChange={handleChange}>
        <option value="">-- Please Choose a Destination --</option>
        <option value="Japan">Japan</option>
        <option value="Australia">Australia</option>
        <option value="New Zealand">New Zealand</option>
      </select>
      <br />
      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free
      </label>
      <br />
      <button type="submit">Submit</button>
      <h2>Entered information:</h2>
      <p>Your name: {formData.firstName} {formData.lastName}</p>
      <p>Your age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>
      <p>
        Your dietary restrictions:
        <br />
        Lactose Free: {formData.lactoseFree ? "Yes" : "No"}
      </p>
    </form>
  );
}

export default FormComponent;