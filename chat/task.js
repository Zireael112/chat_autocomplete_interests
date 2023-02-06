const chatWidget = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
const submitInp = document.getElementById('chat-widget__input')

const words = ['Добрый день! До свидания!', 'Кто тут?', 'Привет ты кто?', 'Сам такой!!!', 'Мы закрыты, приходите никогда']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
})



submitInp.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && submitInp.value !== '') {
        let now = new Date().toLocaleTimeString().slice(0,-3)

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${now}</div>
            <div class="message__text">
                ${submitInp.value}
            </div>
            </div>
        `

        submitInp.value = ''
        

        const rndInt = getRandomInt(words.length)

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${now}</div>
            <div class="message__text">
                ${words[rndInt]}
            </div>
            </div>
        `
    }
    
})
