import windows from "./assets/windows.jpg";
import bg1 from "./assets/bg1.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <Parallax pages={9}>
        {/* // <ParallaxLayer
        //   sticky={{ start: 0.9, end: 2.5 }}
        //   style={{ textAlign: "center" }}
        // >
        //   <img src={linux2} />
        // </ParallaxLayer> */}

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${windows})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={1}
          // factor={}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          className="flex items-center justify-center px-36"
          offset={0}
          speed={1}
        >
          <h1 className="text-5xl font-bold font-inter text-center leading-relaxed text-slate-50 ">
            How do different{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
              operating systems
            </span>{" "}
            manage vulnerabilities, and what are the specific challenges faced
            by less popular or less frequently updated systems in maintaining
            security?
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={1}
          speed={0.5}
        >
          <div className="backdrop-blur-sm backdrop-brightness-75 rounded-xl">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-6xl font-bold font-inter text-center leading-normal text-slate-50">
              Microsoft Windows.
            </h1>
            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Patch Tuesday{" "}
              </span>
              Microsoft has a monthly schedule (second Tuesday of each month)
              known as "Patch Tuesday," where critical updates are released.
            </h1>

            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Zero-Day Protection{" "}
              </span>
              <span className="italic text-lime-600">
                Microsoft Vulnerability Research Program:{" "}
              </span>
              Microsoft has a dedicated team working on zero-day
              vulnerabilities. They collaborate with security researchers
              through bug bounty programs to identify and mitigate
              vulnerabilities before they can be exploited.
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
