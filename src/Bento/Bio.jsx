const bio = [
  {
    year: '2004',
    description: 'Born in Manila, philippines'
  },
  {
    year: '2018',
    description: '("Hello World")'
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
    description: 'Started studying Computer Science'
  },
  {
    year: '2023',
    description: 'Started taking projects'
  },
  {
    year: '2026',
    description: 'Expected Graduation 🎓'
  },
  {
    year: '2026',
    description: 'And Many More 🤣😉🤞🌹' 
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
