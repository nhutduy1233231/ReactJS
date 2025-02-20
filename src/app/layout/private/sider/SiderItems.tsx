import React, { ReactNode, useState } from 'react'

export interface SiderItemType {
  id: string
  icon?: ReactNode
  title: string
  items?: SiderItemType[]
}

interface SiderItemsProps {
  item: SiderItemType
  active?: boolean
}

interface ItemsType extends Omit<SiderItemType, 'items'> {
  items: SiderItemType[]
}

interface ItemProps extends SiderItemType {
  onClick?: () => void
}

export const SiderItems = (props: SiderItemsProps) => {
  if (props.item.items && props.item.items.length > 0) {
    return <Items {...props.item} items={props.item.items!} />
  }

  return <Item {...props.item} />
}

const Items = (props: ItemsType) => {
  const [show, setShow] = useState(false)

  const handleActive = (val: boolean) => setShow(!val)

  return (
    <div className='sider__items'>
      <Item {...props} onClick={() => handleActive(show)} />
      <div className={`sider__list ${show && 'sider__list--show'}`}>
        {props.items.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <SiderItems item={el} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

const Item = (props: ItemProps) => {
  return (
    <div className='sider__item' onClick={props.onClick}>
      {props.icon && <p className='sider__icon'>{props.icon}</p>}
      <span className='sider__title'>{props.title}</span>
    </div>
  )
}
