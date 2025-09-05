import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and merges Tailwind CSS classes.
 * 
 * This utility function takes advantage of both clsx for conditional class names
 * and twMerge to resolve conflicts between Tailwind CSS classes.
 * 
 * @param inputs - Class values to be combined and merged
 * @returns Merged class names string
 * 
 * @example
 * ```tsx
 * <div className={cn("text-red-500", "bg-blue-500", isActive && "font-bold")} />
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
