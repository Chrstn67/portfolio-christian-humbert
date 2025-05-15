"use client";

import { useState } from "react";
import { linkedInPostsData } from "../data/linkedInPostsData";
import "../styles/LinkedInPosts.css";

function LinkedInPosts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = (
    activeCategory === "all"
      ? linkedInPostsData.posts
      : linkedInPostsData.posts.filter(
          (post) => post.category === activeCategory
        )
  ).sort((a, b) => b.views - a.views);

  return (
    <section className="linkedin-posts" id="linkedin-posts">
      <div className="section-header">
        <h2 className="section-title">Mes Posts LinkedIn</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="linkedin-content">
        <div className="category-filter">
          <button
            className={`filter-button ${
              activeCategory === "all" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("all")}
          >
            Tous
          </button>

          {linkedInPostsData.categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="posts-grid">
          {filteredPosts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-header">
                <div className="post-meta">
                  <span className="post-category">
                    {
                      linkedInPostsData.categories.find(
                        (c) => c.id === post.category
                      ).name
                    }
                  </span>
                </div>
                <h3 className="post-title">{post.title}</h3>
              </div>

              <div className="post-body">
                <p className="post-excerpt">{post.excerpt}</p>
              </div>

              <div className="post-footer">
                <div className="post-views">
                  <i className="fas fa-eye"></i> {post.views}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-link"
                >
                  Lire sur LinkedIn <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinkedInPosts;
