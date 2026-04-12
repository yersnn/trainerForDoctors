import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ShineButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
