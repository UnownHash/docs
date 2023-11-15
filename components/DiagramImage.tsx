import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useMounted } from 'nextra/hooks'

export function DiagramImage() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null
  return resolvedTheme === 'light' ? (
    <Image
      src="/images/Unownhash-Services-v3-light.jpg"
      alt="Unown# service diagram"
      width={900}
      height={900}
    />
  ) : (
    <Image
      src="/images/Unownhash-Services-v3-dark.jpg"
      alt="Unown# service diagram"
      width={900}
      height={900}
    />
  )
}
