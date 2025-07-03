import { ButtonHTMLAttributes } from "react";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <div>
      <button
        className="mt-6 bg-rose-400 text-white font-bold w-full p-3 rounded cursor-pointer"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
