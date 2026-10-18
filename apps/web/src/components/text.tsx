import { clsx } from "cn";

type HeadingProps = {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  dark?: boolean;
} & React.ComponentPropsWithoutRef<"div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading({ className, as: Element = "h2", dark = false, ...props }: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "text-pretty font-medium text-3xl text-foreground tracking-tighter data-dark:text-white sm:text-6xl"
      )}
    />
  );
}

export function Subheading({
  className,
  as: Element = "h2",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "font-mono font-semibold text-gray-500 text-xs/5 uppercase tracking-widest data-dark:text-gray-400"
      )}
    />
  );
}

export function Lead({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={clsx(className, "font-medium text-2xl text-gray-500")} {...props} />;
}
