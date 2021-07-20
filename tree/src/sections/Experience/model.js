import LmImg from '../../assets/images/lianudom.jpg'
import pun from '../../assets/images/pun.png'
import xhub from '../../assets/images/xhub.png'

const experiences = [
  {
    position: 'Web Developer Internship',
    company: 'LIANUDOM CO.,LTD',
    alt: 'yeah',
    image: LmImg,
    info: [
      'Frontend',
      'Laravel',
      'React Redux',
      'Express',
      'August, 2017'
    ]
  },
  {
    position: 'Freelance Laravel Develope',
    company: 'Pun Corporation',
    alt: 'yeah',
    image: pun,
    info: [
      'Frontend',
      'Backend',
      'Laravel',
      'September, 2018'
    ]
  },
  {
    position: 'Software Enginner',
    company: 'xHub CO.,LTD',
    alt: 'yeah',
    image: xhub,
    info: [
      'Crypto Liquidity Exchanges',
      'Nats Streaming',
      'MetaTrader 5',
      'Gateway API metaquotes',
      'Back-end system',
      'C++, C#, Java, Javascipt',
      'Robot Trading',
      'March, 2019'
    ]
  }
]

export default experiences.reverse()
