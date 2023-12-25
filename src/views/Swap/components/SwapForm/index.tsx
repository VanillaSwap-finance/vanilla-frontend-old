import { Box, IconButton } from '@mui/material'
import SyncIcon from '@mui/icons-material/Sync'
import TokenInput from '@/views/Swap/components/TokenInput'
import Token from '@/config/tokens'

const SwapForm = () => {
  return (
    <Box textAlign="center">
      <Box textAlign="left" sx={{ my: 1 }}>
        <TokenInput defaultCurrency={Token[0].currency} />
      </Box>
      <IconButton sx={{ mt: 1 }}>
        <SyncIcon />
      </IconButton>
      <Box textAlign="left" sx={{ mb: 1 }}>
        <TokenInput defaultCurrency={Token[1].currency} />
      </Box>
    </Box>
  )
}

export default SwapForm
