import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export function Logo({
  href = "/",
  className = "",
  width = 198,
  height = 69,
  alt = "Trck",
}: LogoProps) {
  const image = (
    <Image
      src="/trck-logo.png"
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-auto object-contain ${className}`.trim()}
      priority
    />
  );

  if (!href) {
    return image;
  }

  return <Link href={href}>{image}</Link>;
}
