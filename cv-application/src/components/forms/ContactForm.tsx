import { useState } from "react";
import { Contact } from "../types.ts";

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

const ContactForm = ({ onAddContact }: ContactFormProps) => {
  const [contact, setContact] = useState<Contact>({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact(contact);
    setContact({
      fullName: "",
      phoneNumber: "",
      email: "",
      location: "",
      linkedin: "",
      github: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded">
      <h4>Contact</h4>
      <div className="mb-2">
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Full name"
          value={contact.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          placeholder="Phone number"
          value={contact.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Location (Country, State, City)"
          value={contact.location}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="linkedin"
          className="form-control"
          placeholder="LinkedIn (optional)"
          value={contact.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="github"
          className="form-control"
          placeholder="Github (optional)"
          value={contact.github}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
