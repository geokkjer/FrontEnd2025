interface IBase {
    id: number
}

interface IDerivedFromBase extends IBase {
    name: string
}
class IdNameClass implements IDerivedFromBase {
    id: number = 0
    name: string = "nameString"   
}