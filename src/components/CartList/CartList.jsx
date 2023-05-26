import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

import { getCartGoods } from "../../redux/selectors";
import { deleteFromCart } from "../../redux/operations";
import { getIsLoading } from "../../redux/selectors";
import Container from "../Container/Container";
import Modal from "../CartModal/CartModal.jsx";
import OrderCart from "../OrderCart/OrderCart";

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
  OrderWraper,
  OrderButton,
  Loader,
} from "./CartList.styled";

const CartList = () => {
  const [count, setCount] = useState({});
  const [summ, setSumm] = useState();
  const [showModal, setShowModal] = useState(false);

  const goodsList = useSelector(getCartGoods);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    const initialCount = goodsList.reduce((acc, { title }) => {
      acc[title] = 1;
      return acc;
    }, {});

    setCount(initialCount);
  }, [goodsList]);

  useEffect(() => {
    const totalPrice = goodsList.reduce(
      (acc, item) => acc + item.price * (count[item.title] || 0),
      0
    );

    setSumm(totalPrice);
  }, [count]);

  const handleClick = (id) => dispatch(deleteFromCart(id));

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCount((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleIncrement = (title, price) => {
    setCount((prevCount) => ({
      ...prevCount,
      [title]: (prevCount[title] || 0) + 1,
    }));

    setSumm((prevSumm) => prevSumm + Number(price));
  };

  const handleDecrement = (title, price) => {
    if (count[title] === 1) {
      return;
    }

    setCount((prevCount) => {
      const updatedCount = (prevCount[title] || 0) - 1;

      return {
        ...prevCount,
        [title]: Math.max(updatedCount, 0),
      };
    });

    setSumm((prevSumm) => prevSumm - Number(price));
  };

  const makeOrder = () => {
    setShowModal(true);
  };

  const modalClick = () => {
    setShowModal(false);
  };

  return (
    <Layout as={"main"}>
      <Container>
        {goodsList.length > 0 ? (
          <>
            <Title>Cart</Title>
            <Loader>{isLoading && <PropagateLoader color="orange" />}</Loader>
            <List>
              {goodsList.map(({ _id, title, url, price }) => (
                <Item key={_id} data-price={price}>
                  <Image src={url} alt={title} />
                  <FoodName>{title}</FoodName>
                  <PriceWraper>
                    <CounterWraper>
                      <Decrement
                        size={22}
                        onClick={() => handleDecrement(title, price)}
                      />
                      <CountInput
                        value={count[title] || 1}
                        onChange={handleChange}
                        name={title}
                      />
                      <Increment
                        size={22}
                        onClick={() => handleIncrement(title, price)}
                      />
                    </CounterWraper>
                    <Button type="button" onClick={() => handleClick(_id)}>
                      Delete
                    </Button>
                    <Price>
                      $
                      {(count[title] * Number(price)).toFixed(2).padStart(5, 0)}
                    </Price>
                  </PriceWraper>
                </Item>
              ))}
            </List>
            <div>
              <TotalPrice>
                Total price: <Total>${Number(summ).toFixed(2)}</Total>
              </TotalPrice>

              <OrderWraper>
                <Total>${Number(summ).toFixed(2)}</Total>

                <OrderButton type="button" onClick={makeOrder}>
                  Place order
                </OrderButton>
                <OrderButton type="button" onClick={() => navigate("/")}>
                  Сontinue shopping
                </OrderButton>
                {showModal && (
                  <Modal onClick={modalClick}>
                    <OrderCart />
                  </Modal>
                )}
              </OrderWraper>
            </div>
          </>
        ) : (
          <Title>Yout cart is empty</Title>
        )}
      </Container>
    </Layout>
  );
};

export default CartList;
