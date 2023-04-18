import styled from "styled-components";

const Button = ({ val, handleClick, image }) => {
  return !val.match("reset") ? (
    <Container>
      <StyledButton
        value={val}
        onClick={handleClick}
        style={{ backgroundImage: `url(${image})` }}
      >
        <strong>{val}</strong>
      </StyledButton>
    </Container>
  ) : (
    <Container>
      <ResetButton value={val} onClick={handleClick}>
        <strong>{val}</strong>
      </ResetButton>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  height: 300px;
`;

const ResetButton = styled.button`
  width: 50%;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  text-transform: capitalize;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-transform: capitalize;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
export default Button;
