import React from 'react';
import '../styles/_mainContent.scss';
import SearchBar from './SearchBar';
const MainContent = () => {
  return (
    <div className = "main-content">
      <h1>Web Crawler</h1>
      <pre>
        <code>
{`
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
`}
        </code>
      </pre>

    <SearchBar />
    </div>
  );
};

export default MainContent;