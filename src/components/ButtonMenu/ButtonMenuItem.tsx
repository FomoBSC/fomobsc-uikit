import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
  colorKey: "primary" | "textSubtle";
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: white;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  &:hover:not(:disabled):not(:active) {
    background-color: white;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
        {...props}
      />
    );
  }

  return <Button as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
