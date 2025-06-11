import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import BlogPost from "./BlogPost";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: var(--text-secondary);
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }
`;

const RetryButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--secondary-color);
  }
`;

interface BlogPostData {
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
}

const BlogPostLoader: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPost = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the markdown file
      const response = await fetch(`/blog/articles/${postId}.md`);
      if (!response.ok) {
        throw new Error("Post not found");
      }

      const markdown = await response.text();

      // Parse frontmatter and content
      const { data, content } = matter(markdown);

      // Create post object
      const postData: BlogPostData = {
        title: data.title || "Untitled Post",
        date: data.date || new Date().toISOString().split("T")[0],
        category: data.category || "Uncategorized",
        excerpt: data.excerpt || content.slice(0, 200) + "...",
        author: data.author || {
          name: "Anonymous",
          role: "Writer",
          avatar: "A",
        },
        image: data.image,
        content,
      };

      setPost(postData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, [postId]);

  if (loading) {
    return <LoadingContainer>Loading post...</LoadingContainer>;
  }

  if (error) {
    return (
      <ErrorContainer>
        <h2>Error Loading Post</h2>
        <p>{error}</p>
        <RetryButton onClick={loadPost}>Try Again</RetryButton>
      </ErrorContainer>
    );
  }

  if (!post) {
    return (
      <ErrorContainer>
        <h2>Post Not Found</h2>
        <p>The post you're looking for doesn't exist.</p>
      </ErrorContainer>
    );
  }

  return <BlogPost post={post} />;
};

export default BlogPostLoader;
