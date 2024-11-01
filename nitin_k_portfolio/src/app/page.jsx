"use client";
import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar} from '../components'
export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-np-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
            <About />
            <Experience />
          <div className="relative z-0">
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
