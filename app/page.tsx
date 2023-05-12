import Image from 'next/image'
import Navfile from '@/components/Navfile'
import Herofile from '@/components/Herofile'
import Cardfile from '@/components/Cardfile'

export default function Home() {
  return (
    <>
      <Navfile/>
      <Herofile title='Tes'
                textButton="Submit"
      />
      <Cardfile/>
    </>
  )
}
