import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'

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
      <Box>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Liquidity</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ mt: 2, mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Liquidity pools
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }} color="gray">
          Provide liquidity and get a share of swap fees
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid>hoge</Grid>
      </Grid>
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
