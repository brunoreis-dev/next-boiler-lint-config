import Link from "next/link";
import { ReactNode } from "react";
import { Container, IconContainerAfter, IconContainerBefore } from "./styles";

type ButtonProps = {
  text: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  loading?: boolean;
  size?: "small" | "large";
  bordered?:  boolean;
  href?: string;
};

const Button = ({
  text,
  iconBefore,
  iconAfter,
  loading,
  bordered,
  size,
  href
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Container as="a" bordered={bordered} size={size}>
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                {iconBefore && (
                  <IconContainerBefore>
                    {iconBefore}
                  </IconContainerBefore>
                )}
          
                {text}

                {iconAfter && (
                  <IconContainerAfter>
                    {iconAfter}
                  </IconContainerAfter>
                )}
          
          
              </>
            )}
          </Container>
        </Link>
      ) : (
        <Container bordered={bordered} size={size}>
          {loading ? (
            <>Loading...</>
          ) : (
            <>
              {iconBefore && (
                <IconContainerBefore>
                  {iconBefore}
                </IconContainerBefore>
              )}
          
              {text}

              {iconAfter && (
                <IconContainerAfter>
                  {iconAfter}
                </IconContainerAfter>
              )}
          
          
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default Button;
