import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageTitle from '@/components/PageTitle'
import PageSubTitle from '@/components/PageSubTitle'
import AddIcon from '@mui/icons-material/Add'
import TokenInput from '@/views/Swap/components/TokenInput'
import type { Asset } from '@/types'

const breadcrumbs = [
  { title: 'Home', path: '/' },
  { title: 'Liquidity', path: '/liquidity' },
  { title: 'Create', path: '' },
]

const LiquidityCreateView: React.FC = () => {
  const [baseAsset, setBaseAsset] = useState<Asset>({
    currency: 'XRP',
    issuer: null,
    value: null,
  })
  const [quoteAsset, setQuoteAsset] = useState<Asset>({
    currency: 'BTC',
    issuer: null,
    value: null,
  })

  return (
    <Box>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <Box sx={{ mt: 2, mb: 3 }}>
        <PageTitle title="Create liquidity" />
        <PageSubTitle subtitle="Facilitate efficient trading by providing liquidity." />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Select token pair
              </Typography>

              <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                <Box textAlign="left">
                  <TokenInput asset={baseAsset} setAsset={setBaseAsset} />
                </Box>
                <Box sx={{ pt: 6 }}>
                  <AddIcon />
                </Box>
                <Box textAlign="left">
                  <TokenInput asset={quoteAsset} setAsset={setQuoteAsset} />
                </Box>
              </Stack>
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
