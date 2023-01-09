import styled from "styled-components";

type PageContainerStyle = {
  large: boolean;
};

export const Container = styled.div<PageContainerStyle>`
  margin: ${({ large }) => (large ? "0" : "139px 0 0")};
  min-height: ${({ large }) =>
    large ? "calc(100vh - 91.5px)" : "calc(100vh - 139px - 91.5px)"};
  padding: 32px 0 100px;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 48px 0 60px;
    margin: ${({ large }) => (large ? "0 0 91.5px" : "112px 0 91.5px")};
    min-height: ${({ large }) =>
    large ? "calc(100vh - 91.5px)" : "calc(100vh - 112px - 91.5px)"};
  }
`;
