

export default function SectionHeading({ children, as: Tag = "h2", className = "" }) {
    return (
        <Tag
            className={`text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary-dark text-center ${className}`}
        >
            {children}
        </Tag>
    );
}
