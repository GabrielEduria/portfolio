import { Tag } from "../../components"
const TechStack = () => {
    return (
        <div className="p-3">
            <h2 className="text-xl font-bold mb-3">Tech Stack</h2>

            <div className="mb-2">
                <p className="font-bold mb-2">Frontend</p>
                   <div className="flex flex-wrap gap-3">                  
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>React</Tag>
                    <Tag>NextJs</Tag>
                    <Tag>Laravel</Tag>
                    <Tag>TailwindCSS</Tag>
                   </div>
            </div>

            <div >
            <p className="font-bold mb-2">Backend</p>
                   <div className="flex gap-3">
                    <Tag>Node.js</Tag>
                    <Tag>MySQL</Tag>
                    <Tag>PHP</Tag>
                    <Tag>Python</Tag>
                   </div>
            </div>

            <div></div>
        </div>
    )
}

export default TechStack
