import { useSelector } from "react-redux";

import { getHistory } from "../../redux/selectors";
import Container from "../Container/Container";
import {
  Wraper,
  Title,
  HistoryWraper,
  List,
  Text,
  TextWtaper,
} from "./HistoryList.styled";

export const HistoryList = () => {
  const historyList = useSelector(getHistory);
  if (!historyList) return;

  return (
    <Wraper as={"main"}>
      <Container>
        <Title>History</Title>
        <List>
          {historyList.map((item) => (
            <li key={item._id}>
              <HistoryWraper>
                <Text>
                  Name: <TextWtaper>{item.name}</TextWtaper>
                </Text>
                <Text>
                  Email: <TextWtaper>{item.email}</TextWtaper>
                </Text>
                <Text>
                  Phone: <TextWtaper>{item.phone}</TextWtaper>
                </Text>
                <Text>
                  Address: <TextWtaper>{item.address}</TextWtaper>
                </Text>
              </HistoryWraper>
            </li>
          ))}
        </List>
      </Container>
    </Wraper>
  );
};
