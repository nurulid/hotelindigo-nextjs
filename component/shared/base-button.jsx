import { twMerge } from "tailwind-merge";
import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary hover:shadow-md hover:-translate-y-1",
  secondary:
    "text-primary bg-white border-[1px] border-[#eee] hover:text-secondary hover:border-secondary",
};

const sizes = {
  sm: "px-[25px] py-[10px] text-[.7rem]",
  md: "px-[25px] py-[10px] text-[.7rem] sm:text-[.7rem] lg:text-[.8rem]",
  lg: "px-[35px] py-[15px] lg:text-[.8rem] xl:text-[.9rem]",
};

const baseClasses = [
  "uppercase rounded-full inline-block",
  "transition duration-300 ease-in-out",
];

export const BaseButton = ({
  as = "button",
  className = "",
  variant = "primary",
  size = "md",
  children,
  href,
  ...rest
}) => {
  const Component = as === "link" ? Link : "button";

  const classes = twMerge(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const linkProps = as === "link" ? { href: href || "#" } : {};

  return (
    <Component className={classes} {...linkProps} {...rest}>
      {children}
    </Component>
  );
};

export const Button = (props) => <BaseButton as="button" {...props} />;
export const LinkButton = (props) => <BaseButton as="link" {...props} />;
