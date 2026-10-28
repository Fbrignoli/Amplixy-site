import assert from 'node:assert/strict'
import { test } from 'node:test'
import { preferredRepresentation, varyAccept } from '../src/lib/negotiation.mjs'

const cases = [
  [undefined, 'text/html'], ['', 'text/html'], ['*/*', 'text/html'],
  ['text/html', 'text/html'], ['text/markdown', 'text/markdown'],
  ['TEXT/MARKDOWN; Charset="UTF-8"', 'text/markdown'],
  ['text/html;q=0.2, text/markdown;q=0.9', 'text/markdown'],
  ['text/markdown;q=0.2, text/html;q=0.9', 'text/html'],
  ['text/markdown;q=0, text/*;q=1', 'text/html'],
  ['text/html;q=0, text/*;q=0.5', 'text/markdown'],
  ['text/*;q=0, */*;q=1', null],
  ['text/markdown;q=0, text/html;q=0', null],
  ['application/json', null], ['image/*', null],
  ['text/markdown; charset=iso-8859-1', null],
  ['text/markdown; version="a,b;c", text/html', 'text/html'],
  ['text/markdown;q=garbage', null], ['text/markdown;q=1.5', null],
  ['text/markdown;q=-1', null], ['text/markdown;q=0.1234', null],
  ['text/markdown;q=0.5, text/html;q=0.5', 'text/markdown'],
]
for (const [accept, expected] of cases) {
  test(`HTTP Accept: ${String(accept)}`, () => {
    assert.equal(preferredRepresentation(accept), expected)
  })
}

test('Vary preserves other response selectors and is case insensitive', () => {
  assert.equal(varyAccept(undefined), 'Accept')
  assert.equal(varyAccept('Accept-Encoding'), 'Accept-Encoding, Accept')
  assert.equal(varyAccept('accept-encoding, ACCEPT'), 'accept-encoding, ACCEPT')
  assert.equal(varyAccept('*'), '*')
})
