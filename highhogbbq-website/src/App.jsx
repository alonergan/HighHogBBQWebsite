import { Navigate, Route, Routes, Outlet, useLocation, useNavigate } from 'react-router'
import { Layout, Menu } from 'antd'
import './App.css'
import HomePage from './components/HomePage'
import AwardsPage from './components/AwardsPage'
import EventsPage from './components/EventsPage'
import ContactPage from './components/ContactPage'

const { Header, Content, Footer } = Layout

const navItems = [
  { key: '/home', label: 'Home' },
  { key: '/awards', label: 'Awards' },
  { key: '/events', label: 'Events' },
  { key: '/contact', label: 'Contact Us' },
]

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Layout className="site-shell">
      <Header className="site-header">
        <div className="brand-block">
          <span className="brand-title">High Hog BBQ</span>
          <span className="brand-subtitle">Competition Team</span>
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={navItems}
          onClick={({ key }) => navigate(key)}
          className="site-nav"
        />
      </Header>
      <Content className="site-content">
        <Outlet />
      </Content>
      <Footer className="site-footer">
        High Hog BBQ • Built for smoke, flavor, and competition weekends.
      </Footer>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
