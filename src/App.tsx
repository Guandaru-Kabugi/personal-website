import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Coming next: /about, /projects, /projects/:slug, /blog, /blog/:slug */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
