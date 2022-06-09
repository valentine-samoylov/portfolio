// scrollToId
const scrollToSection = (scrollTo) => {
  document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' })
}

export default scrollToSection
