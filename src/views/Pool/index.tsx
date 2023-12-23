import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

const PoolView = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Pool</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default PoolView
