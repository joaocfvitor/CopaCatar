import { useState } from "react";
import { addDays, format, subDays } from "date-fns";
import { ptBR } from 'date-fns/locale'

import { Icon } from "~/components/Icon";

export const DateSelect = () => {
    const prevDay = () => {
      const nextDate = subDays(currentDate, 1);
      setCurrentDate(nextDate);
    };
  
    const nextDay = () => {
      const nextDate = addDays(currentDate, 1);
      setCurrentDate(nextDate);
    };
  
    const [currentDate, setCurrentDate] = useState(new Date("2022-11-20T00:00:00Z"));
  
    return (
      <div className="container flex items-center max-w-sm justify-between">
        <Icon name="arrowLeft" cursor="pointer" className="w-8 text-red-500" onClick={prevDay} />
        <span className="font-bold">{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</span>
        <Icon name="arrowRight" cursor="pointer" className="w-8 text-red-500" onClick={nextDay} />
      </div>
    );
  };