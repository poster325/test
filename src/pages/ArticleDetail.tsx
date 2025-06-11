import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getArticleById, Article } from "../utils/markdownParser";

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

const ArticleHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    flex-wrap: wrap;
  }

  .author {
    font-weight: 500;
  }

  .date {
    font-size: 0.9rem;
  }

  .read-time {
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
`;

const ContentSection = styled.section`
  background: var(--bg-primary);
  padding: 4rem 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  .content {
    line-height: 1.7;
    color: var(--text-primary);
    font-size: 1.125rem;

    h1, h2, h3, h4, h5, h6 {
      color: var(--text-primary);
      margin: 2rem 0 1rem;
      font-weight: 600;
    }

    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }

    p {
      margin-bottom: 1.5rem;
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      padding: 1.5rem;
      border-radius: 0.5rem;
    }

    strong {
      font-weight: 600;
      color: var(--text-primary);
    }

    a {
      color: var(--primary-color);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
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

    .author-bio {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
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

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      if (!id) return;
      
      try {
        const articleData = await getArticleById(id);
        setArticle(articleData);
      } catch (error) {
        console.error('Failed to load article:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

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

  if (loading) {
    return (
      <Container>
        <div style={{ padding: "4rem 0", textAlign: "center", color: "var(--text-secondary)" }}>
          Loading article...
        </div>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container>
        <div style={{ padding: "4rem 0", textAlign: "center" }}>
          <h1>Article not found</h1>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      <PageHeader>
        <Container>
          <BackLink to="/portfolio">← Back to Portfolio</BackLink>
          <ArticleHeader>
            <h1>{article.title}</h1>
            <div className="meta">
              <span className="author">By {article.author}</span>
              <span>•</span>
              <span className="date">{new Date(article.publishDate).toLocaleDateString()}</span>
              <span className="read-time">{article.readTime}</span>
            </div>
          </ArticleHeader>
        </Container>
      </PageHeader>

      <ContentSection>
        <Container>
          <ContentGrid>
            <MainContent>
              <div 
                className="content" 
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />
            </MainContent>

            <Sidebar>
              <div className="section">
                <h3>About the Author</h3>
                <div className="author-bio">{article.authorBio}</div>
              </div>

              <div className="section">
                <h3>Tags</h3>
                <Tags>
                  {article.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
              </div>
            </Sidebar>
          </ContentGrid>
        </Container>
      </ContentSection>
    </>
  );
};

export default ArticleDetail; 