import { APP_NAME } from '@/config/constants/site'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import TranslateIcon from '@mui/icons-material/Translate'

const Header: React.FC = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: '#232f3e',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ mr: 4 }}>
          {APP_NAME}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Swap</Button>
          <Button color="inherit">Liquidity</Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton color="inherit">
            <TranslateIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <Button color="inherit">Connect Wallet</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
