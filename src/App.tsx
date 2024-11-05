import windows from "./assets/windows.jpg";
import bg1 from "./assets/bg1.jpg";
import macOS from "./assets/macOs.jpg";
import android from "./assets/android.jpg";
import ios from "./assets/apple ios.jpg";
import linux from "./assets/linux.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <Parallax pages={6}>
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
          offset={2}
          speed={1}
          // factor={}
          style={{
            backgroundImage: `url(${macOS})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={1}
          // factor={}
          style={{
            backgroundImage: `url(${android})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={4}
          speed={1}
          // factor={}
          style={{
            backgroundImage: `url(${ios})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={5}
          speed={1}
          // factor={}
          style={{
            backgroundImage: `url(${linux})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={0}
          speed={1}
        >
          <h1 className="text-4xl font-bold font-inter text-center leading-relaxed text-rose-800 mb-16">Jefferson Balde</h1>

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

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={2}
          speed={0.5}
        >
          <div className="backdrop-blur-lg backdrop-brightness-75 rounded-xl">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-6xl font-bold font-inter text-center leading-normal text-slate-50">
              Apple macOS.
            </h1>
            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Regular Updates{" "}
              </span>
              Apple regularly releases macOS updates, often bundled with new
              feature rollouts. These updates include security patches and are
              pushed directly to devices in a controlled environment, ensuring
              all compatible systems are promptly updated.
            </h1>

            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                XProtect and Gatekeeper{" "}
              </span>
              macOS includes built-in antivirus software, XProtect, and the
              Gatekeeper feature, which checks apps from outside the App Store
              for malware. This layered approach helps defend macOS against a
              wide range of threats, focusing on app safety and code signing.
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={3}
          speed={0.5}
        >
          <div className="backdrop-blur-sm backdrop-brightness-75 rounded-xl">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-6xl font-bold font-inter text-center leading-normal text-slate-50">
              Google Android OS
            </h1>
            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Monthly Security Patches{" "}
              </span>
              Google publishes monthly security updates to address Android
              vulnerabilities. Although updates are initiated by Google, they
              depend on manufacturers to deploy them to individual devices,
              often causing delays
            </h1>

            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Google Play Protect{" "}
              </span>
              Play Protect scans applications in the Play Store and on devices
              for malware and other security threats. It helps mitigate risks
              from third-party apps and malware, providing continuous security
              even for devices with delayed OS updates
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={4}
          speed={0.5}
        >
          <div className="backdrop-blur-sm backdrop-brightness-75 rounded-xl">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-6xl font-bold font-inter text-center leading-normal text-slate-50">
              Apple iOS
            </h1>
            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Frequent Updates{" "}
              </span>
              Apple deploys regular iOS updates directly to compatible devices,
              providing a consistent security baseline across its ecosystem.
              Users are encouraged to keep devices updated as older versions may
              lose compatibility with new security protocols.
            </h1>

            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                App Store Review Process{" "}
              </span>
              Apple’s stringent app review process and sandboxing techniques
              isolate apps from each other and from the core OS, reducing the
              risk of malicious software reaching users. Additionally,
              jailbroken devices, which bypass these protections, can compromise
              security.
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-center justify-center px-36 flex-col"
          offset={5}
          speed={0.5}
        >
          <div className="backdrop-blur-sm backdrop-brightness-75 rounded-xl">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-6xl font-bold font-inter text-center leading-normal text-slate-50">
              Linux Operating System
            </h1>
            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Open-Source Security Patches:{" "}
              </span>
              Linux distributions use package management systems that allow
              users to receive security patches for specific components. Many
              distributions have Long-Term Support (LTS) releases focusing on
              security for extended periods.
            </h1>

            <h1 className="text-4xl font-bold font-inter text-center leading-normal text-slate-50 mt-10">
              <span className="font-extrabold italic text-red-700">
                Community and Vendor Contributions:{" "}
              </span>
              As an open-source system, Linux benefits from a global community
              of developers who quickly identify and patch vulnerabilities.
              Major distributions like Ubuntu and Red Hat have dedicated
              security teams, while smaller distributions rely more on community
              efforts.
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
