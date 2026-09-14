import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  /** Hidden on small screens (< sm); full wordmark from `sm` and up. */
  compactOnMobile?: boolean;
};

export function Logo({
  className = "",
  width = 198,
  height = 69,
  alt = "Trck",
  compactOnMobile = false,
}: LogoProps) {
  return (
    <Image
      src="/onlyLogo-full.png"
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-auto object-contain ${compactOnMobile ? "hidden sm:inline-block" : ""} ${className}`.trim()}
      style={{
        width: `calc(${width}px * var(--trck-logo-scale))`,
        height: "auto",
      }}
      priority
    />
  );
}
