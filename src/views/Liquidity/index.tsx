import { Box, Button, Card, CardActions, CardContent, Unstable_Grid2 as Grid } from '@mui/material'
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs'
import PageTitle from '@/components/PageTitle'
import PageSubTitle from '@/components/PageSubTitle'

const breadcrumbs = [
  { title: 'Home', path: '/' },
  { title: 'Liquidity', path: '/' },
]

const LiquidityView = () => {
  const LiquidityCard = () => {
    return (
      <Grid xs={4}>
        <Card variant="outlined">
          <CardContent>Name</CardContent>
          <CardActions>
            <Button variant="contained" fullWidth disableElevation>
              Add liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }

  return (
    <Box>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <Box sx={{ mt: 2, mb: 3 }}>
        <PageTitle title="Liquidity pools" />
        <PageSubTitle subtitle="Provide liquidity and get a share of swap fees." />
        <Button variant="contained" disableElevation href="/liquidity/create">
          Create
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={12}>Menu</Grid>
        {[...Array(10)].map((_, i) => (
          <LiquidityCard key={i} />
        ))}
      </Grid>
    </Box>
  )
}

export default LiquidityView
