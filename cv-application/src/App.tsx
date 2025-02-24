import { useState } from "react";
import Tabs from "./components/Tabs";
import EducationForm from "./components/forms/EducationForm";
import ProfileForm from "./components/forms/ProfileForm";
import ContactForm from "./components/forms/ContactForm";
import EmploymentForm from "./components/forms/EmploymentForm";
import SkillsForm from "./components/forms/SkillsForm";
import Preview from "./components/Preview";
import {
  Contact,
  Profile,
  Employment,
  Education,
  Skills,
} from "./components/types";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState<string>("Contact");

  const [educationList, setEducationList] = useState<Education[]>([]);
  const [employmentList, setEmploymentList] = useState<Employment[]>([]);
  const [profileList, setProfileList] = useState<Profile[]>([]);
  const [contactList, setContactList] = useState<Contact[]>([]);
  const [skillList, setSkillList] = useState<Skills[]>([]);

  const addEducation = (edu: Education) => {
    setEducationList([...educationList, edu]);
  };
  const addProfile = (profile: Profile) => {
    setProfileList([...profileList, profile]);
  };
  const addContact = (contact: Contact) => {
    setContactList([...contactList, contact]);
  };
  const addEmployment = (employment: Employment) => {
    setEmploymentList([...employmentList, employment]);
  };
  const addSkills = (skills: Skills) => {
    setSkillList([...skillList, skills]);
  };

  return (
    <div className="container mt-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="row">
        <div className="col-md-6">
          {activeTab === "Contact" && <ContactForm onAddContact={addContact} />}
          {activeTab === "Profile" && <ProfileForm onAddProfile={addProfile} />}
          {activeTab === "Employment history" && (
            <EmploymentForm onAddEmployment={addEmployment} />
          )}
          {activeTab === "Education" && (
            <EducationForm onAddEducation={addEducation} />
          )}
          {activeTab === "Skills" && <SkillsForm onAddSkills={addSkills} />}
        </div>

        <div className="col-md-6">
          <Preview
            educationList={educationList}
            contactList={contactList}
            profileList={profileList}
            employmentList={employmentList}
            skillList={skillList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
