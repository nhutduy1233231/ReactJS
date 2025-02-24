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
    console.log('props.title', props.title)
    document.title = props.title

    return () => {
      document.title = ''
    }
  }, [props.title])

  useEffect(() => {
    if (props.key) dispatch(selectKeys(props.key))
  }, [props.key])
}
