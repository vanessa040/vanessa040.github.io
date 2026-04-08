import { ImgHTMLAttributes, ReactNode, useEffect, useState } from 'react';

interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'> {
  fallback: ReactNode;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  onError,
  ...imgProps
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return <>{fallback}</>;
  }

  return (
    <img
      {...imgProps}
      src={src}
      alt={alt}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
    />
  );
}
