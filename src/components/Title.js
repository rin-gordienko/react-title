import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return <h1 style={{ fontWeight: type }}>{name}</h1>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["normal", "bold"]),
};

export default Title;
