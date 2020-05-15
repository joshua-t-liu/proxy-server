import MortageCalculator from '../mortgage-calculator/jsx/MortgageCalculator.jsx';
import CommentSection from '../comment-section/client/src/components/App.jsx';
import SimilarHomes from '../similar-homes/client/src/components/App.js';
import ImageGallery from '../image-gallery/client/src/components/App/App.jsx';

// routes should send style, script, and  body

export default [
  {
    Component: ImageGallery,
    id: 'image-gallery',
    router: true,
    path: 'http://app:3001',
  },
  {
    Component: SimilarHomes,
    id: 'similar-homes',
    path: 'http://localhost:3002',
  },
  // {
  //   Component: CommentSection,
  //   id: 'comment-section',
  //   path: 'http://localhost:3003',
  // },
  // {
  //   Component: MortageCalculator,
  //   id: 'mortgage-calculator',
  //   path: 'http://localhost:3004',
  // },
];
