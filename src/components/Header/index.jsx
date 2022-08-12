import Navbar from './Navbar'
import useScroll from '@/hooks/useScroll'

function Header () {
  const scrolled = useScroll()

  return (
    <header
      className={
        scrolled
          ? 'bg-white shadow-sm sticky top-0 left-0 w-full z-40 border-b'
          : 'bg-white'
      }
    >
      <Navbar />
    </header>
  )
}

export default Header
