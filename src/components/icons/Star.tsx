export default function Star({
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
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="inherit"
        d="m12 17.3l-3.7 2.825q-.275.225-.6.213t-.575-.188q-.25-.175-.387-.475t-.013-.65L8.15 14.4l-3.625-2.575q-.3-.2-.375-.525t.025-.6q.1-.275.35-.488t.6-.212H9.6l1.45-4.8q.125-.35.388-.538T12 4.475q.3 0 .563.188t.387.537L14.4 10h4.475q.35 0 .6.213t.35.487q.1.275.025.6t-.375.525L15.85 14.4l1.425 4.625q.125.35-.012.65t-.388.475q-.25.175-.575.188t-.6-.213L12 17.3Z"
      />
    </svg>
  );
}
