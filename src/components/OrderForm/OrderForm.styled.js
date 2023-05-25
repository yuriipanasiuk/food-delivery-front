import styled from "@emotion/styled";
import { Field, Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled(Field)`
  width: 500px;
  height: 30px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid orange;
  background-color: #ffc12c0d;

  outline: none;
  padding: 8px;
  font-size: 18px;

  ::placeholder {
    color: silver;
    font-size: 16px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 608px;
  border-radius: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid orange;
  background-color: white;
  font-size: 24px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: white;
    background-color: red;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
`;

export const OrderTitle = styled.p`
  text-align: center;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
`;

export const LabelText = styled.p`
  margin-left: 10px;
  margin-bottom: 4px;
`;
