import { useSelector } from "react-redux";

import { getCartGoods } from "../../redux/selectors";
import Container from "../Container/Container";

import {
  Layout,
  Title,
  List,
  Item,
  Image,
  PriceWraper,
  TotalPrice,
  Total,
  FoodName,
  Price,
  Button,
} from "./CartList.styled";

const CartList = () => {
  const goodsList = useSelector(getCartGoods);
  const totalPrice = goodsList.reduce((acc, item) => acc + item.price, 0);

  return (
    <Layout as={"main"}>
      <Container>
        {goodsList.length > 0 ? (
          <>
            <Title>Cart</Title>
            <List>
              {goodsList.map(({ _id, title, url, price }) => (
                <Item key={_id}>
                  <Image src={url} alt={title} />
                  <FoodName>{title}</FoodName>
                  <PriceWraper>
                    <Button type="button">Delete </Button>
                    <Price>${price.toFixed(2).padStart(5, 0)}</Price>
                  </PriceWraper>
                </Item>
              ))}
            </List>
            <TotalPrice>
              Total price: <Total>${totalPrice}</Total>
            </TotalPrice>
          </>
        ) : (
          <Title>Yout cart is empty</Title>
        )}
      </Container>
    </Layout>
  );
};

export default CartList;

//TODO: add good counter