import { Container } from '@mui/material'
import Header from '@/components/Layout/Header'
import useNetworkSwitch from '@/hooks/useNetworkSwitch'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useNetworkSwitch()

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
