import { useState } from "react";
import { Skills } from "../types.ts";

interface SkillsFormProps {
  onAddSkills: (skills: Skills) => void;
}

const SkillsForm = ({ onAddSkills }: SkillsFormProps) => {
  const [skills, setSkills] = useState<Skills>({
    skill: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkills({ ...skills, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSkills(skills);
    setSkills({ skill: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded">
      <h4>Skills</h4>
      <div className="mb-2">
        <input
          type="text"
          name="skill"
          className="form-control"
          placeholder="Skills"
          value={skills.skill}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Add
      </button>
    </form>
  );
};

export default SkillsForm;
