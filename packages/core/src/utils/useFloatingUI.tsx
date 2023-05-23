import type {
  Middleware,
  Placement,
  Platform,
  Strategy,
} from "@floating-ui/react";
import {
  autoUpdate,
  flip,
  limitShift,
  platform,
  shift,
  useFloating,
} from "@floating-ui/react";

import { createContext, ReactNode, useContext, useMemo } from "react";

export type UseFloatingUIProps = {
  /**
   * Sets position relative to trigger.
   */
  placement?: Placement;
  strategy?: Strategy;
  middleware?: Middleware[];
  /**
   * Sets visible state.
   */
  open?: boolean;
  /**
   * Callback function triggered when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
};

const platformContext = createContext<Platform>(platform);

export interface PlatformProviderProps {
  platform: Platform;
  children: ReactNode;
}

export function PlatformProvider(props: PlatformProviderProps) {
  const { platform: platformProp, children } = props;
  const value = useMemo(() => platformProp, [platformProp]);

  return (
    <platformContext.Provider value={value}>
      {children}
    </platformContext.Provider>
  );
}

export function usePlatform() {
  return useContext(platformContext);
}

export const DEFAULT_FLOATING_UI_MIDDLEWARE = [
  flip(),
  shift({ limiter: limitShift() }),
];

export function useFloatingUI(
  props: UseFloatingUIProps
): ReturnType<typeof useFloating> {
  const {
    placement,
    strategy,
    middleware = DEFAULT_FLOATING_UI_MIDDLEWARE,
    open = false,
    onOpenChange,
  } = props;

  const platform = usePlatform();

  const { reference, floating, refs, update, ...rest } = useFloating({
    placement,
    strategy,
    middleware,
    open,
    onOpenChange,
    platform,
    whileElementsMounted: autoUpdate,
  });

  return {
    reference,
    floating,
    refs,
    update,
    ...rest,
  };
}
