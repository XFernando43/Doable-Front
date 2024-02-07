export default function ButtonComponent({ className, size, text }) {
    return (
        <button className={className} size={size}>
            {text}
        </button>
    );
}
