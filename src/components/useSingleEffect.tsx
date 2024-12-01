import { useEffect, useRef } from 'react'

function useSingleEffect(effect: () => void | (() => void), deps: React.DependencyList = []) {
  const hasRun = useRef(false)

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true
      return effect()
    }
  }, deps) // Include 'deps' in the dependency array
}

export default useSingleEffect
