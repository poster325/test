// Utility functions for parsing markdown files with frontmatter

import matter from "gray-matter";

// Content type definitions
export interface Article {
  id: string;
  title: string;
  author: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
  content: string;
}

export interface Binder {
  id: string;
  name: string;
  title: string;
  avatar: string;
  location: string;
  joinedDate: string;
  tags: string[];
  specialties: string[];
  languages: string[];
  social: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
  stats: {
    booksPublished: number;
    totalReads: string;
    rating: number;
    followers: number;
  };
  featured: boolean;
  content: string;
}

// Fallback data to ensure the page always loads
export const fallbackArticles: Article[] = [
  {
    id: "digital-storytelling",
    title: "The Art of Digital Storytelling",
    author: "Sarah Chen",
    authorBio: "Digital storytelling specialist with 8+ years of experience in multimedia publishing",
    publishDate: "2023-11-15",
    readTime: "8 min read",
    tags: ["Digital Media", "Storytelling", "Technology", "Publishing"],
    excerpt: "Exploring how technology transforms traditional narratives into immersive digital experiences.",
    featured: true,
    content: `# The Art of Digital Storytelling

In our rapidly evolving digital landscape, the way we tell and consume stories is undergoing a profound transformation. From interactive web narratives to immersive virtual reality experiences, digital storytelling is reshaping how we connect with audiences and convey meaningful messages.

## The Evolution of Narrative

Traditional storytelling has always been about connecting with audiences on an emotional level. Digital storytelling takes this connection further by adding layers of interactivity, multimedia elements, and personalization that were impossible in traditional media.

### Key Elements of Digital Storytelling

- **Interactive Elements**: Allowing readers to make choices that affect the narrative
- **Multimedia Integration**: Combining text, audio, video, and visual elements
- **Responsive Design**: Adapting to different devices and user preferences
- **Real-time Feedback**: Enabling audience participation and engagement

## The Future of Digital Narratives

As technology continues to advance, we're seeing exciting developments in how stories are told and experienced. From AI-generated content to blockchain-based narrative ownership, the possibilities are endless.

The art of digital storytelling is not just about adopting new technologies—it's about understanding how these tools can enhance the fundamental human experience of sharing and receiving stories.`
  },
  {
    id: "sustainable-publishing",
    title: "Sustainable Publishing in the Digital Era",
    author: "Marcus Rodriguez",
    authorBio: "Environmental consultant and author specializing in climate fiction and sustainable practices",
    publishDate: "2023-11-10",
    readTime: "12 min read",
    tags: ["Sustainability", "Publishing", "Environment", "Green Technology"],
    excerpt: "How the publishing industry is adapting to environmental challenges and embracing sustainable practices.",
    featured: true,
    content: `# Sustainable Publishing in the Digital Era

The publishing industry stands at a crossroads, facing unprecedented environmental challenges while embracing digital transformation. As readers become more environmentally conscious, publishers must adapt their practices to meet both market demands and ecological responsibilities.

## The Environmental Impact of Traditional Publishing

Traditional publishing has long been associated with significant environmental costs:

- **Paper Production**: Massive deforestation and water usage
- **Transportation**: Global shipping of physical books
- **Waste**: Unsold books often end up in landfills
- **Energy Consumption**: Manufacturing and distribution processes

## Digital Solutions and Their Benefits

The shift toward digital publishing offers numerous environmental advantages:

### Reduced Carbon Footprint
Digital distribution eliminates the need for physical transportation, significantly reducing carbon emissions associated with book distribution.

### Zero Waste Production
Digital books don't generate physical waste, solving the problem of unsold inventory disposal.

### Resource Conservation
No paper, ink, or binding materials are needed for digital publications.

## Sustainable Practices for Modern Publishers

1. **Print-on-Demand Technology**: Reducing waste by printing only what's ordered
2. **Sustainable Materials**: Using recycled paper and eco-friendly inks
3. **Local Printing**: Reducing transportation emissions
4. **Digital-First Strategies**: Prioritizing digital formats while offering print options

## The Role of Authors and Readers

Sustainability in publishing isn't just a publisher's responsibility. Authors and readers play crucial roles in creating a more sustainable literary ecosystem.

The future of publishing lies in balancing accessibility, sustainability, and the timeless joy of reading—regardless of format.`
  }
];

export const fallbackBinders: Binder[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Digital Storytelling Specialist",
    avatar: "/images/binders/sarah-chen.jpg",
    location: "San Francisco, CA",
    joinedDate: "2023-03-15",
    tags: ["Digital Media", "Storytelling", "Interactive Design", "UX Writing", "Content Strategy"],
    specialties: ["Interactive Narratives", "Multimedia Publishing", "Digital Art"],
    languages: ["English", "Mandarin", "Japanese"],
    social: {
      website: "https://sarahchen.design",
      twitter: "@sarahchen_design",
      linkedin: "sarah-chen-design"
    },
    stats: {
      booksPublished: 12,
      totalReads: "45.2K",
      rating: 4.8,
      followers: 1250
    },
    featured: true,
    content: `# Meet Sarah Chen

## About Me

Hello! I'm Sarah Chen, a passionate digital storyteller who bridges the gap between traditional narrative and cutting-edge technology. With over 8 years of experience in multimedia publishing, I specialize in creating immersive, interactive stories that captivate and engage modern audiences.

## My Journey

My journey into digital storytelling began during my graduate studies in Interactive Media Design at Stanford University. What started as curiosity about how technology could enhance narrative experiences has evolved into a career dedicated to pushing the boundaries of what stories can be.

### Background & Education

- **M.A. Interactive Media Design** - Stanford University (2016)
- **B.A. English Literature** - UC Berkeley (2014)
- **Certificate in UX Design** - General Assembly (2017)

## What I Do

I create digital narratives that combine:

- **Interactive Elements**: Choose-your-own-adventure style storytelling
- **Multimedia Integration**: Seamlessly blending text, audio, and visual elements
- **Responsive Design**: Stories that adapt to different devices and reading preferences
- **User Experience Focus**: Ensuring every interaction enhances the narrative

## My Publishing Philosophy

> "Every story deserves to be told in the medium that best serves its purpose. Sometimes that's a traditional book, sometimes it's an interactive digital experience, and often it's something entirely new."

I believe in:

- **Reader Agency**: Giving readers meaningful choices in how they experience stories
- **Accessibility**: Creating inclusive narratives that welcome all audiences
- **Innovation**: Constantly exploring new ways to tell timeless stories
- **Collaboration**: Working with other creators to push creative boundaries

## Featured Works

### "Echoes of Tomorrow" (2023)

An interactive sci-fi novella that adapts based on reader choices, featuring:

- 12 unique story branches
- Immersive audio design
- Real-time character development
- Multi-device continuity

### "The Memory Keeper" (2023)

A multimedia memoir combining:

- Personal photography and artifacts
- Audio interviews with family members
- Interactive family tree exploration
- AR elements for enhanced storytelling

### "Urban Legends Reimagined" (2022)

A collaborative anthology featuring:

- 8 contemporary authors
- Interactive maps and historical context
- Community-driven story extensions
- Cross-platform storytelling

## Skills & Expertise

**Technical Skills:**

- Adobe Creative Suite (Expert)
- Twine & Ink (Interactive Fiction)
- HTML/CSS/JavaScript (Intermediate)
- Unity (Basic 3D Storytelling)

**Creative Skills:**

- Narrative Design
- Character Development
- World Building
- Visual Storytelling
- Audio Production

## Let's Collaborate

I'm always excited to work with fellow creators, whether you're:

- A writer looking to explore digital formats
- A developer interested in narrative projects
- A publisher seeking innovative content approaches
- A reader with an amazing story idea

## Current Projects

🔮 **"Quantum Hearts"** - A romance novel with parallel universe story branches
📱 **Mobile Storytelling App** - Developing a new platform for micro-narratives
🎨 **AR Poetry Collection** - Bringing poems to life through augmented reality

## Get in Touch

I love connecting with fellow storytellers and creative minds. Feel free to reach out through any of my social channels or drop me a message here on the platform!

---

_"Stories shape our world, and technology shapes our stories. Let's create something amazing together."_ - Sarah Chen`
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    title: "Sustainable Publishing Advocate",
    avatar: "/images/binders/marcus-rodriguez.jpg",
    location: "Portland, OR",
    joinedDate: "2023-01-20",
    tags: ["Sustainability", "Environment", "Green Tech", "Climate Fiction", "Environmental Science"],
    specialties: ["Climate Fiction", "Environmental Journalism", "Green Technology"],
    languages: ["English", "Spanish", "Portuguese"],
    social: {
      website: "https://sustainablestories.org",
      twitter: "@marcus_eco_stories",
      linkedin: "marcus-rodriguez-sustainability"
    },
    stats: {
      booksPublished: 8,
      totalReads: "32.1K",
      rating: 4.9,
      followers: 890
    },
    featured: true,
    content: `# Meet Marcus Rodriguez

## About Me

I'm Marcus Rodriguez, an environmental consultant turned author who combines scientific expertise with compelling storytelling to address our planet's most pressing challenges. Through my writing, I strive to make environmental issues accessible, engaging, and actionable for readers worldwide.

## My Mission

As a writer, my mission is to bridge the gap between complex environmental science and public understanding. I believe that stories have the power to inspire change, foster empathy, and drive meaningful action toward a more sustainable future.

### Background & Credentials

- **M.S. Environmental Science** - Oregon State University (2015)
- **B.S. Biology** - University of California, Davis (2013)
- **Environmental Consultant** - 6 years in renewable energy sector
- **Certified Climate Reality Leader** - The Climate Reality Project (2019)

## What I Write About

My work focuses on three core areas:

### Climate Fiction (Cli-Fi)

Stories that explore climate change through human experiences:

- Near-future scenarios grounded in climate science
- Character-driven narratives about adaptation and resilience
- Hope-based storytelling that inspires action

### Environmental Journalism

Investigative pieces and explainers covering:

- Renewable energy developments
- Corporate sustainability practices
- Policy analysis and environmental justice
- Emerging green technologies

### Educational Content

Making science accessible through:

- Interactive guides to environmental concepts
- Case studies of successful sustainability initiatives
- Practical guides for eco-friendly living

## My Writing Philosophy

> "The best environmental stories don't just inform—they transform. They help readers see themselves as part of the solution."

I believe in:

- **Science-Based Storytelling**: Grounding fiction in solid research
- **Optimistic Realism**: Acknowledging challenges while highlighting solutions
- **Cultural Sensitivity**: Recognizing diverse perspectives on environmental issues
- **Action-Oriented Narrative**: Stories that empower readers to make a difference

## Featured Publications

### "The Last Glacier" (2023)

A cli-fi novel following three generations of a family affected by glacial retreat:

- Meticulously researched climate science
- Multi-perspective narrative spanning 50 years
- Winner of the 2023 Green Book Award
- Translated into 8 languages

### "Renewable Futures: A Visual Guide" (2023)

An interactive digital book exploring clean energy:

- Augmented reality demonstrations of renewable technologies
- Real-time data integration from global energy sources
- Collaborative content with leading climate scientists
- Featured in MIT Technology Review

### "Seeds of Change" (2022)

A collection of short stories about environmental activism:

- Stories from 6 different countries and cultures
- Focuses on youth climate leaders
- Proceeds donated to reforestation projects
- Adapted into a podcast series

## Let's Connect

I'm always eager to collaborate with:

- Fellow environmental writers and journalists
- Climate scientists looking to communicate their research
- Publishers interested in sustainability content
- Activists and organizations working on environmental solutions

---

_"Every story we tell about the environment is a story about ourselves. Let's make sure they're stories of hope, action, and positive change."_ - Marcus Rodriguez`
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    title: "Historical Fiction & Cultural Heritage Writer",
    avatar: "/images/binders/elena-vasquez.jpg",
    location: "Barcelona, Spain",
    joinedDate: "2022-11-08",
    tags: ["Historical Fiction", "Cultural Heritage", "Mediterranean History", "Archives", "Linguistics"],
    specialties: ["Historical Research", "Cultural Preservation", "Multilingual Storytelling"],
    languages: ["Spanish", "Catalan", "English", "French", "Italian", "Latin"],
    social: {
      website: "https://elenashistories.com",
      twitter: "@elena_historias",
      linkedin: "elena-vasquez-writer"
    },
    stats: {
      booksPublished: 15,
      totalReads: "78.9K",
      rating: 4.7,
      followers: 2100
    },
    featured: true,
    content: `# Meet Elena Vasquez

## About Me

¡Hola! I'm Elena Vasquez, a passionate historian and storyteller dedicated to bringing forgotten voices from the past to life through immersive historical fiction. Based in Barcelona, I specialize in Mediterranean history and cultural heritage preservation through narrative.

## My Calling

I believe that history is not just about dates and events—it's about the human stories that connect us across time. My mission is to uncover and share the experiences of ordinary people who lived through extraordinary times, especially those whose stories have been overlooked or forgotten.

### Background & Education

- **Ph.D. Medieval History** - Universitat de Barcelona (2018)
- **M.A. Cultural Heritage Management** - Universidad Complutense Madrid (2015)
- **B.A. History & Linguistics** - Universitat Autònoma de Barcelona (2013)
- **Certified Archivist** - Catalan Archives Association (2019)

## What Drives My Writing

My work is deeply rooted in:

### Historical Authenticity

Every story I write is built on:

- Extensive archival research
- Archaeological evidence
- Primary source documents
- Consultation with expert historians

### Cultural Sensitivity

I approach historical narratives with:

- Respect for diverse perspectives
- Careful attention to historical context
- Collaboration with cultural communities
- Ethical representation of marginalized voices

## My Writing Philosophy

> "History lives in the spaces between the official records—in the letters never sent, the stories passed down through generations, and the silence that speaks volumes."

I focus on:

- **Overlooked Perspectives**: Centering women, minorities, and common people
- **Cultural Continuity**: Showing how past traditions influence the present
- **Emotional Resonance**: Making historical experiences feel immediate and relevant
- **Educational Impact**: Weaving learning naturally into engaging narratives

## Notable Publications

### "The Olive Grove Chronicles" Trilogy (2022-2023)

Following three generations of women in rural Catalonia:

- **Book 1: "Roots in Stone"** - Set during the Spanish Civil War
- **Book 2: "Branches in the Wind"** - Post-war reconstruction era
- **Book 3: "Leaves in the Light"** - Modern-day inheritance of family secrets
- Winner of the European Historical Fiction Award 2023

### "Voices from the Archive" (2023)

A collection of short stories based on real documents:

- Stories recovered from historical archives across Spain
- Each tale includes historical notes and source materials
- Collaborative project with 12 European archives
- Translated into 6 languages

## Community Engagement

I'm actively involved in cultural preservation:

- **Board Member** - Barcelona Historical Society
- **Consultant** - Catalan Archives Digitization Project
- **Mentor** - Young Historical Fiction Writers Network
- **Guest Lecturer** - Medieval History at University of Barcelona

---

_"Every stone in Barcelona has a story to tell. My job is to listen carefully and share what I hear."_ - Elena Vasquez`
  }
];

// Fetch function that works both locally and when deployed
async function fetchFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}

// Load articles from manifest and markdown files
export async function loadArticles(): Promise<Article[]> {
  try {
    console.log('Loading articles...');
    // Fetch the manifest
    const manifestContent = await fetchFile('/content/articles/manifest.json');
    const manifest = JSON.parse(manifestContent);
    console.log('Articles manifest:', manifest);

    const articles: Article[] = [];

    // Load each article file
    for (const item of manifest) {
      try {
        console.log(`Loading article: ${item.file}`);
        const fileContent = await fetchFile(`/content/articles/${item.file}`);

        // Parse frontmatter and content using gray-matter (same as blog system)
        const { data: frontmatter, content } = matter(fileContent);
        console.log('Article frontmatter:', frontmatter);

        articles.push({
          id: frontmatter.id || item.id,
          title: frontmatter.title || 'Untitled',
          author: frontmatter.author || 'Unknown Author',
          authorBio: frontmatter.authorBio || '',
          publishDate: frontmatter.publishDate || '',
          readTime: frontmatter.readTime || '',
          tags: frontmatter.tags || [],
          excerpt: frontmatter.excerpt || '',
          featured: frontmatter.featured || false,
          content
        });
      } catch (error) {
        console.warn(`Failed to load article: ${item.file}`, error);
      }
    }

    console.log('Loaded articles:', articles);
    return articles;
  } catch (error) {
    console.error('Failed to load articles manifest:', error);
    return [];
  }
}

// Load binders from manifest and markdown files
export async function loadBinders(): Promise<Binder[]> {
  try {
    console.log('Loading binders...');
    // Fetch the manifest
    const manifestContent = await fetchFile('/content/binders/manifest.json');
    const manifest = JSON.parse(manifestContent);
    console.log('Binders manifest:', manifest);

    const binders: Binder[] = [];

    // Load each binder file
    for (const item of manifest) {
      try {
        console.log(`Loading binder: ${item.file}`);
        const fileContent = await fetchFile(`/content/binders/${item.file}`);

        // Parse frontmatter and content using gray-matter (same as blog system)
        const { data: frontmatter, content } = matter(fileContent);
        console.log('Binder frontmatter:', frontmatter);

        binders.push({
          id: frontmatter.id || item.id,
          name: frontmatter.name || 'Unknown',
          title: frontmatter.title || '',
          avatar: frontmatter.avatar || '/images/default-avatar.jpg',
          location: frontmatter.location || '',
          joinedDate: frontmatter.joinedDate || '',
          tags: frontmatter.tags || [],
          specialties: frontmatter.specialties || [],
          languages: frontmatter.languages || [],
          social: frontmatter.social || {},
          stats: frontmatter.stats || { booksPublished: 0, totalReads: '0', rating: 0, followers: 0 },
          featured: frontmatter.featured || false,
          content
        });
      } catch (error) {
        console.warn(`Failed to load binder: ${item.file}`, error);
      }
    }

    console.log('Loaded binders:', binders);
    return binders;
  } catch (error) {
    console.error('Failed to load binders manifest:', error);
    return [];
  }
}

// Get single binder by ID
export async function getBinderById(id: string): Promise<Binder | null> {
  const binders = await loadBinders();
  return binders.find(binder => binder.id === id) || null;
}

// Get single article by ID
export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await loadArticles();
  return articles.find(article => article.id === id) || null;
}