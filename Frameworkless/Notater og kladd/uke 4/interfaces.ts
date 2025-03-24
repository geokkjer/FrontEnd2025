// interface IComplexType {
//   id: number;
//   name: string;
// }

// class ComplexType implements IComplexType {
//   id!: number;
//   name!: string;

//   constructor(idArg: number, nameArg: string);
//   constructor(idArg: string, nameArg: string);
//   constructor(idArg: any, nameArg: any) {
//     this.id = idArg;
//     this.name = nameArg;
//   }
//   print(): string {
//     return "id:" + this.id + " name:" + this.name;
//   }
//   usingTheAnyKeyword(arg1: any): any {
//     this.id = arg1;
//   }
//   usingOptionalParameters(optionalArg1?: number) {
//     if (optionalArg1) {
//       this.id = optionalArg1;
//     }
//   }
//   usingDefaultParameters(defaultArg1: number = 0) {
//     this.id = defaultArg1;
//   }
//   usingRestSyntax(...argArray: number[]) {
//     if (argArray.length > 0) {
//       this.id = argArray[0];
//     }
//   }
//   usingFunctionCallbacks(callback: (id: number) => string) {
//     callback(this.id);
//   }
// }

// var complexType: ComplexType = new ComplexType(1, "complexType");

// var complexType_2: ComplexType = new ComplexType(2, "complexType_2");

// const writeToTerm = () => {
//   console.log(complexType.print());
//   console.log(complexType_2.print());
// };
// writeToTerm();
interface IComplexType {
  id: number;
  name: string;
  print(): string;
  usingTheAnyKeyword(arg1: any): any;
  usingOptionalParameters(optionalArg1?: number): any;
  usingDefaultParameters(defaultArg1?: number): any;
  usingRestSyntax(...argArray: number[]): any;
  usingFunctionCallbacks(callback: (id: number) => string): string;
  /**
   *
   */
  constructor(arg1: any, arg2: any): any;
}
