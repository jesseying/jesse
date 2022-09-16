import React from 'react'
import { Layout, Menu } from 'tdesign-react'
import {
  SearchIcon,
  NotificationFilledIcon,
  HomeIcon,
  DashboardIcon,
  ServerIcon,
  RootListIcon,
  ControlPlatformIcon,
  PreciseMonitorIcon,
  MailIcon,
  UserCircleIcon,
  PlayCircleIcon,
  Edit1Icon,
  CodeIcon
} from 'tdesign-icons-react'
import { Link, Route, Redirect  } from 'react-router-dom'
import CreateCategory from './category/createCategory'
import CategoriesList from './category/categoriesList'

const { SubMenu, HeadMenu, MenuItem } = Menu

const { Header, Content, Footer, Aside } = Layout

export default function BasicDivider() {
  return (
      <div className='tdesign-demo-item--layout'>
        <Layout>
          {/*<Header>*/}
          {/*  <HeadMenu*/}
          {/*      value='item1'*/}
          {/*      logo={<div><p>logo</p></div>}*/}
          {/*      operations={*/}
          {/*        <div className='t-menu__operations'>*/}
          {/*          <SearchIcon className='t-menu__operations-icon' />*/}
          {/*          <NotificationFilledIcon className='t-menu__operations-icon' />*/}
          {/*          <HomeIcon className='t-menu__operations-icon' />*/}
          {/*        </div>*/}
          {/*      }*/}
          {/*  >*/}
          {/*    <MenuItem value='item1'>已选内容</MenuItem>*/}
          {/*    <MenuItem value='item2'>菜单内容一</MenuItem>*/}
          {/*    <MenuItem value='item3'>菜单内容二</MenuItem>*/}
          {/*    <MenuItem value='item4' disabled>*/}
          {/*      菜单内容三*/}
          {/*    </MenuItem>*/}
          {/*  </HeadMenu>*/}
          {/*</Header>*/}
          <Layout>
            <Aside style={{ borderTop: '1px solid var(--component-border)' }}>
              <BasicUsage />
            </Aside>
            <Layout>
              <Content>
                <div>
                  <Route path='/createCategory'>
                    <CreateCategory />
                  </Route>
                  <Route path='/categoriesList'>
                    <CategoriesList />
                  </Route>
                  <Redirect to='createCategory' />
                </div>
              </Content>
              <Footer style={{textAlign: 'center'}}>版权所有： @Jesse 备案号：辽ICP备2022004983号</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
  )
}

function BasicUsage() {
  return (
      <Menu theme='light' value='dashboard' style={{ marginRight: 50, height: 780, padding: 0 }}>
        <MenuItem value='dashboard' icon={<DashboardIcon />}>
          仪表盘
        </MenuItem>
        <SubMenu
            icon={<CodeIcon />}
            title={<span>分类</span>}
            value="1">
          <MenuItem
              value="1-1">
            <Link to='/createCategory' className='linkTitle'>创建分类</Link>
          </MenuItem>
          <MenuItem
              value="1-2">
            <Link to='/categoriesList' className='linkTitle'>分类列表</Link>
          </MenuItem>
        </SubMenu>
        <MenuItem value='root'>
          <RootListIcon />
          根目录
        </MenuItem>
        <MenuItem value='control-platform' icon={<ControlPlatformIcon />}>
          调度平台
        </MenuItem>
        <MenuItem value='precise-monitor' icon={<PreciseMonitorIcon />}>
          精准监控
        </MenuItem>
        <MenuItem value='mail' icon={<MailIcon />}>
          消息区
        </MenuItem>
        <MenuItem value='user-circle' icon={<UserCircleIcon />}>
          个人中心
        </MenuItem>
        <MenuItem value='play-circle' icon={<PlayCircleIcon />}>
          视频区
        </MenuItem>
        <MenuItem value='edit1' icon={<Edit1Icon />}>
          资源编辑
        </MenuItem>
      </Menu>
  )
}
