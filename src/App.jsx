
import DrawerTab from './components/DrawerTabs/DrawerTab.jsx'
import Header from './components/header/Header.jsx'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Footer from './components/footer/footer';
function App() {
 

  return (
    <>
      <PageContainer> 

        <Loading/>
        <Header />
        <DrawerTab />       
        <RouterConfig />
        <Footer/>     
      </PageContainer>
    </>
  )
}

export default App
