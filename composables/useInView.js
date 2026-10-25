// true once the element has scrolled into view (used to start the animations)
import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useInView(threshold = 0.2) {
  const el = ref(null)
  const seen = ref(false)
  let obs
  onMounted(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      seen.value = true
      return
    }
    obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          seen.value = true
          obs.disconnect()
        }
      },
      { threshold }
    )
    if (el.value) obs.observe(el.value)
  })
  onBeforeUnmount(() => obs?.disconnect())
  return { el, seen }
}
