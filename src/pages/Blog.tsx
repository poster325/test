import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import matter from "gray-matter";

const PageHeader = styled.div`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const BlogCard = styled(Link)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: var(--bg-accent);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-light);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
`;

const BlogDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const BlogCategory = styled.span`
  background: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ReadMoreLink = styled.span`
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

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  background: ${(props) =>
    props.$active ? "var(--primary-color)" : "var(--bg-primary)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-secondary)")};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? "var(--primary-color)" : "var(--bg-accent)"};
    color: ${(props) => (props.$active ? "white" : "var(--primary-color)")};
    border-color: ${(props) =>
      props.$active ? "var(--primary-color)" : "var(--border-color)"};
  }
`;

const FeaturedArticleSection = styled.section`
  background: var(--bg-secondary);
  padding: 4rem 0;
`;

const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeaturedText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const FeaturedImage = styled.div`
  height: 300px;
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
`;

const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
  }
`;

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image?: string;
  category: string;
  content: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [categories, setCategories] = useState<string[]>(["All Stories"]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the manifest file
        const response = await fetch("/blog/articles/manifest.json");
        if (!response.ok) {
          throw new Error("Failed to load blog posts");
        }

        const manifest = await response.json();
        const postFiles = manifest.files || [];

        // Load and parse each post
        const loadedPosts = await Promise.all(
          postFiles.map(async (filename: string) => {
            const postResponse = await fetch(`/blog/articles/${filename}`);
            const markdown = await postResponse.text();
            const { data, content } = matter(markdown);

            return {
              id: filename.replace(".md", ""),
              title: data.title || "Untitled Post",
              excerpt: data.excerpt || content.slice(0, 200) + "...",
              date: data.date || new Date().toISOString().split("T")[0],
              author: data.author || {
                name: "Anonymous",
                role: "Writer",
                avatar: "A",
              },
              image: data.image,
              category: data.category || "Uncategorized",
              content: content,
            };
          })
        );

        // Sort posts by date (newest first)
        loadedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Set the first post as featured (or handle a specific featured post logic if needed)
        if (loadedPosts.length > 0) {
          setFeaturedPost(loadedPosts[0]);
        }

        // Extract unique categories
        const uniqueCategories = new Set(["All Stories"]);
        loadedPosts.forEach((post) => uniqueCategories.add(post.category));
        setCategories(Array.from(uniqueCategories));

        setPosts(loadedPosts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load blog posts"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "All Stories"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (loading) {
    return (
      <PageHeader>
        <PageTitle>Loading...</PageTitle>
      </PageHeader>
    );
  }

  if (error) {
    return (
      <PageHeader>
        <PageTitle>Error</PageTitle>
        <PageSubtitle>{error}</PageSubtitle>
      </PageHeader>
    );
  }

  return (
    <>
      <PageHeader>
        <PageTitle>Blog</PageTitle>
        <PageSubtitle>
          Insights, updates, and stories from the world of AI-powered publishing
        </PageSubtitle>
      </PageHeader>

      {featuredPost && (
        <FeaturedArticleSection>
          <Container>
            <SectionTitle>Featured Story</SectionTitle>
            <FeaturedContent>
              <FeaturedText>
                <h3>
                  <Link to={`/blog/${featuredPost.id}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p>{featuredPost.excerpt}</p>
                <BlogMeta>
                  <BlogDate>
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </BlogDate>
                  <BlogCategory>{featuredPost.category}</BlogCategory>
                </BlogMeta>
                <AuthorInfo>
                  <AuthorAvatar>
                    {featuredPost.author.avatar ? (
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                      />
                    ) : (
                      featuredPost.author.name.charAt(0)
                    )}
                  </AuthorAvatar>
                  <AuthorDetails>
                    <h4>{featuredPost.author.name}</h4>
                    <p>{featuredPost.author.role}</p>
                  </AuthorDetails>
                </AuthorInfo>
              </FeaturedText>
              <FeaturedImage>
                {featuredPost.image ? (
                  <img src={featuredPost.image} alt={featuredPost.title} />
                ) : (
                  "Featured Article Image"
                )}
              </FeaturedImage>
            </FeaturedContent>
          </Container>
        </FeaturedArticleSection>
      )}

      <Section>
        <Container>
          <SectionTitle>User Case Studies</SectionTitle>
          <SectionSubtitle>
            Real stories from binders & users who have transformed their
            publishing journey with Bind
          </SectionSubtitle>

          <CategoryFilter>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                $active={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilter>

          <BlogGrid>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} to={`/blog/${post.id}`}>
                <BlogImage>
                  {post.image ? (
                    <img src={post.image} alt={post.title} />
                  ) : (
                    "Case Study Image"
                  )}
                </BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <BlogDate>
                      <span role="img" aria-label="calendar">
                        🗓️
                      </span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </BlogDate>
                    <BlogCategory>{post.category}</BlogCategory>
                  </BlogMeta>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <ReadMoreLink>Read More →</ReadMoreLink>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </Container>
      </Section>
    </>
  );
};

export default Blog;
