import { useSelector, useDispatch } from "react-redux";

import { getGood, getGoods } from "../../redux/selectors";
import { fetchById, clearGood, addToCart } from "../../redux/operations";
import CartModal from "../CartModal/CartModal";
import Container from "../Container/Container";
import {
  List,
  Item,
  Title,
  Img,
  Name,
  Price,
  PriceText,
  Layout,
  Wraper,
  ModalImg,
  GoodTitle,
  GoodPrice,
  StyledPrice,
  ButtonWraper,
  Button,
} from "./GoodList.styled";

const GoodsList = () => {
  const goods = useSelector(getGoods);
  const good = useSelector(getGood);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(fetchById(id));
  };

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    dispatch(clearGood());
  };

  return (
    <Layout as={"main"}>
      <Container>
        <Title>burgers and rolls</Title>
        <List>
          {goods.map(({ _id, title, price, url }) => (
            <Item key={_id}>
              <div onClick={() => handleClick(_id)}>
                <Img src={url} alt={title} />
                <Name>{title}</Name>
                <Price>
                  Price:
                  <PriceText>${price.toFixed(2).padStart(5, 0)}</PriceText>
                </Price>
              </div>

              {Object.keys(good).length > 0 && (
                <CartModal onClick={() => dispatch(clearGood())}>
                  <Wraper>
                    <ModalImg src={good.url} alt={good.title} />
                    <GoodTitle>{good.title}</GoodTitle>
                    <GoodPrice>
                      Price: <StyledPrice>${good.price}</StyledPrice>
                    </GoodPrice>
                    <ButtonWraper>
                      <Button
                        type="button"
                        onClick={() => handleAddToCart(good._id)}
                      >
                        Add to cart
                      </Button>
                    </ButtonWraper>
                  </Wraper>
                </CartModal>
              )}
            </Item>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default GoodsList;
