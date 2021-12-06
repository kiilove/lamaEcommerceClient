import {
  Add,
  AirlineSeatReclineNormalRounded,
  Remove,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethod";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ flexDirection: "column", width: "80%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: space-between;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        res.data && setProduct(res.data);
        res.color && setColor(res.color[0]);
        res.size && setSize(res.size[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleDecrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    product.stock && quantity < product.stock
      ? setQuantity(quantity + 1)
      : setQuantity(product.stock);
  };

  const handleCart = () => {
    //update cart
    console.log({ id, color, size, quantity });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>
            {product.title}
            {color}
            {size}
          </Title>
          <Description>{product.desc}</Description>
          <Price>{product.price}원</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle style={{ marginRight: "10px" }}>색상</FilterTitle>
              {product.color &&
                product.color.map((item) => (
                  <FilterColor
                    color={item.toString()}
                    onClick={() => {
                      setColor(item);
                    }}
                  />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>사이즈</FilterTitle>
              <FilterSize
                onChange={(e) => {
                  e.preventDefault();
                  setSize(e.target.value);
                }}
              >
                {product.size &&
                  product.size.map((item) => (
                    <FilterSizeOption value={item.toString()}>
                      {item.toString()}
                    </FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={handleDecrease} style={{ cursor: "pointer" }} />
              <Amount>{quantity}</Amount>
              <Add onClick={handleIncrease} style={{ cursor: "pointer" }} />
              <Button onClick={handleCart}>장바구니</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
