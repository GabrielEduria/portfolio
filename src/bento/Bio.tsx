import TextDesign from "../components/TextDesign";

const bio = [
  {
    year: '2004',
    description: 'Born in Manila, Philippines'
  },
  {
    year: '2018',
    description: 'printf("Hello, World!\\n");'
  },
  {
    year: '2019',
    description: 'First day hitting the Gym'
  },
  {
    year: '2020',
    description: 'Studied ABM'
  },
  {
    year: '2022',
    description: <>Started studying <TextDesign variant="skill">Computer Science</TextDesign></>
    
  },
  {
    year: '2023',
    description: <>Started <TextDesign variant="role">freelancing</TextDesign></>,
  },
  {
    year: '2024',
    description: <>Built <TextDesign variant="role">10+ projects</TextDesign> and made <TextDesign variant="skill">50+ GitHub contributions</TextDesign></>
  },
  {
    year: '2025',
    description: <>Built <TextDesign variant="role">numerous projects</TextDesign> and learned a lot of new things</>
  },
  {
    year: '2026',
    description: <>Founded <TextDesign variant="achievement">Blairr Digital</TextDesign></>
  },
  {
    year: '2026',
    description: <>Got a university degree of <TextDesign variant="achievement">BSc Computer Science</TextDesign> 🎓</>,
  }
]

const Bio = () => {
    return (
      <div className="p-3">
        <h2 className="text-2xl font-bold mb-3 ">Bio</h2>
              {bio.map((info, index) => {
                return( 
                  <div 
                    key={index} 
                    className="flex items-baseline gap-2 sm:gap-4 pb-3 leading-7"
                  >
                    <p className="text-lg font-bold">{info.year}</p>
                    <p className="text-base">{info.description}</p>
                  </div>
                )
              })}
      </div>

    )
}

export default Bio
