import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, Divider, TextField } from '@mui/material'

interface SelectTokenDialogProps {
  open: boolean
  onClose: () => void
}

const SelectTokenDialog: React.FC<SelectTokenDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select a Token</DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Button variant="outlined">XRP</Button>
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
