import { ReactNode } from 'react'

interface ImageTextSectionProps {
  image: string
  alt: string
  children: ReactNode
  imageOnLeft?: boolean
}

export function ImageTextSection({ image, alt, children, imageOnLeft = true }: ImageTextSectionProps) {
  return (
    <div className="image-text-section" style={{
      display: 'flex',
      flexDirection: imageOnLeft ? 'row' : 'row-reverse',
      gap: '2rem',
      marginBottom: '2rem',
      alignItems: 'center'
    }}>
      <div className="image-container" style={{
        flex: '0.5',
        height: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src={image} 
          alt={alt} 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} 
        />
      </div>
      <div style={{ flex: '1' }}>
        {children}
      </div>
    </div>
  )
}
