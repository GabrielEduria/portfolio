import { Tag } from "../../components"
const TechStack = () => {
    return (
        <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>

            <div className="pb-2">
                <p className="font-bold pb-2">Frontend</p>
                   <div className="flex flex-wrap gap-3">                  
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>React</Tag>
                    <Tag>Next.js</Tag>
                   
                    <Tag>TailwindCSS</Tag>
                   </div>
            </div>

            <div className="pb-2">
            <p className="font-bold pb-2">Backend</p>
                   <div className="flex flex-wrap gap-3">
                    <Tag>Node.js</Tag>
                    <Tag>MySQL</Tag>
                    <Tag>PHP</Tag>
                    <Tag>Python</Tag>
                    <Tag>Laravel</Tag>
                   </div>
            </div>
           
           <div >
            <p className="font-bold pb-2">Tools</p>
                   <div className="flex flex-wrap gap-3">
                    <Tag>Adobe Creative Suite</Tag>
                    <Tag>Figma</Tag>
                    <Tag>Framer Motion</Tag>
                    <Tag>WordPress</Tag>
                   </div>
            </div>

        </div>
    )
}

export default TechStack
