const matchers = [
  { regex: /import '([^']+)'/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /import "([^"]+)"/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /from '([^']+)'/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /from "([^"]+)"/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /require\('([^']+)'\)/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /require\("([^"]+)"\)/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /require\.resolve\('([^']+)'\)/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /require\.resolve\("([^"]+)"\)/, extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  { regex: /@import '\~([^']+)'/, extensions: ['.less', '.scss'] },
  { regex: /@import "\~([^"]+)"/, extensions: ['.less', '.scss'] },
]

module.exports = matchers
