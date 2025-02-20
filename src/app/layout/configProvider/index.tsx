import { ConfigProvider as ConfigProviderAntd } from 'antd'
import { ReactNode } from 'react'

interface ConfigProviderProps {
  children: ReactNode
}
const ConfigProvider = ({ children, ...props }: ConfigProviderProps) => {
  return (
    <ConfigProviderAntd
      theme={{
        token: {
          // color
          colorText: 'var(--primary)',
          // size
          fontSize: 16
        }
      }}
      {...props}
    >
      {children}
    </ConfigProviderAntd>
  )
}

export default ConfigProvider
