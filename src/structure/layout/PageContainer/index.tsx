import { ReactNode } from "react";
import { Container } from "./styles";

type BackgroundProps = {
  children: ReactNode;
  large?: boolean;
};

const PageContainer = ({ children, large = false }: BackgroundProps) => {
  return <Container large={large}>{children}</Container>;
};

export default PageContainer;
