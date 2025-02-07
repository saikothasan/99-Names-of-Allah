"use client"

import { useState, useEffect } from "react"
import { Amiri, Noto_Sans_Bengali } from "next/font/google"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { names } from "@/lib/names"

const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] })
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"] })

export default function NameOfTheDay() {
  const [nameOfTheDay, setNameOfTheDay] = useState(names[0])

  useEffect(() => {
    const today = new Date()
    const start = new Date(today.getFullYear(), 0, 0)
    const diff = today.getTime() - start.getTime()
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)
    const nameIndex = dayOfYear % names.length
    setNameOfTheDay(names[nameIndex])
  }, [])

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Name of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-4xl text-center mb-2 ${amiri.className}`}>{nameOfTheDay.arabic}</div>
        <div className={`text-2xl text-center mb-2 ${notoSansBengali.className}`}>{nameOfTheDay.bangla}</div>
        <div className="text-xl text-center font-semibold">{nameOfTheDay.transliteration}</div>
        <div className="text-lg text-center text-muted-foreground">{nameOfTheDay.meaning}</div>
      </CardContent>
    </Card>
  )
}

