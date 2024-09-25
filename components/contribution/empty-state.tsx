type stateType = {
  value?: string;
  icon?: React.ReactNode;
  title?: string;
  message?: string;
};

export default function EmptyState({ value, title, icon, message }: stateType) {
  return (
    <div className="mt-4 flex w-full flex-col items-center rounded-md border border-dashed border-neutral-300 bg-white px-6 py-8 text-center text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
      <div className="mb-6 text-4xl text-zinc-500"></div>
      <h3 className="mb-3 text-xl font-bold tracking-tight">
        {title ?? `No ${value} Found`}
      </h3>
      <p className="mb-6 ml-4 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
        {message ??
          `There are no ${
            value && value.toLowerCase()
          } available at this time. Check back
        again.`}
      </p>
    </div>
  );
}
