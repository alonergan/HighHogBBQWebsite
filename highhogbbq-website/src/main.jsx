import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ConfigProvider } from 'antd'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#c0392b',      // brand color (BBQ red)
                    colorBgBase: '#1a1a1a',       // global background
                    colorTextBase: '#ffffff',     // global text
                },
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </StrictMode>
)