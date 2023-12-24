import { Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'

interface SelectTokenButtonProps {
  currency: string
  onClick: () => void
}

const SelectTokenButton: React.FC<SelectTokenButtonProps> = ({ currency, onClick }) => {
  return (
    <Button
      size="small"
      sx={{ color: 'black' }}
      onClick={() => onClick()}
      endIcon={<ArrowDropDownIcon sx={{ color: 'bkack' }} />}
    >
      {currency}
    </Button>
  )
}

export default SelectTokenButton
