import React from 'react'
import { SiderItems } from '~/app/layout/private/sider/SiderItems'
import { SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'
import '~/assets/styles/layouts/private/sider.scss'
import { iconUtils } from '~/utils/iconUtils'

const SiderComp = () => {
  return (
    <div className='sider'>
      {arrays.map((el) => {
        return (
          <React.Fragment key={el.id}>
            <SiderItems values={el} mode={siderMode.Horizontal} level={siderLevel.level} />
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
    icon: iconUtils.chart,
    title: 'Dashboard'
  },
  {
    id: '2',
    title: 'Product',
    icon: iconUtils.home,
    items: [
      {
        id: '3',
        icon: iconUtils.mail,
        title: 'Product 1'
      },
      {
        id: '4',
        icon: iconUtils.calendar,
        title: 'Product 2',
        items: [
          {
            id: '5',
            icon: iconUtils.image,
            title: 'Product 3'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    icon: iconUtils.chart,
    title: 'Sub'
  }
]
