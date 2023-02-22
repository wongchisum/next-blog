import { FiGithub, FiLink } from 'react-icons/fi'

const config = {
  name: 'Wongchisum',
  title: "Memo",
  desc: '求祂把诗与火赐予我',
  avatar: '/logo.png',
  socials: [
    { label: 'Github', icon: <FiGithub className="text-lg" aria-hidden />, link: 'https://github.com/wongchisum' },
    { label: '友情链接', icon: <FiLink className="text-lg" aria-hidden />, link: '/blogroll' },
  ],
  blogroll: [
    { name: '神隐少年不说话', link: 'https://www.facebook.com/spiritboyaway' },
    { name: '设畜', link: 'https://www.facebook.com/profile.php?id=100004039959472' },
    { name: '凤梨', link: 'https://www.facebook.com/profile.php?id=100001642180626' },
    { name: '二百五', link: 'https://www.facebook.com/twohundredlee' },
  ]
}

export default config
