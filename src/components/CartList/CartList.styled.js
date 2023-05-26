import styled from "@emotion/styled";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

export const Layout = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const FoodName = styled.p`
  font-size: 18px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;

  margin-right: 30px;
`;

export const PriceWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

export const Price = styled.p`
  font-size: 18px;
  margin-left: 16px;
`;

export const TotalPrice = styled.p`
  text-align: right;
  font-size: 28px;
`;

export const Total = styled.span`
  margin-left: 16px;
  font-weight: 700;
  font-size: 28px;
`;

export const Button = styled.button`
  width: 80px;
  background-color: transparent;
  border: 1px solid orange;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: red;
    color: white;
    scale: 1.12;
  }
`;

export const CountInput = styled.input`
  width: 40px;
  height: 27px;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid silver;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
`;

export const CounterWraper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 16px;
`;

export const Increment = styled(BsPlusLg)`
  cursor: pointer;
  color: blue;

  :hover {
    scale: 1.2;
    color: orange;
  }
`;

export const Decrement = styled(AiOutlineMinus)`
  cursor: pointer;
  color: red;

  :hover {
    scale: 1.2;
    color: orange;
  }
`;

export const OrderWraper = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 24px;
  padding: 12px;

  align-items: center;
  justify-content: center;
  width: 600px;
  height: 100px;
  border: 1px solid orange;
  background-color: #ffc12c30;
  border-radius: 5px;
`;

export const OrderButton = styled.button`
  width: 200px;
  height: 40px;
  margin-left: 16px;
  border-radius: 5px;
  border: 1px solid orange;
  font-size: 22px;
  background-color: white;
  cursor: pointer;

  :hover {
    color: white;
    background-color: red;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
