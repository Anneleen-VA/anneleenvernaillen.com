export function useImagePath(path: string, type?: string) {
  if (path.startsWith('/public/'))
    return `${path.substring('/public/'.length)}`
  else if (type && type?.length > 0)
    return `/images/${type}/${path}`
  else
    return `/images/${path}`
}
