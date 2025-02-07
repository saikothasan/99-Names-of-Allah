import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Asma ul Husna | 99 Names of Allah",
  description: "Learn about the significance and importance of the 99 names of Allah (Asma ul Husna) in Islam.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Asma ul Husna</h1>
      <p className="mb-4">
        Asma ul Husna, which translates to "The Most Beautiful Names" in Arabic, refers to the 99 names of Allah
        mentioned in Islamic tradition. These names describe Allah's attributes and characteristics, providing Muslims
        with a deeper understanding of their Creator.
      </p>
      <p className="mb-4">
        The Prophet Muhammad (peace be upon him) said: "Allah has ninety-nine names, one hundred minus one. Whoever
        memorizes them will enter Paradise." (Sahih al-Bukhari)
      </p>
      <p className="mb-4">
        Each name carries profound meaning and significance, reflecting different aspects of Allah's perfection, mercy,
        power, and wisdom. Muslims often recite these names in their prayers and supplications, seeking to draw closer
        to Allah and to embody the qualities these names represent in their own lives.
      </p>
      <p>
        By exploring and reflecting on the Asma ul Husna, believers can deepen their faith, improve their character, and
        strengthen their relationship with Allah.
      </p>
    </div>
  )
}

