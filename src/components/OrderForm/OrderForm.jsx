import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitOrder, removeBasket, fetchCart } from "../../redux/operations";

import {
  Form,
  Input,
  Wraper,
  SubmitButton,
  OrderTitle,
  ButtonWraper,
  LabelText,
} from "./OrderForm.styled";

const inintialValue = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data, { resetForm }) => {
    if (data === "") {
      return;
    }

    dispatch(submitOrder(data));

    setTimeout(() => {
      dispatch(fetchCart());
    }, 1000);

    resetForm();
    removeBasket();
  };
  return (
    <>
      <Wraper>
        <OrderTitle>Order form</OrderTitle>
        <Formik initialValues={inintialValue} onSubmit={handleSubmit}>
          <Form>
            <label>
              <LabelText>Name</LabelText>
              <Input type="text" name="name" placeholder="write your name" />
            </label>
            <label>
              <LabelText>Email</LabelText>
              <Input type="email" name="email" placeholder="write your email" />
            </label>
            <label>
              <LabelText>Phone</LabelText>
              <Input type="phone" name="phone" placeholder="write your phone" />
            </label>
            <label>
              <LabelText>Address</LabelText>
              <Input
                type="text"
                name="address"
                placeholder="write your address"
              />
            </label>
            <ButtonWraper>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonWraper>
          </Form>
        </Formik>
      </Wraper>
    </>
  );
};

export default OrderForm;
