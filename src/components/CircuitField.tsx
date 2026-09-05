import { useId, type CSSProperties } from 'react';

interface CircuitFieldProps {
  className?: string;
  variant?: 'hero' | 'ambient';
  style?: CSSProperties;
}

/**
 * Signature visual motif: a fine circuit-trace pattern that reads as
 * schematic/engineering rather than a literal lightning bolt. Lines
 * "energise" with a slow traveling glow, echoing continuity in a
 * live electrical circuit.
 */
export function CircuitField({ className = '', variant = 'ambient', style }: CircuitFieldProps) {
  const strokeOpacity = variant === 'hero' ? 0.35 : 0.18;
  const gradientId = useId();

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-current)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-current)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-current)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="currentColor" strokeOpacity={strokeOpacity} strokeWidth="1.5" fill="none">
        <path d="M40 120 H240 V280 H480 V180 H720" />
        <path d="M100 400 H320 V520 H160 V680 H500" />
        <path d="M600 60 V220 H760" />
        <path d="M480 480 H640 V620 H480 V740" />
        <path d="M40 560 H120 V420" />
        <circle cx="240" cy="120" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
        <circle cx="480" cy="280" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
        <circle cx="320" cy="400" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
        <circle cx="160" cy="520" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
        <circle cx="640" cy="480" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
        <circle cx="480" cy="620" r="4" fill="currentColor" fillOpacity={strokeOpacity} />
      </g>

      <g strokeWidth="2" fill="none">
        <path
          d="M40 120 H240 V280 H480 V180 H720"
          stroke={`url(#${gradientId})`}
          strokeDasharray="140 1500"
        >
          <animate attributeName="stroke-dashoffset" values="1640;0" dur="8s" repeatCount="indefinite" />
        </path>
        <path
          d="M100 400 H320 V520 H160 V680 H500"
          stroke={`url(#${gradientId})`}
          strokeDasharray="100 1400"
        >
          <animate attributeName="stroke-dashoffset" values="0;-1500" dur="11s" repeatCount="indefinite" />
        </path>
        <path
          d="M480 480 H640 V620 H480 V740"
          stroke={`url(#${gradientId})`}
          strokeDasharray="90 900"
        >
          <animate attributeName="stroke-dashoffset" values="990;0" dur="9.5s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}
