import { useState } from 'react'
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { shortenAddress } from '@/utils/address'

interface ConnectedWalletButtonProps {
  address: string
}

const ConnectedWalletButton: React.FC<ConnectedWalletButtonProps> = ({ address }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="connected-wallet-button"
        aria-controls={open ? 'connected-wallet-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        {shortenAddress(address)}
      </Button>
      <Menu
        id="connected-wallet-menu"
        aria-labelledby="connected-wallet-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <AccountBalanceWalletOutlinedIcon sx={{ mr: 1 }} />
          <Typography>Wallet</Typography>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem disableRipple>
          <LogoutOutlinedIcon sx={{ mr: 1 }} />
          <Typography>Disconnect</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default ConnectedWalletButton
