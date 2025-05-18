import { Menubar } from "@/components/ui/menubar"
import Image from 'next/image';
  import { Nunito_Sans } from "next/font/google";
  import { Button } from "@/components/ui/button"
  import * as motion from "motion/react-client"
  import Link from 'next/link';



  const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });
  export default function MacStat() {
      return(


        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", paddingTop: 26,}}>
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
    width={118}
    src="/logo.svg"
    alt="logo"
    style={{ height: "32px", width: "118px", paddingLeft: 2, paddingTop: 5 }}
  />
</motion.button>
</a>
  <div className="absolute" style={{ marginTop: -35, left: 220 }}>
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

   

  </div>
</div>


</Menubar>


       <div className="pt-11" style={{alignItems: "flex-start", height: "100vh", position: "relative"}}> 
       <motion.img

      src="/largeBg.svg"
      alt="scaffolding"
     
      style={{
        height: "758px",
        width: "1009px",
        margin: "0 auto", // Center the background image horizontally
        display: "block", // Ensures the image does not leave extra space
        marginLeft: 5,
       
      }}
    />
    
         <motion.h2 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 0.5, filter: "blur(0px)"}} transition={{ duration: 0.5, ease: "easeOut", }} className={`${nunitoSans.className} opacity-50 font-semibold text-s`} style={{fontSize: 24, position: "relative", top: -660, left: 455}}>Introducing</motion.h2>
          <motion.h2 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, ease: "easeOut", }}
          style={{fontSize:"48px", fontWeight: "900", letterSpacing: "-3px", left: 500, top: -670, position: "relative"}} className={nunitoSans.className}>MacStat</motion.h2>
           <Image src="/MacStat - classic.svg" alt="ms icon" style={{width: "48px", height: "48px", left: 450, top: -733, position: "relative" }}/>
           
            <motion.h3 
                 initial={{ opacity: 0, filter: "blur(10px)" }}
                 animate={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{
                   duration: 1.1,
                   ease: "easeOut", // Smooth fade and blur removal
                 }}
                 style={{fontSize:"16px", fontWeight: "900", position: "relative", top: -695, left: 421, opacity: 0.5, color:'#7d7d7d', letterSpacing: -0.5}} className={nunitoSans.className}>Your open source, practical & lightweight<p> 
                  utility application delivering real time </p>usage data. With an ever growing suite<p>of useful features.</p>
                    </motion.h3>

            <motion.h3 
                 initial={{ opacity: 0, filter: "blur(10px)" }}
                 animate={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{
                   duration: 1.2,
                   ease: "easeOut", // Smooth fade and blur removal
                 }}
                 style={{fontSize:"12px", fontWeight: "600", position: "relative", top: -530, left: 428, opacity: 0.5, paddingTop: 5, color:'#7d7d7d', letterSpacing: 0.6}} className={nunitoSans.className}>v2.1 prev | <b>v2.5 out now!</b> | v3.0 coming soon!</motion.h3>
               <div className="absolute">
                <a href="/MacStat.dmg">
                <Button variant={"outline"} className="w-60 rounded-2xl absolute top-[-510px]" style={{backgroundColor: "#f2f2f0", left: 440, zIndex: 1}}>
                      <h1 className={`${nunitoSans.className}  font-black text-sm` }> Download Now</h1> 
                </Button>
                </a>
                </div>
       </div>

       <div className="absolute pl-8 ">
               <Menubar className="" style={{width: 1030, height: 454, marginTop: 760}}>
                <motion.img  initial={{ opacity: 0, filter: "blur(10px)" }}
                 animate={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{
                   duration: 0.5,
                   ease: "easeOut", // Smooth fade and blur removal
                 }} src="./demo.gif"  style={{width: 506, height: 436, borderRadius: 10, marginLeft: 510}}/>
                  
                  <div className=" pl-28 absolute space-y-4">
   <h1 style={{ fontSize: "28px", fontWeight: 900, letterSpacing: -1, paddingBottom: 40 }} className={nunitoSans.className}>Real stats in action </h1>
  <h1 style={{ fontSize: "24px", fontWeight: 500, letterSpacing: -1 }} className={nunitoSans.className}>
    - CPU load percentage
  </h1>
  <h1 style={{ fontSize: "24px", fontWeight: 500, letterSpacing: -1 }} className={nunitoSans.className}>
   - Active memory usage
  </h1>
  <h1 style={{ fontSize: "24px", fontWeight: 500, letterSpacing: -1 }} className={nunitoSans.className}>
    - Total RAM available
  </h1>
  <h1 style={{ fontSize: "24px", fontWeight: 500, letterSpacing: -1 }} className={nunitoSans.className}>
   - Mac model identifier
  </h1>
  <h1 style={{ fontSize: "24px", fontWeight: 500, letterSpacing: -1 }} className={nunitoSans.className}>
    - CPU & memory usage graph
  </h1>
</div>
 </Menubar>
 </div>

           <div className="absolute pl-8 flex pt-60 top-64">
           <Menubar className="" style={{width: 1030, height: 210, marginTop: 760}}>
          
          <div className="pl-30, pb-10">
           <h1 style={{ fontSize: "28px", fontWeight: 900, letterSpacing: -1, position: "absolute", paddingLeft: 510}} className={nunitoSans.className}>Its quittin time </h1>
           <h3 style={{fontSize:"16px", fontWeight: "900", position: "relative", top: 40, left: 510, color:'#7d7d7d', letterSpacing: -0.5}} className={nunitoSans.className}> Soft close the app through the MacStat <p>button, or force quit through keyboard</p> shortcuts... with more shortcuts coming<p>soon for more features!</p></h3>
           </div>
           <div className="pl-50, pt-5">
               <img src="./Component 2.svg" style={{marginLeft: -20}}/>
           </div>
           </Menubar>

                <div className="absolute top-full pt-5 ">
                         <Menubar style={{width: 1030 , height: 361}}> 

                         <h1 style={{ fontSize: "28px", fontWeight: 900, letterSpacing: -1, position: "absolute", paddingLeft: 60, top: 70 }} className={nunitoSans.className}>Widgets at a glance</h1>
                         <h3 style={{fontSize:"16px", fontWeight: "900", position: "relative", top: -40, left: 60, color:'#7d7d7d', letterSpacing: -0.5}} className={nunitoSans.className}>Dont clutter your menubar.<p>Widgets show your most recent </p>change in memory usage and CPU load<p>right from your desktop.</p></h3>
                         <h3 style={{fontSize:"16px", fontWeight: "900", position: "absolute", top: 240, left: 60, letterSpacing: -0.5}} className={nunitoSans.className}>This data updates when a significant change in your usage has occured*</h3>
                         <Menubar style={{width: 482, height: 64, left: 60,top: 280, position: "absolute"}}>
                         <h3 style={{fontSize:"16px", fontWeight: "900", position: "relative", top: 2, left: 10, letterSpacing: -0.5, opacity: 0.5}} className={nunitoSans.className}>"I use the MacStat widget daily <p>since my ram is limited"</p></h3>
                         <h3 style={{fontSize:"16px", fontWeight: "950", position: "relative", top: -2, left: 170, letterSpacing: -0.5}} className={nunitoSans.className}>Jyoutir Raj</h3>
                         <h3 style={{fontSize:"12px", fontWeight: "600", position: "relative", top: 15, left: 23, paddingTop: 5, color:'#7d7d7d'}} className={nunitoSans.className}>Prev contributor @PearAI</h3>
                         </Menubar>
                         <img src="./widget.svg"  style={{marginLeft: 370, marginTop: -80}}/>
                         </Menubar>
                </div>
           </div>

           <div 
  className="absolute bg-gradient-to-b inset-0 from-[#fdfdfd] to-[#f1f1f0] h-full w-full mt-[2000px] flex flex-col items-center justify-start "
> 
  {/* Heading */}
  <h2 
    style={{
      fontSize: "clamp(32px, 4vw, 48px)", 
      fontWeight: 900, 
      letterSpacing: "-0.03em", 
      marginTop: "35rem",
    }} 
    className={nunitoSans.className}
  >
    Download MacStat for free.
  </h2>

  {/* Subheading */}
  <motion.h3
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{
      duration: 1.2,
      ease: "easeOut", // Smooth fade and blur removal
    }}
    style={{
      fontSize: "clamp(10px, 1.2vw, 14px)",
      fontWeight: 600,
      opacity: 0.7,
      marginTop: "1rem",
      color: "#7d7d7d",
      letterSpacing: "0.06em",
      textAlign: "center",
    }} 
    className={nunitoSans.className}
  >
    v2.1 prev | <b>v2.5 out now!</b> | v3.0 coming soon!
  </motion.h3>

  {/* Download Button */}
  <a href="/MacStat.dmg" download>
  <Button 
    variant="outline" 
    className="w-60 rounded-2xl mt-4"
    style={{ 
      backgroundColor: "#fdfdfd",
    }}
  >
    <h1 className={`${nunitoSans.className} font-black text-sm`}> Download Now</h1> 
  </Button>
</a>



</div> 
</div>
       

      );
  };