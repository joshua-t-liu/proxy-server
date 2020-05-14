import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ImageGallery from '../image-gallery/client/src/components/App/App.jsx';
import SimilarHomes from '../similar-homes/client/src/components/App.js';
import CommentSection from '../comment-section/client/src/components/App.jsx';
import MortageCalculator from '../mortgage-calculator/jsx/MortgageCalculator.jsx';

const [home, similar, comments, {}] = window.__TRULIA_DATA__;
const { pathname } = window.location;

hydrate((
  <Router>
    <ImageGallery homeInit={home} pathname={pathname} />
  </Router>
  ), document.getElementById('image-gallery'));
hydrate(<SimilarHomes data={similar}/>, document.getElementById('similar-homes'));
hydrate(<CommentSection data={comments} />, document.getElementById('comment-section'));
hydrate(<MortageCalculator />, document.getElementById('mortgage-calculator'));