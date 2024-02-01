import { useContext, useState } from 'react'
import { APP_NAME } from '@/config/constants/site'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import TranslateIcon from '@mui/icons-material/Translate'
import SelectWalletDialog from '@/components/Dialog/SelectWalletDialog'
import ConnectedWalletButton from '@/components/Button/ConnectedWalletButton'
import { AccountContext } from '@/context/AccountContext'

const Header: React.FC = () => {
  const [openSelectWalletDialog, setOpenSelectWalletDialog] = useState<boolean>(false)

  const { account } = useContext(AccountContext)

  const handleOpenSelectWalletDialog = () => {
    setOpenSelectWalletDialog(true)
  }

  const handleCloseSelectWalletDialog = () => {
    setOpenSelectWalletDialog(false)
  }

  const SelectWalletButton = () => {
    return (
      <>
        <Button color="inherit" onClick={handleOpenSelectWalletDialog}>
          Connect Wallet
        </Button>
        <SelectWalletDialog open={openSelectWalletDialog} onClose={handleCloseSelectWalletDialog} />
      </>
    )
  }

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
          <Button color="inherit" href="/swap">
            Swap
          </Button>
          <Button color="inherit" href="/liquidity">
            Liquidity
          </Button>
          <Button color="inherit" href="/transfer">
            Transfer
          </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton color="inherit">
            <TranslateIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          {account.isConnected ? <ConnectedWalletButton address={account.address || ''} /> : <SelectWalletButton />}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
