import { Box, CircularProgress, Grid, List, ListItemText, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { isValidAddress } from 'xrpl'
import { isAddress } from 'ethers'
import { getCrossChainAddresses } from '@/utils/address'

export const RecipientChooser = () => {
  const [input, setInput] = useState('')
  const [addresObjects, setAddressObjects] = useState<{ chain: string; address: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchAddresses = async () => {
      setIsLoading(true)

      const _addressObjects = await getCrossChainAddresses(input)
      setAddressObjects(_addressObjects)

      setIsLoading(false)
    }

    fetchAddresses().catch(console.error)
  }, [input])

  return (
    <Box>
      <Typography component={'div'} sx={{ m: 0.5 }}>
        Send to
      </Typography>
      <TextField
        variant={'outlined'}
        fullWidth={true}
        error={!!input && !isAddress(input) && !isValidAddress(input)}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      {isLoading ? (
        <Grid container justifyContent={'center'} sx={{ p: 2 }}>
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <List>
          {addresObjects.map((addressObject) => (
            <ListItemText key={addressObject.chain}>{addressObject.address}</ListItemText>
          ))}
        </List>
      )}
    </Box>
  )
}
