import * as Icons from "@tabler/icons-react";
// import * as Icons from "@storybook/icons";
import { FC, ReactNode } from "react";
import { ButtonProps, Button as RAButton } from "react-aria-components";
import { tv } from "tailwind-variants";

console.log(Object.entries(Icons), "dsds");

interface ButtonTypes extends ButtonProps {
  /**
   * The variant of the component
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "link";
  /**
   * The size of the component
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * The element will placed at the start
   */
  startIcon?: ReactNode;
  /**
   * The element will placed at the end
   */
  endIcon?: ReactNode;
}

const buttonVariant = tv({
  base: ["font-poppins"],
  variants: {
    variant: {
      primary:
        "border border-primary p-2.5 leading-tight hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary",
      secondary:
        "border border-primary leading-tight bg-primary text-white p-2.5 hover:bg-white hover:text-primary dark:bg-white dark:text-primary",
      link: "text-primary hover:font-semibold underline dark:text-white",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button: FC<ButtonTypes> = ({
  children,
  variant,
  startIcon,
  endIcon,
  size,
  ...rest
}) => {
  return (
    <RAButton className={buttonVariant({ variant, size })} {...rest}>
      <>
        {startIcon}
        {children}
        {endIcon}
      </>
    </RAButton>
  );
};

export default Button;
