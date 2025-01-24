import PropTypes from 'prop-types';

const CustomMessage = ({ message }) => {
  
  const messageText = message.message;

 
  const formattedMessage = messageText.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return <div className="custom-message">{formattedMessage}</div>;
};


CustomMessage.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired, 
  }).isRequired,
};

export default CustomMessage;
