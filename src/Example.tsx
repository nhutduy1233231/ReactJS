import { useSelector } from '~/hook/Selector'

export const Example = () => {
  const data = useSelector((state) => state.siderSlice) ?? ''
  return <div className=''>{JSON.stringify(data)}</div>
}
