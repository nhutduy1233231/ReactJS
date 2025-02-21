import { ReactNode } from 'react'

export interface SiderItemType {
  id: string
  icon?: ReactNode
  title: string
  items?: SiderItemType[]
}

export enum siderMode {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}

export const siderLevel = {
  level: 0,
  // 1rem = 10px
  range: 1.5
}
