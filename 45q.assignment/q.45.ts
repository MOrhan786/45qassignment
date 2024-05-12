

type car = {
    manufacture: string 
    model : string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return {
        manufacture, 
        model,
        ...optional
    }
}
const myCar: car = createCar("toyota", "corolla", {colour: "white", year:" 2024"})
console.log(myCar)