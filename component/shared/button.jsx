import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-primary text-white hover:bg-secondary hover:shadow-md hover:-translate-y-1",
  secondary: "text-primary bg-white border-[1px] border-[#eee] hover:text-secondary hover:border-secondary",
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

export const Button = (props) => {
  const {
    className = "",
    variant = "primary",
    size = "md",
    children,
    ...rest
  } = props;
  
  return (
    <button
      className={twMerge(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
