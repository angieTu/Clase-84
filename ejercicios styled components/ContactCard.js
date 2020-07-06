import React from "react";
import styled from "styled-components";

const TEXT_SIZES = {
  sm: 16,
  md: 22,
  lg: 29,
};

const PADDING_SIZES = {
  sm: 21,
  md: 18,
  lg: 15,
};

const AVATAR_SIZES = {
  sm: 80,
  md: 95,
  lg: 105,
};

const Container = styled.div`
  border: 1px solid grey;
  display: flex;
  width: 32%;
  margin: 0 auto;
  padding: ${(props) => PADDING_SIZES[props.size]}px;
  align-items: center;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 37px;
  line-height: 5px;
`;

const Text = styled.p`
  font-size: ${(props) => TEXT_SIZES[props.size]}px;
`;

const Name = styled(Text)``;

const Email = styled(Text)``;

const Avatar = styled.img`
  width: ${(props) => AVATAR_SIZES[props.size]}px;
  border-radius: ${(props) =>
    props.avatarShape === "square" ? "10px" : "50%"};
  display: ${(props) => props.showAvatar === "false" && "none"};
  height: ${(props) => AVATAR_SIZES[props.size]}px;
`;

const ContactCard = ({ name, email, showAvatar, avatarShape, size }) => {
  return (
    <Container size="lg">
      <Avatar
        size="lg"
        showAvatar="true"
        avatarShape="rounded"
        src={`https://ui-avatars.com/api/?name=${name}`}
      ></Avatar>
      <ContainerInfo>
        <Name size="lg">{name}</Name>
        <Email size="lg">{email}</Email>
      </ContainerInfo>
    </Container>
  );
};

export default ContactCard;
