import { FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import { BsSubstack } from 'react-icons/bs'

export function SocialLinks() {
  const socialLinks = [
    { href: "mailto:alexxke@gmail.com", Icon: FaEnvelope, title: "Email" },
    { href: "https://www.linkedin.com/in/alexke/", Icon: FaLinkedinIn, title: "LinkedIn" },
    { href: "https://scholar.google.com/citations?user=5mRIm", Icon: SiGooglescholar, title: "Google Scholar" },
    { href: "https://twitter.com/kealexx", Icon: FaTwitter, title: "Twitter" },
    { href: "https://github.com/alexxke", Icon: FaGithub, title: "GitHub" },
    { href: "https://alexke.substack.com/", Icon: BsSubstack, title: "Substack" },
  ]

  return (
    <div className="social-links-container">
      {socialLinks.map(({ href, Icon, title }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          aria-label={title}
        >
          <Icon className="social-icon" />
        </a>
      ))}
    </div>
  )
} 