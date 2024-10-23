function Delta(ax2, bx, c) {
    return Math.pow(bx, 2) - 4 * ax2 * c;
}

function Bhaskara(ax2, bx, c) {
    const delta = Delta(ax2, bx, c);
    const resultados = [];

    if (delta < 0) {
        console.log('Delta negativo: não há raízes reais.');
    } else {
        const res1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        const res2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        resultados.push(res1, res2);
    }

    return resultados;
}

const raizes = Bhaskara(-3, 5, 12);
console.log(`As raízes são: ${raizes}`);
