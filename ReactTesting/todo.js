export const add = (x,y) => x - y

export const sub = (a,b) => a-b

export const mul = (k,l) => k+l

export const div = (m,n) => m/n 

//export const anotheradd = (x,y) => x+ y


export const total = (subTotal, Total) => {
    return "$" + add(subTotal,Total)
}
