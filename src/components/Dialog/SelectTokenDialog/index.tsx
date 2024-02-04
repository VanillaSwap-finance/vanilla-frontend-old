import { Dispatch, SetStateAction } from 'react'
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  List,
  ListItemAvatar,
  ListItemText,
  ListItem,
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import { tokens } from '@/config/tokens'
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

  const selectedToken = ({ currency, issuer }: { currency: string; issuer: string }) => {
    setAsset({
      currency,
      issuer,
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
          <Button variant="outlined" sx={{ mr: 1 }} onClick={selectedXRP}>
            XRP
          </Button>
        </Box>
        <Box sx={{ mt: 1 }}>
          <List>
            {tokens.map((token) => (
              <ListItem
                key={`${token.currency}-${token.issuer}`}
                sx={{ cursor: 'pointer' }}
                onClick={() => selectedToken(token)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={token.currency} secondary={`Issuer: ${token.issuer}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
      <Divider />
    </Dialog>
  )
}

export default SelectTokenDialog
