// routes should send style, script, and  body
const local = true;

module.exports =  [
  {
    id: 'image-gallery',
    route: local ? 'http://localhost:3001' : 'http://3.12.83.228:80',
  },
  // {
  //   id: 'mortgage-calculator',
  //   route: local ? 'http://localhost:3004' : 'http://18.221.128.76:3004',
  // },
  // {
  //   id: 'similar-homes',
  //   route: local ? 'http://localhost:3002' : 'http://18.217.19.243:80',
  // },
  // {
  //   id: 'comment-section',
  //   route: local ? 'http://localhost:3003' : 'http://18.217.19.243:80',
  // },
];
