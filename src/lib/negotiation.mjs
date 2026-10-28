// RFC 9110 §12.5.1: specific ranges override wildcards, including q=0.
function splitQuoted(value, separator) {
  const parts = []
  let current = '', quoted = false, escaped = false
  for (const character of value) {
    if (escaped) { current += character; escaped = false; continue }
    if (character === '\\' && quoted) { current += character; escaped = true; continue }
    if (character === '"') quoted = !quoted
    if (character === separator && !quoted) { parts.push(current); current = '' }
    else current += character
  }
  if (quoted || escaped) return []
  parts.push(current)
  return parts
}

function parseRange(raw, position) {
  const [media, ...parameters] = splitQuoted(raw, ';').map(part => part.trim())
  if (!media || !/^(?:\*|[\w!#$%&'+.^`|~-]+)\/(?:\*|[\w!#$%&'+.^`|~-]+)$/.test(media)) return null
  const [type, subtype] = media.toLowerCase().split('/')
  if (type === '*' && subtype !== '*') return null
  let q = 1
  const params = new Map()
  for (const parameter of parameters) {
    const match = parameter.match(/^([\w-]+)\s*=\s*(.+)$/)
    if (!match) return null
    const name = match[1].toLowerCase()
    const value = match[2].replace(/^"(.*)"$/, '$1').replace(/\\(.)/g, '$1')
    if (name === 'q') {
      if (!/^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/.test(value)) return null
      q = Number(value)
    } else params.set(name, value.toLowerCase())
  }
  return { type, subtype, q, params, position, specificity: type === '*' ? 0 : subtype === '*' ? 1 : 2 }
}

export function preferredRepresentation(accept, available = ['text/html', 'text/markdown']) {
  if (accept == null || accept.trim() === '') return available[0] ?? null
  const ranges = splitQuoted(accept, ',').map(parseRange).filter(Boolean)
  let preferred = null, bestQ = 0, bestPosition = Infinity
  for (const candidate of available) {
    const [type, subtype] = candidate.split('/')
    const matches = ranges.filter(range =>
      (range.type === '*' || range.type === type) &&
      (range.subtype === '*' || range.subtype === subtype) &&
      [...range.params].every(([name, value]) => name === 'charset' && value === 'utf-8'),
    ).sort((a, b) => b.specificity - a.specificity || b.params.size - a.params.size || a.position - b.position)
    const match = matches[0]
    if (match && match.q > 0 && (match.q > bestQ || (match.q === bestQ && match.position < bestPosition))) {
      preferred = candidate
      bestQ = match.q
      bestPosition = match.position
    }
  }
  return preferred
}

export function varyAccept(existing) {
  const value = Array.isArray(existing) ? existing.join(', ') : String(existing ?? '')
  const tokens = value.split(',').map(token => token.trim().toLowerCase())
  return tokens.includes('*') || tokens.includes('accept') ? value : value ? `${value}, Accept` : 'Accept'
}
