import styled from "styled-components";
import SailContainer from "./SailContainer";

const SailCustomizer = () => {
  return (
    <Wrapper>
      <H1>sail customizer</H1>
      <SailContainer />
    </Wrapper>
  );
};

const H1 = styled.h1``;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;
export default SailCustomizer;
