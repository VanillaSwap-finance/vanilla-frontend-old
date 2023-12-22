import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import HistoryIcon from '@mui/icons-material/History'
import RefreshIcon from '@mui/icons-material/Refresh'
import SyncIcon from '@mui/icons-material/Sync'
import TuneIcon from '@mui/icons-material/Tune'

const SwapView: React.FC = () => {
  return (
    <Box sx={{ height: 2000 }}>
      <p>VanillaSwap</p>
      <Grid container spacing={2} justifyContent="center">
        <Grid xs={5}>
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
              <Box textAlign="center">
                <Box textAlign="left" sx={{ my: 1 }}>
                  <Button size="small" sx={{ color: 'black' }} endIcon={<ArrowDropDownIcon sx={{ color: 'bkack' }} />}>
                    XRP
                  </Button>
                  <TextField variant="outlined" fullWidth />
                </Box>
                <IconButton sx={{ mt: 2 }}>
                  <SyncIcon />
                </IconButton>
                <Box textAlign="left" sx={{ my: 1 }}>
                  <Button size="small" sx={{ color: 'black' }} endIcon={<ArrowDropDownIcon sx={{ color: 'bkack' }} />}>
                    BTC
                  </Button>
                  <TextField variant="outlined" fullWidth />
                </Box>
              </Box>
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
