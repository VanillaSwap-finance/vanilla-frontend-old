import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TOKENS from '@/config/tokens'

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
        <Box>
          <List dense>
            {TOKENS.map((token) => {
              return (
                <ListItem
                  key={token.id}
                  onClick={onClose}
                  sx={{
                    cursor: 'pointer',
                  }}
                  secondaryAction={
                    <IconButton edge="end">
                      <ArrowForwardIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt={token.name} src={token.src} />
                  </ListItemAvatar>
                  <ListItemText primary={token.currency} secondary={token.name} />
                </ListItem>
              )
            })}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SelectTokenDialog
