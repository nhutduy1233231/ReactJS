import '~/assets/styles/layouts/private/sider.scss'

import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SiderContext } from '~/app/layout/private/sider/context/SiderContext'
import { SiderItems } from '~/app/layout/private/sider/SiderItems'
import { SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'
import { findParentKeys } from '~/helper/common'
import { useRouter } from '~/hook/Router'
import { useSelector } from '~/hook/Selector'
import { dashboardSiteMap } from '~/modules/dashboard/router/dashboardSiteMap'
import { selectKeys, selectOpenKeys } from '~/store/siderSlice'
import { iconUtils } from '~/utils/iconUtils'

const mode = siderMode.Horizontal

const SiderComp = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { key } = useSelector((state) => state.siderSlice)

  useEffect(() => {
    if (key && arrays.length > 0) {
      const openKeys = findParentKeys(arrays, key)
      dispatch(selectOpenKeys(openKeys))
    }
  }, [key, arrays])

  const handleSelect = useCallback((key: string, url?: string) => {
    dispatch(selectKeys(key))
    if (url && url != '') {
      router.push(url)
    }
  }, [])

  return (
    <SiderContext.Provider
      value={{
        mode: mode,
        onSelect: handleSelect
      }}
    >
      <section className={`sider ${mode}`}>
        {arrays.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <SiderItems values={el} level={siderLevel.level} />
            </React.Fragment>
          )
        })}
      </section>
    </SiderContext.Provider>
  )
}

export default SiderComp

const arrays: SiderItemType[] = [
  {
    id: '1',
    icon: iconUtils.chart,
    title: 'Dashboard',
    url: dashboardSiteMap.dashboard
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
