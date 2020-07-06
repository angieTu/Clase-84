import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`;

const ContainerBox = styled(Container)`
  width: 30%;
  border: 1px solid grey;
  padding: 22px;
`;

const ContainerColor = styled(Container)`
  height: 200px;
`;

const Text = styled.p`
  color: grey;
`;
const ContainerPicker = styled(Container)`
  display: flex;
`;
const TextContainer = styled(Container)`
  & > p {
    font-weight: bold;
  }
  &:nth-child(1) > div {
    border: 1px solid blue;
  }
  & > div {
    border: 1px solid #dfdbdb;
    padding: 7px 16px;
  }
`;

const ContainerColors = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  & > p {
    width: 100%;
  }

  & > ${Container} {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const ColorPicker = () => {
  return (
    <ContainerBox>
      <Text>COLOR PICKER</Text>
      <ContainerColor color="pink" />
      <ContainerPicker>
        <TextContainer>
          <Text>HEX</Text>
          <Container>#45EEDI</Container>
        </TextContainer>
        <TextContainer>
          <Text>R</Text>
          <Container>69</Container>
        </TextContainer>
        <TextContainer>
          <Text>G</Text>
          <Container>238</Container>
        </TextContainer>
        <TextContainer>
          <Text>B</Text>
          <Container>209</Container>
        </TextContainer>
        <TextContainer>
          <Text>ALPHA</Text>
          <Container>100</Container>
        </TextContainer>
      </ContainerPicker>
      <ContainerColors>
        <Text>RECENT</Text>
        <Container color="blue"></Container>
        <Container color="red"></Container>
        <Container color="yellow"></Container>
        <Container color="green"></Container>
        <Container color="pink"></Container>
        <Container color="brown"></Container>
      </ContainerColors>
    </ContainerBox>
  );
};

export default ColorPicker;
