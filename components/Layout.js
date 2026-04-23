import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, usuario }) {
  return (
    <>
      <Navbar usuario={usuario} />
      {children}
      <Footer />
    </>
  )
}
