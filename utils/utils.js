const currencyFormater = value => {
    if (!Number(value)) return '';
    let amount = '';
    amount = (amount.length > 2) ? parseInt(value).toFixed(2) : (parseInt(value) / 100).toFixed(2);
    return amount.replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

const currencyParser = value => value?.replace(/,|\./g, '')

export { currencyFormater, currencyParser }