import Link from "next/link"

const Navbar: React.FC = () => {
  return(
    <nav className="bg-black text-white p-4 flex gap-6">
      <ul className="flex gap-6">
        <li><Link href="/">Home Page</Link></li>
        <li><Link href="/posts">Post Page</Link></li>
        <li><Link href="/albums">Album Page</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;