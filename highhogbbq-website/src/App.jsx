import { Navigate, Route, Routes, Outlet } from 'react-router'
import { Layout, theme } from 'antd'
import './App.css'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

const { Content } = Layout

function MainLayout() {
    const token = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: 16, background: token.colorBgLayout }}>
                <Outlet />
            </Content>
        </Layout>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    )
}

export default App