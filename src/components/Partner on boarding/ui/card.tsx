export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-[#E5E7EB] bg-[#FFFFFF] text-[#0F172A] shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6  ${className}`} {...props}>
      {children}
    </div>
  );
}
