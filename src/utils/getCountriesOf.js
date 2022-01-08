

export default function getCountriesOf(destinos, category, startIndex, maxItem) {
    const lowerCategory = category.toLowerCase()

    if (lowerCategory === 'nacionais') {
        return destinos.filter((destino) => destino.country.toLowerCase() === 'brasil').slice(0, maxItem)
    } else if (lowerCategory === 'internacionais') {
        return destinos.filter((destino) => destino.country.toLowerCase() !== 'brasil').slice(0, maxItem)
    }

    return destinos.slice(0, maxItem)

}

