import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Link,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import HistoryIcon from '@mui/icons-material/History'
import RefreshIcon from '@mui/icons-material/Refresh'
import TuneIcon from '@mui/icons-material/Tune'
import SwapForm from '@/views/Swap/components/SwapForm'

const SwapView: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Swap</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} justifyContent="center">
        <Grid xs={6}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Box>
                <Typography variant="h5" component="div">
                  Swap
                </Typography>
                <Typography variant="body1" component="div" color="text.secondary">
                  Trade tokens in an instant
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
              <SwapForm />
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" fullWidth disableElevation sx={{ mx: 1 }}>
                Swap
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SwapView
