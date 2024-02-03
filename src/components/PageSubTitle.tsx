import { Typography } from '@mui/material'

interface PageSubTitleProps {
  subtitle: string
}

const PageSubTitle: React.FC<PageSubTitleProps> = ({ subtitle }) => {
  return (
    <Typography variant="body1" sx={{ mt: 1 }} color="gray">
      {subtitle}
    </Typography>
  )
}

export default PageSubTitle
