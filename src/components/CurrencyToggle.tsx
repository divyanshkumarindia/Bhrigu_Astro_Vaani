import React from 'react';
import { useCurrency, CURRENCIES, Currency } from '@/contexts/CurrencyContext';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CurrencyToggleProps {
  className?: string;
  triggerClassName?: string;
}

export const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ className, triggerClassName }) => {
  const { currency, setCurrency, getCurrentCurrency } = useCurrency();
  const currentCurr = getCurrentCurrency();

  return (
    <div className={className || "flex items-center gap-2"}>
      <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
        <SelectTrigger className={triggerClassName || "w-[120px] h-8 text-xs bg-background border-border"}>
          <SelectValue>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 flex items-center justify-center text-[10px] bg-muted/50 rounded-full font-bold">
                {currentCurr.symbol}
              </span>
              <span>{currentCurr.code}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px] bg-background border-border z-50">
          <SelectGroup>
            <SelectLabel className="text-xs text-muted-foreground font-semibold">Global Currencies</SelectLabel>
            {CURRENCIES.map((curr) => (
              <SelectItem key={curr.code} value={curr.code} className="text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-[10px] font-bold">{curr.symbol}</span>
                  <span>{curr.code} ({curr.name})</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
