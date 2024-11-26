import { Container } from "@mui/material"

function PageContainer( { children }) {
  return (
      
      <Container maxWidth="xl">
         {children}
      </Container>
  )
}

export default PageContainer