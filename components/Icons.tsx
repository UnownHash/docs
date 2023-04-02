/*
 * Instead of including the entire @mui/icons-material package which is quite large we
 * are hand selecting as needed. If our needs grow large enough we can revisit the decision
 * to use the package since it's 128 MB of extra dependencies on disk + increased build time!
 *
 * https://mui.com/material-ui/material-icons/?query=github
 * https://github.com/mui/material-ui/tree/master/packages/mui-icons-material
 */

export const GitHubIcon = () => {
  return (
    <div style={{ padding: '0 5px 0 5px' }}>
      <svg width="24" height="24" fill="currentColor" display="inline-block">
        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
      </svg>
    </div>
  )
}

export const DescriptionIcon = () => {
  return (
    <div style={{ padding: '0 5px 0 5px' }}>
      <svg width="24" height="24" fill="currentColor" display="inline-block">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    </div>
  )
}
