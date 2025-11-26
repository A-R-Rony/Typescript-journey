# 📘 TypeScript Codebook

_Author: **Md. Abdur Rhaman Rony**_


---

## 🧾 Table of Contents

- [📘 TypeScript Codebook](#-typescript-codebook)
  - [🧾 Table of Contents](#-table-of-contents)
    - [problem 1: Extract Return Type from a Function](#problem-1-extract-return-type-from-a-function)
    - [Problem 2: Extract Parameters from a Function](#problem-2-extract-parameters-from-a-function)
    - [Problem 3: Extract Resolved Type from a Promise-Returning Function](#problem-3-extract-resolved-type-from-a-promise-returning-function)
    - [Problem 4: Create a Union Type from Object Keys](#problem-4-create-a-union-type-from-object-keys)
    - [Problem 5: Identify Union, Discriminated Union, and Enum](#problem-5-identify-union-discriminated-union-and-enum)
    - [Problem 6: Extract Specific Variant from Discriminated Union](#problem-6-extract-specific-variant-from-discriminated-union)
    - [Problem 7: Filter Out a Variant from a Discriminated Union](#problem-7-filter-out-a-variant-from-a-discriminated-union)
    - [Problem 8: Extract Value Types from an Object](#problem-8-extract-value-types-from-an-object)
    - [Problem 9: Extract Discriminant Values from a Union](#problem-9-extract-discriminant-values-from-a-union)
    - [Problem 10: Preserve Literal Types from an Object](#problem-10-preserve-literal-types-from-an-object)
    - [Problem 11: Create a Union Type from Object Values](#problem-11-create-a-union-type-from-object-values)
    - [Problem 12: Extract Union of Values from a Literal Object](#problem-12-extract-union-of-values-from-a-literal-object)
    - [Problem 13: Extract Literal Types from a String Array](#problem-13-extract-literal-types-from-a-string-array)
    - [Problem 14: Create a Type for Specific string Patterns](#problem-14-create-a-type-for-specific-string-patterns)
    - [Problem 15: Extract Dynamic Routes from a Union](#problem-15-extract-dynamic-routes-from-a-union)
    - [Problem 16: Create All Permutations of Two Union Types](#problem-16-create-all-permutations-of-two-union-types)
    - [Problem 17: Split a String Type by Delimiter](#problem-17-split-a-string-type-by-delimiter)
    - [Problem 18: Generate Object from Template Literal Keys](#problem-18-generate-object-from-template-literal-keys)
    - [Problem 19: Transform String Literal Union to Uppercase Object Keys](#problem-19-transform-string-literal-union-to-uppercase-object-keys)
    - [Problem 20: Create a Generic That Returns What You Pass In](#problem-20-create-a-generic-that-returns-what-you-pass-in)
    - [Problem 21: Create a Type That return what we pass along with Null and Undefined](#problem-21-create-a-type-that-return-what-we-pass-along-with-null-and-undefined)
    - [Problem 22: Add Route Prefix to a String Literal](#problem-22-add-route-prefix-to-a-string-literal)
    - [Problem 23: Create a Generic Data Shape with Data and Error](#problem-23-create-a-generic-data-shape-with-data-and-error)
    - [Problem 24: Create a Generic Data Shape with Optional Error Type](#problem-24-create-a-generic-data-shape-with-optional-error-type)
    - [Problem 25: Extract Parameters and Return Type from a Function](#problem-25-extract-parameters-and-return-type-from-a-function)
    - [Problem 26: Create a Type That Forbids Direct Null or Undefined](#problem-26-create-a-type-that-forbids-direct-null-or-undefined)
    - [Problem 27: Create a Non-Empty Array Type](#problem-27-create-a-non-empty-array-type)
    - [Problem 28: Map String Literal to Its Opposite Value](#problem-28-map-string-literal-to-its-opposite-value)
    - [Problem 29: Extract Only Keys \[key remapping\]](#problem-29-extract-only-keys-key-remapping)
    - [Problem 30 \[Rony's Special\]: Extract if and only if type is a number](#problem-30-ronys-special-extract-if-and-only-if-type-is-a-number)
    - [Problem 31: Convert Discriminated Union to Object Mapping](#problem-31-convert-discriminated-union-to-object-mapping)
    - [Problem 32: Convert Interface to Union of Key-Value Tuples](#problem-32-convert-interface-to-union-of-key-value-tuples)
    - [Problem 33: Convert Object Type to Union of Template Literals](#problem-33-convert-object-type-to-union-of-template-literals)
    - [Problem 34: Convert Discriminated Union to Template Literal Union](#problem-34-convert-discriminated-union-to-template-literal-union)
    - [Problem 35: Extract Path Parameter Names from a String Literal Path](#problem-35-extract-path-parameter-names-from-a-string-literal-path)
    - [Problem 36: Create a Mutually Exclusive Object Type](#problem-36-create-a-mutually-exclusive-object-type)
    - [Problem 37: Convert Discriminated Union to Object Mapping](#problem-37-convert-discriminated-union-to-object-mapping)
    - [Problem 38: Create a Deep Partial Type](#problem-38-create-a-deep-partial-type)
  - [Generics](#generics)
    - [Problem 39: Identity Function That Returns What You Pass In](#problem-39-identity-function-that-returns-what-you-pass-in)
    - [Problem 40: Constrain Generic Function to Accept Only Strings](#problem-40-constrain-generic-function-to-accept-only-strings)
    - [Problem 41: Return Both Inputs as an Object](#problem-41-return-both-inputs-as-an-object)
    - [Problem 42: Rename Object Properties While Preserving Types](#problem-42-rename-object-properties-while-preserving-types)
    - [Generic function](#generic-function)
    - [Problem 43: Preserve Constructor Argument Type in a Class \[Generic Class\]](#problem-43-preserve-constructor-argument-type-in-a-class-generic-class)
    - [Problem 44: Add a Derived Property to an Object](#problem-44-add-a-derived-property-to-an-object)
    - [Problem 45: Generic Set Creator](#problem-45-generic-set-creator)
    - [Problem 46: Generic Set with Default String Type Constraint](#problem-46-generic-set-with-default-string-type-constraint)
    - [Problem 47: Cloning a Generic Component](#problem-47-cloning-a-generic-component)
    - [Problem 48: Convert Array to Object with Reduce](#problem-48-convert-array-to-object-with-reduce)
    - [Problem 49: Create a Generic Fetch Function](#problem-49-create-a-generic-fetch-function)
    - [Problem 50: Extract and Override Home Page Feature Flags](#problem-50-extract-and-override-home-page-feature-flags)
    - [Problem 51: Create a Typed Object Keys Function](#problem-51-create-a-typed-object-keys-function)
    - [Problem 52: Create a Safe Function Wrapper](#problem-52-create-a-safe-function-wrapper)
    - [Understanding Literal inferenec in Generics](#understanding-literal-inferenec-in-generics)
    - [Problem 53: Restrict Generic Function to Specific Types](#problem-53-restrict-generic-function-to-specific-types)
    - [Problem 54: Create a Generic Status Builder](#problem-54-create-a-generic-status-builder)
    - [Problem 55: Create a Variant Class Builder](#problem-55-create-a-variant-class-builder)
    - [Problem 56: Create a Greeting Toggle Function](#problem-56-create-a-greeting-toggle-function)
    - [Problem 57: Conditional Person Property Mapper](#problem-57-conditional-person-property-mapper)
    - [Problem 58: Create a Curried Function](#problem-58-create-a-curried-function)
    - [Problem 59\[N\]: Implement a Generic Cache with Clone](#problem-59n-implement-a-generic-cache-with-clone)

---

### problem 1: Extract Return Type from a Function

**Statement**

You have a function `myFunc` defined as:
```ts
const myFunc = () => {
    return "hello";
}

type MyFuncReturn = unknown;
```
You want to define a type `MyFuncReturn` that exactly matches the return type of `myFunc`. Without manually writing `"hello"` or `string`, how can you extract the return type from `myFunc` and assign it to `MyFuncReturn`?

**Solution:**

The solution of this problem has two parts, the first one is we have to use `ReturnType` type helper and inside it we have to pass `typeof myFunc()`.
```ts
const myFunc = () => {
    return "hello";
}

type MyFuncReturn = ReturnType<typeof myFunc>
```
It can also be written as:
```ts
const myFunc = () => {
    return 123;
}
type MyFunc = typeof myFunc;
type MyFuncReturn = ReturnType<MyFunc>;
```

### Problem 2: Extract Parameters from a Function
**Statement:**

You have a function `makeQuery` defined as:
```ts
const makeQuery = (
  url: string,
  oprs?: {
    method?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type makeQueryParameters = unknown;
```
You want to define a type `makeQueryParameters` that exactly matches the parameter types of the `makeQuery` function as a tuple. Without manually rewriting the parameter types, how can you extract them and assign them to makeQueryParameters?

**Solution:**
The solution here is to use `Parameters`. Parameter return a tuple.

```ts
const makeQuery = (
   url: string,
   oprs?: {
    method?: {
        [key: string]: string;
    };
    body?: string;
   },
) => {};
type makeQueryParameters = Parameters<typeof makeQuery>
/*
if we want to extract only the 2nd parameter, then we can write it as:

type makeQueryParametersSecondAurgument = makeQueryParameters[1];

this is the output you will show if place the pointer on makeQueryParametersSecondAurgument

type makeQueryParametersSecondAurgument = {
    method?: {
        [key: string]: string;
    };
    body?: string;
} | undefined
 */
```
### Problem 3: Extract Resolved Type from a Promise-Returning Function

**Statement:**

You have a function `getUser` defined as:
```ts
const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "rony",
    email: "ar@rony.com"
  });
}

type ReturnValue = ReturnType<typeof getUser>;

/*
Current Output:

=> Promise<{
  id: string;
  name: string;
  email: string;
}>

Expected Output:

You want a type that represents the resolved value of the Promise returned by getUser. That means:

ResolvedReturnValue:
=> {
  id: string;
  name: string;
  email: string;
}
*/

```

**Solution:**
We can use here `Awaited` type helper. `Awaited` unwrap a promise.
```ts
const getUser = () => {
    return Promise.resolve({
      id: "123",
      name: "rony",
      email: "ar@rony.com"
    });
}
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
```

### Problem 4: Create a Union Type from Object Keys
**Statement:**

You have an object `testingFrameworks` defined as:
```ts
const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = unknown;
```
You want to create a type `TestingFramework` that is a union of all the keys of the `testingFrameworks` object.

**Expected Outpur:**
```ts
TestingFramework => "vitest" | "jest" | "mocha"
```

**Solution:**

Let's first extract the type by using `typeof`
```ts
type TestingFramework = typeof testingFrameworks;
```
Once we know the type of the object now we will take the key by using `keyof`. `keyof` operates on types not on runtime related stuffs. 

```ts
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
type TestingFramework = keyof typeof testingFrameworks;

/* alternately we can write:

type TestingFrameworks = typeof testingFrameworks;
type TestingFramework = keyof TestingFrameworks;
*/
```

### Problem 5: Identify Union, Discriminated Union, and Enum

**Statement:**

You are given the following three TypeScript constructs:
```ts
type A = 
  | {
      type: "a",
      a: string;
    }
  | {
      type: "b",
      b: string;
    }
  | {
      type: "c",
      c: string;
    };

type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}
```
Each of these definitions represents a different kind of type:

* One is a discriminated union

* One is a union type

* One is an enum

Your task is to identify which is which.

**Solution:**

1️⃣ `A` is discriminated union, with `type` as the discriminator. **Discriminated unions** have common properties which are used to differentiate between members of the union. In this case, type is the discriminator.

as an example:
```ts
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
```
 2️⃣ `B` is union. It dosen't carry any property with it.
 3️⃣ `C` is enum.

### Problem 6: Extract Specific Variant from Discriminated Union

**Statement:**

You are given a discriminated union type `Event`:
```ts
export type Event = 
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type clickEvent = unknown;
```
How can you extract the `"click"` variant from the `Event` union?

**Solution:**

We can use `Extract` here like this:
```ts
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


type clickEvent = Extract<Event,{type:"click"}>;
/*
   type clickEvent = {
    type: "click";
    event: MouseEvent;
    a: string;
}
*/
// type clickEvent = Extract<Event,{a: string}>;
/*
type clickEvent = {
    type: "click";
    event: MouseEvent;
    a: string;
} | {
    type: "focus";
    event: FocusEvent;
    a: string;
}
As a is inside two events it's giving like this.
*/

```

### Problem 7: Filter Out a Variant from a Discriminated Union

**Statement:**

You are given a discriminated union type `Event`:
```ts
export type Event = 
  | {
      type: "click";
      event: MouseEvent;
      a: string;
    }
  | {
      type: "focus";
      event: FocusEvent;
      a: string;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type NonKeyDownEvents = unknown;
```
Your goal is to extract all the union variants except the one with type: `keydown`, and assign the resulting type to `NonKeyDownEvents`.

**Expected Output:**
```ts
NonKeyDownEvents => 
| {
    type: "click";
    event: MouseEvent;
    a: string;
  }
| {
    type: "focus";
    event: FocusEvent;
    a: string;
  }
```
**Solution:**

The solution is instead of extract we will use `Exclude`

```ts
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
```

### Problem 8: Extract Value Types from an Object

**Statement:**

You are given an object `fakeDataDefaults`:
```ts
export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

export type StringType = unknown;
export type IntType = unknown;
export type FloatType = unknown;
export type BooleanType = unknown;
export type IDType = unknown;
```
Your task is to extract the type of each property from the `fakeDataDefaults` object and assign it to the corresponding type alias.

**Solution:**

The solution is using **indexed access types** 
```ts
export const fakeDataDefaults = {
    String: "Defaul string",
    Int: 1,
    Float: 1.14,
    Boolean: true,
    ID: "id",
};

type FakeDataDefaults = typeof fakeDataDefaults;
export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type IDType = FakeDataDefaults["ID"];
```

### Problem 9: Extract Discriminant Values from a Union

**Statement:**
You are given a discriminated union type `Event`:
```ts
export type Event = 
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = unknown;
```
Your goal is to extract the union of all possible values of the `type` property from the `Event` union, and assign it to `EventType`.

**Expected Output:**
```ts
EventType => "click" | "focus" | "keydown"
```

**Solution[Noob Version:Rony]:**
```ts
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

const f = (result: Event) =>{
     return result.type;
}
type EventType = ReturnType<typeof f>;
```

**Solution[pro version]:**
```ts
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

type EventType = Event["type"];
```
### Problem 10: Preserve Literal Types from an Object

**Statement:**

You are given a constant object `programModeEnumMap`:

```ts
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
};

export type GroupProgram = typeof programModeEnumMap["GROUP"];
export type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram = typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram = typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];
```
Update the definition of `programModeEnumMap` so that the extracted types preserve the exact literal string (like "group"), instead of defaulting to string.

**Expected Output:**

```ts
GroupProgram              // => "group"
AnnouncementProgram       // => "announcement"
OneOnOneProgram           // => "1on1"
SelfDirectedProgram       // => "selfDirected"
PlannedOneOnOneProgram    // => "planned1on1"
PlannedSelfDirectedProgram // => "plannedSelfDirected"

```
**Solution:**

Change the defenition as `const`:
```ts
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

/*
here we can also user object.freeze. But, object.freeze works on only in the first level doesn't infer for the deeper level
*/
```
### Problem 11: Create a Union Type from Object Values

**Statement:**

You are given a constant object `programModeEnumMap`:

```ts
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type IndividualProgram = unknown;
```
Your goal is to define a type `IndividualProgram` that becomes a union of some the values from `programModeEnumMap`.

**Expected Output:**
```ts
type IndividualProgram = "group" | "announcement" | "1on1" | "planned1on1"
```
**Solution:**
```ts
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
```

### Problem 12: Extract Union of Values from a Literal Object

**Statement:**

You are given a mapping object `frontendToBackendEnuMap` that maps frontend enum keys to backend enum string values:

```ts
const frontendToBackendEnuMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  shareModule: "SHARE_MODULE",
} as const;

type BackendModuleEnum = unknown;
```
Your task is to define a type `BackendModuleEnum` that becomes a union of all values from `frontendToBackendEnuMap`.

**Expected Output:**

```ts
BackendModuleEnum => "SINGLE_MODULE" | "MULTI_MODULE" | "SHARE_MODULE"
```
**Solution:**
```ts
const frontendToBackendEnuMap ={
    singleModule: "SINGLE_MODULE",
    multiModule: "MULTI_MODULE",
    shareModule: "SHARE_MODULE",
} as const;

type Example = typeof frontendToBackendEnuMap;
type BackendModuleEnum = Example[keyof Example];
```
### Problem 13: Extract Literal Types from a String Array

**Statement:**

You are given a string array `fruits`:
```ts
const fruits = ["apple", "banana", "orange"];
type AppleOrBanana = unknown;
type Fruit = unknown;
```
Your tasks are:

* Define a type Fruit that becomes a union of all string values in the `fruits` array.

* Define a type `AppleOrBanana` that includes only "apple" and "banana".

**Solution:**
Make the array `const` for extract
```ts
const fruits = ["apple","banana","orange"] as const;
type AppleOrBanana = typeof fruits[0 | 1 |];
type Fruit = typeof fruits[number];
```

### Problem 14: Create a Type for Specific string Patterns

**Statement:**

You are building a navigation system where routes must follow specific patterns. You define a function `goToRoute`:
```ts
type Route = unknown;

export const goToRoute = (route: Route) => { };

// should succeed
goToRoute("/users");
goToRoute("/");
goToRoute("/adimn/users");

// should error
goToRoute("users/1");
goToRoute("https://facebook.com");
```
How can you define `Route` so that it only allows strings that start with a `slash (/)`?

**Solution:**

We can do it by using `template` literal.

```ts
type Route = `/${string}`;
export const goToRoute = (route: Route) => { };
// should succeed
goToRoute("/users");
goToRoute("/");
goToRoute("/adimn/users");
// should error
goToRoute("users/1");
goToRoute("https://facebook.com");
```

### Problem 15: Extract Dynamic Routes from a Union

**Statement:**
You are given a `Routes` union type that includes both static and dynamic route patterns:
```ts
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
type DynamicRoutes = unknown;
```
Your task is to define `DynamicRoutes` as a union of only the routes that include dynamic segments (i.e., paths that contain `:`).

**Solution:**
```ts
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
// type DynamicRoutes = unknown;
type DynamicRoutes = Extract<Routes,`${string}:${string}`>;
// every space inside template literals matter!
```

### Problem 16: Create All Permutations of Two Union Types
**Statement:**

You are given two union types:
```ts
type BreadType = "rye" | "brown" | "white";
type Filling = "cheese" | "ham" | "salami";

type Sandwich = unknown;
```
Your task is to define the Sandwich type as a union of all possible string combinations in the format:
`<BreadType> sandwich with <Filling>`.

**Expected Output:**
```ts
Sandwich => 
| "rye sandwich with cheese"
| "rye sandwich with ham"
| "rye sandwich with salami"
| "brown sandwich with cheese"
| "brown sandwich with ham"
| "brown sandwich with salami"
| "white sandwich with cheese"
| "white sandwich with ham"
| "white sandwich with salami"
```
**Solution:**
```ts
type BreadType = "rye" | "brown" | "white";
type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sanwich with ${Filling}`;
```
### Problem 17: Split a String Type by Delimiter
**Statement:**
You are given a string literal type `path`:

```ts
import { S } from "ts-toolbelt"; //npm install ts-toolbelt

type path = "users/rony/documents/notes.txt";
type SplitPath = unknown;
```
**Expected Output:**
```ts
SplitPath => ["users", "rony", "documents", "notes.txt"]
```
**Solution:**
```ts
import {S} from "ts-toolbelt";
type path = "users/rony/documents/notes.txt";

type SplitPath = S.Split<path,"/">;
```
### Problem 18: Generate Object from Template Literal Keys
**Statement:**
You are given a union type `TemplateLiteralKey` which uses template literals to combine string literals from two unions:
```ts
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`
type ObjectOfKeys = unknown;
```
Your task is to define a type `ObjectOfKeys` such that it constructs an object type where each key is one of the values from `TemplateLiteralKey`, and each value is of type string.

**Expected Output:**
```ts
type ObjectOfKeys = {
  userId: string;
  userName: string;
  postId: string;
  postName: string;
  commentId: string;
  commentName: string;
};
```
**Solution:**
```ts
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`
type ObjectOfKeys = Record<TemplateLiteralKey,string>;
```
### Problem 19: Transform String Literal Union to Uppercase Object Keys
**Statement:**
Given a union of string literals `event`, create a mapped type `ObjectOfKeys` where each key is the uppercase version of the original string literal and the value is `string`.
```ts
type event = `log_in` | "log_out" | "sign_up";
type ObjectOfKeys = unknown;
```
**Expected Output:**
```ts
type ObjectOfKeys = {
  LOG_IN: string;
  LOG_OUT: string;
  SIGN_UP: string;
};
```
**Solution:**

We can use `Uppercase` type helper for this.
```ts
type event = `log_in` | "log_out" | "sign_up";
type ObjectOfKeys = Record<Uppercase<event>,string>;
```

### Problem 20: Create a Generic That Returns What You Pass In

**Statement:**
Create a generic utility type `ReturnWhatIPassIn<T>` that simply returns the type that is passed into it. For example, if you pass in `string`, it should return `string`; if you pass in `{ a: number }`, it should return `{ a: number }`.
```ts
type ReturnWhatIPassIn = unknown;
type Something = ReturnWhatIPassIn<"rony">;
```
**Expected Output:**
```ts
type Something = "rony";
```
**Solution:**
Here we can use generic type helper for this purpose.
```ts
type ReturnWhatIPassIn<EktaName> = EktaName;
type Something = ReturnWhatIPassIn<"rony">
```
`ReturnWhatIPassIn` is acting as a function where `<EktaName>` is the argument of that function and `= EktaName` is the return type of the function.

### Problem 21: Create a Type That return what we pass along with Null and Undefined
**Statement:**
```ts
type Maybe = unknown;
type ans = Maybe<string>;
```
**Solution:**
```ts
type Maybe<T> = T | null | undefined;
type ans = Maybe<"rony">;
```
### Problem 22: Add Route Prefix to a String Literal
**Statement:**
Create a generic type `AddRoutePrefix<TRoute>` that takes a string literal type and returns the same string prefixed with a `/`.
```ts
type AddRoutePrefix<TRoute> = `/${TRoute}`;
type test = AddRoutePrefix<"about">;
```
solve the error in the string literal!

**Solution:**
If only wants to pass a `string` then we have to extend the `string`.
```ts
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;
type test = AddRoutePrefix<"about">;

// similarly, we can also pass other types also like:
type AddRoutePrefix<TRoute extends string | number> = `/${TRoute}`;

type test = AddRoutePrefix<"about">;
type test2 = AddRoutePrefix<113>;
```

### Problem 23: Create a Generic Data Shape with Data and Error
**Statement:**
Create a generic type `CreateDataShape<TData, TError>` that takes two type parameters and returns an object type with data and error properties corresponding to those types.
```ts
type CreateDataShape = {
  data: unknown;
  error: unknown;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string, TypeError>;
```

**Expected Output:**

```ts
type ans = {
  data: number;
  error: Error;
};

type ans1 = {
  data: boolean;
  error: SyntaxError;
};

type ans3 = {
  data: string;
  error: TypeError;
};
```
**Solution:**
```ts
type CreateDataShape <T1,T2> = {
    data: T1;
    error: T2;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string, TypeError>;
```

### Problem 24: Create a Generic Data Shape with Optional Error Type
**Statement:**
Create a generic type `CreateDataShape<TData, TError>` that takes two type parameters. The second parameter `TError` should be optional and default to `undefined`. The resulting type should have data of type `TData` and error of type `TError`.
```ts
type CreateDataShape<T1, T2> = {
  data: T1;
  error: T2;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string>;
```

**Expected Output:**
```ts
type ans = {
  data: number;
  error: Error;
};

type ans1 = {
  data: boolean;
  error: SyntaxError;
};

type ans3 = {
  data: string;
  error: undefined;
};
```
**Solution 1:**
```ts
type CreateDataShape <T1,T2 = undefined> = {
    data: T1;
    error: T2 ;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string>;
```
**Solution 2:**
```ts
type MaybeError = Error | undefined;
type CreateDataShape <T1,T2 extends MaybeError = undefined> = {
    data: T1;
    error: T2 ;
};

type ans = CreateDataShape<number, Error>;
type ans1 = CreateDataShape<boolean, SyntaxError>;
type ans3 = CreateDataShape<string>;
```
### Problem 25: Extract Parameters and Return Type from a Function
**Statement:**
Create a generic type `GetParametersAndReturnType<T>` that takes a function type and returns an object with two properties:

* params: the parameters of the function

* returnValue: the return type of the function

```ts
type GetParametersAndReturnType<T> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

type ans = GetParametersAndReturnType<() => string>;
type ans1 = GetParametersAndReturnType<(s: string) => void>;
type ans2 = GetParametersAndReturnType<(n: number, b: boolean) => number>;
```
**Solution:**

```ts
type GetParametersAndReturnType<T extends (...args: any)=> any > = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
};

type ans = GetParametersAndReturnType<() => string>;
type ans1 = GetParametersAndReturnType<(s:string) => void>;
type ans2 = GetParametersAndReturnType<(n: number, b:boolean) => number>;
```
Here, `...args:any` is Rest Parameters. It allows a function to accept an indefinite number of arguments of a type `any`.

### Problem 26: Create a Type That Forbids Direct Null or Undefined
**Statement:**
Create a generic type that allows everything but forbids passing `null` or `undefined` directly.

```ts
export type Maybe<T> = T | null | undefined;
type ans = Maybe<string>;
type ans1 = Maybe<number>;
type an2 = Maybe<null | undefined>; // should give error
```
**Solution:**
The solution here is to use an empty object `{}`. An empty object type allows everything except `null and undefined`. The reason behind this is that TypeScript checks structural compatibility rather than exclusive properties. In JavaScript, almost everything is considered an `object` except `null` and `undefined`. These two have no properties, no methods—nothing. That’s why we can assign anything to `{}` except `null` and `undefined`.

```ts
export type Maybe<T extends {}> = T | null | undefined;
type ans = Maybe<String>;
type ans1 = Maybe<number>;
type an2 = Maybe<null|undefined>; 
```
### Problem 27: Create a Non-Empty Array Type
**Statement:**
Create a generic type `NonEmptyArray<T>` that represents an array containing at least one element of type `T`. Use it in a function makeEnum so that passing an empty array causes a type error.
```ts
type NonEmptyArray = unknown;
export const makeEnum = (values: NonEmptyArray<string>) => {};
makeEnum(["a"]);
makeEnum(["a", "b"]);
makeEnum([]); // expect error
```
**Solution:**
```ts
export const makeEnum = (value: NonEmptyArray<string>) => {};

type NonEmptyArray<T> = [T,...Array<T>];
makeEnum(["a"]);
makeEnum(["a","b"]);
makeEnum([]); // expect error
```

### Problem 28: Map String Literal to Its Opposite Value
**Statement:**
Create a generic type `YouSayGoodByeAndISayHello<T>` such that:

* If T is "hello", it returns "goodbye".

* If T is "goodbye", it returns "hello".

* For any other string literal, it should return never.

```ts
type YouSayGoodBueAndISayHello = unknown;

type a = YouSayGoodBueAndISayHello<"hello">;    // should be "goodbye"
type b = YouSayGoodBueAndISayHello<"goodbye">; // should be "hello"
type c = YouSayGoodBueAndISayHello<"hi">;      // should be never
```

**Solution:**
```ts
type YouSayGoodBueAndISayHello<T> = T extends "hello" | "goodbye" ? 
T extends "hello" ? "goodbye" : "hello" : never;
type a = YouSayGoodBueAndISayHello<"hello">;     
type b = YouSayGoodBueAndISayHello<"goodbye">;  
type c = YouSayGoodBueAndISayHello<"hi">;       
```

### Problem 29: Extract Only Keys [key remapping]
**Statement:**
Create a generic type `OnlyIdKeys<T>` that extracts only the keys.
```ts
interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

type OnlyIdKeys<T> = unknown;
```
**Solution:**
```ts
interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

type SearchForId = `${string}${"id" | "Id" | "ID"}${string}`
type OnlyIdKeys<T> = {
    [K in keyof T as K extends SearchForId? K : never] : T[K];
}
type result = OnlyIdKeys<Example>;
```
### Problem 30 [Rony's Special]: Extract if and only if type is a number

```ts
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
```
### Problem 31: Convert Discriminated Union to Object Mapping
**Statement:**
Given a discriminated union type `Route`, create a mapped type `RoutesObject` where each key is the value of the discriminant property `route` and the value is the corresponding search type.
```ts
type Route =
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

type RoutesObject = unknown;
```
**Expected Output:**
```ts
type RoutesObject = {
  "/": { page: string; perPage: string };
  "/about": {};
  "/admin": {};
  "/admin/users": {};
};
```
**Solution 1:**
```ts
type Route =
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
    [R in Route["route"]]: Extract<Route,{route: R}> ["search"];
}
```
**Solution 2[Better approach]:**
```ts
type Route =
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
    [R in Route as R["route"]]: R["search"];
}
```
In mapped types, `as` means:
*“Rename or transform the key before putting it in the output type.”*
### Problem 32: Convert Interface to Union of Key-Value Tuples
**Statement:**
Given an interface values, create a mapped type `valuesAsUnionOfTuples` where each property becomes a tuple `[key, valueType]`. The resulting type should be a union of these tuples.
```ts
interface values {
    email: string;
    firstName: string;
    lastName: string;
}

type valuesAsUnionOfTuples = {
    [K in keyof values]: [K, values[K]];
};
```
**Expected Output:**
```ts
type valuesAsUnionOfTuples =
  | ["email", string]
  | ["firstName", string]
  | ["lastName", string];
```
**Solution:**
```ts
interface values {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}
type valuesAsUnionOfTuples = {
    [K in keyof values] : [K,values[K]];
}[keyof values];
```
This is an awesome solution, isn't it?

### Problem 33: Convert Object Type to Union of Template Literals
**Statement:**
Given an interface `FruitMap`, create a type `TransformedFruit` that produces a union of template literals in the format `"key: value"`.
```ts
interface FruitMap {
    apple: "red";
    banana: "yellow";
    orange: "orange";
}
type TransformedFruit = unknown;
```
**Expected Output:**
```ts
type TransformedFruit =
  | "apple: red"
  | "banana: yellow"
  | "orange: orange";
```
**Solution:**
```ts
interface FruitMap{
    apple: "red";
    banana: "yellow";
    orange: "orange";
}
type TransformedFruit =  {
    [F in keyof FruitMap]: `${F}:${FruitMap[F]}` ;
}[keyof FruitMap];
```
### Problem 34: Convert Discriminated Union to Template Literal Union
**Statement:**
Given a discriminated union `Fruit` with `name` and `color` properties, create a type `TransformedFruit` that produces a union of template literals in the format `"name:color"`.
```ts
type Fruit =
    | {
        name: "apple";
        color: "red";
    }
    | {
        name: "banana";
        color: "yellow";
    }
    | {
        name: "orange";
        color: "orange";
    };

type TransformedFruit = unknown;
```
**Expected Output:**
```ts
type TransformedFruit =
  | "apple:red"
  | "banana:yellow"
  | "orange:orange";
```
**Solution:**
```ts
type Fruit =
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
type TransformedFruit = {
    [F in Fruit as F["name"]]:`${F["name"]}:${F["color"]}`;
}[Fruit["name"]];
```
### Problem 35: Extract Path Parameter Names from a String Literal Path
**Statement:**
Given a path string literal, create a generic type `extractPathParams<T>` that extracts the parameter names (those prefixed with :) as a union of string literals.

```ts
type userPath = "/users/:id";
type userOrganisationPath = "/users/:id/organisations/:organisationId";
type extractPathParams = unknown;
```
**Expected Output:**
```ts
type extractPathParams<userPath> = "id";
type extractPathParams<userOrganisationPath> = "id" | "organisationId";
```
**Solution:**
```ts
import { S } from "ts-toolbelt"; 
type userPath = "/users/:id";
type userOrganisationPath = "/users/:id/organisations/:organisationId";
type ExtractPathParam<T extends string> = {
  [P in S.Split<T, "/">[number] as P extends `:${infer Param}`
    ? Param
    : never]: string;
};
type ans = ExtractPathParam<userOrganisationPath>;
```
### Problem 36: Create a Mutually Exclusive Object Type
**Statement:**
Given an interface Attributes, create a generic type `mutuallyExclusive<T>` that produces a union type where each variant contains only one property from `T`.
```ts
interface Attributes {
    id: string;
    email: string;
    username: string;
}
type mutuallyExclusive<T> = unknown;
type exclusiveAttributes = mutuallyExclusive<Attributes>;
```
**Expected Output:**
```ts
type exclusiveAttributes =
  | { id: string }
  | { email: string }
  | { username: string };
```
**Solution:**
```ts
interface Attributes{
    id: string;
    email: string;
    username: string;
}
type mutuallyExclusive<T> = {
    [K in keyof T] : Record<K,T[K]>;
}[keyof T];
type exclusiveAttributes = mutuallyExclusive<Attributes>;
```
### Problem 37: Convert Discriminated Union to Object Mapping
**Statement:**
Given a discriminated union `Route` where only some variants contain a search property, create a type `RoutesObject` where each key is the route value and the value is the corresponding search type if it exists, or `never` if it does not.
```ts
type Route = 
    | {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    }
    | { route: "/about" }
    | { route: "/admin" }
    | { route: "/admin/users" };

type RoutesObject = unknown;
```
**Expected Output:**
```ts
type RoutesObject = {
  "/": { page: string; perPage: string };
  "/about": never;
  "/admin": never;
  "/admin/users": never;
};
```
**Solution:**
```ts
type Route = 
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
}
```
In typescript *extends* used in three ways.
* Interface
* Generic Contraints: Generic constraints allow you to restrict the types that can be used as arguments for generic type parameters. They ensure that your generic types or functions only work with types that meet certain requirements.
* Conditional Types
### Problem 38: Create a Deep Partial Type

**Statement:**
Create a generic type `DeepPartial<T>` that makes all properties of `T` optional recursively, including nested `objects` and `arrays` of `objects`.
```ts
type DeepPartial<T> = unknown;
type MyType = {
    a: string;
    b: number;
    c: {
        d: string;
        e: {
            f: string;
            g: {
                h: string;
                i: string;
            }[];
        };
    };
};
type Result = DeepPartial<MyType>;
```
**Expected Solution:**
```ts
type Result = {
    a?: string;
    b?: number;
    c?: {
        d?: string;
        e?: {
            f?: string;
            g?: {
                h?: string;
                i?: string;
            }[];
        };
    };
};
```
**Solution:**
```ts
type DeepPartial<T> = T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : { [K in keyof T]?: DeepPartial<T[K]> };

type MyType = {
    a: string;
    b: number;
    c: {
        d: string;
        e: {
            f: string;
            g: {
                h: string;
                i: string;
            }[];
        }
    }
}
type Result = DeepPartial<MyType>;
```
* TypeScript has a built-in utility `Partial<T>`.  
  - It makes all properties of `T` optional, but only at the first level.
* `DeepPartial<T>` is a utility type in TypeScript that creates a new type based on `T`, where every property is made optional (using the `?` syntax), and this optionality is applied recursively (or "deeply") throughout the entire structure of `T`.
* T extends `Array<infer U>:` This checks if `T` is an array type `(e.g., string[], number[], or a more complex array like { foo: string }[])`.
  - `Array<infer U>` uses TypeScript's type inference (`infer`) to extract the element type `U` from the array. For example: If `T` is `string[]`, then `U` is `string`.
If `T` is `{ x: number }[]`, then `U` is `{ x: number }`.
   - If T is not an array, it falls back to `{ [K in keyof T]?: DeepPartial<T[K]> }`.
   - This uses mapped types in TypeScript:
      - `[K in keyof T]:` Iterates over every key `K` in the original type `T` (using `keyof T` to get the union of keys).
      - `?:` Makes each property optional.
      - `DeepPartial<T[K]>:` Recursively applies DeepPartial to the type of each property's value `T[K]`.
      - This branch assumes `T` is an object-like type `e.g., { ... }`. If `T` is a primitive (like string, number, or boolean), keyof `T` will be `never` (no keys), so the mapped type resolves to `{}` (an empty object).
  
**Recursion and Base Cases:**
The type is recursive: It calls itself on nested types `DeepPartial<T[K]>` or `DeepPartial<U>`.

* Primitives `(e.g., string, number):` As mentioned, they resolve to themselves (no properties to make optional).
Functions or other non-structural types: Similar to primitives, they aren't affected deeply.
Empty objects or arrays: They propagate emptiness.

**Let's see how `DeepPartial<MyType>` expands step by step for the provided `MyType`:**

* Start with `DeepPartial<MyType>`:

     - `MyType` is an object (not an array), so use the object mapping: `{ [K in keyof MyType]?: DeepPartial<MyType[K]> }`.
     - Keys: `a, b, c`.
     - **Result (top level):**

         - `a?: DeepPartial<string>` → `a?: string` (primitive base case).
         - `b?: DeepPartial<number>` → `b?: number` (primitive).
         - `c?: DeepPartial<{ d: string; e: { f: string; g: { h: string; i: string; }[]; } }>`.
* Recurse into `c`'s type (an object):
     - Not an array, so map keys: `d, e`.
     - `d?: DeepPartial<string>` → `d?: string`.
     - `e?: DeepPartial<{ f: string; g: { h: string; i: string; }[]; }>`.
* Recurse into `e`'s type (an object):
     - Keys: `f, g`.
     - `f?: DeepPartial<string>` → `f?: string`.
     - `g?: DeepPartial<{ h: string; i: string; }[]>`.
* Recurse into `g`'s type (an array):
    - It is an array: `Array<infer U>` where `U = { h: string; i: string; }`.
    - So: `Array<DeepPartial<{ h: string; i: string; }>>`.
    - Now recurse into the array element (an object):
         - Map keys: `h, i`.
         - `h?: DeepPartial<string>` → `h?: string`.
         - `i?: DeepPartial<string>` → `i?: string`.
    - Thus, `g?: Array<{ h?: string; i?: string; }>`.

## Generics
### Problem 39: Identity Function That Returns What You Pass In

**Statement:** 
Create a function `ReturnWhatIPassIn` that takes a parameter and returns the same type.
```ts
const ReturnWhatIPassIn = (t: unknown) => {
    return t;
}
const one = ReturnWhatIPassIn(1);
```
**Solution:**
```ts
const ReturnWhatIPassIn = <T>(t: T) => {
    return t;
}
const one = ReturnWhatIPassIn(1);
```
### Problem 40: Constrain Generic Function to Accept Only Strings

**Statement:**
Create a generic function that only accepts values of type `string`. Passing any non-string type should result in a type error.
```ts
export const ReturnWhatIPassIn = <T>(t:T) => t;
const a = ReturnWhatIPassIn("a");
const b = ReturnWhatIPassIn(1);
```
**Solution:**
```ts
export const ReturnWhatIPassIn = <T extends string>(t:T) => t;
const a = ReturnWhatIPassIn("a");
const b = ReturnWhatIPassIn(1); //Error due to non-string value;
```
### Problem 41: Return Both Inputs as an Object

**Statement:**
Create a function `returnBothOfWhatIPassIn` that accepts two values of any type and returns them in an object with properties `a` and `b`, while preserving their original types.

```ts
const returnBotnOfWhatIPassIn = (a: unknown, b: unknown) => {
    return {
        a,
        b
    };
};

const res1 = returnBotnOfWhatIPassIn(42, "rony");
const re2 = returnBotnOfWhatIPassIn(true, { lang: "typescript" });
```
**Solution**
```ts
const returnBotnOfWhatIPassIn = <T,K> (a: T, b: K) => {
    return {
        a,
        b
    };
};
const res1 = returnBotnOfWhatIPassIn(42, "rony");
const re2 = returnBotnOfWhatIPassIn(true, { lang: "typescript" });
```

### Problem 42: Rename Object Properties While Preserving Types
**Statement:**
Create a function `returnBothOfWhatIPassIn` that accepts an object with properties `a` and `b` of any type and returns a new object with properties `first` and `second`, preserving the types of `a` and `b`.
```ts
const returnBotnOfWhatIPassIn = (params: { a: unknown; b: unknown }) => {
    return {
        first: params.a,
        second: params.b,
    };
};
const result = returnBotnOfWhatIPassIn({
    a: "a",
    b: 1,
});
```
**Solution:**
```ts
const returnBotnOfWhatIPassIn =<T1,T2>(params:{a:T1; b:T2})=>{
    return {
       first: params.a,
       second: params.b,
    };
};
const result = returnBotnOfWhatIPassIn({
    a: "a",
    b: 1,
});
```
### Generic function

Let, we have a function :
```ts
const sum = <T>(array: readonly T[], mapper: (item: T) => number):number => 
array.reduce((acc,item) => acc+mapper(item),0); 
```
Here, the sum function basically reduce an array by turning it into a number, that is it sums up all of the members of this array.

let say we have an array and call the sum function using it:
```ts
const arr = ['1','2','5'];
const result = sum(arr, (item)=> {
    return parseInt(item);
})
console.log(result);
``` 
The console will display : 8

But if we change one of it's entry of the array into another type: let's say an `object`, that is:
```ts
const arr = ['1','2',{
    wow: 1000000007; // array type is now -> string | wow:number
}];

const result = sum(arr, (item)=> {
    if(typeof item === 'object' && 'wow' in item){
        return item.wow;
    }
    return parseInt(item);
});
console.log(result); // console display : 1000000010
```
### Problem 43: Preserve Constructor Argument Type in a Class [Generic Class]

**Statement:**
Create a class `Component` that takes a `props` object in its constructor and stores it privately. The class should provide a method `getProps` that returns the exact type of the object passed to the constructor.
```ts
export class Component {
    private props: unknown;
    constructor(props: unknown) {
        this.props = props;
    }
    getProps = () => this.props;
}
const component = new Component({ a: 1, b: 2, c: 3 });
const result = component.getProps();

// Expected Output const result : { a: number; b: number; c: number }
```
**Solution:**
```ts
export class Component<T>{
    constructor(props: T){
        this.props = props;
    }
    private props: T;
    getProps = () => this.props;
}
const component = new Component({a:'1', b:2, c:3});
const result = component.getProps();
```
### Problem 44: Add a Derived Property to an Object

**Statement:**
Create a function `concatenateFirstNameAndLastName` that takes a user object containing `firstName` and `lastName`. The function should return a new object with all the original properties and an additional property `fullName`, which is the concatenation of `firstName` and `lastName`. Ensure the return type correctly infers all existing properties along with the new one.
```ts
export const concatenateFirstNameAndLastName = (user: unknown) => {
    return {
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
    };
};

const users = [
  { firstName: "ar", lastName: "rony" },
];
const newUsers = users.map(concatenateFirstNameAndLastName);
```
**Expected Output:**

```ts
newUsers: { firstName: string; lastName: string; fullName: string }[]
```
```ts
export const concatenateFirstNameAndLastName = <T extends 
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
const newUser = newUsers[0];
```
`...user` is the **spread operator**: It copies all properties from the input `user` object into the new object.
### Problem 45: Generic Set Creator

**Statement:**
Create a generic function createSet that returns a `Set`.
The function should work with different types by inferring the generic type when called.
If no type is specified, it should default to `unknown`.
```ts
export const createSet = <T = unknown>() => {
    return new Set<T>();
};
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();
```
**Expected Output:**
```ts
stringSet: Set<string>
numberSet: Set<number>
unknownSet: Set<unknown>
```
**Solution:**
```ts
export const createSet = <T>() => {
    return new Set<T>();
}
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();
```
### Problem 46: Generic Set with Default String Type Constraint

**Statement:**
Create a generic function `createSet` that returns a `Set`.
The function should work with different types when explicitly provided.
If no type is specified, it should default to `string` instead of `unknown`.
```ts
export const createSet = <T>() => {
    return new Set<T>();
}
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const otherStringSet = createSet(); // defaults to string
```
**Solution:**
```ts
export const createSet = <T = string>() => {
    return new Set<T>();
}
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const otherStringSet = createSet();
```
Here `<T=string>` is default generic.
### Problem 47: Cloning a Generic Component

**Statement:**
Create a generic class Component that accepts `TProps` as its type parameter.
It should store `props` and provide a `getProps` method to access them.
Implement a function `cloneComponent` that takes a Component and returns a new cloned instance of it.
```ts
export class Component<TProps>{
    private props: TProps;
    constructor(props: TProps){
        this.props = props;
    }
    getProps = () => this.props;
}
const cloneComponent = (component: unknown) => {
    return new Component(component.getProps());
};
const component = new Component({a:1,b:2,c:3});
const clonedComponent = cloneComponent(component);
```
**Solution:**

```ts
export class Component<TProps>{
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
```
### Problem 48: Convert Array to Object with Reduce

**Statement:**
Given an array of objects with a name property, use reduce to convert the array into an object.
Each key of the object should be the name, and its value should be the corresponding object.
```ts
const array = [
    {
        name: "ar",
    },{
        name: "rony",
    }
];

const obj = array.reduce((accum,item) => {
    accum[item.name] = item;
    return accum;
},{})
```
**Expected Output:**
```ts
ar:{
    name: "ar",
},rony:{
    name: "rony",
}
```
**Solution:**
```ts
const array = [
    {
        name: "ar",
    },{
        name: "rony",
    }
];

const obj = array.reduce<Record<string,{name:string}>>((accum,item) => {
    accum[item.name] = item;
    return accum;
},{});
```
The `reduce` method is a powerful array method in JavaScript/TypeScript that processes an array and reduces it to a single value.
**Syntax:**
```ts
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```
* callback: A function executed for each element in the array.
     - accumulator: The accumulated result (starts as initialValue and is updated each iteration).
     - currentValue: The current element being processed.
     - index (optional): The index of the current element.
     - array (optional): The array being traversed.
* initialValue: The initial value of the accumulator (e.g., an empty object `{}` in this case).
* 
**Callback Function:**
A callback function is a function you provide to another function to be called (or “called back”) at a specific time or after a specific task.
* Purpose: It allows you to customize the behavior of a function, especially for asynchronous tasks (e.g., waiting for data from an API) or iterative processes (e.g., looping through an array with reduce).
### Problem 49: Create a Generic Fetch Function

**Statement:**
Write a generic asynchronous function fetchData that takes a URL as input and returns the fetched JSON data.
Use TypeScript generics so that the function can infer and enforce the type of the returned data.
```ts
const fetchData = async <T>(url: string) => {
    const data = await fetch(url).then((response) => response.json());
    return data;
};
const data = await fetchData<{name:string}>(
   "https://swapi.dev/api/people/1",
);
```
**Prerequisites:** 

***Why Do We Need Asynchronous programming?***
 
>JavaScript and TypeScript are single-threaded, which means they can only do one task at a time.
>* **Synchronous Code (The Default):** Code runs line by line, one after another. If a task takes a long time (like downloading a file or getting data from a database), the entire program freezes and waits for it to finish. This leads to a frozen, unresponsive user interface (UI), which is a terrible user experience. 
> * **Asynchronous Code (The Solution):** This allows you to start a long-running task and then continue with other work without waiting. When the long task is finished, your program is notified and can handle the result. This keeps your application responsive.

***1. Callbacks: The Original Method***
>A callback is a function that you pass as an argument to another function. The idea is to "call me back when you're done."
>* **How it works:** You start an asynchronous task (like fetchData) and give it a function to execute once the task is complete. This function will receive the result (or an error).
>* **The Good:** It's the foundational concept for async operations in JavaScript.
>* **The Bad:** "Callback Hell" or the "Pyramid of Doom." When you need to perform multiple async tasks one after another, you have to nest callbacks inside other callbacks. This creates a deeply nested, pyramid-shaped block of code that is extremely difficult to read, debug, and maintain.

***2. Promises: A Better Way***
>Promises were introduced to solve the problems of "Callback Hell." A Promise is an object that represents a future value—the eventual result of an asynchronous operation.
>
>- **How it works:** A Promise has three states:
>   - Pending: The initial state; the async task hasn't finished yet.
>   - Fulfilled (or Resolved): The task completed successfully, and the Promise now has a value.
>   - Rejected: The task failed, and the Promise holds an error/reason for the failure.
> 
> **The Good:** Chaining: You handle the result of a Promise using the `.then()` method for success and the `.catch()` method for failure. The biggest advantage is that you can chain `.then()` calls one after another, which makes the code flat and much more readable than nested callbacks. A single `.catch()` at the end of the chain can handle any error that occurs in any of the preceding steps.

***3. Async/Await: The Modern Standard***
>Async/Await is the newest and most popular way to write asynchronous code. It is "syntactic sugar" built on top of Promises. This means it doesn't replace Promises; it just provides a much cleaner and more intuitive way to use them.
>
> **How it works:** It lets you write asynchronous code that looks and feels like synchronous code.
> 
>**async keyword:** You place this before a function declaration `(async function myFunction())`. This tells JavaScript the function will perform asynchronous operations and will always return a `Promise`.
>
>**await keyword:** You use this inside an `async` function. It pauses the function execution until the Promise you are "awaiting" is either fulfilled or rejected. It then unwraps the value from the Promise, so you can assign it directly to a variable.
>
>**The Good:** The code is clean, linear, and very easy to follow. It looks just like standard synchronous code.You can use standard `try...catch` blocks, which is a familiar pattern for handling errors in synchronous code.

[Details Blog about asynchronous programming](https://www.freecodecamp.org/news/learn-async-programming-in-typescript-promises-asyncawait-and-callbacks/)

**Solution:**
```ts
const fetchData = async <T>(url: string) => {
    const data:T = await fetch(url).then((response) => response.json());
    // fetch return Promise<Response> which is in infered data as any.
    return data;
};
const data = await fetchData<{name:string}>(
   "https://swapi.dev/api/people/1",
);
const ans = data.name; 
```
### Problem 50: Extract and Override Home Page Feature Flags

**Statement:**
Write a function `getHomePageFeatureFlags` that extracts the `homePage` feature flags from a config object and allows overriding them using a callback function.
```ts
export const getHomePageFeatureFlags = (
    config: unknown,
    override: (flags: unknown) => unknown
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
);
```
**Solution:**
```ts
export const getHomePageFeatureFlags = <T>(
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
);
```
### Problem 51: Create a Typed Object Keys Function

**Statement:**
Write a function `typedObjectKeys` that takes an object as input and returns its keys.
```ts
const typedObjectKeys = (obj:unknown) => {
    return Object.keys(obj);
}
const reulst = typedObjectKeys({
    a: 1,
    b: 2,
});
```
**Expected Output:**
```ts
const reulst: ("a" | "b")[]
```
**Solution:**
```ts

const typedObjectKeys = <Tkey extends string>(obj:Record<Tkey,any>) => {
    return Object.keys(obj) as Array<Tkey>;
}
const reulst = typedObjectKeys({
    a: 1,
    b: 2,
});
```
Here, in this solution `<Tkey extends string>` is true. Because, `Tkey extend string` means `Tkey` must be assignable to `string`. Here is the catch, **any object property is basically a string type**. That's why we can write it in this way.
Another fact in here is, `Object.keys()` return a `string[]`, thats why we have type cast this `string[]` into an `Array` for our expected result.

### Problem 52: Create a Safe Function Wrapper

**Statement:**

Write a generic function `makeSafe` that takes another function as input and returns a wrapped version of it.
The wrapped function, when called, should always return an object with either a success result or a failure error instead of throwing exceptions.
```ts
const makeSafe =
  (func: unknown) =>
  (
    ...args: unknown
  ):
    | {
        type: "success";
        result: unknown;
      }
    | {
        type: "failure";
        error: Error;
      } => {
    try {
      const result = (func as any)(...args);
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
const result = func();
```

**prerequisites:** Higher-Order Function
**Code Explanation:**
```ts
const makeSafe = (func) => (...args) => { /* body */ }
``` 
This is equivalent to:
```ts
function makeSafe(func) {
  return function(...args) {
    /* body */
  };
}
```
```ts
(func: unknown) => (...args: unknown) => { ... }

//First arrow: (func) => - takes a function parameter
//Second arrow: (...args) => - returns a function that takes arguments
```
**Solution:**
```ts
 const makeSafe =
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
const result = func();
```
### Understanding Literal inferenec in Generics

**Discussion:**

**Case 01: Direct Return of Generic Parameter**
```ts
const returnsValuesOnly = <T>(t: T) => {
    return t;
}
const result = returnsValuesOnly("a");
```
Inferred Type of `result: "a"` (literal type)

**Explanation:**

The function `returnsValuesOnly` takes a generic type `T` and returns a value of type `T`.
When you call `returnsValuesOnly("a")`, TypeScript infers `T` based on the argument `"a"`.
Since `"a"` is a string literal, TypeScript infers `T` as the literal type `"a"` rather than the broader `string` type. 

This is because:
There are no constraints on `T`, so TypeScript can infer the most specific type possible.
The return value is directly t, so the literal type "a" is preserved.

Thus, result is inferred as `"a"`.

**Case 02: Returning Generic Parameter in an Object**
```ts
const returnsValueInAnObject = <T1>(t: T1) => {
    return {
        t,
    };
}
const result2 = returnsValueInAnObject("abc");
```
Inferred Type of `result2: { t: string }`

**Explanation:**

The function `returnsValueInAnObject` takes a generic type `T1` and returns an object `{ t: T1 }`.
When you call `returnsValueInAnObject("abc")`, TypeScript infers `T1` based on the argument `"abc"`.
You might expect `T1` to be inferred as the literal type `"abc"`, like in Case 01. However, the inferred type for result2 is `{ t: string }`. 

Why does this happen?

When a generic type is used in an object literal (like `{ t }`, which is shorthand for `{ t: t }`), TypeScript applies a **widening** behavior to the type.
Widening means TypeScript infers a broader type `(e.g., string)` instead of a specific literal type `(e.g., "abc")` for properties in object literals, unless constrained otherwise.
This behavior is intentional to make object properties more flexible, as literal types are often too restrictive for object properties (e.g., you might want to assign a different string to t later).

Why Not a Literal Type?

The object `{ t }` triggers TypeScript’s type widening for the property `t`. Since `t` is a property in an object, TypeScript infers its type as string (the widened form of "abc") rather than the literal `"abc"`.
This is a design choice in TypeScript to avoid overly restrictive types in object literals, which are often used in scenarios where properties might be reassigned or mutated.

**Case 03: Returning Generic Parameter in an Object with a Constraint**

```ts
const returnsValueInAnObjectWithConstraint = <T1 extends string>(t: T1) => {
    return {
        t,
    }
}
const result3 = returnsValueInAnObjectWithConstraint("abc");
```

Inferred Type of `result3: { t: "abc" }`

**Explanation:**

The function `returnsValueInAnObjectWithConstraint` is similar to Case 02, but the generic type `T1` is constrained to extends string. This means `T1` must be a subtype of string, which includes both the general string type and string literal types like `"abc"`.
When you call `returnsValueInAnObjectWithConstraint("abc")`, TypeScript infers `T1` as the literal type `"abc"`.
Unlike Case 02, the constraint `T1` extends string allows TypeScript to preserve the literal type `"abc"` for the property `t` in the returned object `{ t: T1 }`.

Why does the constraint make a difference?

The extends string constraint signals to TypeScript that `T1` can be a specific string literal type, not just the general string type.
In TypeScript, when a generic type is constrained to string, and a literal value (like "abc") is passed, the type inference preserves the literal type for the property, overriding the default widening behavior seen in Case 02.

Why a Literal Type Now?

The extends string constraint explicitly allows `T1` to be a string literal type (e.g., "abc"). This prevents TypeScript from widening the type to string when the value is used in an object property.
As a result, the returned object `{ t: T1 }` has `t` typed as the literal `"abc"`, so result3 is `{ t: "abc" }`.

### Problem 53: Restrict Generic Function to Specific Types

**Statement:**
Write a generic function `inferItemLiteral` that accepts only `string` or `number` values as input.
The function should return an object containing the given value under the property output.
If a type other than string or number is passed, TypeScript should show a compile-time error.
```ts
export const inferItemLiteral = <T extends string | number>(t: T) => {
    return {
        output: t,
    };
};
const result = inferItemLiteral("hello");  // ✅ works
const result2 = inferItemLiteral(123);     // ✅ works
const result3 = inferItemLiteral(true);    // ❌ error
```
**Expected Output:**
```ts
result : { output: "hello" }
result2 : { output: 123 }
result3  // ❌ Compilation error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
```
**Solution:**
```ts
export const inferItemLiteral = <T extends string | number>(t:T) => {
    return {
        output: t,
    };
};
const result = inferItemLiteral("hello");
const result2 = inferItemLiteral(123);
const result3 = inferItemLiteral(true);
```

### Problem 54: Create a Generic Status Builder

**Statement:**
Write a generic function `makeStatus` that takes an array of string literals as input.
The function should preserve the literal types of the strings passed, rather than widening them to just string.
This allows TypeScript to infer the exact string values and use them in later type-safe contexts.
```ts
const makeStatus = <TStatuses extends string[]>(statuses: TStatuses) => {
    return statuses;
}
const statuses = makeStatus(["INFO", "WARNING", "ERROR"]);
```
**Expected Output:**
```ts 
statuses : ["INFO", "WARNING", "ERROR"]
Type inferred: ("INFO" | "WARNING" | "ERROR")[]
```
**Solution:**
```ts
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
    return statuses;
}
const statuses = makeStatus(["INFO","WARNING","ERROR"]);
```
### Problem 55: Create a Variant Class Builder

**Statement:**
Write a higher-order function `createVariantClassBuilder` that accepts a mapping of style variants to CSS class strings.
The returned function should take a variant key (e.g., "primary" or "secondary") along with optional additional class names and return a properly combined string of CSS classes.
```ts
const createVariantClassBuilder = 
(variants: unknown) =>
(type: unknown, ...otherclasses: unknown[]) => {
    const classList = [variants[type], ...otherclasses];
    return classList.join(" ");
};
const getBg = createVariantClassBuilder({
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
});
```
**Expected Output:**
```ts
getBg("primary"); 
// "bg-blue-500"
getBg("secondary", "text-white", "font-bold"); 
// "bg-gray-500 text-white font-bold"
```
**Solution:**
```ts
const createClassNamesFactory = 
<T extends string>(classes: Record<T,string>) =>
(type: T, ...otherclasses: string[]) => {
    const classList = [classes[type], ...otherclasses];
    return classList.join(" ");
};
const getBg = createClassNamesFactory({
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
});
```
### Problem 56: Create a Greeting Toggle Function

**Statement:**
Write a function `YouSayGoodBueAndISayHello` that takes a string as input.
If the input is `"goodbye"`, the function should return `"hello"`.
For any other input, it should return `"goodbye"`.
```ts
function YouSayGoodBueAndISayHello(greeting: unknown){
    return greeting === "goodbye" ? "hello" : "goodbye";
}
const result = YouSayGoodBueAndISayHello("goodbye");
```
**Solution:1**
```ts
 function YouSayGoodBueAndISayHello<T extends "hello" | "goodbye">(greeting: T)
 : T extends "hello"? "goodbye" : "hello" {
    return (greeting === "goodbye" ? "hello" : "goodbye") as any;
 }
 const result = YouSayGoodBueAndISayHello("hello");
 ```
Here is the first solution of this problem. We have used `as any` in the return because TypeScript cannot verify that the runtime conditional expression will always match the generic conditional return type. In this case, we know better than TypeScript and we are handling it using `as`. There is another way to do this without using any, which we will discuss in solution 2.

**Solution:2**
```ts
 type TypeHelper<T> = T extends "hello" ? "goodbye" : "hello"
 function YouSayGoodBueAndISayHello<T extends "hello" | "goodbye">(greeting: T)
 {
    return (greeting === "goodbye" ? "hello": "goodbye" ) as TypeHelper<T>;
 }
 const result = YouSayGoodBueAndISayHello("hello");
 ```
### Problem 57: Conditional Person Property Mapper

**Statement:**
Write a function `remapPerson` that takes a key of the `Person` type and a value corresponding to that key.
If the key is `"birthDate"`, the function should always return the current date.
For all other keys, it should return the provided value.
```ts
type Person = {
    name: string;
    age: number;
    birthDate: Date;
}
export function remapPerson<Key extends keyof Person>(
    key: Key,
    value: Person[Key],
): Person[Key]{
    if(key === "birthDate"){
        return new Date();
    }
    return value;
}
```
**Solution:**
```ts
type Person = {
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
```
### Problem 58: Create a Curried Function

**Statement:**
Write a curried function `curryFunction` that takes three arguments `t, u, and v` in a nested manner.
The function should return an object containing all three values as properties `{ t, u, v }`
```ts
export const curryFunction = 
<T, U, V>(t: T) =>
    (u: U) => 
    (v: V) => {
        return {
            t,
            u,
            v,
        };
    };
const result = curryFunction(1)(2)(3);
```
**Solution:**
```ts
export const curryFunction =
  <T>(t: T) =>
  <U>(u: U) =>
  <V>(v: V) => {
    return {
      t,
      u,
      v,
    };
  };
const result = curryFunction(1)(2)(3);
```
### Problem 59[N]: Implement a Generic Cache with Clone

**Statement:**
Create a generic `Cache<T>` interface with methods to `get`, `set`, and `clone` values.

`get(key)` → retrieves the value for a given key, or `undefined` if the key is not present.

`set(key, value)` → stores the value under the given key.

`clone(transform)` → creates a new cache where every value is transformed using the provided function.

Implement a function `createCache<T>` that returns an object following the `Cache<T>` interface.

Finally, demonstrate cloning a `Cache<number>` into a `Cache<string>` using clone.
```ts
export interface Cache<T> {
    get: (key: string) => T | undefined;
    set: (key: string, value: T) => void;
    clone: (transform: (elem: unknown) => unknown) => Cache<unknown>;
}
const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
    const cache: Record<string, T> = initialCache || {};
    return {
        get: (key) => cache[key],
        set: (key, value) => {
            cache[key] = value;
        },
        clone: (transform) => {
            const newCache: Record<string, any> = {};
            for (const key in cache) {
                newCache[key] = transform(cache[key]);
            }
            return createCache(newCache);
        },
    };
};
// Example usage
const numberCache = createCache<number>();
numberCache.set("a", 1);
numberCache.set("b", 2);
const stringCache = numberCache.clone((elem) => String(elem));
const a = stringCache.get("a"); // "1"
```
**Solution:**
```ts
export interface Cache<T> {
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
const a = stringCache.get("a");
```