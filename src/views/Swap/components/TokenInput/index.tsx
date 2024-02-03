import { useState, Dispatch, SetStateAction } from 'react'
import { TextField } from '@mui/material'
import SelectTokenButton from '@/components/Button/SelectTokenButton'
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
      <SelectTokenButton currency={asset.currency || 'XRP'} onClick={handleOpen} />
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
        onClick={handleOpen}
      />
    </>
  )
}

export default TokenInput
