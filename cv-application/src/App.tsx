import { useState } from "react";
import Tabs from "./components/Tabs";
import EducationForm from "./components/forms/EducationForm";
import ProfileForm from "./components/forms/ProfileForm";
import Preview from "./components/Preview";
import {
  Contact,
  Profile,
  EmploymentHistory,
  Education,
  Skills,
} from "./components/types";

const App = () => {
  const [activeTab, setActiveTab] = useState<string>("Education");
  const [educationList, setEducationList] = useState<Education[]>([]);
  const [profileList, setProfileList] = useState<Profile[]>([]);
  const addEducation = (edu: Education) => {
    setEducationList([...educationList, edu]);
  };
  const addProfile = (profile: Profile) => {
    setProfileList([...profileList, profile]);
  };

  return (
    <div className="container mt-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="row">
        <div className="col-md-6">
          {activeTab === "Education" && (
            <EducationForm onAddEducation={addEducation} />
          )}
          {activeTab === "Profile" && <ProfileForm onAddProfile={addProfile} />}
        </div>

        <div className="col-md-6">
          <Preview educationList={educationList} />
        </div>
      </div>
    </div>
  );
};

export default App;
