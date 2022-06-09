// setDynamic VH Hook (Fixes 100VH issue on mobile browsers)
const setDynamicVH = () => {
  const vh = window.innerHeight
  document.documentElement.style.setProperty('--dynamic-vh', `${vh}px`)
}

export default setDynamicVH
