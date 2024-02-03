import { useState, Dispatch, SetStateAction } from 'react'
import { TextField } from '@mui/material'
import SelectTokenDialog from '@/components/Dialog/SelectTokenDialog'
import type { Asset } from '@/types'

interface TokenInputProps {
  asset: Asset
  setAsset: Dispatch<SetStateAction<Asset>>
}

const TokenInput: React.FC<TokenInputProps> = ({ asset, setAsset }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <SelectTokenDialog open={open} onClose={handleClose} setAsset={setAsset} />
      <TextField
        variant="outlined"
        fullWidth
        value={asset.currency}
        inputProps={{
          readOnly: true,
        }}
        sx={{
          cursor: 'pointer',
        }}
        helperText={asset.issuer ? `Issue address: ${asset.issuer}` : ''}
        onClick={handleOpen}
      />
    </>
  )
}

export default TokenInput
