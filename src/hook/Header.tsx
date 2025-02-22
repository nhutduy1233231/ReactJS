import { useEffect } from 'react'
import { useDispatch } from '~/hook/Dispatch'
import { selectKeys } from '~/store/siderSlice'

interface HeaderProps {
  key?: string
  title: string
}

export const useHeader = (props: HeaderProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = props.title

    return () => {
      document.title = ''
    }
  }, [props.title])

  useEffect(() => {
    if (props.key) dispatch(selectKeys(props.key))
  }, [props.key])
}
