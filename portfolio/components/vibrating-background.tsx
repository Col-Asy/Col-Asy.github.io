import { cn } from "@/lib/utils";

export interface VibratingBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
  color?: string;
  movementX?: number;
  movementY?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
}
 
export default function VibratingBackground({
  className,
  children,
  radius = 50,
  color = "radial-gradient(circle at 50% 50%, rgba(202, 196, 56, 0.26), rgba(221, 213, 9, 0.26))",
  movementX = 0,
  movementY = 0,
  reverse,
  duration = 20,
  delay = 10,
}: VibratingBackgroundProps) {
  return (
    <>
      <div
        style={
          {
            "--duration": duration,
            "--delay": -delay,
            "--radius": radius,
            "--moveX": movementX,
            "--moveY": movementY,
            background: color,
            height: `${radius}%`,
            width: `${radius-25}%`,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex transform-gpu animate-vibrate items-center justify-center h-[(--radius)%] w-[(--radius)%] rounded-[50px] border [animation-delay:calc(var(--delay)*1000ms)]",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}