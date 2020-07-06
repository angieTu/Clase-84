import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 400px;
  height: 350px;
  margin: 0 auto;
`;

const ContainerResultado = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  align-items: center;
  display: flex;
}

  & > p {
    font-size: 40px;
    color: white;
    position: relative;
    left: 170px;
  }
`;

const Container = styled.div`
  display: flex;
`;

const ContainerNumeros = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;

  & :nth-child(13) {
    width: 198px;

    & > p {
      position: absolute;
      left: 157px;
    }
  }
`;

const Numeros = styled.div`
  width: 98px;
  height: 100px;
  background-color: #ccc7c7;
  align-items: center;
  display: flex;
  border: 0.5px solid gray;

  & > p {
    font-size: 30px;
  }
`;

const OperacionesEspeciales = styled(Numeros)`
  background-color: #797575;
`;

const ContainerOperaciones = styled.div`
  width: 100px;
  height: 100px;
`;

const Operaciones = styled(Numeros)`
  background-color: orange;
`;

const Texto = styled.p`
  margin: 0 auto;
`;

const Calculadora = () => {
  return (
    <BoxContainer>
      <ContainerResultado>
        <Texto>0</Texto>
      </ContainerResultado>
      <Container>
        <ContainerNumeros>
          <OperacionesEspeciales>
            <Texto>AC</Texto>
          </OperacionesEspeciales>
          <OperacionesEspeciales>
            <Texto>+ -</Texto>
          </OperacionesEspeciales>
          <OperacionesEspeciales>
            <Texto>%</Texto>
          </OperacionesEspeciales>
          <Numeros>
            <Texto>7</Texto>
          </Numeros>
          <Numeros>
            <Texto>8</Texto>
          </Numeros>
          <Numeros>
            <Texto>9</Texto>
          </Numeros>
          <Numeros>
            <Texto>4</Texto>
          </Numeros>
          <Numeros>
            <Texto>5</Texto>
          </Numeros>
          <Numeros>
            <Texto>6</Texto>
          </Numeros>
          <Numeros>
            <Texto>1</Texto>
          </Numeros>
          <Numeros>
            <Texto>2</Texto>
          </Numeros>
          <Numeros>
            <Texto>3</Texto>
          </Numeros>
          <Numeros>
            <Texto>0</Texto>
          </Numeros>
          <Numeros>
            <Texto>.</Texto>
          </Numeros>
        </ContainerNumeros>
        <ContainerOperaciones>
          <Operaciones>
            <Texto>/</Texto>
          </Operaciones>
          <Operaciones>
            <Texto>X</Texto>
          </Operaciones>
          <Operaciones>
            <Texto>-</Texto>
          </Operaciones>
          <Operaciones>
            <Texto>+</Texto>
          </Operaciones>
          <Operaciones>
            <Texto>=</Texto>
          </Operaciones>
        </ContainerOperaciones>
      </Container>
    </BoxContainer>
  );
};

export default Calculadora;
