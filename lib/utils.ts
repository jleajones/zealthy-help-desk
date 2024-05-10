import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str
    .split(" ")
    .map((part) => {
      return `${part[0].toUpperCase()}${part.slice(1)}`;
    })
    .join(" ");
}
