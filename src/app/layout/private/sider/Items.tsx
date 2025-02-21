import React, { useState } from 'react'
import { useSiderContext } from '~/app/layout/private/sider/Context/SiderContext'
import { Item } from '~/app/layout/private/sider/Item'
import { SiderItems } from '~/app/layout/private/sider/SiderItems'
import { SiderCommonProps, SiderItemType, siderMode } from '~/app/layout/private/sider/SiderType'

interface ItemsProps extends Omit<SiderItemType, 'items'>, SiderCommonProps {
  items: SiderItemType[]
}

export const Items = (props: ItemsProps) => {
  const { mode } = useSiderContext()
  const [show, setShow] = useState(false)

  const handleShow = (val: boolean) => {
    if (mode != siderMode.Vertical) setShow(!val)
  }

  return (
    <div className={`sider__items sider__items--${props.level}`}>
      <Item {...props} onClick={() => handleShow(show)} />
      <div className={`sider__list sider__list--${props.level} ${show && 'sider__list--show'}`}>
        {props.items.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <SiderItems values={el} level={props.level + 1} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
