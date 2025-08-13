import * as React from "react";
import "./badge.scss";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const classes = `badge badge--${variant} ${className}`;
  
  return (
    <div className={classes} {...props} />
  );
}

export { Badge };
