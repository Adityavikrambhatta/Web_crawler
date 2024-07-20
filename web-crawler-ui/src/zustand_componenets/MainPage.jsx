import React, {useEffect } from 'react';
import useStore from '../store';
import '../styles/_mainContent.scss';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';
import axios from 'axios'


const MainContent = () => {
  const { url, pages, addPage, setIsCrawling } = useStore();

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/events');
    eventSource.addEventListener('pageCrawled', (event) => {
        const data = JSON.parse(event.data);
        addPage(data);
    });
    return () => {
      eventSource.close();
    };
  }, [addPage]);

  const handleCrawl = async () => {
    setIsCrawling(true);
    await axios.get(`http://localhost:3001/crawl?url=${url}`);
    setIsCrawling(false);
};

  return (
    <div className = "main-content">
      <h1>Web Crawler</h1>

      <ul>
          {pages.map((page, index) => (
              <InfoCard page = {page} />
          ))}
      </ul>
      
      <SearchBar handleCrawl = {handleCrawl} />
    </div>
  );
};

export default MainContent;