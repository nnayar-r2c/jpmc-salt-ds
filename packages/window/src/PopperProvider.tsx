import {
  ComponentType,
  createContext,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { FloatingPortal } from "@floating-ui/react";

export interface PopperContextType {
  Component: ComponentType<PropsWithChildren>;
}

const PopperContext = createContext<PopperContextType | null>(
  typeof window !== "undefined"
    ? {
        Component: forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
          return (
            <FloatingPortal>
              <div {...props} ref={ref} />
            </FloatingPortal>
          );
        }),
      }
    : null
);

if (process.env.NODE_ENV !== "production") {
  PopperContext.displayName = "PopperContext";
}

export interface PopperProviderProps extends PopperContextType {
  children: ReactNode;
}

export function PopperProvider(props: PopperProviderProps) {
  const { Component, children } = props;
  const value = useMemo(() => ({ Component }), [Component]);

  return (
    <PopperContext.Provider value={value}>{children}</PopperContext.Provider>
  );
}

export function usePopper() {
  const value = useContext(PopperContext);
  if (!value) {
    throw new Error("usePopper must be used within a WindowProvider");
  }
  return value;
}
