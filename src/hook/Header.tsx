import { useEffect } from 'react'

interface HeaderProps {
  title: string
  description?: string
}

export const useHeader = (props: HeaderProps) => {
  useEffect(() => {
    document.title = props.title

    return () => {
      document.title = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title])
}
