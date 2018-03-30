// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ss = 'https://a.slack-edge.com/c00d19/img/emoji_2017_12_06/sheet_apple_64_indexed_256.png'

function getDiv() {
  const div = new HTMLDivElement()
}

$('#clear').click(() => $('#testarea').empty())

$('#img-simple').click(() => {
  for (let i = 0; i < 50; i++) {
    $('#testarea').append(`<img src="${ss}" />`)
  }
})

$('#img-tick').click(() => {
  for (let i = 0; i < 50; i++) {
    process.nextTick(() => $('#testarea').append(`<img src="${ss}" />`))
  }
})

$('#img-div').click(() => {
  const pos = `background-position:${Math.random()}% ${Math.random()};background-size:5200% 5200%;`
  const size = `height:50px;width:50px;`
  const style = `background-image: url(${ss});${pos};${size}`

  for (let i = 0; i < 50; i++) {
    $('#testarea').append(`<div style="${style}"></div>`)
  }
})

