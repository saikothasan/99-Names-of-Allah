import Link from "next/link"
import { Amiri } from "next/font/google"
import { Home, Book, Info, Clock } from "lucide-react"

const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] })

export default function Sidebar() {
  return (
    <aside className="w-64 bg-islamic-primary text-white p-6 hidden lg:block">
      <div className={`text-center mb-8 ${amiri.className}`}>
        <h2 className="text-3xl font-bold">أسماء الله الحسنى</h2>
        <p className="text-sm mt-2">99 Names of Allah</p>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center py-2 px-4 rounded hover:bg-islamic-secondary transition-colors">
              <Home className="mr-2" size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center py-2 px-4 rounded hover:bg-islamic-secondary transition-colors"
            >
              <Info className="mr-2" size={18} />
              About Asma ul Husna
            </Link>
          </li>
          <li>
            <Link
              href="/benefits"
              className="flex items-center py-2 px-4 rounded hover:bg-islamic-secondary transition-colors"
            >
              <Book className="mr-2" size={18} />
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/prayer-times"
              className="flex items-center py-2 px-4 rounded hover:bg-islamic-secondary transition-colors"
            >
              <Clock className="mr-2" size={18} />
              Prayer Times
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`mt-8 text-center ${amiri.className}`}>
        <p className="text-3xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        <p className="mt-2 text-sm">In the name of Allah, the Most Gracious, the Most Merciful</p>
      </div>
    </aside>
  )
}

