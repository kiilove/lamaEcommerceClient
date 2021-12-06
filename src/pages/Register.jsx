import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.m-economynews.com/data/photos/20190832/art_15652282721272_e3819e.jpg"),
    center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            tenetur! Sequi totam odio est voluptates iure hic reiciendis labore,
            natus, vitae eius vel sapiente ea suscipit numquam eaque omnis nisi!
          </Agreement>
          <Button>회원가입</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
