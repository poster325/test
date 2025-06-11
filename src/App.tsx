import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import BinderDetail from "./pages/BinderDetail";
import ArticleDetail from "./pages/ArticleDetail";
import MailList from "./pages/MailList";
import Blog from "./pages/Blog";
import BlogPostLoader from "./components/BlogPostLoader";
import FAQ from "./pages/FAQ";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/binder/:id" element={<BinderDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/signup" element={<MailList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPostLoader />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
