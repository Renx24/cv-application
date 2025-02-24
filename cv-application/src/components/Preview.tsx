import { Contact, Profile, Employment, Education, Skills } from "./types";

interface PreviewProps {
  contactList: Contact[];
  profileList: Profile[];
  employmentList: Employment[];
  educationList: Education[];
  skillList: Skills[];
}

const Preview = ({
  educationList,
  contactList,
  employmentList,
  profileList,
  skillList,
}: PreviewProps) => {
  return (
    <div className="border p-3">
      <h4>Current CV</h4>
      <br />
      {contactList.map((contact, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <p>
            <h6>Contact</h6>
            {contact.fullName}
            <br />
            {contact.phoneNumber}
            <br />
            {contact.email}
            <br />
            {contact.location}
            <br />
            {contact.linkedin && (
              <>
                {contact.linkedin} <br />
              </>
            )}
            {contact.github && <>{contact.github}</>}
          </p>
        </div>
      ))}
      {educationList.map((edu, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <h6>Education</h6>
          <strong>{edu.school}</strong> ({edu.fromDate} - {edu.toDate})
          <p>{edu.field}</p>
        </div>
      ))}
      {profileList.map((profile, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <h6>Profile</h6>
          <p>{profile.profile}</p>
        </div>
      ))}
      {employmentList.map((employment, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <h6>Employment history</h6>
          <strong>{employment.company}</strong> ({employment.fromDate} -{" "}
          {employment.toDate})
          <p>
            <i>{employment.position}</i>
          </p>
          {employment.achievements && (
            <>
              <>
                {employment.achievements} <br />
              </>
            </>
          )}
          {employment.responsibilities}
        </div>
      ))}
      {skillList.map((skills, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <ul>
            Skills
            <li>{skills.skill}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Preview;
