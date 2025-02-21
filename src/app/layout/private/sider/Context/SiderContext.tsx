import { createContext, useContext } from 'react'
import { siderMode } from '~/app/layout/private/sider/SiderType'

export enum FormType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export const SiderContext = createContext({
  mode: siderMode.Horizontal,
  onSelect: (key: string) => {
    console.log(key)
  }
})

export const useSiderContext = () => {
  return useContext(SiderContext)
}
