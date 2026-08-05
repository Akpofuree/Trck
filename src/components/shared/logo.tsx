import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export function Logo({
  className = "",
  width = 198,
  height = 69,
  alt = "Trck",
}: LogoProps) {
  return (
    <Image
      src="/trck-logo.png"
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-auto object-contain ${className}`.trim()}
      priority
    />
  );
}
