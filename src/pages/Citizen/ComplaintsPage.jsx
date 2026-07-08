import { useState } from "react";
import CitizenLayout from "../../layouts/CitizenLayout";

function ComplaintsPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Category:", category);
    console.log("Description:", description);
    console.log("Location:", location);

    alert("Complaint Submitted Successfully");
    

  setTitle("");
  setCategory("");
  setDescription("");
  setLocation("");

};


  return (
    <CitizenLayout>
      <h1>Submit Complaint</h1>

      <form onSubmit={handleSubmit}>

        {/* Complaint Title */}
        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">
            Select Category
          </option>

          <option value="Water Supply">
            Water Supply
          </option>

          <option value="Road Damage">
            Road Damage
          </option>

          <option value="Street Light">
            Street Light
          </option>

          <option value="Garbage Collection">
            Garbage Collection
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <br /><br />

        {/* Description */}
        <textarea
          placeholder="Describe your complaint"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        {/* Location */}
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <br /><br />

        {/* Optional Image Upload */}
        <input
          type="file"
          accept="image/*"
        />

        <br /><br />

        {/* Submit Button */}
        <button type="submit">
          Submit Complaint
        </button>

      </form>
    </CitizenLayout>
  );
}

export default ComplaintsPage;