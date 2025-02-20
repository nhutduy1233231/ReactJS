import React, { ReactNode, useState } from 'react'

export interface SiderItemType {
  id: string
  icons?: ReactNode
  title: string
  children?: SiderItemType[]
}

interface SiderItemsProps {
  item: SiderItemType
  active?: boolean
}

export const SiderItems = (props: SiderItemsProps) => {
  const [active, setActive] = useState(props.active ?? false)

  const handleActive = (val: boolean) => setActive(!val)

  if (props.item.children && props.item.children.length > 0) {
    return (
      <div className='sider__items'>
        <p className='sider__title' onClick={() => handleActive(active)}>
          {props.item.title}
        </p>
        {active && (
          <div className='sider__list'>
            {props.item.children.map((el) => {
              return (
                <React.Fragment key={el.id}>
                  <Item {...el} active={active} />
                </React.Fragment>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return <Item {...props.item} active={active} />
}

const Item = (props: SiderItemType & { active?: boolean }) => {
  return (
    <div className={`sider__item ${props.active && 'sider__item--show'}`}>
      {props.icons && <p className='sider__icon'>{props.icons}</p>}
      <p className='sider__content'>{props.title}</p>
    </div>
  )
}
