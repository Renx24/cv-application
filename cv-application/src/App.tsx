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
  const [skillsList, setSkillsList] = useState<Skills[]>([]);

  const addEducation = (edu: Education) => {
    setEducationList([...educationList, edu]);
  };
  const updateEducation = (index: number, updatedEdu: Education) => {
    setEducationList(
      educationList.map((edu, i) => (i === index ? updatedEdu : edu))
    );
  };
  const deleteEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const addContact = (contact: Contact) => {
    setContactList([...contactList, contact]);
  };
  const updateContact = (index: number, updatedContact: Contact) => {
    setContactList(
      contactList.map((profile, i) => (i === index ? updatedContact : profile))
    );
  };
  const deleteContact = (index: number) => {
    setContactList(contactList.filter((_, i) => i !== index));
  };

  const addEmployment = (employment: Employment) => {
    setEmploymentList([...employmentList, employment]);
  };
  const updateEmployment = (index: number, updatedEmployment: Employment) => {
    setEmploymentList(
      employmentList.map((employment, i) =>
        i === index ? updatedEmployment : employment
      )
    );
  };
  const deleteEmployment = (index: number) => {
    setEmploymentList(employmentList.filter((_, i) => i !== index));
  };

  const addProfile = (profile: Profile) => {
    setProfileList([...profileList, profile]);
  };
  const updateProfile = (index: number, updatedProfile: Profile) => {
    setProfileList(
      profileList.map((profile, i) => (i === index ? updatedProfile : profile))
    );
  };
  const deleteProfile = (index: number) => {
    setProfileList(profileList.filter((_, i) => i !== index));
  };

  const addSkills = (skills: Skills) => {
    setSkillsList([...skillsList, skills]);
  };
  const updateSkills = (index: number, updatedSkills: Skills) => {
    setSkillsList(
      skillsList.map((skills, i) => (i === index ? updatedSkills : skills))
    );
  };
  const deleteSkills = (index: number) => {
    setSkillsList(skillsList.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="row">
        <div className="col-md-6">
          {activeTab === "Contact" && (
            <ContactForm
              onAddContact={addContact}
              onUpdateContact={updateContact}
              onDeleteContact={deleteContact}
              contactList={contactList}
            />
          )}
          {activeTab === "Profile" && (
            <ProfileForm
              onAddProfile={addProfile}
              onUpdateProfile={updateProfile}
              onDeleteProfile={deleteProfile}
              profileList={profileList}
            />
          )}
          {activeTab === "Employment history" && (
            <EmploymentForm
              onAddEmployment={addEmployment}
              onUpdateEmployment={updateEmployment}
              onDeleteEmployment={deleteEmployment}
              employmentList={employmentList}
            />
          )}
          {activeTab === "Education" && (
            <EducationForm
              onAddEducation={addEducation}
              onUpdateEducation={updateEducation}
              onDeleteEducation={deleteEducation}
              educationList={educationList}
            />
          )}
          {activeTab === "Skills" && (
            <SkillsForm
              onAddSkills={addSkills}
              onUpdateSkills={updateSkills}
              onDeleteSkills={deleteSkills}
              skillsList={skillsList}
            />
          )}
        </div>

        <div className="col-md-6">
          <Preview
            educationList={educationList}
            contactList={contactList}
            profileList={profileList}
            employmentList={employmentList}
            skillList={skillsList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
