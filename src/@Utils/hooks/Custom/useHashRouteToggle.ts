import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type ToggleActiveT = (bool: boolean) => void;

export function useHashRouteToggle(hash: string) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);

  /**
   * Toggles the active state of the filter.
   * @param {boolean} bool - the new active state of the filter.
   * @returns None
   */
  const toggleActive: ToggleActiveT = (bool) => {
    if (bool !== isActive) {
      // needed if there are multiple modals with close-on-esc-keyup in the same page
      if (bool) {
        navigate(`${location.pathname}#${hash}`);
      } else {
        navigate(-1);
      }
      setIsActive(bool);
    }
  };

  useEffect(() => {
    /**
     * Handles the hash change event.
     * @returns None
     */
    const handleOnHashChange = () => {
      setIsActive(false);
    };

    window.addEventListener('hashchange', handleOnHashChange);

    return () => window.removeEventListener('hashchange', handleOnHashChange);
  });

  return [isActive, toggleActive] as const;
}
