import styled from "styled-components";
import MiniLogo from "@assets/MiniLogoEVN.png";
import { Image } from "antd";
const StyledLogo = styled.div`
  padding: 12px 24px;
  background: white;
  justify-content: flex-start;
  display: flex;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Image src={MiniLogo} preview={false} alt="Logo" />
    </StyledLogo>
  );
}
