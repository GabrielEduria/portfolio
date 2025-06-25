import { facebook } from "../../assets/svg"
import { instagram } from "../../assets/svg"
import { linkedin } from "../../assets/svg"
import { spotify } from "../../assets/svg"

const Connect = () => {
    return (
        <div className="p-3">
          <h2 className="text-2xl  font-bold mb-3">Connect</h2>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.linkedin.com/in/gabrieleduria/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit transition transform duration-200 hover:scale-105"
              >
                <img src={linkedin} alt="LinkedIn" className="w-[28px]" />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/gabrieleduria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit transition transform duration-200 hover:scale-105"
              >
                <i className="fa-brands fa-github text-[29px] leading-none pl-[0.5]"></i>
                <span>GitHub</span>
              </a>

              <a 
                href="https://www.facebook.com/gbrl.zkl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit transition transform duration-200 hover:scale-105"
              >
                <img src={facebook} alt="Facebook" className="w-[28px]" />
                <span>Facebook</span>
              </a>

              <a 
                href="https://www.instagram.com/gbrl.zkl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit transition transform duration-200 hover:scale-105"
              >
                <img src={instagram} alt="Instagram" className="w-[28px]" />
                <span>Instagram</span>
              </a>

              <a 
                href="https://open.spotify.com/playlist/126SjKGW3wClaHWE244IFZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit transition transform duration-200 hover:scale-105"
              >
                <img src={spotify} alt="Spotify" className="w-[28px]" />
                <span>Spotify</span>
              </a>
            </div>
        </div>

    )
}

export default Connect
