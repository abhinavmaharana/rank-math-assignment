import { twMerge } from 'tailwind-merge'
import './App.css'
import Card from './shared/components/Card/Card'
import GraphCard from './shared/components/Card/GraphCard'
import SmallCard from './shared/components/Card/SmallCard'
import Footer from './shared/components/Navigation/Footer/Footer'
import Header from './shared/components/Navigation/Header/Header'
import SortByDate from './components/SortByDate/SortByDate'

function App() {

  return (
    <div>
      <div className=''>
        <Header className='pt-32'/>
      <main className="flex-1 h-full mx-auto overflow-auto">
      <div className='grid md:grid-cols-12 grid-cols-6 mb-[10rem] min-w-[32.7rem]'>
        <div className={twMerge(
            'md:col-span-4 col-span-6 gap-y-[6.0rem]',
            'md:pl-[4.8rem] md:p-[6.6rem] md:pb-[20rem] pt-[0rem] px-[3.6rem] '
        )}>
          <div className="mb-[1.2rem]">
            <Card className='pt-[79px] pb-[111px] pl-[93px] pr-[93px]' />
          </div>
          <div className="mb-[6.2rem]">
            <SortByDate className=' pl-[93px] pb-[111px]' />
          </div>
          <div className="mb-[4.2rem]">
            <GraphCard className='' />
          </div>
          <div className='flex space-x-16 -mb-[4rem]'>
          <div className="">
            <SmallCard className='flex items-center justify-center' image='/icons/ICON_BITCOIN.svg' symbol='symbolColor1 rounded-full' />
          </div>
          <div className="">
            <SmallCard className='flex items-center justify-center' image='/icons/ICON_BITCOIN.svg' symbol='symbolColor2 rounded-full' />
          </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
      </div>
    </div>
  )
}

export default App
