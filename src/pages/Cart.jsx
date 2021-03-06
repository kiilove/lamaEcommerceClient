import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;
const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px", marginBottom: "10px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({ fontWeight: "100", fontSize: "10px" })}
`;

const TopTexts = styled.div`
  ${mobile({ marignBottom: "10px" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;

  ${mobile({ fontWeight: "100", fontSize: "10px" })}
`;
const Bottom = styled.div`
  display: flex;

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const Image = styled.img`
  width: 150px;
  ${mobile({ width: "100%" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: normal;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-size: 30px;
  font-weight: normal;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>????????????</Title>
        <Top>
          <TopButton>??????????????????</TopButton>
          <TopTexts>
            <TopText>????????????(2)</TopText>
            <TopText>???????????????(0)</TopText>
          </TopTexts>
          <TopButton type="filled">????????????</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/img/cart1.png" />
                <Details>
                  <ProductName>
                    <b>?????????: </b> ????????? ?????????
                  </ProductName>
                  <ProductId>
                    <b>????????????: </b> 7399912
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>?????????: </b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>35,000???</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="/img/cart3.png" />
                <Details>
                  <ProductName>
                    <b>?????????: </b> ?????? ??????
                  </ProductName>
                  <ProductId>
                    <b>????????????: </b> 23993412
                  </ProductId>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>?????????: </b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>35,000???</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>????????????</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>????????????</SummaryItemText>
              <SummaryItemPrice>70,000???</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>?????????</SummaryItemText>
              <SummaryItemPrice>????????????</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryItemText>????????????</SummaryItemText>
              <SummaryItemPrice>70,000???</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>????????????</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
