import React from 'react'
import { useRouter } from 'next/router'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

interface CustomBreadcrumbsProps {
  breadcrumbs: { title: string; path: string }[]
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ breadcrumbs }) => {
  const router = useRouter()

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
            <Link
              underline="hover"
              color="inherit"
              key={index}
              onClick={() => router.push(crumb.path)}
              sx={{ cursor: 'pointer' }}
            >
              {crumb.title}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs
