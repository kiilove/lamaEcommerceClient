import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JNC</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati
          sit consequuntur asperiores officiis officia, maxime voluptate
          voluptates pariatur repellat quo quia adipisci, deleniti laboriosam,
          aliquam eaque beatae neque. Assumenda!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>바로가기</Title>
        <List>
          <ListItem>홈으로</ListItem>
          <ListItem>장바구니</ListItem>
          <ListItem>남성패션</ListItem>
          <ListItem>여성패션</ListItem>
          <ListItem>악세사리</ListItem>
          <ListItem>마이페이지</ListItem>
          <ListItem>주문관리</ListItem>
          <ListItem>관심상품</ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </Center>
      <Right>
        <Title>판매자정보</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          경기도 안양시 동안구 엘에스로 142 금정역SKV1센터 803호
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          070-7555-3695
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          manager@jncore.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
