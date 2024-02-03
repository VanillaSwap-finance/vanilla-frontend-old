import { Dispatch, SetStateAction } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, Divider, TextField } from '@mui/material'
import type { Asset } from '@/types'

interface SelectTokenDialogProps {
  open: boolean
  onClose: () => void
  setAsset: Dispatch<SetStateAction<Asset>>
}

const SelectTokenDialog: React.FC<SelectTokenDialogProps> = ({ open, onClose, setAsset }) => {
  const selectedXRP = () => {
    setAsset({
      currency: 'XRP',
      issuer: null,
      value: null,
    })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select a Token</DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Button variant="outlined" onClick={selectedXRP}>
            XRP
          </Button>
        </Box>
        <Box sx={{ mt: 1 }}>
          <TextField size="small" label="Symbol" fullWidth sx={{ mb: 2 }} />
          <TextField size="small" label="Issuer address" fullWidth />
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ p: 2 }}>
        <Button variant="contained" size="large" disableElevation fullWidth>
          Select
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectTokenDialog
