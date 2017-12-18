class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data);
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
        // this.obtemVolume = quantidade * valor;
    }

    get volume() {
        return this._valor * this._quantidade;
    }

    get data() {
        return this._data;
    }

    get valor() {
        return this._valor;
    }

    get quantidade() {
        return this._quantidade;
    }
}