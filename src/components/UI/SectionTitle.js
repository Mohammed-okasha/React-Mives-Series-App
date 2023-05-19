import { BiTv } from "react-icons/bi";

const SectionTitle = (props) => {
  return (
    <div className="section_title">
      <BiTv fontSize="2rem" />
      <h2 className="heading">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
