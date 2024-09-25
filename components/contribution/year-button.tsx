import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";

interface YearButtonProps {
  year: number;
  currentYear: number | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const YearButton = ({ year, currentYear, onClick }: YearButtonProps) => {
  const isCurrentYear = year === currentYear;

  return (
    <Button
      size="sm"
      onClick={onClick}
      variant={isCurrentYear ? "default" : "secondary"}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </Button>
  );
};

export default YearButton;
