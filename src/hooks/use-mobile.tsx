import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * React hook that detects if the user is on a mobile device
 * 
 * This hook uses the window.matchMedia API to determine if the current
 * viewport width is below the mobile breakpoint (768px).
 * 
 * @returns Boolean indicating if the user is on a mobile device
 * 
 * @example
 * ```tsx
 * const isMobile = useIsMobile()
 * 
 * if (isMobile) {
 *   // Render mobile-specific UI
 * }
 * ```
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
