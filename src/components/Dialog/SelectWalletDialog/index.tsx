import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material'
import useWalletConnect, { WALLET_TAG } from '@/hooks/useWalletConnect'

export interface SelectWalletDialogProps {
  open: boolean
  onClose: () => void
}

const SelectWalletDialog = ({ open, onClose }: SelectWalletDialogProps) => {
  const { connect } = useWalletConnect()

  const handleConnectWallet = async (walletTag: WALLET_TAG) => {
    await connect(walletTag)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Connect wallet</DialogTitle>
      <DialogContent>
        <Box>
          <Button variant="contained" fullWidth disableElevation disabled sx={{ mb: 1 }}>
            VanillaSwap(soon)
          </Button>
          <Button
            variant="contained"
            fullWidth
            disableElevation
            sx={{ mb: 1 }}
            onClick={() => handleConnectWallet(WALLET_TAG.CROSSMARK)}
          >
            Crossmark
          </Button>
          <Button variant="contained" fullWidth disableElevation disabled sx={{ mb: 1 }}>
            Gem Wallet (soon)
          </Button>
          <Button variant="contained" fullWidth disableElevation disabled>
            XUMM (soon)
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SelectWalletDialog
