import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-black/10 placeholder:text-black/40 focus-visible:border-primary focus-visible:ring-primary/20 aria-invalid:ring-black/20 aria-invalid:border-black flex field-sizing-content min-h-28 w-full rounded-xl border bg-white px-4 py-3 text-base text-black shadow-sm transition-all duration-200 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
