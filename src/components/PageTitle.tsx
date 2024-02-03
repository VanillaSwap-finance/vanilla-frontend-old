import { Typography } from '@mui/material'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
      {title}
    </Typography>
  )
}

export default PageTitle
