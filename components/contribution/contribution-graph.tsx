import { getGitHubYears } from "@/lib/contribution/calculate-years";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import EmptyState from "./empty-state";
import GitHubCalendar from "react-github-calendar";
import { github } from "@/lib/contribution/contribution-graph-theme";
import YearButton from "./year-button";

const ContributionGraph = () => {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined,
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined,
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const today = new Date().getFullYear();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear) {
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials. Please check your environment variables."
      />
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-medium">Github Contributions</h1>
      <div className="max-h-fit max-w-fit rounded-xl border border-[var(--accents-2)] bg-[var(--ds-background-100)] p-4 dark:border-neutral-800">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={serverTheme}
          blockSize={13}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;
