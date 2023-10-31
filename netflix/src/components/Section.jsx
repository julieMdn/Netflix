/* eslint-disable react/prop-types */
import Title from "./Title";
import Movie from "./Movie";

const Section = ({ name, view }) => {
  return (
    <section>
      <Title name={name} />
      <Movie view={view} />
    </section>
  );
};

export default Section;
