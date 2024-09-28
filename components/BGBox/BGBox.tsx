function BGBox({
  children,
  className = "mt-4",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-darkLight p-4 rounded-md dark:bg-white dark:border dark:shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default BGBox;
