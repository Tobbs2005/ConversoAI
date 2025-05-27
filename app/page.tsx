import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
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
          companions={recentSessions} //temprorary placeholder (DB not setup)
          classNames="w-2/3 max-lg:wfull"
        />
        <CTA></CTA>
      </section>
      


    </main>
  )
}

export default Page