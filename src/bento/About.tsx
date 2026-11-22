import TextDesign from "../components/TextDesign";

const About = () => {
    return (
      <div className="p-3">
        <h2 className="text-2xl font-bold pb-1 sm:pb-3">
          About
        </h2>
        <p className="pb-3 leading-relaxed sm:leading-7 overflow-hidden text-base">
            I specialize in <TextDesign variant="skill">React and modern web tooling</TextDesign> to
            build <TextDesign variant="role">clean, fast web apps</TextDesign> for brands,
            startups, and local businesses. I recently graduated with a degree in <TextDesign variant="achievement">Bachelor of Science in
            Computer Science</TextDesign>, and since then I've been turning what I learned in school into <TextDesign variant="achievement">real, shipped projects</TextDesign>.
        </p>

        <p className="pb-3 leading-relaxed sm:leading-7 overflow-hidden text-base">
            I'm driven by curiosity and growth, and I get real satisfaction from designing and
            building things I'd actually want to use. When I'm not coding, you can catch me at
            the gym or brewing a good cup of coffee. My sport these days is arm wrestling, and I'm currently learning MMA.
        </p>
      </div>
    )
}

export default About;
