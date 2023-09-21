const img = document.querySelector("#fix-size");
const refImg = document.querySelector('[ref="size-ref"]');
const cards = Array.from(document.querySelectorAll("#cards .block"));
const resizeCards = cards => {
    const tallest = cards.reduce((prev, curr) => {
        return getComputedStyle(curr).height > getComputedStyle(prev).height ? curr : prev;
    });

    const tallestHeight = parseInt(getComputedStyle(tallest).height);
    cards.forEach(card => {
        const styles = getComputedStyle(card);
        card.style.paddingBottom = `${parseInt(styles.paddingBottom) + (tallestHeight - parseInt(styles.height))}px`;
    });
}

window.addEventListener("load", () => {
    refImg && (img.style.height = `calc(100% - ${getComputedStyle(refImg).height} - 3rem)`);
    cards && cards.length && resizeCards(cards);

});

if (refImg)
    refImg.onload = () => {
        (img.style.height = `calc(100% - ${getComputedStyle(refImg).height} - 3rem)`);
    }


langSwitcher.addEventListener("click", () => {
    cards && cards.length && resizeCards(cards);
});


