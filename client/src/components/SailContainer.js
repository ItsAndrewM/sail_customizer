import styled from "styled-components";
import SailingKind from "./SailingKind";
import SailingType from "./SailingType";
import SailsTime from "./SailsTime";
import SailRecommendation from "./SailRecommendation";
import SailRfq from "./SailRfq";
import SailKind from "./SailKind";
import { useState } from "react";
import Button from "./Button";

const SailContainer = () => {
  const [answer, setAnswer] = useState([]);
  const [count, setCount] = useState(0);

  const handleReset = (e) => {
    e.preventDefault();
    setCount(0);
    setAnswer([]);
  };

  return (
    <Wrapper>
      <SailingKind
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <SailingType
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <SailKind
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <SailsTime
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <SailRecommendation
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <SailRfq
        answer={answer}
        setAnswer={setAnswer}
        count={count}
        setCount={setCount}
      />
      <Container>
        <Button val={"reset"} handleClick={handleReset} />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export default SailContainer;
