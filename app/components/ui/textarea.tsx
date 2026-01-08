import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-white/70 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all placeholder:text-white/30 font-light ${
            error ? "border-red-500 focus:ring-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

