import { useEffect, useState } from 'react';

/**
 * A hook that returns a debounced version of the given value.
 * @param {T} value - the value to debounce
 * @param {number} [delay=500] - the delay in milliseconds
 * @returns {T} the debounced value
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
