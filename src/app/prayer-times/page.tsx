import PrayerTimes from "@/components/PrayerTimes"

export default function PrayerTimesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-islamic-primary">Daily Prayer Times</h1>
      <PrayerTimes />
    </div>
  )
}

