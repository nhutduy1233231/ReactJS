import { Item } from '~/app/layout/private/sider/Item'
import { Items } from '~/app/layout/private/sider/Items'
import { SiderCommonProps, SiderItemType } from '~/app/layout/private/sider/SiderType'

interface SiderItemsProps extends SiderCommonProps {
  values: SiderItemType
}

export const SiderItems = (props: SiderItemsProps) => {
  if (props.values.items && props.values.items.length > 0) {
    return <Items {...props.values} items={props.values.items!} level={props.level} />
  }

  return <Item {...props.values} level={props.level} />
}
