import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getBinderById, Binder } from "../utils/markdownParser";

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 4rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  background: var(--bg-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  border: 4px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;
`;

const ProfileInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }

  .location {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;

  .number {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .label {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

const ContentSection = styled.section`
  background: var(--bg-primary);
  padding: 2rem 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MainContent = styled.div`
  .content {
    line-height: 1.6;
    color: var(--text-primary);

    h1, h2, h3, h4, h5, h6 {
      color: var(--text-primary);
      margin: 1.5rem 0 0.75rem;
      font-weight: 600;
    }

    h1 { 
      font-size: 2rem; 
      margin-top: 0;
    }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }

    p {
      margin-bottom: 0.75rem;
    }

    ul, ol {
      margin: 0.75rem 0;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 0.25rem;
    }

    blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 1.5rem;
      margin: 1.5rem 0;
      font-style: italic;
      color: var(--text-secondary);
    }

    strong {
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`;

const Sidebar = styled.div`
  .section {
    background: var(--bg-secondary);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid var(--border-color);

    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const SpecialtyTag = styled.span`
  background: var(--bg-accent);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const LanguageList = styled.div`
  .language {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const SocialLinks = styled.div`
  .link {
    display: block;
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.5rem 0;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const ContactSection = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  button {
    background: white;
    color: var(--primary-color);
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: var(--bg-secondary);
    }
  }
`;

const BinderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [binder, setBinder] = useState<Binder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBinder = async () => {
      if (!id) return;
      
      try {
        const binderData = await getBinderById(id);
        setBinder(binderData);
      } catch (error) {
        console.error('Failed to load binder:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBinder();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <div style={{ padding: "4rem 0", textAlign: "center", color: "var(--text-secondary)" }}>
          Loading binder details...
        </div>
      </Container>
    );
  }

  if (!binder) {
    return (
      <Container>
        <div style={{ padding: "4rem 0", textAlign: "center" }}>
          <h1>Binder not found</h1>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </Container>
    );
  }

  // Proper markdown to HTML conversion
  const formatContent = (content: string) => {
    let html = content;
    
    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic text
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');
    
    // Lists
    html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Line breaks and paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    
    // Wrap in paragraphs if not already wrapped
    if (!html.startsWith('<')) {
      html = '<p>' + html + '</p>';
    }
    
    // Clean up multiple paragraph tags
    html = html.replace(/<\/p><p>/g, '</p>\n<p>');
    html = html.replace(/<p><h/g, '<h');
    html = html.replace(/<\/h([1-6])><\/p>/g, '</h$1>');
    html = html.replace(/<p><ul>/g, '<ul>');
    html = html.replace(/<\/ul><\/p>/g, '</ul>');
    html = html.replace(/<p><blockquote>/g, '<blockquote>');
    html = html.replace(/<\/blockquote><\/p>/g, '</blockquote>');
    
    return html;
  };

  return (
    <>
      <PageHeader>
        <Container>
          <BackLink to="/portfolio">← Back to Portfolio</BackLink>
          <ProfileHeader>
            <Avatar>
              {binder.avatar ? (
                <img src={binder.avatar} alt={binder.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                'Photo'
              )}
            </Avatar>
            <ProfileInfo>
              <h1>{binder.name}</h1>
              <div className="title">{binder.title}</div>
              <div className="location">📍 {binder.location}</div>
              <StatsGrid>
                <StatItem>
                  <div className="number">{binder.stats.booksPublished}</div>
                  <div className="label">Books Published</div>
                </StatItem>
                <StatItem>
                  <div className="number">{binder.stats.totalReads}</div>
                  <div className="label">Total Reads</div>
                </StatItem>
                <StatItem>
                  <div className="number">⭐ {binder.stats.rating}</div>
                  <div className="label">Rating</div>
                </StatItem>
                <StatItem>
                  <div className="number">{binder.stats.followers}</div>
                  <div className="label">Followers</div>
                </StatItem>
              </StatsGrid>
            </ProfileInfo>
          </ProfileHeader>
        </Container>
      </PageHeader>

      <ContentSection>
        <Container>
          <ContentGrid>
            <MainContent>
              <div 
                className="content" 
                dangerouslySetInnerHTML={{ __html: formatContent(binder.content) }}
              />
            </MainContent>

            <Sidebar>
              <div className="section">
                <h3>Tags</h3>
                <Tags>
                  {binder.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
              </div>

              <div className="section">
                <h3>Specialties</h3>
                <Tags>
                  {binder.specialties.map((specialty, index) => (
                    <SpecialtyTag key={index}>{specialty}</SpecialtyTag>
                  ))}
                </Tags>
              </div>

              <div className="section">
                <h3>Languages</h3>
                <LanguageList>
                  {binder.languages.map((language, index) => (
                    <div key={index} className="language">{language}</div>
                  ))}
                </LanguageList>
              </div>

              {(binder.social.website || binder.social.twitter || binder.social.linkedin) && (
                <div className="section">
                  <h3>Connect</h3>
                  <SocialLinks>
                    {binder.social.website && (
                      <a href={binder.social.website} className="link" target="_blank" rel="noopener noreferrer">
                        🌐 Website
                      </a>
                    )}
                    {binder.social.twitter && (
                      <a href={`https://twitter.com/${binder.social.twitter.replace('@', '')}`} className="link" target="_blank" rel="noopener noreferrer">
                        🐦 Twitter
                      </a>
                    )}
                    {binder.social.linkedin && (
                      <a href={`https://linkedin.com/in/${binder.social.linkedin}`} className="link" target="_blank" rel="noopener noreferrer">
                        💼 LinkedIn
                      </a>
                    )}
                  </SocialLinks>
                </div>
              )}

              <ContactSection>
                <h3>Let's Collaborate</h3>
                <p>Interested in working together?</p>
                <button>Send Message</button>
              </ContactSection>
            </Sidebar>
          </ContentGrid>
        </Container>
      </ContentSection>
    </>
  );
};

export default BinderDetail; 