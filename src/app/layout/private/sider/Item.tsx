import { ReactNode, useMemo } from 'react'
import { useSiderContext } from '~/app/layout/private/sider/context/SiderContext'
import { SiderCommonProps, SiderItemType, siderLevel, siderMode } from '~/app/layout/private/sider/SiderType'
import { useSelector } from '~/hook/Selector'

interface ItemProps extends SiderItemType, SiderCommonProps {
  onClick?: () => void
}

export const Item = (props: ItemProps) => {
  const { mode, onSelect } = useSiderContext()
  const key = useSelector((state) => state.siderSlice.key) ?? ''

  const level = useMemo(() => {
    if (mode == siderMode.Vertical) {
      return 0
    }

    return props.level * siderLevel.range + 'rem'
  }, [props.level, mode])

  const handleSelect = (key: string, url: string) => {
    if (props.onClick) {
      props.onClick()
    } else {
      onSelect(key, url)
    }
  }

  return (
    <div
      className={`sider__item sider__item--${props.level} ${key == props.id ? 'sider__item--active' : ''}`}
      style={{ paddingLeft: level }}
      onClick={() => handleSelect(props.id, props.url ?? '')}
    >
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
