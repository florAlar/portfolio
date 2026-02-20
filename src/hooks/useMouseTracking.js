// useMouseTracking.js

export const useMouseTracking = () => {
  return (e) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    target.style.setProperty('--mouse-x', x)
    target.style.setProperty('--mouse-y', y)
  }
}
