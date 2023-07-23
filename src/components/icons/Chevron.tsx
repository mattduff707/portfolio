export default function Chevron({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 12 12"
      className={className}
      {...props}
    >
      <path
        fill="inherit"
        d="M4.7 10c-.2 0-.4-.1-.5-.2c-.3-.3-.3-.8 0-1.1L6.9 6L4.2 3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"
      />
    </svg>
  );
}
