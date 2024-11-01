import React from "react";
import { Link } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <h1>
          Strengthen Your <span>Faith</span> with Us Every Day
        </h1>
        <p>
          Join us for enriching Islamic knowledge and tools to support your
          Ibadah during Ramadan and beyond.
        </p>
        <div className="cta-button-container">
          <Link to="/islamic-tools">
            <button>Explore Tools</button>
          </Link>
          <Link to="/articles">
            <button>Read Articles</button>
          </Link>
        </div>

        <h2>Recommended Reads</h2>
        <div className="articles-container">
          <ArticleCard
            id={1}
            title="The Importance of Fajr Prayer in Daily Life"
            description="Fajr prayer holds a special place in Islam, symbolizing discipline and spiritual awakening. Starting your day with Fajr fosters a connection to Allah, bringing peace and focus that benefits both spiritual and physical well-being."
            author="Imam Khalid"
            category="Prayers"
            published="Oct 5, 2023"
          />
          <ArticleCard
            id={2}
            title="Understanding the Significance of Ramadan Fasting"
            description="Ramadan fasting is more than abstaining from food and drink; it’s a profound practice of self-control and empathy. Fasting purifies the soul, strengthens the community, and brings Muslims closer to their faith."
            author="Dr. Amina Ali"
            category="Fasting"
            published="Mar 20, 2023"
          />
          <ArticleCard
            id={3}
            title="5 Daily Duas for Peace and Guidance"
            description="These five essential Duas can transform your daily routine, instilling peace, clarity, and divine guidance. Regular recitation fosters a calm heart and a strong connection to Allah’s guidance in all aspects of life."
            author="Sheikh Abdullah"
            category="Supplications"
            published="Feb 14, 2023"
          />
          <ArticleCard
            id={4}
            title="How to Calculate Zakat: A Simple Guide"
            description="Fulfilling the obligation of Zakat doesn’t have to be complex. This guide simplifies the calculation process, ensuring that you accurately assess your assets to distribute charity in a way that aligns with Islamic teachings."
            author="Fatima Rashid"
            category="Zakat"
            published="Apr 1, 2023"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
