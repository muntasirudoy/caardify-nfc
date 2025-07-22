

import { Choose } from "./choose"
import { Growing } from "./growing"
import { HeroSection } from "./hero"
import Journey from "./journey"
import { Promise } from "./promise"


import { WhyCaardify } from "./why-caardify"

export const CompanySections = () => {

    return <>
        <HeroSection />
        <Choose />
        <Journey />
        <WhyCaardify />
        <Growing />
        <Promise />
    </>


}