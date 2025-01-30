import { Menubar } from "@/components/ui/menubar"
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import * as motion from "motion/react-client"
import Link from 'next/link';






const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (


    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", paddingTop: 26}}>
  <Menubar
  style={{
    display: "flex",
    justifyContent: "space-between", // Space only for major sections
    alignItems: "left",
    height: "45px",
    width: "930px",
    borderRadius: 15,
    position: "absolute"
  }}
>
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
    src="/logo.svg"
    alt="logo"
    style={{ height: "32px", width: "118px", paddingLeft: 2 }}
  />
</motion.button>

  <div className="absolute" style={{ marginTop: -35, left: 220 }}>
  <div className="absolute left-1/4 flex gap-1">
    <Button variant="ghost">
      <a  href="https://discord.gg/9UW4Z9zJ">
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

   
    <Button variant="ghost">
      <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Feedback</h1>
    </Button>
  


    <Link href="mailto:alexh2877@gmail.com">
    <Button variant="ghost">
       <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Contact</h1> 
    </Button>
    </Link>

   

  </div>
</div>


</Menubar>
<div style={{marginTop: 33, position: "relative"}}> 

<Image
      src="/background.svg"
      alt="scaffolding"
      style={{
        height: "530px",
        width: "706px",
        margin: "0 auto", // Center the background image horizontally
        display: "block", // Ensures the image does not leave extra space
        marginLeft: 60
      }}
    />


     <motion.h2 
   initial={{ opacity: 0, filter: "blur(10px)" }}
   animate={{ opacity: 1, filter: "blur(0px)" }}
   transition={{
     duration: 0.5,
     ease: "easeOut", // Smooth fade and blur removal
   }}
 style={{fontSize:"32px", fontWeight: "900", letterSpacing: "-1px", position: "absolute", top: 55, left: 290}} className={nunitoSans.className}>We build cool stuff </motion.h2>
      <motion.h3 
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        ease: "easeOut", // Smooth fade and blur removal
      }}
      style={{fontSize:"16px", fontWeight: "900", position: "absolute", top: 100, left: 300, opacity: 0.5, paddingTop: 5, color:'#7d7d7d', letterSpacing: -0.5}} className={nunitoSans.className}>Building original and practical<p> 
        utility and educational applications</p> for students, power users, and<p>
           developers alike... And our repos are </p>
           always open source.</motion.h3>

          <a href="https://github.com/Alexx1105/MuscleMemory">
           <Button variant="outline" className="h-[54px] w-[211px] rounded-b-md" style={{position: "absolute", top: 315, left: 52}}>
           <Image src="/mmicon.svg" alt="mm icon" style={{width: "45px", height: "45px", marginLeft: -12}}/>
           <div style={{textAlign: "center", marginLeft: "-1px"}}> 
            <motion.h1 animate={{
    opacity: [0, 0.5, 1],
    filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
    times: [0, 0.7, 1], // Control timing of each keyframe
  }}
style={{fontSize: "12px", opacity: "0.5", fontWeight: "600", paddingRight: "50px", color:'#7d7d7d', letterSpacing: -0.5 }} className={nunitoSans.className}>To be announced</motion.h1>
            <motion.h1
            animate={{
              opacity: [0, 0.5, 1],
              filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.7, 1], // Control timing of each keyframe
            }}
            style={{fontSize: "12px", fontWeight: "900", marginLeft: "10", letterSpacing: -0.5 }} className={nunitoSans.className}>Beta version coming soon!</motion.h1>
            </div>
           </Button>
</a>

           <a href="https://github.com/Alexx1105/MacStat-v2.1">
           <Button variant="outline" className="h-[54px] w-[211px] rounded-b-md" style={{position: "absolute", bottom: 276, right: -50}}>
           <Image src="/MacStat - classic.svg" alt="ms icon" style={{width: "45px", height: "45px", marginLeft: -12}}/>
           <div style={{textAlign: "center", marginLeft: "-5px"}}> 
            <motion.h1 animate={{
    opacity: [0, 0.5, 1],
    filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
    times: [0, 0.7, 1], // Control timing of each keyframe
  }}style={{fontSize: "12px", opacity: "0.5", fontWeight: "600", paddingRight: "1px", color:'#7d7d7d', letterSpacing: -0.5 }} className={nunitoSans.className}>v 2.5 out now for download</motion.h1>
            <motion.h1
            animate={{
              opacity: [0, 0.5, 1],
              filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.7, 1], // Control timing of each keyframe
            }}
            style={{fontSize: "12px", fontWeight: "900", marginLeft: "10", letterSpacing: -0.5 }} className={nunitoSans.className}>v3.0 overhaul coming soon!</motion.h1>
            </div>
           </Button>
     </a>
</div>

<div style={{position: "absolute", top: 576, justifyContent: "center", }}>
          <Menubar className="h-[210px] w-[1000px] rounded-2xl">

         <div style={{justifyContent: "center"}}>
          <motion.h1
          animate={{
            opacity: [0, 0.5, 1],
            filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 0.7, 1], // Control timing of each keyframe
          }}
          style={{fontSize: "28px", fontWeight: "900", marginTop: "-95px", marginLeft: "180px", letterSpacing: -0.5}} className={nunitoSans.className}>The Tools that power us to create the very best.</motion.h1>

          <div style={{position:"absolute", paddingTop: 15}}>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-2  ">
            
          <Image src="/swift-15.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 20}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 100, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -50, marginTop: 63}} className={nunitoSans.className}>Swift & <p>SwiftUI</p></h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/notion-2 1.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 160}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 245, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -50, marginTop: 63}} className={nunitoSans.className}>Notion<p>API</p></h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/firebase-2 1.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 300}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 385, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -40, marginTop: 63}} className={nunitoSans.className}>Deploy w<p>firebase</p></h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/typescript 1.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 445}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 530, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -30, marginTop: 75}} className={nunitoSans.className}>TypeScript</h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/react-1 1.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 585}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 670, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -60, marginTop: 75}} className={nunitoSans.className}>React</h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/next-js.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 730}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 812, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -50, marginTop: 75}} className={nunitoSans.className}>Node.js</h1>
          </Button>
          <Button variant="outline" className="h-[122px] w-[122px] rounded-2xl ml-5 ">
          <Image src="/shadcn-ui.svg" alt="ms icon" style={{width: "37px", height: "37px", position: "absolute", top: 27, left: 870}}/>
          <Image src="/plus.circle.svg" alt="ms icon" style={{width: "19px", height: "19px", position: "absolute", top: 27, left: 955, opacity: "0.5"}}/>
          <h1 style={{fontSize: "14px", fontWeight: "900", position: "absolute", opacity: "0.5", marginLeft: -30, marginTop: 75}} className={nunitoSans.className}>Shadcn ui</h1>
          </Button>
          </div>
           </div>
          </Menubar>

          <div className="max-h-10 relative">

         <motion.button
         whileHover={{
          scale: 1.0,
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
          <Image src="/minikimchi.svg" alt="logo kimchi" style={{width: 31, height: 30, position: "relative", top: 385, display:"flex"}}/>  
         </motion.button>

  <h1 className={`${nunitoSans.className} text-sm opacity-50 font-semibold pr-12 pt-[400px] `} style={{letterSpacing: -0.5}}>
    Building original and practical utility and educational
    <p>applications for students, power users, and developers alike...</p>
    <p>And our repos are always open source.</p>
  </h1>

<div className="flex justify-end">
<Button variant="ghost">
      <a  href="https://discord.gg/9UW4Z9zJ">
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
      <a href="https://github.com/Alexx1105/MacStat-v2.1">
      <h1 className={`${nunitoSans.className} opacity-100 font-bold text-xs`} style={{color:'#7d7d7d'}}>MacStat</h1>
      </a>
    </Button>

   
  <Button variant="ghost">
    <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Feedback</h1>
  </Button>



<Link href="mailto:alexh2877@gmail.com">
    <Button variant="ghost">
       <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Contact</h1> 
    </Button>
    </Link>
    </div>

  <Separator className="w-[999px] mt-6"/>
  <div className="pb-10">
  <h1 className={`${nunitoSans.className} opacity-50 font-semibold text-xs pt-5`} style={{letterSpacing: -0.5}} >© 2025 Kimchi Labs - All rights reserved</h1>
  </div>
</div>



</div>
</div>



  
  

         
  
  );
}