import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-black/40 selection:bg-primary selection:text-primary-foreground border-black/10 flex h-11 w-full min-w-0 rounded-xl border bg-white px-4 py-2.5 text-base text-black shadow-sm transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:ring-[3px]",
        "aria-invalid:ring-black/20 aria-invalid:border-black",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
