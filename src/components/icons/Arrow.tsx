export default function Arrow({ className, ...props }: { className?: string; props?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className={className}
      {...props}
    >
      <path
        fill="inherit"
        d="m237.66 133.66l-96 96A8 8 0 0 1 128 224v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 13.66-5.66l96 96a8 8 0 0 1 0 11.32Z"
      ></path>
    </svg>
  );
}
