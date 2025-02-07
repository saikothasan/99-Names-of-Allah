import { useParams } from "next/navigation"
import { Amiri, Noto_Sans_Bengali } from "next/font/google"
import { names } from "@/lib/names"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const amiri = Amiri({ subsets: ["arabic"] })
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"] })

export default function NameDetails() {
  const params = useParams()
  const number = Number.parseInt(params.number as string)
  const name = names.find((n) => n.number === number)

  if (!name) {
    return <div>Name not found</div>
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800">
        <CardHeader className="bg-islamic-primary text-white">
          <CardTitle className="text-3xl font-bold text-center">{name.transliteration}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className={`text-5xl text-center mb-6 text-islamic-secondary ${amiri.className}`}>{name.arabic}</div>
          <div className={`text-2xl text-center mb-4 ${notoSansBengali.className}`}>{name.bangla}</div>
          <p className="text-xl text-center mb-8 text-islamic-primary">{name.meaning}</p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-islamic-secondary">Explanation:</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {name.transliteration} ({name.arabic}) is one of the 99 names of Allah in Islamic tradition. It means "
              {name.meaning}" and reflects an important attribute of Allah.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Muslims often recite and reflect on this name to deepen their understanding of Allah's qualities and to
              seek closeness to Him through this attribute.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

