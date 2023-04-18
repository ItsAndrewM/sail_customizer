import styled from "styled-components";
import { sailCustomizer } from "../data/sailCustomizer";
import SailButton from "./SailButton";
import { useState } from "react";

const SailKind = ({ answer, setAnswer, count, setCount }) => {
  const [selectedArr, setSelectedArr] = useState([]);
  const handleClick = (e) => {
    const arr = [...answer];
    arr.push({
      question: sailCustomizer[2].question,
      answers: selectedArr,
    });
    setTimeout(() => {
      setCount(count + 1);
      setAnswer(arr);
    }, 2 * 1000);
  };

  return (
    count === 2 && (
      <Wrapper>
        {sailCustomizer[2].question && <H1>{sailCustomizer[2].question}</H1>}
        <Container>
          {sailCustomizer[2].answers &&
            sailCustomizer[2].answers.map((val, index) => {
              return (
                <SailButton
                  key={index}
                  val={val}
                  handleClick={handleClick}
                  image={sailCustomizer[2].images[index]}
                  setSelectedArr={setSelectedArr}
                  selectedArr={selectedArr}
                />
              );
            })}
        </Container>
        <ButtonWrapper>
          <button onClick={handleClick}>next</button>
        </ButtonWrapper>
      </Wrapper>
    )
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

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

export default SailKind;
