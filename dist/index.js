// // src/index.ts
// const heading = document.createElement("h2");
// heading.textContent = "This was added by TypeScript!";
// document.body.appendChild(heading);
// import { L } from "ts-toolbelt";
// import { Extends } from "ts-toolbelt/out/Any/Extends";
// const head2 = document.createElement("h2");
// head2.textContent = "eita amar faltu test";
// document.body.appendChild(head2);
// // lets learn about typescript types......
// // let's do some object oriented programming in typescript
// interface User{
//     name: string;
//     id: number;
// }
// class UserAccount{
//     name: string;
//     id: number;
//     constructor(name: string, id: number){
//         this.name = name;
//         this.id = id;
//     }
// }
// const user: User = new UserAccount("Rony", 1);
// console.log(user);
// // array
// let skills: Array<string> = ["HTML", "CSS", "JavaScript"]; // generic array type
// skills.push("TypeScript");
// console.log(skills, skills.length, skills[0]);
// let numbers: number[];
// numbers = [1, 2, 3, 4, 5]; // array of numbers
// console.log(numbers, numbers.length, numbers[0]);
// // tuple
// let socialMedia: [number, string, boolean];
// socialMedia = [1, "Facebook", true]; // tuple type
// console.log(socialMedia, socialMedia.length, socialMedia[0]);
// // any type -> just avoid it whenever possible
// let janina: any = "ki type jani na";
// janina = 1; // can be anything
// janina = true; // can be anything
// console.log(janina, typeof janina);
// // unknown type -> better than any, but still not recommended
// let unknownType: unknown = "ki type jani na";
// // const len: number = unknownType.length; // will give error if unknownType is not a string
// if(typeof unknownType === "string") {
//     console.log(unknownType, unknownType.length); // will work if unknownType is a string
// }
// unknownType = 1; // can be anything
// if(typeof unknownType === "number"){
//     console.log("ei unknownType ekta number");
// }
// // never type -> function that never returns
// // it's used for functions that throw an error or have infinite loops
// function throwError(message: string): never{
//     throw new Error(message);
// }
// function infiniteLoop(): never {
//   while (true) {
//     console.log("This will run forever");
//   }
// }
// // part-2 : Composing type
// // interfaces vs Type Aliases
// // ## interface
// // -> used to define the shape of an object or a class
// // -> support declaration merging : if we define the same interface multiple times, they will be merged
// // -> uses the extends keyword to extend other interfaces
/*
interface User{
    id : number;
    name: string;
    isVerified?: boolean; // optional property
    readonly apiKey: string;// cannot be changed after creation
}

interface Admin extends User
{
    role: 'admin' | 'superadmin'; // union type
}
let user: User = {
    id: 1,
    name: "Rony",
    isVerified: true,
    apiKey: "12345"
};
let admin: Admin = {
    id: 2,
    name: "Admin",
    isVerified: true,
    apiKey: "67890",
    role: 'admin'
};
console.log(user,admin);
*/
// ## type alias
// -> used to define a type or a union of types
// -> does not support declaration merging
// -> uses the & operator to combine types
// Union Types
/*
function printId(id: number | string): void{
    console.log("id is : ",id);
    if(typeof id === "string"){
        console.log("length : ", id.length);
    }
}

console.log("Printing id as number: ", printId(100));
printId("Rony123");
*/
// enum
/*
enum Direction{
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

let move: Direction = Direction.up;
console.log("Moving in direction: ", move);
*/
// default and optional parameters
/*
function greet(name: string, greeting?: string): string { // optional parameter
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Rony"), greet("rony","matha")); // "Hello, Rony!"

// function with default parameter
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greetWithDefault("Rony")); // "Hello, Rony!"
console.log(greetWithDefault("Rony", "Hi")); // "Hi, Rony
*/
// # generics : the power house of typescript
// -> allows us to create reusable components that can work with any data type
/*
 function getFirstElement<T>(arr: T[]): T{
    if(arr.length === 0){
        alert("Array is empty");
        return undefined as unknown as T; // return undefined if array is empty
    }
    return arr[0];
 }

 const a = getFirstElement([1, 2, 3]); // number
 const b = getFirstElement(["apple", "banana", "cherry"]); // string
  */
// ## generic interfaces
/*
interface Box<T>{
   value: T;
}

// number box
const numberBox: Box<number> = {
   value: 128
}
console.log("Number Box: ", numberBox.value);
// string box
const stringBox: Box<string> = {
   value : "ki ekta obostha"
}
console.log("string Box: ", stringBox.value);
*/
// ## generic classes
/*
class Collection<T> {
 data: T[] = [];
 add(item: T) {
   this.data.push(item);
 }
 get(index: number): T {
   return this.data[index];
 }
}
const stringCollection = new Collection<string>();
stringCollection.add("Hello");
console.log("string collection:, ", stringCollection.get(0)); // "Hello";
*/
// #instanceof operator
/*
class Cat{
    meow():void{
        console.log("ami billu,meow meow");
    }
}
class Dog{
    bark():void{
        console.log("ami kutta, gheu gheu");
    }
}

function fun(animal: Cat | Dog) : void{
    if(animal instanceof Cat){
         animal.meow();
    }else{
        animal.bark();
    }
}
fun(new Cat());
fun(new Dog());
*/
// for loops
// const numbers: number[] = [1, 2, 3, 4, 5];
// const arekta: number[] = [6, 7, 8, 9, 10];
// array.forEach((element, index, array) => {
//   // Your logic here
// });
// element	The current item in the array
// index	(Optional) The index of the current item
// array	(Optional) The array itself
// generics
// const sum = <T>(array: readonly T[], mapper: (item: T) => number):number =>
// array.reduce((acc,item) => acc+mapper(item),0);
// const arr = ['1','2',{
//     wow: 1000000007
// }];
// const result = sum(arr, (item)=> {
//     if(typeof item === 'object' && 'wow' in item){
//         return item.wow;
//     }
//     return parseInt(item);
// });
// console.log(result);
//  utility type
// const myFunc = () =>{
//    return "heloo";
// };
// type MyFuncReturn = ReturnType<typeof myFunc>;
// const makeQuery = (
//    url: string,
//    oprs?: {
//     method?: {
//         [key: string]: string;
//     };
//     body?: string;
//    },
// ) => {};
// type makeQueryParameters = Parameters<typeof makeQuery>
/*
if we want to extract only the 2nd parameter, then we can write it as:

type makeQueryParametersSecondAurgument = makeQueryParameters[1];

this is the output you will show if make the pointer on makeQueryParametersSecondAurgument

type makeQueryParametersSecondAurgument = {
    method?: {
        [key: string]: string;
    };
    body?: string;
} | undefined
 */
/*
const getUser = () => {
    return Promise.resolve({
      id: "123",
      name: "rony",
      email: "ar@rony.com"
    });
}
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
*/
/*
const testingFrameworks = {
    vitest: {
        label: "Vitest",
    },
    jest:{
        label: "Jest",
    },
    mocha:{
        label: "Mocha",
    },
};

// type TestingFramework = unknown;
// type TestingFramework = typeof testingFrameworks;

// type TestingFramework = keyof typeof testingFrameworks;

type TestingFrameworks = typeof testingFrameworks;
type TestingFramework = keyof TestingFrameworks;
*/
/*
type A =
| {
    type: "a",
    a: string;
}
|{
    type: "b",
    b: string;
}
|{
    type: "c",
    c: string;
};
type B = "a" | "b" | "c";
enum C {
    A = "a",
    B = "b",
    C = "c",
};

const getUnion = (result: A) =>{
    if(result.type == "a"){ // if you keep mouse on type it will show: type: "a" | "b" | "c"
        return result.a;
        //return result.b; it will give an error as inside type a, there is no b
    }
}
*/
/*
export type Event =
|{
    type: "click";
    event: MouseEvent;
    a: string;
}
|{
    type: "focus";
    event: FocusEvent;
    a : string;
}
|{
    type: "keydown";
    event: KeyboardEvent;
};


//type clickEvent = Extract<Event,{type:"click"}>;
 type clickEvent = Extract<Event,{a: string}>;
*/
/*
 export type Event =
|{
    type: "click";
    event: MouseEvent;
    a: string;
}
|{
    type: "focus";
    event: FocusEvent;
    a : string;
}
|{
    type: "keydown";
    event: KeyboardEvent;
};

type NonKeyDownEvents = Exclude<Event,{type: "keydown"}>;
*/
/*
export const fakeDataDefaults = {
    String: "Defaul string",
    Int: 1,
    Float: 1.14,
    Boolean: true,
    ID: "id",
};

// export type StringType = unknown;
// export type IntType = unknown;
// export type FloatType = unknown;
// export type BooleanType = unknown;
// export type IDType = unknown;

type FakeDataDefaults = typeof fakeDataDefaults;
export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type IDType = FakeDataDefaults["ID"];
*/
/*
export type Event =
 |{
    type: "click";
    event: MouseEvent;
 }
|{
    type: "focus";
    event: FocusEvent;
}
|{
    type: "keydown";
    event: KeyboardEvent;
}
// type EventType = unknown;

// const f = (result: Event) =>{
//      return result.type;
// }
// type EventType = ReturnType<typeof f>;
type EventType = Event["type"];

*/
/*
export const programModeEnumMap ={
    GROUP: "group",
    ANNOUNCEMENT: "announcement",
    ONE_ON_ONE: "1on1",
    SELF_DIRECTED: "selfDirected",
    PLANNED_ONE_ON_ONE: "planned1on1",
    PLANNED_SELF_DIRECTED:"plannedSelfDirected",
} as const;

export type GroupProgram = typeof programModeEnumMap["GROUP"];
export type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram = typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram = typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];


*/
/*
export const programModeEnumMap ={
    GROUP: "group",
    ANNOUNCEMENT: "announcement",
    ONE_ON_ONE: "1on1",
    SELF_DIRECTED: "selfDirected",
    PLANNED_ONE_ON_ONE: "planned1on1",
    PLANNED_SELF_DIRECTED:"plannedSelfDirected",
} as const;

type Example = Exclude<keyof typeof programModeEnumMap, "SELF_DIRECTED" | "PLANNED_SELF_DIRECTED">
export type IndividualProgram = typeof programModeEnumMap[Example];
*/
/*

const frontendToBackendEnuMap ={
    singleModule: "SINGLE_MODULE",
    multiModule: "MULTI_MODULE",
    shareModule: "SHARE_MODULE",
} as const;

type Example = typeof frontendToBackendEnuMap;
type BackendModuleEnum = Example[keyof Example];

*/
/*
const fruits = ["apple","banana","orange"] as const;
// type AppleOrBanana = unknown;
// type Fruit = unknown;

type AppleOrBanana = typeof fruits[0 | 1 |];
type Fruit = typeof fruits[number];
*/
/*
type Route = unknown;
export const goToRoute = (route: Route) => { };
// should succeed
goToRoute("/users");
goToRoute("/");
goToRoute("/adimn/users");

// should error
goToRoute("users/1");
goToRoute("https://facebook.com");
*/
/*
type Route = `/${string}`;
export const goToRoute = (route: Route) => { };
// should succeed
goToRoute("/users");
goToRoute("/");
goToRoute("/adimn/users");
// should error
goToRoute("users/1");
goToRoute("https://facebook.com");
*/
/*
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
// type DynamicRoutes = unknown;
type DynamicRoutes = Extract<Routes,`${string}:${string}`>;
*/
/*
type BreadType = "rye" | "brown" | "white";
type Filling = "cheese" | "ham" | "salami";

// type Sandwich = unknown;
type Sandwich = `${BreadType} sanwich with ${Filling}`;

*/
/*
import {S} from "ts-toolbelt";
type path = "users/rony/documents/notes.txt";
// type SplitPath = unknown;

type SplitPath = S.Split<path,"/">;
*/
/*
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`
// type ObjectOfKeys = unknown;
type ObjectOfKeys = Record<TemplateLiteralKey,string>;
*/
/*
type event = `log_in` | "log_out" | "sign_up";
//type ObjectOfKeys = unknown;
 type ObjectOfKeys = Record<Uppercase<event>,string>;
 */
/*
type ReuturnWhatIPassIn = unknown;
type Something = ReturnWhatIPassIn<>;

type ReturnWhatIPassIn<EktaName> = EktaName;
type Something = ReturnWhatIPassIn<"rony">;
*/
// type Maybe = unknown;
// type ans = Maybe<string>;
// the ans should be stirng | null | undefined;
/*
type Maybe<T> = T | null | undefined;
type ans = Maybe<12>;
*/
/*
type AddRoutePrefix<TRoute extends string | number> = `/${TRoute}`;

type test = AddRoutePrefix<"about">;
type test2 = AddRoutePrefix<113>;
*/
// type CreateDataShape = {
//     data: unknown;
//     error: unknown;
// };
/*
type CreateDataShape <T1,T2> = {
    data: T1;
    error: T2;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string, TypeError>;

*/
/*
type CreateDataShape <T1,T2 = undefined> = {
    data: T1;
    error: T2 ;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string>;
*/
/* type MaybeError = Error | undefined;
type CreateDataShape <T1,T2 extends MaybeError = undefined> = {
    data: T1;
    error: T2 ;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string>; */
/*
type GetParametersAndReturnType<T extends (...args: any)=> any > = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
};

type ans = GetParametersAndReturnType<() => string>;
type ans1 = GetParametersAndReturnType<(s:string) => void>;
type ans2 = GetParametersAndReturnType<(n: number, b:boolean) => number>;
*/
/* export type Maybe<T> = T | null | undefined;
type ans = Maybe<String>;
type ans1 = Maybe<number>;
type an2 = Maybe<null|undefined>; */ // this should give error
// that is we can pass anything except null or undefined
/* export type Maybe<T extends {}> = T | null | undefined;
type ans = Maybe<String>;
type ans1 = Maybe<number>;
type an2 = Maybe<null|undefined>;  */
/*
type NonEmptyArray = unknown;
export const makeEnum = (values: NonEmptyArray<string>) =>{};
makeEnum(["a"]);
makeEnum(["a","b"]);
makeEnum([]); // expect error
*/
/* export const makeEnum = (value: NonEmptyArray<string>) => {

};

type NonEmptyArray<T> = [T,...Array<T>];
makeEnum(["a"]);
makeEnum(["a","b"]);
makeEnum([]); // expect error */
/*
type YouSayGoodBueAndISayHello<T> = T extends "hello" | "goodbye" ?
T extends "hello" ? "goodbye" : "hello" : never;
type a = YouSayGoodBueAndISayHello<"hello">;
type b = YouSayGoodBueAndISayHello<"goodbye">;
type c = YouSayGoodBueAndISayHello<"hi">;     */
/* interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

type OnlyIdKeys<T> = unknown; */
/*
interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

type OnlyTypeNumber<T> = {
    [K in keyof T as T[K] extends number ? K : never] : T[K];
}
type result = OnlyTypeNumber<Example>;

*/
/* type Route =
    | {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    }
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

    
type RoutesObject =  {
    [R in Route as R["route"]] : R["search"];
} */
/* interface values {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}
type valuesAsUnionOfTuples = {
    [K in keyof values] : [K,values[K]];
}[keyof values]; */
/* interface FruitMap{
    apple: "red";
    banana: "yellow";
    orange: "orange";
}
type TransformedFruit =  {
    [F in keyof FruitMap]: `${F}:${FruitMap[F]}` ;
}[keyof FruitMap]; */
/* type Fruit =
    | {
        name: "apple";
        color: "red";
    } | {
        name: "banana";
        color: "yellow";
    } | {
        name: "orange";
        color: "orange";
    }

// type TransformedFruit = unknown;
type TransformedFruit = {
    [F in Fruit as F["name"]]:`${F["name"]}:${F["color"]}`;
}[Fruit["name"]];
// type newObject = TransformedFruit[keyof TransformedFruit]; */
/* import { S } from "ts-toolbelt";
type userPath = "/users/:id";
type userOrganisationPath = "/users/:id/organisations/:organisationId";
type ExtractPathParam<T extends string> = {
  [P in S.Split<T, "/">[number] as P extends `:${infer Param}`
    ? Param
    : never]: string;
};
type ans = ExtractPathParam<userOrganisationPath>; */
/* interface Attributes {
    id: string;
    email: string;
    username: string;
}

type mutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type exclusiveAttributes = mutuallyExclusive<Attributes>; */
/* type Route =
    |{
        route: "/";
        search:{
            page: string;
            perPage: string;
        };
    }
    |{route: "/about"; }
    |{route: "/admin";}
    |{route: "/admin/users";};

type RoutesObject = {
    [R in Route as R["route"]]: R extends {search: infer Search} ? Search: never;
} */
// extends as type constraint:
/* type ValueOf<T> = T[keyof T]; // this a so-called utility type

const Article = {
  description: 'foldable mobile phone',
  price: 440.65,
  currency: 'USD',
  manufacturer: 'Datco',
} as const;

type ArticleValues = ValueOf<typeof Article>;
// "foldable mobile phone" | 440.65 | "USD" | "Datco"

const price = 525.10;

type T = ValueOf<typeof price>; // ✅ misuse, but no compilation error

////////////////////////////////////////////////////////////////////

// 💡 Better: with type constraint

type RefinedValueOf<T extends object> = T[keyof T];

// 💥 Type 'number' does not satisfy the constraint 'object'.(2344)
type U = RefinedValueOf<typeof price>; */
/* type DeepPartial<T> = unknown;
type MyType = {
    a: string;
    b: number;
    c: {
        d: string;
        e: {
            f: string;
            g:{
                h:string;
                i:string;
            }[];
        }
    }
}
type Result = DeepPartial<MyType>; */
/* type Params<T1,T2> = {
    a:T1;
    b:T2;
}
const returnBotnOfWhatIPassIn =<T1,T2>(params:Params<T1,T2>)=>{
    return {
       first: params.a,
       second: params.b,
    };
};
const result = returnBotnOfWhatIPassIn({
    a: "a",
    b: 1,
}); */
/* const sum = <T>(array: readonly T[], mapper: (item:T) => number):number =>
    array.reduce((acc,item) => acc + mapper(item),0);
const arr = ['1','2','3'];
const result = sum(arr,(item) => {
    return parseInt(item);
}); */
/* export class Component<T>{
    constructor(props: T){
        this.props = props;
    }
    private props: T;
    getProps = () => this.props;
}
const component = new Component({a:'1', b:2, c:3});
const result = component.getProps(); */
/* export const concatenateFirstNameAndLastName = <T extends
{
    firstName: string,
    lastName : string
}>(user: T) =>{
    return {
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
    };
}
const users = [{
    id: 1,
   firstName:"ar",
   lastName: "rony"
},
];
const newUsers = users.map(concatenateFirstNameAndLastName);
const newUser = newUsers[0]; */
/* export const createSet = <T = string>() => {
    return new Set<T>();
}
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const otherStringSet = createSet(); // string expected */
/* export class Component<TProps>{
    private props: TProps;
    constructor(props: TProps){
        this.props = props;
    }
    getProps = () => this.props;
}
const cloneComponent =<T>(component: Component<T>) => {
    return new Component(component.getProps());
};
const component = new Component({a:1,b:2,c:3});
const clonedComponent = cloneComponent(component);
 */
// const fetchData = async <T>(url: string) => {
//     const data:T = await fetch(url).then((response) => response.json());
//     return data;
// };
// const data = await fetchData<{name:string}>(
//    "https://swapi.dev/api/people/1",
// );
// const ans = data.name;
/* export const getHomePageFeatureFlags = <T>(
    config: {
        rawConfig: {
            featureFlags: {
                homePage: T;
            };
        };
    },
    override: (flags: T) => T
) => {
    return override(config.rawConfig.featureFlags.homePage);
}

const ExampleConfig = {
    apiEndPoint: "https://api.example.com",
    apiVersion: "v1",
    apiKey: "12345",
    rawConfig: {
        featureFlags: {
            homePage: {
                showBanner: true,
                showNewProducts: false,
            },
            loginPage: {
                showCaptcha: true,
                showConfirmPassword: false,
            },
        },
    },
};
const flags = getHomePageFeatureFlags(
    ExampleConfig,(defaultFlags) => defaultFlags
); */
/* const typedObjectKeys = <Tkey extends string>(obj:Record<Tkey,any>) => {
    return Object.keys(obj) as Array<Tkey>;
}
const reulst = typedObjectKeys({
    a: 1,
    b: 2,
}); */
/* const makeSafe =
(func:unknown) =>
(
    ...args: unknown
):
|{
    type: "success";
    result: unknown;
}
|{
    type: "failure";
    error: Error;
} => {
    try {
        const result = func(...args);
        return {
            type: "success",
            result,
        };
    }
    catch(e){
         
        return {
            type: "failure",
            error: e as Error,
        };
    }
};

const func = makeSafe(()=>1);
const result = func();



01  // Original function
02  function greet(name: string): string {
03      return `Hello, ${name}!`;
04  }
05
06  // Wrapper function that adds logging
07  function withLogging(fn: Function) {
08      return function(...args: any[]) {
09          console.log(`Calling function with arguments: ${args}`);
10          const result = fn(...args);
11          console.log(`Function returned: ${result}`);
12          return result;
13      };
14  }
15
16  // Using the wrapper
17  const loggedGreet = withLogging(greet);
18  console.log(loggedGreet("Alice"));
 */
//  const makeSafe = (func:unknown) =>(...args: unknown):
// |{
//     type: "success";
//     result: unknown;
// }
// |{
//     type: "failure";
//     error: Error;
// } => {
//     try {
//         const result = func(...args);
//         return {
//             type: "success",
//             result,
//         };
//     }
//     catch(e){
//         return {
//             type: "failure",
//             error: e as Error,
//         };
//     }
// };
// const func = makeSafe(()=>1);
// const result = func();
/*
const func: (...args: unknown) => {
    type: "success";
    result: unknown;
} | {
    type: "failure";
    error: Error;
}
*/
/*  const makeSafe =
  <TParams extends any[], TReturn>(func: (...args:TParams) => TReturn) => (...args: TParams)
  : | {
        type: "success";
        result: TReturn;
      }
    | {
        type: "failure";
        error: Error;
      } => {
    try {
      const result = (func)(...args);
      return {
        type: "success",
        result,
      };
    } catch (e) {
      return {
        type: "failure",
        error: e as Error,
      };
    }
  };

const func = makeSafe(() => 1);
const result = func(); */
/* export const inferItemLiteral = <T extends string | number>(t:T) => {
    return {
        output: t,
    };
};

const result = inferItemLiteral("hello");
const result2 = inferItemLiteral(123);
const result3 = inferItemLiteral(true); // showed error , meaning only pass string and number */
/* const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
    return statuses;
}
const statuses = makeStatus(["INFO","WARNING","ERROR"]); */
/* const createClassNamesFactory =
<T extends string>(classes: Record<T,string>) =>
(type: T, ...otherclasses: string[]) => {
    const classList = [classes[type], ...otherclasses];
    return classList.join(" ");
};

const getBg = createClassNamesFactory({
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
});

 getBg("primary", "text-white", "p-4"); */
/*  type TypeHelper<T> = T extends "hello" ? "goodbye" : "hello"
 function YouSayGoodBueAndISayHello<T extends "hello" | "goodbye">(greeting: T)
 {
    return (greeting === "goodbye" ? "hello": "goodbye" ) as TypeHelper<T>;
 }
 const result = YouSayGoodBueAndISayHello("hello"); */
/* type Person = {
    name: string;
    age: number;
    birthDate: Date;
}
export function remapPerson<Key extends keyof Person>(
    key: Key,
    value: Person[Key],
)
{
    if(key === "birthDate"){
        return (new Date()) as Person[Key];
    }
    return value;
}

remapPerson<"name" | "age">("name", 20); */
/* export interface Cache<T> {
    get: (key: string) => T | undefined;
    set: (key: string, value: T) => void;
    clone: <U>(transform: (elem: T)=>U) => Cache<U>;
}
const createCache = <T>(initialCache?: Record<string,T>): Cache<T> => {
    const cache: Record<string,T> = initialCache|| {};
    return {
        get: (key) => cache[key],
        set: (key,value) => {
            cache[key] = value;
        },
        clone: (transform) => {
            const newCache: Record<string,any> = {};
            for (const key in cache){
                newCache[key] = transform(cache[key]);
            }
            return createCache(newCache);
        },
    };
};
const cache = createCache<number>();
cache.set("a",1);
cache.set("b",2);
const numberCache = createCache<number>();
numberCache.set("a",1);
numberCache.set("b",2);
const stringCache = numberCache.clone((elem)=>{
    return String(elem);
});
const a = stringCache.get("a"); */
// kilo 1e3
// mega 1e6
// giga 1e9
// const tag = [
//     {
//         value: 3,
//         label: 'kilo'
//     },{
//         value: 6,
//         label: 'mega',
//     },{
//         value: 9,
//         label: 'giga',
//     }
// ]
// const colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'] as const;
// type color = typeof colors[number];
// export function decodedResistorValue(cols: color[]) {
//   let ans = (Number)(`${colors.indexOf(cols[0])}${colors.indexOf(cols[1])}`);
//   let cnt = colors.indexOf(cols[2]);
//   while(cnt--) ans = ans * 10;
//   for (let i = tag.length - 1; i >= 0; i--) {
//     const element = tag[i];
//     if (ans >= Math.pow(10, element.value)) {
//       return `${ans / Math.pow(10, element.value)} ${element.label}ohms`;
//     }
//   }
//   return `${ans} ohms`;
// }
// decodedResistorValue(['red','black','blue']);
const numbes = ['1', '2', '3', 'dd'];
const [one, two, three, four] = numbes;
console.log("ek: ", one, two, three, four);
export {};
