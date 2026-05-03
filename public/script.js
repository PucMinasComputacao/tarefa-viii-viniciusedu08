const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Avatar",
        tipo: "filme",
        ano: 2009,
        generos: ["ação", "aventura"],
        nota: 8.2,
        assistido: false
    },
    {
        id: 4,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ficção científica"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 5,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 6,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["terror", "aventura"],
        nota: 8.8,
        assistido: false
    }
];


console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

console.log("Lista completa:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade não assistidos:", naoAssistidos.length);

const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log("Primeiro com nota >= 9:", notaAlta.titulo, "-", notaAlta.nota);
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

const somaNotas = catalogo.reduce((total, item) => total + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((total, item) => total + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos têm ao menos 1 gênero?", todosTemGenero);

const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Filmes: ${totalFilmes}</p>
    <p>Séries: ${totalSeries}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral: ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Ranking</h3>
    <ol>
        ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
    </ol>
`;