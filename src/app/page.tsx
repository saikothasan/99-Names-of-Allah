import NamesList from "@/components/NamesList"
import NameOfTheDay from "@/components/NameOfTheDay"

export const runtime = "edge"

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-islamic-primary mb-8">99 Names of Allah</h1>
      <NameOfTheDay />
      <NamesList />
    </div>
  )
}

