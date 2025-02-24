import { useState } from "react";
import { Employment } from "../types.ts";

interface EmploymentFormProps {
  onAddEmployment: (employment: Employment) => void;
}

const EmploymentForm = ({ onAddEmployment }: EmploymentFormProps) => {
  const [employment, setEmployment] = useState<Employment>({
    company: "",
    position: "",
    achievements: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployment({ ...employment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEmployment(employment);
    setEmployment({
      company: "",
      position: "",
      achievements: "",
      responsibilities: "",
      fromDate: "",
      toDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded">
      <h4>Employment History</h4>
      <div className="mb-2">
        <input
          type="text"
          name="company"
          className="form-control"
          placeholder="Name of company, location"
          value={employment.company}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="position"
          className="form-control"
          placeholder="Position name"
          value={employment.position}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="achievements"
          className="form-control"
          placeholder="Achievements (optional)"
          value={employment.achievements}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="responsibilities"
          className="form-control"
          placeholder="Responsibilities"
          value={employment.responsibilities}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex gap-2">
        <input
          type="text"
          name="fromDate"
          className="form-control"
          placeholder="From date"
          value={employment.fromDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="toDate"
          className="form-control"
          placeholder="To date"
          value={employment.toDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Add
      </button>
    </form>
  );
};

export default EmploymentForm;
