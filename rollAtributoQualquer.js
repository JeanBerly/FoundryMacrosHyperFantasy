let d = new Dialog({
    title: "Rolagem atributo qualquer",
    content: `<p>Escreva o nome do atributo (minusculo e substitua os espacos por underline(_)</p>
            <form>
                <div class="form-group">
                    <input type="text" id="atributo"></input>
                </div>
            </form>`,
    buttons: {
        one: {
            icon: '<i class="fas fa-check"></i>',
            label: "Option One",
            callback: () => {
                let atributoEscolhido = document.getElementById("atributo").value;
                console.log(atributoEscolhido)
                let atributos = token.actor.data.data.attributes;
                let roll = new Roll("1d100");
                let resultado = "";
                roll.evaluate();
                if (roll.result <= (atributos[atributoEscolhido].value) / 5) {
                    resultado = "Extremo";
                }
                else if (roll.result <= atributos[atributoEscolhido].value / 2) {
                    resultado = "Bom"
                }
                else if (roll.result <= atributos[atributoEscolhido].value / 1) {
                    resultado = "Normal";
                }
                else {
                    resultado = "Fracasso";
                }
                let results_html = `<h2>Teste ${atributoEscolhido}: ${roll.result}(${resultado})!</h2>`
                ChatMessage.create({
                    user: game.user._id,
                    speaker: ChatMessage.getSpeaker({ token: actor }),
                    content: results_html
                });
            }
        },
        two: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancelar",
            callback: () => console.log("Dialogo cancelado!")
        }
    },
    default: "two",
    render: html => console.log("Register interactivity in the rendered dialog"),
    close: html => console.log("This always is logged no matter which option is chosen")
});
d.render(true);