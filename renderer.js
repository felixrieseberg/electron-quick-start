// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ss = 'https://a.slack-edge.com/c00d19/img/emoji_2017_12_06/sheet_apple_64_indexed_256.png'

function insertSpans(count = 50) {
  for (let i = 0; i < count; i++) {
    const pos = `background-position:84.31372549019608% 21.568627450980394%;background-size:5200% 5200%;`
    const size = `display:block;height:50px;width:50px;`
    const style = `background-image: url(${ss});${pos};${size}`

    $('#testarea').append(`<span style="${style}"></span>`)
  }
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

$('#img-freq').click(() => {
  const one = setInterval(() => insertSpans(), 200)
  const two = setInterval(() => $('#testarea').empty(), 150);

  setTimeout(() => {
    clearInterval(one)
    clearInterval(two)
  }, 5000)
})

$('#img-span').click(() => {
  insertSpans()
})

$('#reflow').click(() => {
  [...document.body.getElementsByTagName("*")].map((element) => {
    console.log(element)
    element.getBoundingClientRect()
  })
})

