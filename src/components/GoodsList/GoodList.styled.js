import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2vw;
  padding: 0;
`;

export const Item = styled.li`
  padding-bottom: 12px;
  text-align: center;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.02;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
`;

export const ModalImg = styled.img`
  width: 350px;
  height: 350px;
`;

export const Name = styled.p`
  font-size: 22px;
`;

export const Price = styled.p`
  font-size: 22px;
`;

export const PriceText = styled.span`
  font-weight: 700;
`;

export const Layout = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
`;

export const GoodTitle = styled.p`
  margin-bottom: 6px;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const GoodPrice = styled.p`
  font-size: 26px;
  margin-bottom: 6px;
`;

export const StyledPrice = styled.span`
  font-weight: 700;
  color: orange;
`;

export const ButtonWraper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid orange;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :not(:last-child) {
    margin-right: 16px;
  }

  :hover {
    border: 1px solid red;
    scale: 1.1;
    background-color: orange;
    color: white;
    font-weight: 500;
  }
`;
