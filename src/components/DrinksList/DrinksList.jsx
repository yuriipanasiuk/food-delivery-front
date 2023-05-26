import { useSelector, useDispatch } from "react-redux";
import { PropagateLoader } from "react-spinners";

import { getDrink, getDrinks, getDrinkIsLoading } from "../../redux/selectors";
import {
  fetchDrinkById,
  clearDrink,
  addDrinkToCart,
} from "../../redux/operations";
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
  Loader,
} from "./DrinksList.styled";

const DrinksList = () => {
  const drinks = useSelector(getDrinks);
  const drink = useSelector(getDrink);
  const dispatch = useDispatch();
  const isLoading = useSelector(getDrinkIsLoading);

  const handleClick = (id) => {
    dispatch(fetchDrinkById(id));
  };

  const handleAddToCart = (id) => {
    dispatch(addDrinkToCart(id));
    dispatch(clearDrink());
  };

  return (
    <Layout as={"main"}>
      <Container>
        <Title>drinks</Title>
        {isLoading ? (
          <Loader>
            <PropagateLoader color="orange" />
          </Loader>
        ) : (
          <List>
            {drinks.map(({ _id, title, price, url }) => (
              <Item key={_id}>
                <div onClick={() => handleClick(_id)}>
                  <Img src={url} alt={title} />
                  <Name>{title}</Name>
                  <Price>
                    Price:
                    <PriceText>${price}</PriceText>
                  </Price>
                </div>

                {Object.keys(drink).length > 0 && (
                  <CartModal onClick={() => dispatch(clearDrink())}>
                    <Wraper>
                      <ModalImg src={drink.url} alt={drink.title} />
                      <GoodTitle>{drink.title}</GoodTitle>
                      <GoodPrice>
                        Price: <StyledPrice>${drink.price}</StyledPrice>
                      </GoodPrice>
                      <ButtonWraper>
                        <Button
                          type="button"
                          onClick={() => handleAddToCart(drink._id)}
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
        )}
      </Container>
    </Layout>
  );
};

export default DrinksList;
