export default function Moon({
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
      {...props}
      className={className}
    >
      <path
        fill="inherit"
        d="M19.5 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T9.5 22q-.8 0-1.675-.15t-1.675-.425q-.3-.125-.475-.388T5.5 20.45q0-.225.088-.425t.262-.325q1.775-1.475 2.713-3.487T9.5 12q0-2.2-.938-4.213T5.85 4.3q-.175-.125-.262-.325T5.5 3.55q0-.325.175-.588t.475-.387q.8-.275 1.675-.425T9.5 2q2.075 0 3.9.787t3.175 2.138q1.35 1.35 2.138 3.175T19.5 12Z"
      />
    </svg>
  );
}
