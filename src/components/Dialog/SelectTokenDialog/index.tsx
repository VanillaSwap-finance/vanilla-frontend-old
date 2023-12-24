import { Box, Dialog, DialogTitle, DialogContent, Divider, TextField, Typography } from '@mui/material'

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
        <Box sx={{ mt: 1, mb: 3 }}>
          <TextField size="small" label="Symbol" fullWidth sx={{ mb: 2 }} />
          <TextField size="small" label="Issuer address" fullWidth />
        </Box>
        <Box sx={{ mx: 0.5 }}>
          <Typography variant="body2">Common tokens</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SelectTokenDialog
