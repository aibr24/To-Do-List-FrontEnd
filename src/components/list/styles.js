import styled from "styled-components";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export const ListWrapper = styled.ol`
  align-items: center;
  justify-content: center;
  }
`;

export const TaskBorder = styled.li`
  border: 2px solid #11586a;
  padding: 10px;
  margin-top: 10px;
  margin-right: 20px;
  border-radius: 5px;

  h2 {
    margin-left: 15px;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const StyledDiv = styled.div`
  h3 {
    margin-left: 50px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;
export const GrCheckboxSelectedStyled = styled(GrCheckboxSelected)`
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

export const GrCheckboxStyled = styled(GrCheckbox)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
`;
