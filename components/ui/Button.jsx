// Button.jsx
// Reusable button component with primary (filled purple) and outline variants.

import Link from "next/link";

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    const baseClasses =
        "inline-block font-heading font-semibold text-sm md:text-base rounded-full px-8 py-3 transition-all duration-300 text-center";

    const variants = {
        primary:
            "bg-primary hover:bg-primary-dark text-white",
        outline:
            "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        dark:
            "bg-primary-dark hover:bg-primary text-white",
    };

    const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
