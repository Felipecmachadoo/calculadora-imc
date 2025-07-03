import React from "react";

function Label({ children, ...props }: import("react").LabelHTMLAttributes<HTMLLabelElement> & { children: React.ReactNode }) {
  return (
    <label className="block text-neutral-600 font-light text-sm" {...props}>
      {children}
    </label>
  );
}

export default Label;
