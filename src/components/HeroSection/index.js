import React from 'react'
import HeroBGAnimation from '../HeroBGAnimation'
import {
    HeroBg,
    HeroContainer,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    Img,
    ResumeButton,
    Span,
    SubTitle,
    TextLoop,
    Title
} from './HeroStyle'
import HeroImg from '../../images/knapkynIcon.png'
import Typewriter from 'typewriter-effect';
import {Bio} from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBGAnimation/>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hello, my name is <br/> {Bio.name}!</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>View Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image"/>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection