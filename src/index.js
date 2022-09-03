
const button = document.querySelector('button')

button.addEventListener('click', () => {
    document.querySelector('.landing-page').classList.add('hide')
    start()
})

const parseHtml = (text) => {
    const node = document.createElement('div')
    node.innerHTML = text
    document.body.appendChild(node.firstChild)
}

const start = () => {
    fetch('src/html/menu.html').then(txt => txt.text()).then(text => {
        parseHtml(text)
        showCharacterSelector()
    })
}

const showCharacterSelector = () => {
    document.querySelectorAll('.character-selector li').forEach(playerBtn => {
        playerBtn.addEventListener('click', () => {
            document.querySelector('.character-selector').remove()
            fetch('src/html/game.html').then(txt => txt.text()).then(parseHtml)
        })
    })
}

const win = () => {
    document.querySelector('.game').remove()
    fetch('src/html/win.html').then(txt => txt.text()).then(parseHtml)
}

const lose = () => {
    document.querySelector('.game').remove()
    fetch('src/html/lose.html').then(txt => txt.text()).then(parseHtml)
}

const reset = () => {
    document.body.querySelector('body > div.win')?.remove()
    document.body.querySelector('body > div.lose')?.remove()
    start()
}

window.win = win
window.lose = lose
window.reset = reset