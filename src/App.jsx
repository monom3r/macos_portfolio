import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock } from "#components";
import { Terminal, Safari, Resume, Finder, TextFile, ImageFile, Contact, Photos } from "#windows";

const App = () => {
   return (
      <main>
         <Navbar />
         <Welcome />
         <Dock />

         <Terminal />
         <Safari />
         <Resume />
         <Finder />
         <TextFile />
         <ImageFile />
         <Contact />
         <Photos />
      </main>
   );
};

export default App;
