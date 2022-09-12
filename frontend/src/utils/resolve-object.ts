export const resolveValue = <T>(path: string, obj: T) => path.split('.').reduce((accumulator: any, curr: any) => (accumulator ? accumulator[curr] : null), obj)
