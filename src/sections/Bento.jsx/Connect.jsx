import { facebook } from "../../assets/svg"
import { github }from "../../assets/svg"
import { instagram } from "../../assets/svg"
import { linkedin } from "../../assets/svg"
import { spotify } from "../../assets/svg"


const Hover = () => {
  return (
    <div className="relative w-64 h-40 overflow-hidden rounded-2xl shadow-md group cursor-pointer">
      {/* Background Content */}
      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <p className="text-gray-800 font-semibold">Hover over me</p>
      </div>

      {/* White Hover Overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-black font-medium">Now you see me</p>
      </div>
    </div>
  );
};


const Connect = () => {
    return (
<div className="p-3">
  <h2 className="text-xl font-bold mb-3">Connect</h2>
    <div className="flex flex-col gap-2">
        <a 
          href="https://www.linkedin.com/in/gabrieleduria/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-fit"
        >
          <img src={linkedin} alt="LinkedIn" className="w-[28px]" />
          <span>LinkedIn</span>
        </a>


        <a 
          href="https://github.com/gabrieleduria" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-fit"
        >
          <img src={github} alt="GitHub" className="w-[28px]" />
          <span>GitHub</span>
        </a>

        <a 
          href="https://www.facebook.com/GabrielEzekiee/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-fit"
        >
          <img src={facebook} alt="Facebook" className="w-[28px]" />
          <span >Facebook</span>
        </a>

        <a 
          href="https://www.instagram.com/gbrl.zkl/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-fit"
        >
          <img src={instagram} alt="Instagram" className="w-[28px]" />
          <span>Instagram</span>
        </a>

        <a 
          href="https://open.spotify.com/playlist/126SjKGW3wClaHWE244IFZ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-fit"
        >
          <img src={spotify} alt="Spotify" className="w-[28px]" />
          <span>Spotify</span>
        </a>
    </div>
</div>
    )
}

export default Connect
