import '~/assets/styles/layouts/private/sider.scss'

import React from 'react'
import { SiderContext } from '~/app/layout/private/sider/Context/SiderContext'
import { SiderItems } from '~/app/layout/private/sider/SiderItems'
import { SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'
import { iconUtils } from '~/utils/iconUtils'

const SiderComp = () => {
  const mode = siderMode.Horizontal

  const handleSelect = (key: string) => {
    console.log(key)
  }

  return (
    <SiderContext.Provider
      value={{
        mode: mode,
        onSelect: handleSelect
      }}
    >
      <div className={`sider ${mode}`}>
        {arrays.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <SiderItems values={el} level={siderLevel.level} />
            </React.Fragment>
          )
        })}
      </div>
    </SiderContext.Provider>
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
