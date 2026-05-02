import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Link href={href} className={`btn ${variantClass} focus-ring ${className}`}>
      {children}
    </Link>
  );
}