export default function ehMaiorDeIdade(campo) {
    const dataDeNascimento = new Date(campo.value);
    validaIdade(dataDeNascimento)
    console.log(validaIdade(dataDeNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getMonth(), data.getDate());

    return dataAtual >= dataMais18;
}
