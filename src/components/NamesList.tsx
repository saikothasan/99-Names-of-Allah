"use client"

import { useState } from "react"
import { Amiri, Noto_Sans_Bengali } from "next/font/google"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { names } from "@/lib/names"
import Link from "next/link"
import { motion } from "framer-motion"

const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] })
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"] })

export default function NamesList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNames = names.filter(
    (name) =>
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.bangla.includes(searchTerm) ||
      name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <Input
        type="text"
        placeholder="Search names..."
        className="w-full mb-8 bg-white dark:bg-gray-800"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredNames.map((name) => (
          <motion.div
            key={name.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/name/${name.number}`}>
              <Card className="overflow-hidden transition-transform hover:scale-105 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className={`text-4xl text-center mb-4 text-islamic-primary ${amiri.className}`}>
                    {name.arabic}
                  </div>
                  <div className={`text-xl text-center mb-2 ${notoSansBengali.className}`}>{name.bangla}</div>
                  <div className="text-lg text-center font-semibold text-islamic-secondary">{name.transliteration}</div>
                  <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">{name.meaning}</div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

