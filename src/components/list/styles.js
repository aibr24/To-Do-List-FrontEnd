import styled from "styled-components";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export const ListWrapper = styled.ul`
  align-items: center;
  justify-content: center;
`;

export const TaskBorder = styled.li`
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  margin-right: 20px;
  border-radius: 5px;
`;

export const GrCheckboxSelectedStyled = styled(GrCheckboxSelected)`
  margin-left: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

export const GrCheckboxStyled = styled(GrCheckbox)`
  margin-left: 20px;
  margin-right: 15px;
`;
