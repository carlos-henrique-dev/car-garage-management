export const updateOrInsert = <T>({ newElement, list, key }: { newElement: T; list: T[]; key: string }) => {
  let arrayWasUpdated = false

  const newList = list.reduce((accumulator, current) => {
    const currentEqualNew = current[key as keyof typeof current] === newElement[key as keyof typeof newElement]

    if (currentEqualNew) {
      accumulator.push({ ...current, ...newElement })
      arrayWasUpdated = true

      return accumulator
    }

    accumulator.push(current)
    return accumulator
  }, [] as T[])

  if (arrayWasUpdated) return newList

  return [newElement, ...newList]
}
