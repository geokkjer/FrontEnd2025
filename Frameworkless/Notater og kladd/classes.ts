class SimpleClass {
    id: number | undefined
    constructor(id: number){
        this.id = id
    }
    print(): void{
        console.log(`SimpleClass.id = ${this.id}`)
    }
}

let mySimpleClass = new SimpleClass(2030)
mySimpleClass.id = 2025
mySimpleClass.print()

class classA implements IPrint {
    print(): void {
        console.log(`ClassA.print() called`)
    }
}

class classB implements IPrint {
    print(): void {
        console.log(`ClassB.print() called`)
    }
}

interface IPrint {
    print(): void
}

function printClasses(a: IPrint){
    a.print()
}

let ClassA = new classA()
let ClassB = new classB()

printClasses(ClassA)
printClasses(ClassB)
class ClassC {
    print(): void {
        console.log(`ClassC.print() called`)
    }
}
let classC = new ClassC()
printClasses(classC)

class ClassWithConstructor {
    id: number
    constructor(id: number){
        this.id = id
    }
}
let classWithConstructor = new ClassWithConstructor(10)
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`)

class ClassWithPrivateProperty {
    private id: number
    constructor(id: number){
        this.id = id
    }
}

let PrivateAccess = new ClassWithPrivateProperty(20)

PrivateAccess["id"] = 20