import { styles } from "../styles";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";

const Hero = () => {
  return (
    <section className={`relative h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} items-start`}>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb:24'>
          <div className = "text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br/><span className='text-[#aaa6c3]'>Nitin Kotcherlakota</span>
          </h1>
          <div>
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 rounded-full bg-[#000010]">
              <span>Download CV</span>
              <FiDownload className="text-xl"></FiDownload>
            </Button>
            <div className="top-[240px]">
              <Social containerStyles = "flex gap-6"/>
            </div>
          </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className='flex flex-col justify-center items-center mt-5'>
    //       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    //       <div className='w-1 sm:h-80 h-40 violet-gradient' />
    //     </div>

    //     <div>
          // <h1 className={`${styles.heroHeadText} text-white`}>
          //   Hi, I'm <span className='text-[#aaa6c3]'>Nitin Kotcherlakota</span>
          // </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         a software engineer based out of California<br className='sm:block hidden' />
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;