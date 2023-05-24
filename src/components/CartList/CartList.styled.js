import styled from "@emotion/styled";

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
