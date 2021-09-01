export default class Contato{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]')
        const emailInput = el.querySelector('input[name="email"]')
        const error = false;

        if(!nomeInput.value){
            alert('Vocẽ precisa inserir o Nome')
            error = true;
        }

        if(!telefoneInput.value && !emailInput.value){
            alert('Você precisa inserir Telefone ou Email')
            error = true;
        }

        if(!error) el.submit();
    }
}