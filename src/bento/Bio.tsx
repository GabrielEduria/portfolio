import TextDesign from "../components/TextDesign"

const bio = [
  {
    year: '2004',
    description: 'Born in Manila, philippines'
  },
  {
    year: '2018',
    description: 'printf("Hello, World!/n)'
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
    description: (
    <>Started studying <TextDesign> Computer Science </TextDesign></> 

    )
  },
  {
    year: '2023',
    description: 'Started freelancing'
  },
  {
    year: '2025',
    description: 'Built numerous projects and learned a lot of new things'
  },
  {
    year: '2026',
    description: 'Founded and started a SMMA Digital Agency'
  },
  {
    year: '2026',
    description: 'Graduated from college with a degree of Bachelor of Science in Computer Science 🎓' 
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
                    className="flex items-baseline gap-2 sm:gap-4 pb-4 leading-7"
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
