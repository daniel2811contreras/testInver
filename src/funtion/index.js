export const formateMoney = n =>  parseInt(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00','').replace(/,/g,'.')

export const ruleTree = (d, p) => d * p / 100

export const ruleTreeP = (c, t) => c * 100 / t
