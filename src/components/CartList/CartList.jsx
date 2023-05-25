import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getCartGoods } from "../../redux/selectors";
import { deleteFromCart } from "../../redux/operations";
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
  CountInput,
  CounterWraper,
  Increment,
  Decrement,
} from "./CartList.styled";
import { useState } from "react";

const CartList = () => {
  const [count, setCount] = useState({});
  const dispatch = useDispatch();
  const goodsList = useSelector(getCartGoods);
  const totalPrice = goodsList.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    const initialCount = goodsList.reduce((acc, { title }) => {
      acc[title] = 1;
      return acc;
    }, {});
    setCount(initialCount);
  }, [goodsList]);

  const handleClick = (id) => dispatch(deleteFromCart(id));

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCount((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleIncrement = (title) => {
    setCount((prevState) => ({
      ...prevState,
      [title]: (prevState[title] || 0) + 1,
    }));
  };

  const handleDecrement = (title) => {
    setCount((prevState) => {
      const updatedCount = (prevState[title] || 0) - 1;
      return {
        ...prevState,
        [title]: Math.max(updatedCount, 0),
      };
    });
  };

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
                    <CounterWraper>
                      <Decrement
                        size={22}
                        onClick={() => handleDecrement(title)}
                      />
                      <CountInput
                        value={count[title] || 1}
                        onChange={handleChange}
                        name={title}
                      />
                      <Increment
                        size={22}
                        onClick={() => handleIncrement(title)}
                      />
                    </CounterWraper>
                    <Button type="button" onClick={() => handleClick(_id)}>
                      Delete
                    </Button>
                    <Price>${price.toFixed(2).padStart(5, 0)}</Price>
                  </PriceWraper>
                </Item>
              ))}
            </List>
            <TotalPrice>
              Total price: <Total>${totalPrice.toFixed(2)}</Total>
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
