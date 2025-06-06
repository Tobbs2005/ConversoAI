import React from 'react'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companions.actions'
import { getSubjectColor } from '@/lib/utils'


const Page = async () => {
  //Uncomment to replace with real companions
  //const companions = await getAllCompanions({limit: 3});
  const recentSessionCompanions = await getRecentSessions(10);

  return (

    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        {/* {companions.map((companion)=>(
          <CompanionCard
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
        />
        ))} */}

        
<CompanionCard
          id="1e5808ba-b6d0-4a34-b97f-2ade8059a676"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="84ede71e-fab1-4b15-a99b-53d1d3281922"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="d3c18b5d-a61b-45e3-b243-4f8e33891794"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Languages"
          duration={30}
          color="#bde7ff"
        />
      
      </section>
      <section className="home-section">
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessionCompanions} 
          classNames="w-2/3 max-lg:wfull"
        />
        <CTA></CTA>
      </section>
      


    </main>
  )
}

export default Page