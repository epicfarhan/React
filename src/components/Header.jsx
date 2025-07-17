function Header({ text }) {
  return <div>{text}</div>;
}

Header.defaultProps = {
  text: "Feedback app",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
