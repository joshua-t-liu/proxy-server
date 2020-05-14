import MortageCalculator from '../mortgage-calculator/jsx/MortgageCalculator.jsx';
import CommentSection from '../comment-section/client/src/components/App.jsx';
import SimilarHomes from '../similar-homes/client/src/components/App.js';
import ImageGallery from '../image-gallery/client/src/components/App/App.jsx';

export default [
  {
    Component: ImageGallery,
    id: 'image-gallery',
    router: true,
  },
  {
    Component: SimilarHomes,
    id: 'similar-homes',
  },
  {
    Component: CommentSection,
    id: 'comment-section',
  },
  {
    Component: MortageCalculator,
    id: 'mortgage-calculator',
  },
];
