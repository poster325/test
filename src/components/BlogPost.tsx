import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-size: 0.95rem;
`;

const PostDate = styled.span``;

const PostCategory = styled.span`
  background: var(--bg-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const PostExcerpt = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
`;

const AuthorDetails = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
`;

const AuthorRole = styled.div`
  font-size: 0.875rem;
  color: var(--text-light);
`;

const PostImage = styled.div`
  margin: 2rem 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const PostContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-primary);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 1rem;
    color: var(--text-primary);
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.125rem;
  }
  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul,
  ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid var(--primary-color);
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    background: var(--bg-accent);
    border-radius: 0.5rem;
  }

  code {
    background: var(--bg-accent);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.9em;
  }

  pre {
    background: var(--bg-accent);
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: none;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid var(--border-color);
  }
`;

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    image?: string;
    content: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Container>
      <BackLink to="/blog">← Back to Blog</BackLink>

      <PostHeader>
        <PostMeta>
          <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
          <span>•</span>
          <PostCategory>{post.category}</PostCategory>
        </PostMeta>

        <PostTitle>{post.title}</PostTitle>
        <PostExcerpt>{post.excerpt}</PostExcerpt>

        <AuthorInfo>
          <AuthorAvatar>{post.author.avatar}</AuthorAvatar>
          <AuthorDetails>
            <AuthorName>{post.author.name}</AuthorName>
            <AuthorRole>{post.author.role}</AuthorRole>
          </AuthorDetails>
        </AuthorInfo>
      </PostHeader>

      {post.image && (
        <PostImage>
          <img src={post.image} alt={post.title} />
        </PostImage>
      )}

      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </PostContent>
    </Container>
  );
};

export default BlogPost;
