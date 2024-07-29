import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

