import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageTitle from '@/components/PageTitle'
import PageSubTitle from '@/components/PageSubTitle'
import AddIcon from '@mui/icons-material/Add'
import TokenInput from '@/views/Swap/components/TokenInput'
// import useAccountLines from '@/hooks/useAccountLines'
import type { Asset } from '@/types'

const breadcrumbs = [
  { title: 'Home', path: '/' },
  { title: 'Liquidity', path: '/liquidity' },
  { title: 'Create', path: '' },
]

const LiquidityCreateView: React.FC = () => {
  // const { request } = useAccountLines()

  const [baseAsset, setBaseAsset] = useState<Asset>({
    currency: 'XRP',
    issuer: null,
    value: null,
  })
  const [quoteAsset, setQuoteAsset] = useState<Asset>({
    currency: 'XRP',
    issuer: null,
    value: null,
  })

  useEffect(() => {
    //
  }, [baseAsset, quoteAsset])

  return (
    <Box>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <Box sx={{ mt: 2, mb: 3 }}>
        <PageTitle title="Create liquidity" />
        <PageSubTitle subtitle="Facilitate efficient trading by providing liquidity." />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid xs={7}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Select token pair
              </Typography>

              <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                <TokenInput asset={baseAsset} setAsset={setBaseAsset} />
                <Box sx={{ pt: 2 }}>
                  <AddIcon />
                </Box>
                <TokenInput asset={quoteAsset} setAsset={setQuoteAsset} />
              </Stack>
            </CardContent>
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                label="Amount"
                placeholder="0.0"
                InputProps={{ endAdornment: baseAsset.currency }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Amount"
                placeholder="0.0"
                InputProps={{ endAdornment: quoteAsset.currency }}
              />
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 2 }}>
              <Button variant="contained" size="large" fullWidth disableElevation>
                Create liquidity
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LiquidityCreateView
