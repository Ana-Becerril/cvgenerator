const Button = ({ text, onClick, primary, secondary, red }) => {
    return (
      <ButtonWrapper
        onClick={onClick}
        primary={primary}
        secondary={secondary}
        red={red}
      >
        {text}
      </ButtonWrapper>
    );
  };

  export default Button;

