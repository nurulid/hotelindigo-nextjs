import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const NavigationItem = ({
  children,
  isScrolled,
  isDark,
  className,
  ...rest
}) => (
  <Link
    className={twMerge(
      "relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] w-full cursor-pointer",
      isScrolled || isDark ? "after:bg-secondary" : "after:bg-white",
      className
    )}
    {...rest}
  >
    {children}
  </Link>
);