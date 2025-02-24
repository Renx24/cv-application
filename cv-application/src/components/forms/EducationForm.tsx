import { useState } from "react";
import { Education } from "../types.ts";

interface EducationFormProps {
  onAddEducation: (education: Education) => void;
}

const EducationForm = ({ onAddEducation }: EducationFormProps) => {
  const [education, setEducation] = useState<Education>({
    school: "",
    field: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEducation(education);
    setEducation({ school: "", field: "", fromDate: "", toDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded">
      <h4>Education</h4>
      <div className="mb-2">
        <input
          type="text"
          name="school"
          className="form-control"
          placeholder="Name of school, location"
          value={education.school}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="field"
          className="form-control"
          placeholder="Field of study"
          value={education.field}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex gap-2">
        <input
          type="text"
          name="fromDate"
          className="form-control"
          placeholder="From (year)"
          value={education.fromDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="toDate"
          className="form-control"
          placeholder="To (year)"
          value={education.toDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Add
      </button>
    </form>
  );
};

export default EducationForm;
