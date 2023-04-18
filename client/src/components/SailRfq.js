import styled from "styled-components";
import { sailCustomizer } from "../data/sailCustomizer";
import { boatModel } from "../data/boatModel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SailRfq = ({ answer, setAnswer, count, setCount }) => {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = answer;
    arr.push({ question: sailCustomizer[5].question, answers: formData });
    setAnswer(arr);
    navigate("/recommended", { state: { answers: answer } });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    count === 5 && (
      <Wrapper>
        {sailCustomizer[5].question && <H1>{sailCustomizer[5].question}</H1>}
        <Container>
          <Form onChange={handleChange}>
            {sailCustomizer[5].answers &&
              sailCustomizer[5].answers.map((val, index) => {
                return (
                  <SmallContainer key={index}>
                    {!val.label.match("boat model") ? (
                      <>
                        <Label>{val.label}: </Label>
                        <Input type={val.type} name={val.type}></Input>
                      </>
                    ) : (
                      <>
                        <Label>{val.label}: </Label>
                        <Select name={"boatModel"}>
                          <Option defaultValue={""}>
                            Select your boat model
                          </Option>
                          {boatModel.map((boat, index) => {
                            return (
                              <Option key={index} value={boat}>
                                {boat}
                              </Option>
                            );
                          })}
                        </Select>
                      </>
                    )}
                  </SmallContainer>
                );
              })}
            <ButtonWrapper>
              <button onClick={handleSubmit}>Submit</button>
            </ButtonWrapper>
          </Form>
        </Container>
      </Wrapper>
    )
  );
};

const Option = styled.option``;

const Label = styled.label``;

const Select = styled.select``;

const Input = styled.input``;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
  flex-direction: column;
  gap: 20;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

const SmallContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export default SailRfq;
