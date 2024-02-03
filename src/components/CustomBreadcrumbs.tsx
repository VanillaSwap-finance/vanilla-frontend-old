import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

interface CustomBreadcrumbsProps {
  breadcrumbs: { title: string; path: string }[]
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <Box>
      <Breadcrumbs>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          return isLast ? (
            <Typography color="text.primary" key={index}>
              {crumb.title}
            </Typography>
          ) : (
            <Link underline="hover" color="inherit" href={crumb.path} key={index}>
              {crumb.title}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs
