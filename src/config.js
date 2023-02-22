import { FiGithub, FiLink } from 'react-icons/fi'

const config = {
  name: 'Wongchisum',
  title: "Wongchisum's blog",
  desc: '求祂把诗与火赐予我',
  avatar: '/logo.png',
  // logo: '/logo.png', // header 左侧 logo
  socials: [
    { label: 'Github', icon: <FiGithub className="text-lg" aria-hidden />, link: 'https://github.com/wongchisum' },
    { label: '友情链接', icon: <FiLink className="text-lg" aria-hidden />, link: '/blogroll' },
  ],
  blogroll: [
    { name: '赖同学', link: 'https://www.laibh.com' },
    { name: '鯊手', link: 'https://www.cnblogs.com/Scooby' },
    { name: 'mghio', link: 'https://www.mghio.cn' },
  ]
}

export default config
