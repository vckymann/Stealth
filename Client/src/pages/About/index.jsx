/* eslint-disable react/no-unescaped-entities */
import { Text, Img } from '../../components'
import Footer from '../../components/Footer'

function About() {
  return (
    <>
    <div className='flex flex-col bg-background text-white max-w-[102rem] mx-auto p-6'>
        <section className='mt-24'>
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-12 py-6">
            <Img className="rounded-md w-full lg:max-w-[40rem]" src='images/AboutPage/work.jpg' />
                <div className='max-w-[40rem]'>
                    <Text className=' sm:text-4xl text-green-500 font-semibold mb-3 text-center'>Step into Style: Unveiling the Soul of Sole Expression with Stealth</Text>
                    <Text className='text-md sm:text-2xl text-center' >Welcome to Stealth! We're your go-to destination for stylish and comfortable footwear. Our curated collection features the latest trends in shoes, ensuring that you'll always step out in style. With a focus on quality and customer satisfaction, we're here to provide you with the perfect pair for every occasion.</Text>
                </div>
            </div>
        </section>
        <section className='mt-40'>
            <Text className='text-5xl text-green-500 font-semibold text-center w-full pb-12'>Our Investors</Text>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 place-items-center border-2 border-green-500 bg-black py-6">
        <Img className="w-[180px]" src='images/AboutPage/chase-logo-white.png' />
        <Img className="w-[180px]" src='images/AboutPage/chase-logo-white.png' />
        <Img className="w-[180px]" src='images/AboutPage/chase-logo-white.png' />
        <Img className="w-[180px]" src='images/AboutPage/chase-logo-white.png' />        
            </div>
        </section>
        <section className='mt-40 pb-12'>
            <Text className='text-5xl text-green-500 font-semibold text-center pb-12'>Our Team</Text>
            <div className='flex flex-col items-center lg:flex-row lg:justify-around gap-8'>
                <div className="flex flex-col">
                    <Img className="w-96 h-96 object-cover rounded-md" src="images/AboutPage/team1.jpg"/>
                    <Text className='text-center text-2xl text-green-500 mt-3'>Founder & CEO</Text>
                    <Text className='text-center text-xl mt-2'>John Smith</Text>            
                    </div>
                <div className="flex flex-col">
                    <Img className="w-96 h-96 object-cover rounded-md" src="images/AboutPage/team2.jpg"/>
                    <Text className='text-center text-2xl text-green-500 mt-3'>Chief Operating Officer</Text>
                    <Text className='text-center text-xl mt-2'>Emily Johnson</Text>
                    </div>
                <div className="flex flex-col">
                    <Img className="w-96 h-96 object-cover rounded-md" src="images/AboutPage/team3.jpg"/>
                    <Text className='text-center text-2xl text-green-500 mt-3'>Chief Marketing Officer</Text>
                    <Text className='text-center text-xl mt-2'>Sarah Lee</Text>
                    </div>        
            </div>
        </section>
    
    
    </div>
  <Footer/>
  </>
  )
}

export default About
