import React, { useMemo, useState } from 'react'
import { SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'

interface SiderItemsProps {
  values: SiderItemType
  level: number
  mode?: siderMode
}

export const SiderItems = (props: SiderItemsProps) => {
  if (props.values.items && props.values.items.length > 0) {
    return (
      <Items
        {...props.values}
        mode={props.mode ?? siderMode.Horizontal}
        items={props.values.items!}
        level={props.level}
      />
    )
  }

  return <Item {...props.values} level={props.level} />
}

interface ItemsProps extends Omit<SiderItemType, 'items'> {
  items: SiderItemType[]
  level: number
  mode: siderMode
}

const Items = (props: ItemsProps) => {
  const [show, setShow] = useState(props.mode == siderMode.Vertical)

  const handleShow = (val: boolean) => {
    props.mode != siderMode.Vertical && setShow(!val)
  }

  return (
    <div className={`sider__items ${props.mode}`}>
      <Item {...props} onClick={() => handleShow(show)} />
      <div className={`sider__list ${show && 'sider__list--show'}`}>
        {props.items.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <SiderItems values={el} level={props.level + 1} mode={props.mode} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

interface ItemProps extends SiderItemType {
  onClick?: () => void
  level: number
}

const Item = (props: ItemProps) => {
  const level = useMemo(() => {
    return props.level * siderLevel.range + 'rem'
  }, [props.level])

  return (
    <div className='sider__item' style={{ paddingLeft: level }} onClick={props.onClick}>
      {props.icon && <p className='sider__icon'>{props.icon}</p>}
      <span className='sider__title'>{props.title}</span>
    </div>
  )
}
