import { ReactNode, useMemo } from 'react'
import { SiderCommonProps, SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'

interface ItemProps extends SiderItemType, SiderCommonProps {
  onClick?: () => void
}

export const Item = (props: ItemProps) => {
  const level = useMemo(() => {
    if (props.mode == siderMode.Vertical) {
      return 0
    }

    return props.level * siderLevel.range + 'rem'
  }, [props.level, props.mode])

  return (
    <div className={`sider__item sider__item--${props.level} `} style={{ paddingLeft: level }} onClick={props.onClick}>
      <Icons icon={props.icon} level={props.level} />
      <span className='sider__title'>{props.title}</span>
    </div>
  )
}

const Icons = (props: { icon?: ReactNode; level: number }) => {
  if (!props.icon && props.level == siderLevel.level) {
    return <p className='sider__icon' />
  }

  return props.icon ? <p className='sider__icon'>{props.icon}</p> : undefined
}
