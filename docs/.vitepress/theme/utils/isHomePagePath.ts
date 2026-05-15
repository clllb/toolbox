export function isHomePagePath(pathname: string) {
  return (
    pathname === '/' ||
    pathname === '/index.html' ||
    pathname === '/toolbox/' ||
    pathname === '/toolbox/index.html'
  )
}
