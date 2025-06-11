import React from "react";
import styled from "styled-components";
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
import PageInfo from "../components/PageInfo";

const BackgroundSection = styled(Section)`
  background: var(--bg-secondary);
`;

const BackgroundContent = styled.div`
  display: flex;

  flex-direction: row;
  align-content: stretch;
  justify-content: flex-start;
  gap: 3rem;

  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundImage = styled.div`
  flex: 1 1 0;

  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 1rem;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
`;

const ValuesGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ValueItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    color: var(--text-primary);
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const ValueNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
`;

const TeamSection = styled(Section)`
  background: var(--bg-secondary);
`;

const TeamCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const TeamAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const TeamRole = styled.div`
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <>
      <PageInfo
        title="About"
        subtitle={`Bind reimagines book publishing as a living process of collaborative memory.\nWe believe paper books are not just to be written, but to belived and remembered together.`}
      />

      <BackgroundSection>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Our Background</TitleText>
            <BodyText>
              The story behind Bind and our mission to transform publishing
            </BodyText>
          </SectionHeader>

          <BackgroundContent>
            <FlexBox gap={16} style={{ flex: "1 1 0" }}>
              <SubtitleText>Our Inspiration</SubtitleText>
              <CaptionText>
                We began with a question: How will the paper book publishing
                system change in an age of AI? As AI accelerates the speed of
                content creation, the act of making a book is no longer a
                technical challenge, but it’s a curatorial one.
              </CaptionText>
              <CaptionText>
                In this new landscape, we believe the physical book must evolve.
                Not as mass-produced media, but as a meaningful, enduring
                object, something collective, intentional, and premium. A book
                that holds emotional weight. A book that feels like it should be
                kept.
              </CaptionText>
              <CaptionText>
                To find the most natural context for this kind of future book,
                we turned to yearbooks, which is already a ritual of collective
                memory. From there, Bind emerged: a system for turning shared
                experiences into beautifully crafted books, made from many
                voices, and held with care.
              </CaptionText>
            </FlexBox>
            <BackgroundImage>📚</BackgroundImage>
          </BackgroundContent>

          <CardContainer>
            <CardItem>
              <CardIcon>🎯</CardIcon>
              <BodyText bold={true}>Our Mission</BodyText>
              <CaptionText>
                We transform memory-keeping from individual recollection to
                collaborative storytelling. Through guided conversations, Bind
                captures not just events, but shared emotions and perspectives.
                Memories are interpreted, not just recorded: turning feelings
                into tangible, lasting parts of the story.
              </CaptionText>
            </CardItem>
            <CardItem>
              <CardIcon>🔮</CardIcon>
              <BodyText bold={true}>Our Vision</BodyText>
              <CaptionText>
                We envision a future where writing is not solitary, but
                directed, with Binders curating emotion, tone, and story. Books
                become emotional collectibles, departing from information
                containers. AI supports large-scale generation, while humans
                focus on authenticity, feeling, and meaning.
              </CaptionText>
            </CardItem>
          </CardContainer>
        </Container>
      </BackgroundSection>

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Design Philosophy</TitleText>
            <BodyText>
              Our philosophy centers around clarity, emotional resonance, and
              timeless aesthetics:
            </BodyText>
          </SectionHeader>

          <CardContainer>
            <CardItem>
              <CardIcon>🤝</CardIcon>
              <BodyText bold={true}>Conversation-first Design</BodyText>
              <CaptionText>
                We prioritize natural conversation and intuitive reflection over
                formal writing, so everyone feels included in authorship.
              </CaptionText>
            </CardItem>

            <CardItem>
              <CardIcon>⚡</CardIcon>
              <BodyText bold={true}>Emotional Accuracy</BodyText>
              <CaptionText>
                Our AI is not designed to mimic people or exaggerate them, but
                to organize and respect their stories with nuance.
              </CaptionText>
            </CardItem>
          </CardContainer>
          <CardContainer>
            <CardItem>
              <CardIcon>🎨</CardIcon>
              <BodyText bold={true}>Tailored Aesthetics</BodyText>
              <CaptionText>
                Each book is visually and tonally customized, ensuring that
                every memory feels unique yet premium.
              </CaptionText>
            </CardItem>

            <CardItem>
              <CardIcon>🌍</CardIcon>
              <BodyText bold={true}>Context Adaptability</BodyText>
              <CaptionText>
                Our system respects and responds to different cultural rituals,
                values, and communication styles through variety of Binders.
              </CaptionText>
            </CardItem>
          </CardContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Our Core Values</TitleText>
            <BodyText>The principles that drive everything we do</BodyText>
          </SectionHeader>

          <ValuesGrid>
            <ValueItem>
              <ValueNumber>1</ValueNumber>
              <h3>Shared Authorship</h3>
              <p>
                Bind's uniqueness comes from gathering multiple perspectives..
                Our tools empower groups to tell their truth in one collective
                voice.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>2</ValueNumber>
              <h3>Honest Memory</h3>
              <p>
                Bind values authenticity over perfection. Our books do not
                idealize, but they reflect; with all the complexity that real
                life brings.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>3</ValueNumber>
              <h3>Emotional Presence</h3>
              <p>
                Every book is designed to carry emotion over information. We aim
                to make memory tangible, immersive, and lasting.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>4</ValueNumber>
              <h3>Physical Permanence</h3>
              <p>
                Bind creates objects meant to last, physically and emotionally.
                The printed book becomes a future-proof vessel of shared
                remembrance.
              </p>
            </ValueItem>
          </ValuesGrid>
        </Container>
      </Section>

      <TeamSection>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Meet Our Team</TitleText>
            <BodyText>
              The passionate individuals behind Bind's innovation
            </BodyText>
          </SectionHeader>

          <CardContainer>
            <TeamCard>
              <TeamAvatar>HL</TeamAvatar>
              <BodyText bold={true}>Hyewon Lee</BodyText>
              <TeamRole>Role</TeamRole>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>JL</TeamAvatar>
              <BodyText bold={true}>JeongHeon Lee</BodyText>
              <CaptionText>Role</CaptionText>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>SJ</TeamAvatar>
              <BodyText bold={true}>Sunwoo Jeong</BodyText>
              <CaptionText>Role</CaptionText>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>YH</TeamAvatar>
              <BodyText bold={true}>Yushan Huang</BodyText>
              <CaptionText>Role</CaptionText>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>
          </CardContainer>
        </Container>
      </TeamSection>
    </>
  );
};

export default About;
