import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Link,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import HistoryIcon from '@mui/icons-material/History'
import RefreshIcon from '@mui/icons-material/Refresh'
import React from 'react'
import { RecipientChooser } from '@/views/Transfer/components/RecipientChooser'

const TransferView = () => {
  return (
    <Box>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Transfer</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Box>
                <Typography variant="h5" component="div">
                  Transfer
                </Typography>
                <Typography variant="body1" component="div" color="text.secondary">
                  Transfer tokens across blockchains securely and instantly
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box textAlign="right">
                <IconButton size="small">
                  <TuneIcon />
                </IconButton>
                <IconButton size="small">
                  <HistoryIcon />
                </IconButton>
                <IconButton size="small">
                  <RefreshIcon />
                </IconButton>
              </Box>
              <Stack spacing={2}>
                <RecipientChooser />
                <Box>
                  <Typography component={'div'} sx={{ m: 0.5 }}>
                    Asset
                  </Typography>
                  <Select variant={'outlined'} fullWidth={true}>
                    <ListSubheader>Ethereum</ListSubheader>
                    <MenuItem value={1}>ETH</MenuItem>
                    <MenuItem value={2}>ETHXRP</MenuItem>
                    <ListSubheader>XRPL Ledger</ListSubheader>
                    <MenuItem value={3}>XRP</MenuItem>
                    <MenuItem value={4}>XRPETH</MenuItem>
                  </Select>
                </Box>
                <Box>
                  <Typography component={'div'} sx={{ m: 0.5 }}>
                    Amount
                  </Typography>
                  <TextField type={'number'} variant={'outlined'} fullWidth={true} />
                </Box>
              </Stack>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" fullWidth disableElevation sx={{ mx: 1 }}>
                Transfer
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TransferView
