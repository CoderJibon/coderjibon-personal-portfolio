function BGBox({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-darkLight p-4 mt-4 rounded-md dark:bg-white dark:border dark:shadow-sm">
      {children}
    </div>
  );
}

export default BGBox;
