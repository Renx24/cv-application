import { Education } from "./types";

interface PreviewProps {
  educationList: Education[];
}

const Preview = ({ educationList }: PreviewProps) => {
  return (
    <div className="border p-3">
      <h4>Current CV</h4>
      {educationList.map((edu, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <strong>{edu.school}</strong> ({edu.fromDate} - {edu.toDate})
          <p>{edu.field}</p>
        </div>
      ))}
    </div>
  );
};

export default Preview;
