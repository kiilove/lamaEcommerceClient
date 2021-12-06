import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({ alignContent: "flex-start", maxHeight: "30px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justfyContent: "center" })}
`;

const Language = styled.span`
  font-size: 17px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  font-size: 13px;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>통합검색</Language>
          <SearchContainer>
            <Input placeholder="검색" />
            <Search style={{ color: "gray", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>JNC</Logo>
        </Center>
        <Right>
          <MenuItem>회원가입</MenuItem>
          <MenuItem>로그인</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;