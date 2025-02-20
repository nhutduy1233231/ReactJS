import React from 'react'
import { SiderItems, SiderItemType } from '~/app/layout/private/sider/SiderItems'
import '~/assets/styles/layouts/private/sider.scss'
import { iconUtils } from '~/utils/iconUtils'

const SiderComp = () => {
  return (
    <div className='sider'>
      {arrays.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <SiderItems item={el} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SiderComp

const arrays: SiderItemType[] = [
  {
    id: '1',
    icons: iconUtils.home,
    title: 'Home'
  },
  {
    id: '2',
    title: 'Product',
    children: [
      {
        id: '3',
        icons: iconUtils.home,
        title: 'Product 1'
      },
      {
        id: '4',
        icons: iconUtils.home,
        title: 'Product 2',
        children: [
          {
            id: '5',
            icons: iconUtils.home,
            title: 'Product 3'
          }
        ]
      }
    ]
  }
]
