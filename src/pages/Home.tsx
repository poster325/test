import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BodyText,
  CaptionText,
  CardContainer,
  CardIcon,
  CardItem,
  Container,
  FlexBox,
  Section,
  SectionHeader,
  SubtitleText,
  TitleText,
} from "../components";

const Hero = styled.section`
  /* background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  ); */
  background-color: white;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HighlightSVG = styled.img`
  position: absolute;
  top: 10%; /* Adjust as needed */
  right: 0; /* Adjust as needed */
  width: 65%; /* Adjust size to cover the title */
  max-width: 600px; /* Max width to match title line length */
  height: auto;
  z-index: -1;
  opacity: 0;
  animation: highlightDraw 2s ease-out forwards;

  @keyframes highlightDraw {
    0% {
      clip-path: inset(0 100% 0 0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      clip-path: inset(0 0% 0 0);
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  color: black;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
`;

const ScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: black;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 180px;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  opacity: 0.95;
  transition: transform 0.5s ease-out;
  z-index: 1;

  /* &:hover {
    transform: scale(1.1) !important;
    opacity: 1;
    z-index: 10;
    animation-play-state: paused;
  } */

  &:nth-child(1) {
    top: 10%;
    left: 8%;
    width: 180px;
    animation: float1 10s infinite ease-in-out;
  }
  &:nth-child(2) {
    top: 5%;
    right: 12%;
    width: 220px;
    animation: float2 12s infinite ease-in-out;
  }
  &:nth-child(3) {
    bottom: 25%;
    left: 15%;
    width: 190px;
    animation: float3 11s infinite ease-in-out;
  }
  &:nth-child(4) {
    bottom: 15%;
    right: 8%;
    width: 200px;
    animation: float4 9s infinite ease-in-out;
  }
  &:nth-child(5) {
    top: 30%;
    left: 28%;
    width: 160px;
    animation: float5 13s infinite ease-in-out;
  }
  &:nth-child(6) {
    top: 20%;
    right: 25%;
    width: 170px;
    animation: float6 10.5s infinite ease-in-out;
  }
  &:nth-child(7) {
    bottom: 5%;
    left: 35%;
    width: 210px;
    animation: float7 11.5s infinite ease-in-out;
  }
  &:nth-child(8) {
    top: 55%;
    right: 30%;
    width: 150px;
    animation: float8 9.5s infinite ease-in-out;
  }

  @keyframes float1 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(20px, 10px) rotate(5deg);
    }
    66% {
      transform: translate(-10px, 20px) rotate(-3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float2 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-15px, 25px) rotate(-7deg);
    }
    66% {
      transform: translate(10px, -15px) rotate(4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float3 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(10px, -10px) rotate(3deg);
    }
    66% {
      transform: translate(-20px, -5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float4 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-5px, 15px) rotate(2deg);
    }
    66% {
      transform: translate(15px, -10px) rotate(-4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float5 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(25px, -5px) rotate(6deg);
    }
    66% {
      transform: translate(-10px, 15px) rotate(-2deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float6 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(10px, 20px) rotate(-3deg);
    }
    66% {
      transform: translate(-5px, -10px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float7 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-20px, 10px) rotate(4deg);
    }
    66% {
      transform: translate(10px, -20px) rotate(-6deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float8 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(15px, -15px) rotate(-2deg);
    }
    66% {
      transform: translate(-5px, 5px) rotate(3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  box-sizing: border-box;
  padding-left: 12px;
`;

const ImagePlaceholder = styled.div`
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const ImagePlaceholderLarge = styled.div`
  flex: 1 1 auto;

  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const StepsContainer = styled.div`
  width: 800px;
  position: relative;
  margin-top: 3rem;
`;

const StepItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  background: var(--primary-color);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroContent>
            <HighlightSVG src="/imgs/highlight.svg" alt="Highlight" />
            <Title className="ginto">
              Where Stories Bind
              <br />
              and Memories Live.
            </Title>
            <Subtitle>
              Bind transforms the traditional publishing process <br />
              by shifting focus from single-author narratives to shared memory
              storytelling.
            </Subtitle>
            <ScrollButton href="#intro">
              Discover How It Works
              <span>→</span>
            </ScrollButton>
          </HeroContent>
        </Container>
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 1" />
        <FloatingImage src="/imgs/home2.jpg" alt="Floating Image 2" />
        <FloatingImage src="/imgs/home3.jpg" alt="Floating Image 3" />
        <FloatingImage src="/imgs/home4.jpg" alt="Floating Image 4" />
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 5" />
        <FloatingImage src="/imgs/home3.jpg" alt="Floating Image 6" />
        <FloatingImage src="/imgs/home4.jpg" alt="Floating Image 7" />
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 8" />
        <ScrollIndicator>
          <span>↓</span>
        </ScrollIndicator>
      </Hero>

      <Section id="intro">
        <Container>
          <SectionHeader>
            <TitleText className="ginto">What is Bind?</TitleText>
            <BodyText>
              Bind transforms the traditional publishing process
              <br />
              by shifting focus from single-author narratives to shared memory
              storytelling.
            </BodyText>
          </SectionHeader>

          <TwoColumn>
            <FlexBox gap={12}>
              <SubtitleText>Remembering Together</SubtitleText>
              <BodyText>
                Through conversational data, photos, and emotional fragments,
                Bind helps groups reflect on a year of their collaborative
                memories.
              </BodyText>
              <FeatureList>
                <CaptionText>
                  • Shared memories become the foundation, not a single author's
                  voice
                </CaptionText>
                <CaptionText>
                  • Each book is a one-year time capsule, co-written by those
                  who lived through it
                </CaptionText>
                <CaptionText>
                  • AI helps structure stories, but the tone stays deeply
                  personal
                </CaptionText>
                <CaptionText>
                  • Participants receive a beautifully made, emotionally rich
                  book that feels truly theirs
                </CaptionText>
              </FeatureList>
            </FlexBox>
            <ImagePlaceholder>Platform Interface Preview</ImagePlaceholder>
          </TwoColumn>

          <CardContainer>
            <CardItem>
              <CardIcon>📚</CardIcon>
              <BodyText bold={true}>Multi-perspective Collection</BodyText>
              <CaptionText>
                Bind supports guided memory collection from multiple
                participants through structured interviews designed by the
                binder.
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🤖</CardIcon>
              <BodyText bold={true}>Organizing Narrative with AI</BodyText>
              <CaptionText>
                An AI system helps organize, group, and structure raw memory
                fragments with a consistent tone.
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🎯</CardIcon>
              <BodyText bold={true}>Design Tailored for Memory</BodyText>
              <CaptionText>
                Through design choices in tone and visuals, each book is
                tailored to the emotional truth of its contributors.
              </CaptionText>
            </CardItem>
          </CardContainer>
        </Container>
      </Section>

      <Section $bgColor="var(--bg-secondary)">
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Who Can Use Bind?</TitleText>
            <BodyText>
              Bind is for those who want to reflect, remember, and reimagine
              their experiences together.
            </BodyText>
          </SectionHeader>

          <CardContainer>
            <CardItem>
              <CardIcon>👨‍👩‍👧‍👦</CardIcon>
              <BodyText bold={true}>Families</BodyText>
              <CaptionText>
                Parents, siblings, and children recalling a year of everyday
                life
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🎉</CardIcon>
              <BodyText bold={true}>Friend Groups</BodyText>
              <CaptionText>
                Turning everyday photos and jokes into a meaningful record
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🎓</CardIcon>
              <BodyText bold={true}>School Colleagues</BodyText>
              <CaptionText>
                Commemorating a shared journey of school life or graduation
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🎸</CardIcon>
              <BodyText bold={true}>Student Clubs</BodyText>
              <CaptionText>
                Bandmates or project teams preserving behind-the-scenes emotions
              </CaptionText>
            </CardItem>
          </CardContainer>

          <TwoColumn style={{ marginTop: "4rem" }}>
            <ImagePlaceholder>Diagram</ImagePlaceholder>
            <FlexBox gap={12}>
              <SubtitleText>What is a Binder?</SubtitleText>
              <BodyText>
                A Binder is the creative lead of a Bind book project, shaping
                how a book of shared memories takes form.
              </BodyText>
              <FeatureList>
                <CaptionText>• Composes the overall narrative flow</CaptionText>
                <CaptionText>
                  • Designs the user interview structure
                </CaptionText>
                <CaptionText>
                  • Directs AI in real time based on input
                </CaptionText>
                <CaptionText>
                  • Curates the content & Shapes final tone
                </CaptionText>
              </FeatureList>
            </FlexBox>
          </TwoColumn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">How Bind Works</TitleText>
            <BodyText>
              Bind turns memory into a collaborative book through structured
              dialogue, AI-assisted writing, and personalized curation.
            </BodyText>
          </SectionHeader>

          <StepsContainer>
            <StepItem>
              <StepNumber>1</StepNumber>
              <FlexBox gap={4}>
                <SubtitleText>Choose Your Binder</SubtitleText>
                <BodyText>
                  Pick a Binder who fits your group's vibe, based on the
                  portfolio & autobiography. They will shape the structure,
                  tone, and the visual design of the book.
                </BodyText>
              </FlexBox>
            </StepItem>

            <StepItem>
              <StepNumber>2</StepNumber>
              <FlexBox gap={4}>
                <SubtitleText>1st Interaction</SubtitleText>
                <BodyText>
                  The main customer works as an initiator, and goes through a
                  simple conversation with the Binder. Overall needs and
                  intentions are shared for the Binder to design structures of
                  next steps
                </BodyText>
              </FlexBox>
            </StepItem>

            <StepItem>
              <StepNumber>3</StepNumber>
              <FlexBox gap={4}>
                <SubtitleText>2nd Interaction</SubtitleText>
                <BodyText>
                  Each participant answers guided questions through a chat.
                  Stories, emotional fragments and photos are collected, helping
                  AI and the Binder understand your shared year.
                </BodyText>
              </FlexBox>
            </StepItem>

            <StepItem>
              <StepNumber>4</StepNumber>
              <FlexBox gap={4}>
                <SubtitleText>3rd Interaction</SubtitleText>
                <BodyText>
                  Binder and AI collaborate to turn memories into complete
                  chapters. Binders monitor the entire process, directing the
                  tone, structure, and content.
                </BodyText>
              </FlexBox>
            </StepItem>

            <StepItem>
              <StepNumber>5</StepNumber>
              <FlexBox gap={4}>
                <SubtitleText>Receive Your Book</SubtitleText>
                <BodyText>
                  After correction, layout formatting, and book design,
                  participants receive a beautifully printed, memory-rich book
                  truly of their own.
                </BodyText>
              </FlexBox>
            </StepItem>
          </StepsContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">System Workflow</TitleText>
            <BodyText>From Shared Voices to a Singular Book</BodyText>
          </SectionHeader>
          <CardContainer>
            <img 
              src="imgs/systemdiagram_1.png" 
              alt="System Flow Diagram I" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            <img 
              src="imgs/systemdiagram_2.png" 
              alt="System Flow Diagram II" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </CardContainer>
          <CardContainer>
            <img 
              src="imgs/systemdiagram_3.png" 
              alt="System Flow Diagram III" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </CardContainer>
        </Container>
      </Section>
    </>
  );
};

export default Home;
