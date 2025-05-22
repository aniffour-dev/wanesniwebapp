// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import DownloadButton from "../../../../public/assets/download_button.png"
// import Girl1 from "../../../../public/assets/girl1.webp"
// import Girl2 from "../../../../public/assets/girl2.webp"
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { Righteous } from "next/font/google";
// import { MdVerifiedUser } from "react-icons/md";
// import { Pacifico } from "next/font/google";

// const righteous = Righteous({
//     weight: "400",
//     subsets: ["latin"],
// })

// const pacifico = Pacifico({
//     weight: "400",
//     subsets: ["latin"],
// })

// const Hero = () => {

//     const APKUrl = "https://play.google.com/store/apps/details?id=host";

//   return (
//     <section>
//       <header className="bg-white !shadow-md">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
//           <div className="flex items-center justify-between h-16 lg:h-[72px]">
//             <div className="flex items-center flex-shrink-0">
              // <Link href="/" title="" className={`${righteous.className} inline-flex text-[28px] font-bold bg-gradient-to-r from-pink-700 via-purple-500 to-violet-400 text-transparent bg-clip-text animate-gradient`}>
              //   wanesni
              // </Link>
//             </div>

//             <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
//               <a
//                 href="#"
//                 title=""
//                 className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 {" "}
//                 All Artworks{" "}
//               </a>

//               <a
//                 href="#"
//                 title=""
//                 className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 {" "}
//                 All Artists{" "}
//               </a>

//               <a
//                 href="#"
//                 title=""
//                 className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 {" "}
//                 Sell Your Artwork{" "}
//               </a>
//             </div>

//             <div className="flex items-center justify-end ml-auto">
//               <div className="hidden lg:flex lg:items-center lg:space-x-8">
//                 <a
//                   href="/signup"
//                   className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   {" "}
//                   Get Started Now{" "}
//                 </a>

//                 <Link
//                   href="/login"
//                   className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   {" "}
//                   Login{" "}
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="relative py-12 overflow-hidden bg-slate-50 sm:py-16 lg:py-20 xl:py-24">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//           <div className="flex flex-col">
//             <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
//               <h1 className={`${pacifico.className} text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-5xl`}>
//                 Meet someone 💖✨ who truly gets you
//               </h1>
//               <p className="mt-5 text-[17px] font-medium text-gray-900 lg:mt-8">
//               Wanesni helps you connect with real people nearby who share your values, passions, and dreams. Love is just a conversation away.
//               </p>

//               <div className="mt-8 lg:mt-10 flex justify-start items-center gap-2.5">
//                 <Link
//                   href="/signup"
//                   className="flex-wrap gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 inline-flex items-center justify-center px-5 lg:px-7 py-4 text-base lg:text-lg font-semibold leading-7 text-white transition-all duration-200 border rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
//                   role="button"
//                 >
//                   Get Started <span className="hidden lg:block">Now</span>
//                   <HiOutlineArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
//                 </Link>
//                 <Link href="/">
//                     <Image src={DownloadButton} alt="Play Store Download Button" width={190} className="w-[185 px] lg:w-[190px]" />
//                 </Link>
//               </div>

//               <div className="mt-8 lg:mt-12">
//                 <svg
//                   className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
//                   viewBox="0 0 172 16"
//                   fill="none"
//                   stroke="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
//                   ></line>
//                   <line
//                     y1="-0.5"
//                     x2="18.0278"
//                     y2="-0.5"
//                     transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
//                   ></line>
//                 </svg>
//               </div>

//               <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
//                 <div>
//                   <p className="text-4xl font-bold text-gray-900">98+</p>
//                   <p className="mt-2 text-base font-medium text-gray-500">
//                     Countries
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-4xl font-bold text-gray-900">300k+</p>
//                   <p className="mt-2 text-base font-medium text-gray-500">
//                     Users
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2">
//               <div className="relative w-full overflow-auto">
//                 <div className="flex gap-8 flex-nowrap">
//                   <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
//                     <div className="overflow-hidden bg-white rounded shadow-xl">
//                       <div className="aspect-w-4 aspect-h-3">
//                         <Image
//                           className="object-cover w-full h-full"
//                           src={Girl1}
//                           width={0}
//                           height={0}
//                           alt=""
//                         />
//                       </div>
//                       <div className="p-8">
//                         <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
//                             <span>Mildred Witherspoon</span>
//                             <MdVerifiedUser className="size-5 text-sky-600" />
//                         </p>
//                         <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
//                           <img src="https://flagsapi.com/MA/shiny/64.png" className="w-5" />
//                           <p className="text-xs">Morocco</p>
//                         </div>
//                         <div className="flex items-end mt-1">
//                           <p className="text-lg font-bold text-gray-900">
//                             26 Years
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 mt-7 gap-x-4">
//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
//                             role="button"
//                           >
//                             Start Calling
//                           </a>

//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                             role="button"
//                           >
//                             View Profile
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
//                     <div className="overflow-hidden bg-white rounded shadow-xl">
//                       <div className="aspect-w-4 aspect-h-3">
//                       <Image
//                           className="object-cover w-full h-full"
//                           src={Girl2}
//                           width={0}
//                           height={0}
//                           alt=""
//                         />
//                       </div>
//                       <div className="p-8">
//                         <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
//                             <span>Nasmah Adila</span>
//                             <MdVerifiedUser className="size-5 text-sky-600" />
//                         </p>
//                         <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
//                           <img src="https://flagsapi.com/DZ/shiny/64.png" className="w-5" />
//                           <p className="text-xs">Algeria</p>
//                         </div>
//                         <div className="flex items-end mt-1">
//                           <p className="text-lg font-bold text-gray-900">
//                             22 Years
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 mt-7 gap-x-4">
//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
//                             role="button"
//                           >
//                             Start Calling
//                           </a>

//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                             role="button"
//                           >
//                             View Profile
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
//                     <div className="overflow-hidden bg-white rounded shadow-xl">
//                       <div className="aspect-w-4 aspect-h-3">
//                         <img
//                           className="object-cover w-full h-full"
//                           src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-3.png"
//                           alt=""
//                         />
//                       </div>
//                       <div className="p-8">
//                         <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
//                             <span>Jessamine Cousteau</span>
//                             <MdVerifiedUser className="size-5 text-sky-600" />
//                         </p>
//                         <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
//                           <img src="https://flagsapi.com/FR/flat/64.png" className="w-5" />
//                           <p className="text-xs">France</p>
//                         </div>
//                         <div className="flex items-end mt-1">
//                           <p className="text-lg font-bold text-gray-900">
//                             27 Years
//                           </p>
//                         </div>
//                         <div className="grid grid-cols-2 mt-7 gap-x-4">
//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
//                             role="button"
//                           >
//                             Start Calling
//                           </a>

//                           <a
//                             href="#"
//                             title=""
//                             className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                             role="button"
//                           >
//                             View Profile
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;



import Link from "next/link";
import React from "react";
import Image from "next/image";
import DownloadButton from "../../../../public/assets/download_button.png"
import Girl1 from "../../../../public/assets/girl1.webp"
import Girl2 from "../../../../public/assets/girl2.webp"
import { HiOutlineArrowRight } from "react-icons/hi";
import { Righteous } from "next/font/google";
import { MdVerifiedUser } from "react-icons/md";
import { Pacifico } from "next/font/google";
import Navbar from "../global/Header/Navbar";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"],
})

const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin"],
})

const Hero = () => {

    const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <section>
      <Navbar />

      <div className="relative py-12 overflow-hidden bg-slate-50 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col">
            <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
              <h1 className={`${pacifico.className} text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-5xl`}>
                Meet someone 💖✨ who truly gets you
              </h1>
              <p className="mt-5 text-[17px] font-medium text-gray-900 lg:mt-8">
              Wanesni helps you connect with real people nearby who share your values, passions, and dreams. Love is just a conversation away.
              </p>

              <div className="mt-8 lg:mt-10 flex justify-start items-center gap-2.5">
                <Link
                  href="/signup"
                  className="flex-wrap gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 inline-flex items-center justify-center px-5 lg:px-7 py-4 text-base lg:text-lg font-semibold leading-7 text-white transition-all duration-200 border rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                  role="button"
                >
                  Get Started <span className="hidden lg:block">Now</span>
                  <HiOutlineArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
                <Link href="/">
                    <Image src={DownloadButton} alt="Play Store Download Button" width={190} className="w-[185 px] lg:w-[190px]" />
                </Link>
              </div>

              <div className="mt-8 lg:mt-12">
                <svg
                  className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  ></line>
                </svg>
              </div>

              <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
                <div>
                  <p className="text-4xl font-bold text-gray-900">98+</p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Countries
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-gray-900">300k+</p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Users
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2">
              <div className="relative w-full overflow-auto">
                <div className="flex gap-8 flex-nowrap">
                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          className="object-cover w-full h-full"
                          src={Girl1}
                          width={0}
                          height={0}
                          alt=""
                        />
                      </div>
                      <div className="p-8">
                        <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
                            <span>Mildred Witherspoon</span>
                            <MdVerifiedUser className="size-5 text-sky-600" />
                        </p>
                        <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
                          <img src="https://flagsapi.com/MA/shiny/64.png" className="w-5" />
                          <p className="text-xs">Morocco</p>
                        </div>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            26 Years
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                            role="button"
                          >
                            Start Calling
                          </a>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                      <Image
                          className="object-cover w-full h-full"
                          src={Girl2}
                          width={0}
                          height={0}
                          alt=""
                        />
                      </div>
                      <div className="p-8">
                        <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
                            <span>Nasmah Adila</span>
                            <MdVerifiedUser className="size-5 text-sky-600" />
                        </p>
                        <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
                          <img src="https://flagsapi.com/DZ/shiny/64.png" className="w-5" />
                          <p className="text-xs">Algeria</p>
                        </div>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            22 Years
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                            role="button"
                          >
                            Start Calling
                          </a>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-full"
                          src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-3.png"
                          alt=""
                        />
                      </div>
                      <div className="p-8">
                        <p className="flex justify-start items-center gap-1.5 text-lg font-bold text-gray-900">
                            <span>Jessamine Cousteau</span>
                            <MdVerifiedUser className="size-5 text-sky-600" />
                        </p>
                        <div className="flex justify-start items-center gap-2 mt-6 font-medium tracking-widest text-gray-500 uppercase">
                          <img src="https://flagsapi.com/FR/flat/64.png" className="w-5" />
                          <p className="text-xs">France</p>
                        </div>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            27 Years
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                            role="button"
                          >
                            Start Calling
                          </a>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2.5 pb-3 text-sm font-semibold rounded-full text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
