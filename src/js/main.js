const cardDimension = {
    width: 85.6,
    height: 53.98,
    ratio: function() {
        return +(this.width / this.height)
    }
}

const cardWidth = 40    // %
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.style.width = `${cardWidth}vw`
    card.style.height = `${cardWidth / cardDimension.ratio()}vw`
    card.style.borderRadius = `${cardWidth * 3 / 100}vw`
})