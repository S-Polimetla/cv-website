module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log('\x1B]8;;a b\x07\x1B]8;;')
    show({ summary: 'Test' })
  }
}
