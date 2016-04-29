require(__dirname).test({
  opt: { ignoreEntities: true },
  xml: '' +
    '<r>' +
    '&rfloor; &spades; &copy; &rarr; ' + // Some standard entities
    '&amp; &apos; &gt; &lt; &quote; ' + // XML entities
    '&#0; &#13; &#453; ' + // Decimal entities
    '&#x0000; &#x01ED; &#x020f; ' + // Hex entities
    '& \' < > " ' + // Regular characters
    '</r>',
  expect: [
    ['opentagstart', {'name': 'R', attributes: {}}],
    ['opentag', {'name': 'R', attributes: {}, isSelfClosing: false}],
    ['text', '&rfloor; &spades; &copy; &rarr; ' +
    '&amp; &apos; &gt; &lt; &quote; ' +
    '&#0; &#13; &#453; ' +
    '&#x0000; &#x01ED; &#x020f; ' +
    '& \' < > " '],
    ['closetag', 'R']
  ]
})
