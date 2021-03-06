import styled from "styled-components";

export const NewTaskButtonStyled = styled.button`
  color: #11586a;
  border: 0px;
  display: block;
  margin-left: 20px;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: white;
  font-size: xx-large;
  :hover {
    background-color: #11586a;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export const DeleteTaskButtonStyled = styled.button`
  color: red;
  border: 0px;
  display: block;
  margin-left: auto;
  margin-right: 20px;

  float: right;
  background-color: white;
  font-size: xx-large;
  :hover {
    background-color: red;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
