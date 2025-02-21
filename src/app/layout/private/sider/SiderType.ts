import { ReactNode } from 'react'
export interface SiderCommonProps {
  level: number
}
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
  range: 1.5 // 1rem = 10px
}
