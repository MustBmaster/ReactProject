import styled from "styled-components";
import EVNlogo from "@assets/LogoEVN.png";
import { Image } from "antd";
const StyledLogo = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: white;
  justify-content: center;
  display: flex;
  border-radius: 10px;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Image src={EVNlogo} preview={false} alt="Logo" />
    </StyledLogo>
  );
}
