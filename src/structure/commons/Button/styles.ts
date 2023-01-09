import styled from "styled-components";

type SizeProps = "small" | "large";

type ButtonStyleProps = {
  size?: SizeProps;
  bordered?: boolean; 
};

const buttonPadding = (size: SizeProps) => {
  switch (size) {
  case (size = "small"):
    return "8px 24px";
  case (size = "large"):
    return "16px 48px";
  default:
    return "14px 24px";
  }
};

export const Container = styled.button<ButtonStyleProps>`
  ${({theme, size}) =>{ 
    switch (size) {
    case (size = "small"):
      return theme.fonts.body.normal(700);
    case (size = "large"):
      return theme.fonts.body.large(700);
    default:
      return theme.fonts.body.medium(700);
    }
  }};
  
  align-items: center;
  display: flex;
  justify-content: center;

  background-color: ${({theme, bordered}) => bordered ? theme.colors.white : theme.colors.primary};
  color: ${({theme, bordered}) => bordered ? theme.colors.primary : theme.colors.white};
  border: ${({theme, bordered}) => bordered ? `1px solid ${theme.colors.primary}` : ""};
  border-radius: 6px;

  padding: ${({ size }) => buttonPadding(size)};
  width: 100%;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({theme, bordered}) => bordered ? theme.colors.primary : theme.colors.primaryLight};
    color: ${({theme}) => theme.colors.white};
  }

  ${({theme}) => theme.breakpoints.largeMobile} {
    width: min-content;
  }
`;

export const IconContainer = styled.div`
  min-width: 13px;
  width: 13px;
`;

export const IconContainerBefore = styled(IconContainer)`
  margin-right: 10px;
`;

export const IconContainerAfter = styled(IconContainer)`
  margin-left: 10px;
`;
