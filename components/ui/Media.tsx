import Image from "next/image";

/*
  <Media> — the single seam for all section imagery.

  FUTURE VIDEO SWAP (by design):
  Every hero/section visual on this site renders through <Media>. To turn any
  still into a cinematic clip later, pass a `video` source. The component then
  renders a muted, looping, autoplay <video> and uses the existing image as its
  poster — same crop, same object-position, same rounding. No layout changes,
  no section rewrites. This keeps the door open for the planned
  image-to-video scroll transitions.

    <Media src="/images/hero-staircase.jpg" alt="…" />                // today
    <Media src="/images/hero-staircase.jpg" video="/media/hero.mp4" /> // later
*/

type MediaProps = {
  src: string;
  alt: string;
  video?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  mediaClassName?: string;
};

export function Media({
  src,
  alt,
  video,
  priority = false,
  sizes = "100vw",
  fill = true,
  width,
  height,
  className = "",
  mediaClassName = "",
}: MediaProps) {
  const objectClasses = `h-full w-full object-cover ${mediaClassName}`;

  return (
    <div className={`relative overflow-hidden bg-stone ${className}`}>
      {video ? (
        <video
          className={objectClasses}
          poster={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={objectClasses}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 1500}
          priority={priority}
          sizes={sizes}
          className={objectClasses}
        />
      )}
    </div>
  );
}
