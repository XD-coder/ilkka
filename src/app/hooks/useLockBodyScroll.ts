// useLockBodyScroll.ts
import { useEffect } from 'react';

/**
 * Custom hook to lock and unlock the body scroll.
 * This is useful for modals, drawers, or other overlays.
 * @param lock A boolean to determine whether to lock the scroll.
 */
export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    if (lock) {
      // Save the original body styles
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Get the scrollbar width to prevent content from shifting
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Apply the new styles
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [lock]);
}