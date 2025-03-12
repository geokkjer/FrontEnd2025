console.log(`interfaces.ts`)

interface IIdName {
    id: number
    name: string
}
let idObject: IIdName = {
    id: 2,
    name: "This is a name"
}

interface IOptional {
    id: number
    name?: string
}

let optionalId: IOptional = {
    id: 1
} 

interface IWeakType {
    id?: number
    name?: string
}

let weakNoOverlap: IWeakType = {
    // description: "a description",
    name: "a name"
}

interface IDescrValue {
    descr: string
    value: number
}

function printNameOrValue(obj: IIdName | IDescrValue): void{
    if('id' in obj) {
        console.log(`obj.name: ${obj.name}`)
    }
    if ('descr' in obj) {
        console.log(`obj.value: ${obj.value}`)
    }
}
printNameOrValue(idObject)

interface IPerson{
    id: number
    name: string
}

type PersonPropertyName = keyof IPerson
type PersonPropertyLiteral = "id" | "name"

function getProperty(key: PersonPropertyName, value: IPerson){
    console.log(`${key} = ${value[key]}`)
}

getProperty("id", {id:1, name: "FirstName"})
getProperty("name", {id:2, name: "lastName"})
