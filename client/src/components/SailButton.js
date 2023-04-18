import { useState } from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SailButton = ({
  val,
  handleClick,
  image,
  setSelectedArr,
  selectedArr,
}) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = (e) => {
    e.preventDefault();
    if (selectedArr) {
      if (selected) {
        const foundIndex = selectedArr.findIndex((ele) => {
          return ele === val;
        });
        const arr = [...selectedArr];
        if (foundIndex === 0) {
          arr.shift();
        } else {
          let a = arr.splice(foundIndex, foundIndex);
        }

        setSelectedArr(arr);
        setSelected(false);
      } else {
        const arr = [...selectedArr];
        arr.push(val);
        setSelectedArr([...new Set(arr)]);
        setSelected(true);
      }
    }
  };

  return (
    <Container>
      <StyledButton
        value={val}
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleSelect}
      >
        {selected && <CheckCircleOutlineIcon />}

        <strong>{val}</strong>
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  height: 300px;
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

export default SailButton;
