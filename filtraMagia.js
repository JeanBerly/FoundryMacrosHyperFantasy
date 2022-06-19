let magias = token.actor.data.data.citems;
let magiaEscolhida = magias.filter((magia) => {
    if (magia.name == "Blackout") return magia;
});
let id = magiaEscolhida[0].id;
let itemsDoJogo = game.items;
let a = itemsDoJogo.filter((item) => {
    if (item.data._id == id) return item
});
ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({ token: actor }),
    content: a[0].data.data.description
});