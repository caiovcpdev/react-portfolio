"use client"; 

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import deved from "../../public/robot.png"
import design from "../../public/design.png"
import code from "../../public/code.png";
import web1 from "../../public/Client-Portfolio.jpeg";
import web2 from "../../public/iFacturing.jpeg";
import web3 from "../../public/Spotify-Clone.jpeg";
import web4 from "../../public/E-Commerce.jpeg";
import { useState } from 'react'


export default function Home() {
const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className="min-h-screen"> 
        <nav className='py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className="font-burtons text-xl">caiovcpdev</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
            <li><a className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://www.linkedin.com/in/caio-vinicius-59636523a/">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 md:text-6xl'>Caio Vincius</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Como desenvolvedor, meu objetivo principal é criar soluções de software para resolver problemas ou atender a necessidades de negócios. Isso geralmente envolve escrever código em uma ou mais linguagens de programação, depurar problemas de software e trabalhar com outros desenvolvedores para integrar o código em sistemas maiores.</p>
        </div>
        <div className='text-5xl flex justify-center py-3 text-gray-600 cursor-pointer'>
          <a href="https://www.linkedin.com/in/caio-vinicius-59636523a/">
          <AiFillLinkedin/>
          </a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} fill style={{objectFit:"cover"}}/>
        </div>
      </section>
      {/*SECOND PAGE*/}
      <section>
        <div>
        <h3 className="text-3xl py-1 dark:text-white">Serviços oferecidos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
             Desde o inicio da minha jornada na area de tecnologia, tenho desenvolvido projetos voltados para expansão do meu conhecimento e outros destinados a minha startup <span className="text-teal-500">CODE COREX</span> ,
              onde mantenho contato com pessoas competentes e talentosas do que fazem.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ofereço marjoritariamente o serviço como <span className="text-teal-500">programador</span> mas tambem como <span className="text-teal-500">webdesigner</span>.
            </p>
        </div>
        <div className='lg:flex gap-10'>
          {/*CARD ONE*/}
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Códigos funcionais</h3>
            <p className="py-2">
                Código limpo e bem organizado como manda o clean code!
            </p>
            <h4 className='p-4 text-teal-600'>Ferramentas usadas</h4>
            <p className="text-gray-800 py-1">Visual Studio Code</p>
            <p className="text-gray-800 py-1">JavaScript (ReactJS)</p>
            <p className="text-gray-800 py-1">Git</p>
          </div>
          {/*CARD TWO*/}
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Web Design</h3>
            <p className="py-2">
                Design bonito e pensado na experiência do usuário.
            </p>
            <h4 className='p-4 text-teal-600'>Ferramentas usadas</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Canva</p>
          </div>
        </div>
      </section>
      {/*SECTION THREE*/}
      <section className='py-10'>
        <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <a href="https://client-portfolio-ten.vercel.app">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://ass-factoring-front-end.vercel.app">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://spotify-clone-blush-eta.vercel.app">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://e-commerce-website-sigma.vercel.app">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
              />
              </a>
            </div>
          </div>
      </section>
    </main>
    </div>
  )
}
