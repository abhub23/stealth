import { clsx } from "cn";

export function Gradient({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "bg-linear-115 from-28% from-[#fff1be] via-70% via-[#ee87cb] to-[#b060ff] sm:bg-linear-145"
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          "absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0",
          "bg-linear-115 from-28% from-[#fff1be] via-70% via-[#ee87cb] to-[#b060ff]",
          "rotate-[-10deg] rounded-full blur-3xl"
        )}
      />
    </div>
  );
}
