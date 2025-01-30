import styled from "styled-components";

export const HeroStylesDiv = styled.div`
  height: ${({ height }) => (height > 810 ? "720px" : "120vh")};
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 700px;
  }

  @media screen and (max-width: 899px) {
    height: unset;
  }

  @media screen and (max-width: 767px) {
    height: unset;
  }
`;
