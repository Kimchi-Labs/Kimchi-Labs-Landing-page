import { Menubar } from "@/components/ui/menubar"
import Image from 'next/image';
  import { Nunito_Sans } from "next/font/google";
  import { Button } from "@/components/ui/button"
  import * as motion from "motion/react-client"
  import Link from 'next/link';
import { relative } from "path";
import { clear } from "console";
import { ChevronRight } from "lucide-react";
import { Separator } from "@radix-ui/react-menubar";
  

  const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });

  export default function macstat() {
   return(

    <div style={{ display: "flex", alignItems: "flex-start", height: "100vh", paddingTop: 26, justifyContent: "center"}}>
    <Menubar
style={{
display: "flex",
justifyContent: "space-between", // Space only for major sections
alignItems: "left",
height: "45px",
width: "930px",
borderRadius: 15,
position: "absolute",
zIndex: 1
}}
>
<a href="/homepage"> 
<motion.button
whileHover={{
scale: 1.1,
rotate: [0, -10, 10, -10, 10, 0], // The "jiggle" rotation
transition: {
  type: "spring",
  stiffness: 100,
  damping: 10,
  mass: 1,
  bounce: 0.3,
},
}}
>
<Image
  src="/logonew.png"
  alt="logo"
  width={118}    // ✔️ required
  height={32}    // ✔️ required
  style={{ paddingLeft: 2, paddingTop: 5 }}
/>
</motion.button>
</a>
<div className="" style={{ marginTop: -35, left: 220 }}>
<div className="absolute left-1/4 flex gap-1">
<Button variant="ghost">
  <a  href="https://discord.gg/23PSGZ6j">
  <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Discord</h1>
  </a>
</Button>

<Button variant="ghost">
<a  href="https://github.com/Kimchi-Labs">
  <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>GitHub</h1>
  </a>
</Button>

<Button variant="ghost">
  <a href="https://github.com/Alexx1105/MuscleMemory">
  <h1 className={`${nunitoSans.className} opacity-100 font-bold text-xs`} style={{color:'#7d7d7d'}}>MuscleMemory</h1>
  </a>
</Button>

<Button variant="ghost">
  <a href="/macstat">
  <h1 className={`${nunitoSans.className} opacity-100 font-bold text-xs`} style={{color:'#7d7d7d'}}>MacStat</h1>
  </a>
</Button>

<Link href="mailto:alexh2877@gmail.com">
<Button variant="ghost">
   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Contact</h1> 
</Button>
</Link>

<Link href="/pricing">
<Button variant="ghost">
   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Pricing</h1> 
</Button>
</Link>

</div>
</div>
</Menubar>

<div className="mt-40 justify-center text-center">
          <motion.h1 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, ease: "easeOut", }}
                   style={{fontSize:"48px", fontWeight: "900", letterSpacing: "-3px", marginLeft: -180}} className={nunitoSans.className}>Take Notion<br/>even further </motion.h1>
          
        
                
               <div className="justify-center pt-1">
               <img src="/MM.svg" alt="MuscleMemory icon" width={48} height={106} style={{position: "absolute", marginLeft: 650, marginTop: -130}} />
                  <motion.h2 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 0.5, filter: "blur(0px)"}} transition={{ duration: 0.5, ease: "easeOut", }} className={`${nunitoSans.className} opacity-50 font-semibold text-s`} style={{fontSize: 24}}>For students and Notion lovers alike,<br/>a new way of passive memorization<br/>using LiveActivities as flashcards.</motion.h2>
                 
                 </div>

                 <div className="justify-center, pt-24">
                 <motion.h3 
                 initial={{ opacity: 0, filter: "blur(10px)" }}
                 animate={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{
                   duration: 1.2,
                   ease: "easeOut", // Smooth fade and blur removal
                 }}
                 style={{fontSize:"12px", fontWeight: "600", position: "relative", color:'#7d7d7d', letterSpacing: 0.6}} className={nunitoSans.className}>DynamicIsland only on iPhone 14,15,16 Pro/Max & iPhone 15, 16*</motion.h3>
                 </div>

                 
                 <div className="justify-center pt-5 ">
                 <div className="flex justify-end">
                    <Link href = "https://www.notion.com/integrations">
                 <Button variant="ghost" className="font-thin space-x-6 text-xs pl-5">Notion Integrations <ChevronRight></ChevronRight></Button>
                 </Link>
                 </div>  
               
                 <h2 className={`${nunitoSans.className} text-[#0D2854] font-black text-[24px] absolute mt-15 pt-5 ml-5 `}>Import your pages</h2>
                 <h2 className={`${nunitoSans.className} text-left text-[#0D2854] font-medium text-[24px] absolute mt-10 pt-5 ml-5 `}>MuscleMemory is a app integration that seamlessly<br/>imports your notes directly from Notion.</h2>
                                                                          
                 <Menubar className="border-0 !border-border:bg-transparent !bg-[#D3E4FA] w-[1010px] h-[908px] rounded-3xl opacity-25"/>
                 <img className="mt-[-700px] relative ml-8" width={939} height={608} src="phones2.png"/>
                 <h3 style={{fontSize:"12px", fontWeight: "600", position: "relative", color:'#0D2854', letterSpacing: 0.6, paddingTop: "5", textAlign: "left", marginTop: 35, paddingLeft: 25}} className={nunitoSans.className}>In Notion, you must first add MuscleMemory from the Integrations gallery*</h3>
                 </div>

                 <div className="justify-center mt-10 pt-3"> 
                 <h2 className={`${nunitoSans.className} text-[#000000] font-black text-[24px] absolute mt-15 pt-5 ml-5 `}>Introducing DynamicRep</h2>
                 <h2 className={`${nunitoSans.className} text-left text-[#000000] font-medium text-[24px] absolute mt-10 pt-5 ml-5 `}>MuscleMemory iterates through your Notion notes, sending bite<br/>sized flash cards inside of DynamicIsland throughout the day,<br/>as a whole new way of passive repetition-based learning.</h2>
                 <Menubar className="border-0 !border-border:bg-transparent !bg-[#F2F2F0] w-[1010px] h-[908px] rounded-3xl opacity-25"/>
                 <img className="mt-[-680px] relative ml-56" width={571} height={626} src="/dynamicrep.png"/>
                 </div>

                  <div className="justify-center mt-10 pt-7"> 
                  <h2 className={`${nunitoSans.className} text-[#1C3E37] font-black text-[24px] absolute mt-15 pt-5 ml-5 `}>You’re in control </h2>
                 <h2 className={`${nunitoSans.className} text-left text-[#1C3E37] font-medium text-[24px] absolute mt-10 pt-5 ml-5 `}>Control how often you receive your flashcard notes throughout<br/>the day, how to iterate through your notes...or not at all.</h2>
                 <Menubar className="border-0 !border-border:bg-transparent !bg-[#EEF7F7] w-[1010px] h-[908px] rounded-3xl opacity-25"/>
                  <img className="mt-[-680px] relative ml-40" width={660} height={608} src="/controls.png"/>
                 </div>
                 
                 <div className="justify-center mt-10 pt-10"> 
                 <h2 className={`${nunitoSans.className} text-[#000000] font-black text-[24px] absolute mt-15 pt-5 ml-5`}>Safe and secure</h2>
                 <h2 className={`${nunitoSans.className} text-left text-[#000000] font-medium text-[24px] absolute mt-10 pt-5 ml-5 `}>Your Notion pages are stored locally on-device<br/>and never uploaded to a remote server. </h2>
                 <Menubar className="border-0 !border-border:bg-transparent !bg-[#F2F2F0] w-[1010px] h-[152px] rounded-3xl opacity-25"/>
                 <img className="mt-[-125px] relative ml-[205px]" width={15} height={23} src="/lock.png"/>
                 </div>

                 <div className="justify-center mt-10 pt-20"> 
                 <h2 className={`${nunitoSans.className} text-[#000000] font-black text-[24px] absolute mt-15 pt-5 ml-5`}>Not another productivity app</h2>
                 <h2 className={`${nunitoSans.className} text-left text-[#000000] font-medium text-[24px] absolute mt-10 pt-5 ml-5 `}>MuscleMemory is meant to be used in tandem with Notion, you<br/>make your pages pretty...we turn them into flashcards.</h2>
                 <Menubar className="border-0 !border-border:bg-transparent !bg-[#F2F2F0] w-[1010px] h-[152px] rounded-3xl opacity-25"/>
                 <img className="mt-[-140px] relative ml-[880px]" width={102} height={46} src="/icons2.png"/>
                 </div>

                 <div className="justify-center h-screen pt-40"> 
                 <img src="/MM.svg" alt="MuscleMemory icon" width={26} height={58} style={{position: "absolute", marginLeft: 195, marginTop: 450}} />
                 <h1 style={{fontSize:"48px", fontWeight: "900", letterSpacing: "-3px", marginLeft: 80, marginTop: 50, paddingTop: 400}} className={nunitoSans.className}>Beta coming to iOS this month.</h1>
                 <h2 className={`${nunitoSans.className} opacity-50 font-semibold text-s pl-12 text-center`} style={{fontSize: 24}}>Follow us on Linkedin, join the discord, and be part of the waitlist.</h2>


                 <div className="justify-center mt-80 pt-20 flex">
                  
                 
                  <div className="absolute ml-80 pl-80 pb-5  ">
                    
                   <Link href="/pricing">
                   <Button variant="ghost">
                   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Pricing</h1> 
                   </Button>
                   </Link>
                   <Link href="mailto:alexh2877@gmail.com">
                   <Button variant="ghost">
                   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Contact</h1> 
                   </Button>
                   </Link>
                    <Link href="">
                   <Button variant="ghost">
                   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Change log</h1> 
                   </Button>
                   </Link>
                    <Link href="https://www.linkedin.com/company/kimchilabs/?viewAsMember=true">
                   <Button variant="ghost">
                   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Linkedin</h1> 
                   </Button>
                   </Link>
                   <Link href="https://github.com/Kimchi-Labs">
                   <Button variant="ghost">
                   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Github</h1> 
                   </Button>
                   </Link>
                   </div>

                  <Separator className="w-[999px] h-px bg-gray-200"/>
                 </div>
               

                 </div>

                

  
  
                 

</div>
 </div>

   );
  };