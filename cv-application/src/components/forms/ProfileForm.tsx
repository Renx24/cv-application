import { useState } from "react";
import { Profile } from "../types.ts";

interface ProfileFormProps {
  onAddProfile: (profile: Profile) => void;
}

const ProfileForm = ({ onAddProfile }: ProfileFormProps) => {
  const [profile, setProfile] = useState<Profile>({
    profile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProfile(profile);
    setProfile({ profile: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded">
      <h4>Profile</h4>
      <div className="mb-2">
        <input
          type="text"
          name="profile"
          className="form-control"
          placeholder="Tell your potential employer a little bit about yourself"
          value={profile.profile}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Add
      </button>
    </form>
  );
};

export default ProfileForm;
