import styled from "styled-components";
import { sailCustomizer } from "../data/sailCustomizer";
import Button from "./Button";

const SailRecommendation = ({ answer, setAnswer, count, setCount }) => {
  const handleClick = (e) => {
    const arr = [...answer];
    arr.push({
      question: sailCustomizer[4].question,
      answers: e.target.value,
    });
    setTimeout(() => {
      setCount(count + 1);
      setAnswer(arr);
    }, 2 * 1000);
  };

  return (
    count === 4 && (
      <Wrapper>
        {sailCustomizer[4].question && <H1>{sailCustomizer[4].question}</H1>}
        <Container>
          {sailCustomizer[4].answers &&
            sailCustomizer[4].answers.map((val, index) => {
              return <Button key={index} val={val} handleClick={handleClick} />;
            })}
        </Container>
      </Wrapper>
    )
  );
};

const H1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export default SailRecommendation;
