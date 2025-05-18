
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
<div className="justify-center flex pt-7">
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
  <a href="/musclememory">
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

<Link href="">
<Button variant="ghost">
   <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Pricing</h1> 
</Button>
</Link>

</div>
</div>
</Menubar>

<div className="mt-80 ml-40 pt-20 justify-center text-center">
           <img src="/MM.svg" alt="MuscleMemory icon" width={48} height={106} style={{position: "absolute", marginLeft: -240, marginTop: -20}} />
          <motion.h1 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, ease: "easeOut", }}
                   style={{fontSize:"64px", fontWeight: "900", letterSpacing: "-3px", marginLeft: -150, position: "absolute"}} className={nunitoSans.className}>Pricing coming soon</motion.h1>
            
            <div className="justify-start pt-20 flex">
                <motion.h2 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 0.5, filter: "blur(0px)"}} transition={{ duration: 0.5, ease: "easeOut", }} className={`${nunitoSans.className} opacity-50 font-semibold text-s`} style={{fontSize: 24}}>mmPro tiered pricing</motion.h2>
            </div> 
        
          </div>
          </div>

   );
};