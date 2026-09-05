interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function InstagramIcon({ size = 16, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" />
      <path d="M11.5 17V13.2C11.5 11.8 12.3 11 13.4 11C14.5 11 15.2 11.8 15.2 13.2V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 17V10.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 16, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.26 20.92 6.77 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.84 19.02L7.54 18.84L4.42 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.48 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.08C19.42 7.63 20.29 9.7 20.28 11.91C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.11 13.27 14.88 13.19C14.65 13.1 14.48 13.06 14.31 13.31C14.14 13.56 13.66 14.13 13.51 14.3C13.36 14.47 13.21 14.49 12.96 14.37C12.71 14.24 11.92 13.98 10.99 13.15C10.26 12.5 9.77 11.71 9.62 11.46C9.48 11.21 9.6 11.07 9.72 10.95C9.83 10.84 9.97 10.66 10.1 10.51C10.22 10.36 10.27 10.25 10.35 10.08C10.44 9.91 10.4 9.76 10.34 9.64C10.27 9.51 9.78 8.32 9.58 7.83C9.38 7.35 9.17 7.42 9.02 7.41C8.87 7.4 8.7 7.4 8.53 7.4C8.36 7.4 8.09 7.46 7.85 7.72C7.62 7.97 6.97 8.58 6.97 9.77C6.97 10.96 7.88 12.11 8 12.27C8.12 12.43 9.77 14.98 12.29 16.02C14.34 16.85 14.75 16.68 15.19 16.64C15.63 16.6 16.6 16.07 16.8 15.51C17 14.95 17 14.47 16.94 14.37C16.88 14.27 16.71 14.21 16.56 13.99Z"
        fill="currentColor"
      />
    </svg>
  );
}
