declare module '*.jpg?as=webp' {
  const src: string
  export default src
}

declare module '*.png?as=webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import React = require('react')
  const src: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>
  export default src
}

declare module '*.json' {
  const value: any
  export default value
}
