import { useState } from 'react'
import { TextField } from '@mui/material'
import SelectTokenButton from '@/components/Button/SelectTokenButton'
import SelectTokenDialog from '@/components/Dialog/SelectTokenDialog'

interface TokenInputProps {
  defaultCurrency: string
}

const TokenInput: React.FC<TokenInputProps> = ({ defaultCurrency }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <SelectTokenButton currency={defaultCurrency} onClick={handleOpen} />
      <SelectTokenDialog open={open} onClose={handleClose} />
      <TextField
        variant="outlined"
        fullWidth
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
