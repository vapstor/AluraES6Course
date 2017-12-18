class DateHelper {
    constructor {
        throw new Error('Esta Classe não pode ser instanciada')
    }
    
    //metodos estaticos nao precisam de instancia para serem acessados

    static textoParaData(texto) {
         // let data = new Date(this._inputData.value.replace(/-/g, ','); //replace (global ' - ', por ', ')
        return new Date(...texto.split('-') //cortar em itens, com criterio o hifen // ... assimila [0] de um vetor com o parametro do outro
        .map(function (item, indice) {
           if (indice == 1) {
               return item-1;
           } 
           return item;
            })) // .map(function (item, indice) => item - indice %2)
            // console.log(typeof(this._inputData.value)); //typeof (importante)
    }
    
    static dataParaTexto(data) {
        return data.getDate() 
        + '/' + (data.getMonth()+1) //parenteses para usar como int antes de concatenar como string
        + '/'+ data.getFullYear();
        
    }
}