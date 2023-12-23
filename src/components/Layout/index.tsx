import { Container } from '@mui/material'
import Header from '@/components/Layout/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ pt: 10 }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
