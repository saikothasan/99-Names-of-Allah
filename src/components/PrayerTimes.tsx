"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

type PrayerTime = {
  name: string
  time: string
}

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch("https://api.aladhan.com/v1/timingsByCity?city=London&country=UK&method=2")
        const data = await response.json()
        const times = data.data.timings
        setPrayerTimes([
          { name: "Fajr", time: times.Fajr },
          { name: "Dhuhr", time: times.Dhuhr },
          { name: "Asr", time: times.Asr },
          { name: "Maghrib", time: times.Maghrib },
          { name: "Isha", time: times.Isha },
        ])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching prayer times:", error)
        setLoading(false)
      }
    }

    fetchPrayerTimes()
  }, [])

  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardHeader className="bg-islamic-primary text-white">
        <CardTitle className="text-2xl font-bold text-center">Prayer Times</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin" size={48} />
          </div>
        ) : (
          <ul className="space-y-4">
            {prayerTimes.map((prayer) => (
              <li key={prayer.name} className="flex justify-between items-center">
                <span className="text-lg font-semibold text-islamic-secondary">{prayer.name}</span>
                <span className="text-lg">{prayer.time}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

