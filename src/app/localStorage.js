// source: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

export const loadState = () => {
  console.log('Loading State')
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  console.log('Saving State')
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {
    // ignore write errors
  }
}
