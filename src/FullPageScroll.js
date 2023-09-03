import React from 'react'
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage'

import bg from "./img/test.jpg"

const FullPageScroll = () => {
    const SectionSyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <Fullpage>
            <FullpageNavigation style={{ width: 0, opacity: 0.1 }} />
            <FullPageSections>
                <FullpageSection style={{ ...SectionSyle, backgroundImage: `url(${bg})`, backgroundSize: `cover` }}>
                    <h1>Section 1</h1>
                </FullpageSection>
                <FullpageSection style={SectionSyle}>
                    <h1>Section 2</h1>
                    <p>
                        Fullpage <FullpageSection.Number />/<FullpageCount />.
                    </p>
                </FullpageSection>
                <FullpageSection style={SectionSyle}>
                    <h1>Section 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll