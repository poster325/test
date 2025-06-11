import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  loadArticles,
  loadBinders,
  Article,
  Binder,
} from "../utils/markdownParser";
import PageInfo from "../components/PageInfo";
import {
  BodyText,
  CaptionText,
  Container,
  Section,
  SectionHeader,
  SubtitleText,
  TitleText,
} from "../components";

const FeaturedItem = styled.div`
  width: 80%;
  display: flex;

  flex-direction: row;
  align-content: stretch;
  justify-content: flex-start;
  gap: 2rem;

  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:nth-child(even) {
    direction: rtl;
  }

  &:nth-child(even) > * {
    direction: ltr;
  }
`;

const FeaturedContent = styled.div`
  flex: 1 1 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const FeaturedImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: auto;
  min-width: 300px;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  
  span {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--bg-accent);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  font-size: 14px;
  font-weight: 600;

  transition: all 0.3s;

  &:hover {
    background: var(--accent-color);
  }
`;

const StyledLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: nowrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  flex: 1;
  min-width: 150px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-weight: 500;
`;

const SearchSection = styled.div`
  margin-bottom: 3rem;
`;

const SearchBar = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  font-size: 1.125rem;
`;

const BinderGrid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  overflow-x: auto;

  gap: 2rem;
  margin-bottom: 4rem;

  box-sizing: border-box;
  padding: 1rem 0;
`;

const BinderCard = styled.div`
  width: 400px;

  flex: 0 0 auto;

  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const BinderAvatar = styled.div`
  height: 200px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
  position: relative;
`;

const BinderInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .title {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .location {
    color: var(--text-light);
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
`;

const AuthorInfo = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-color);
`;

const Portfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [binders, setBinders] = useState<Binder[]>([]);
  const [loading, setLoading] = useState(true);

  const portfolioImgs = [
    "imgs/portfolio-feature1.png",
    "imgs/portfolio-feature1.png",
    "imgs/portfolio-feature1.png",
  ];

  useEffect(() => {
    const loadContent = async () => {
      try {
        console.log("Loading articles and binders...");
        const [loadedArticles, loadedBinders] = await Promise.all([
          loadArticles(),
          loadBinders(),
        ]);
        console.log("Loaded articles:", loadedArticles);
        console.log("Loaded binders:", loadedBinders);
        setArticles(loadedArticles);
        setBinders(loadedBinders);
      } catch (error) {
        console.error("Failed to load content:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const filteredBinders = binders.filter(
    (binder) =>
      binder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      binder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      binder.tags.some((tag: string) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      binder.specialties.some((specialty: string) =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "var(--text-secondary)",
        }}
      >
        Loading content...
      </div>
    );
  }

  return (
    <>
      <PageInfo
        title="Portfolio"
        subtitle="Our binders, their autobiography, and contributed work"
      />

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Featured Publications</TitleText>
            <BodyText>
              Discover compelling stories created through our platform,
              showcasing the diverse voices and expertise of our talented
              binders.
            </BodyText>
          </SectionHeader>

          {articles.map((article, i) => (
            <FeaturedItem key={article.id}>
              <FeaturedContent>
                <SubtitleText className="ginto">{article.title}</SubtitleText>
                <CaptionText>{article.excerpt}</CaptionText>
                <AuthorInfo>
                  <BodyText bold={true}>{article.author}</BodyText>
                  <CaptionText>{article.authorBio}</CaptionText>
                </AuthorInfo>
                <Tags>
                  {article.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
              </FeaturedContent>
              <Link to={`/article/${article.id}`}>
                <FeaturedImageContainer>
                  <FeaturedImage src={portfolioImgs[i]} alt={article.title} />
                  <ImageOverlay className="overlay">
                    <span>Read More</span>
                  </ImageOverlay>
                </FeaturedImageContainer>
              </Link>
            </FeaturedItem>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <TitleText className="ginto">Meet our Binders</TitleText>
            <BodyText>
              Get to know the talented writers and creators who bring their
              unique perspectives and expertise to our platform.
            </BodyText>
          </SectionHeader>

          <SearchSection>
            <SearchBar>
              <SearchIcon>🔍</SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search binders by name, title, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>
          </SearchSection>

          <BinderGrid>
            {[...filteredBinders, ...filteredBinders].map((binder) => (
              <BinderCard key={binder.id}>
                <Link to={`/binder/${binder.id}`}>
                  <BinderAvatar>
                    {binder.avatar ? (
                      <img
                        src={binder.avatar}
                        alt={binder.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      "Photo"
                    )}
                  </BinderAvatar>
                  <BinderInfo>
                    <h3>{binder.name}</h3>
                    <div className="title">{binder.title}</div>
                    <div className="location">📍 {binder.location}</div>
                    <div className="stats">
                      <span>{binder.stats.booksPublished} books</span>
                      <span>⭐ {binder.stats.rating}</span>
                      <span>{binder.stats.totalReads} reads</span>
                    </div>
                    <Tags>
                      {binder.tags.slice(0, 3).map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                      {binder.tags.length > 3 && (
                        <Tag>+{binder.tags.length - 3} more</Tag>
                      )}
                    </Tags>
                  </BinderInfo>
                </Link>
              </BinderCard>
            ))}
          </BinderGrid>

          {filteredBinders.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "var(--text-secondary)",
              }}
            >
              No binders found matching your search criteria.
            </div>
          )}

          <StatsGrid>
            <StatItem>
              <StatNumber>2+</StatNumber>
              <StatLabel>Books Published</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100%</StatNumber>
              <StatLabel>User Satisfaction</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>0+</StatNumber>
              <StatLabel>Awards Won</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>32</StatNumber>
              <StatLabel>Featured Binders</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
