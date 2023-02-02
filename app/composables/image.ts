export const useImagePath = (path: string, type: string) => {
  if (path.startsWith('/public/'))
    return `${path.substring('/public/'.length)}`
  else
    return `/images/${type}/${path}`
}
