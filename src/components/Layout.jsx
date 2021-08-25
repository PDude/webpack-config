// @ts-nocheck
import '../styles/components/Layout.scss'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import logo from '../images/sun-cream.svg'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <nav className='nav'>
        <div className='container'>
          <img src={logo} alt='' />
        </div>
      </nav>
      <aside className='sidebar'>
        <Menu
          style={{ height: '100%' }}
          theme='light'
          mode='inline'
          defaultSelectedKeys={['2']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            Videos
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            Uploads
          </Menu.Item>
          <Menu.Item key='4' icon={<BarChartOutlined />}>
            Analytics
          </Menu.Item>
          <Menu.Item key='5' icon={<CloudOutlined />}>
            Cloud
          </Menu.Item>
          <Menu.Item key='6' icon={<AppstoreOutlined />}>
            Plugins
          </Menu.Item>
          <Menu.Item key='7' icon={<TeamOutlined />}>
            Team
          </Menu.Item>
          <Menu.Item key='8' icon={<ShopOutlined />}>
            Shop
          </Menu.Item>
        </Menu>
      </aside>
      <main className='main'>
        <div className='container'>{children}</div>
      </main>
    </div>
  )
}

export default Layout
