import { ReactNode, Suspense as SuspenseReact } from 'react'
import { Skeleton } from '~/components/skeleton/Skeleton'

interface SuspenseProps {
  children: ReactNode
  fallback?: ReactNode
}

export const Suspense = (props: SuspenseProps) => {
  return <SuspenseReact fallback={props.fallback ?? <Skeleton />}>{props.children}</SuspenseReact>
}
