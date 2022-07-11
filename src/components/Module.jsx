import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { Col } from "antd";
const StyledModule = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(179, 189, 241);
  }
`;
export default function Module(props) {
  return (
    <StyledModule onClick={props.onClick}>
      <span>{props.modulename}</span>
    </StyledModule>
  );
}
