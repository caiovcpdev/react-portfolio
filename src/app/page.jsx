import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
export default function Home() {
  return (
    <main className='bg-white px-10 md:px-20 lg:px-40'>
      <section className="min-h-screen"> 
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className="font-burtons text-xl">developedbyed</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li><a className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 md:text-6xl'>Caio Vincius</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developer.</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='text-5xl flex justify-center py-3 text-gray-600 cursor-pointer'>
          <AiFillLinkedin/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} fill style={{objectFit:"cover"}}/>
        </div>
      </section>
      {/*SECOND PAGE*/}
      <section>
        <div>
        <h3 className="text-3xl py-1 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className='lg:flex gap-10'>
          {/*CARD ONE*/}
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='p-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Canva</p>
          </div>
          {/*CARD TWO*/}
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='p-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Canva</p>
          </div>
          {/*CARD THREE*/}
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={consulting} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='p-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Canva</p>
          </div>
        </div>
      </section>
      {/*SECTION THREE*/}
      <section className='py-10'>
        <div>
            <h3 className="text-3xl py-1 ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
              />
            </div>
          </div>
      </section>
    </main>
  )
}
