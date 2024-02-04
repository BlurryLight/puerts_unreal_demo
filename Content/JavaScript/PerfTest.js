"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
const utils_1 = require("./utils");
let testobj = new UE.TGUnitTestCallee();
// let cs = $ref(new UE.CustomStruct());
// testobj.sCustomStructRefNoRet(cs);
// cs = $ref<UE.CustomStruct>();
// testobj.sCustomStructRefNoRet(cs);
// let Positions = UE.NewArray(UE.Vector);
// for (let i = 0; i < 1024; i++) {
//    Positions.Add(new UE.Vector(i, i, i));
//}
// let Positions_Ref = $ref(Positions);
// testobj.TArrayRefIntRet(Positions_Ref);
// testobj.ConstTArrayRefIntRet(Positions);
const LOOP_COUNT = 1000000;
let beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.NoArgNoRet();
}
let endTime = new Date();
console.log("1m NoArgNoRet using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.RetInt();
}
endTime = new Date();
console.log("1m RetInt using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.IntArgIntRet(i);
}
endTime = new Date();
console.log("1m IntArgIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.StrArgIntRet("hello world");
}
endTime = new Date();
console.log("1m StrArgIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
let v;
for (var i = 0; i < LOOP_COUNT; i++) {
    v = testobj.VP;
}
endTime = new Date();
console.log("1m Vector Property Get using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
v = new UE.Vector(1, 1, 1);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.VP = v;
}
endTime = new Date();
console.log("1m Vector Property Set using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
let Positions = UE.NewArray(UE.Vector);
for (let i = 0; i < 1024; i++) {
    Positions.Add(new UE.Vector(i, i, i));
}
let Positions_Ref = (0, puerts_1.$ref)(Positions);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.TArrayRefIntRet(Positions_Ref);
}
endTime = new Date();
console.log("1m TArrayRefIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log('TArrayRefIntRet:' + testobj.TArrayRefIntRet(Positions_Ref));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.ConstTArrayRefIntRet(Positions);
}
endTime = new Date();
console.log("1m ConstTArrayRefIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log('ConstTArrayRefIntRet:' + testobj.ConstTArrayRefIntRet(Positions));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.TArrayRet();
}
endTime = new Date();
console.log("1m TArrayRet using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    // testobj.FVectorRet();
}
endTime = new Date();
console.log("1m FVectorRet using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
let arr = testobj.TArrayRet();
arr.Add(100);
console.log(arr.Num(), arr.Get(0));
arr.RemoveAt(0);
console.log(arr.Num());
arr.Add(100);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    arr.Get(0);
}
endTime = new Date();
console.log("1m arr.Get using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
console.log('---------------------------------------------------------');
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sNoArgNoRet();
}
endTime = new Date();
console.log("1m sNoArgNoRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sRetInt();
}
endTime = new Date();
console.log("1m sRetInt using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sIntArgIntRet(i);
}
endTime = new Date();
console.log("1m sIntArgIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sStrArgIntRet("hello world");
}
endTime = new Date();
console.log("1m sStrArgIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    v = testobj.sVP;
}
endTime = new Date();
console.log("1m Vector Property sGet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
v = new UE.Vector(1, 1, 1);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sVP = v;
}
endTime = new Date();
console.log("1m Vector Property sSet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sTArrayRefIntRet(Positions_Ref);
}
endTime = new Date();
console.log("1m sTArrayRefIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log('sTArrayRefIntRet:' + testobj.sTArrayRefIntRet(Positions_Ref));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sConstTArrayRefIntRet(Positions);
}
endTime = new Date();
console.log("1m sConstTArrayRefIntRet using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log('sConstTArrayRefIntRet:' +
    testobj.sConstTArrayRefIntRet(Positions));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sTArrayRet();
}
endTime = new Date();
console.log("1m sTArrayRet using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sFVectorRet();
}
endTime = new Date();
console.log("1m sFVectorRet" +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log("---------反射调用----");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let x = testobj.Add(1, 2);
}
endTime = new Date();
console.log("1m UFunction Add using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    UE.TGUnitTestCallee.StaticAdd(1, 2);
}
endTime = new Date();
console.log("1m UFunction StaticAdd using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
let uAddfunc = UE.TGUnitTestCallee.StaticAdd;
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    uAddfunc(1, 2);
}
endTime = new Date();
console.log("1m UFunction 拷贝成addFunc Static Add using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log("---------静态绑定----");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let x = testobj.sAdd(1, 2);
}
endTime = new Date();
console.log("1m static Add Method using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    UE.TGUnitTestCallee.sStaticAdd(1, 2);
}
endTime = new Date();
console.log("1m static sStaticAdd using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
let tg = UE.TGUnitTestCallee;
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    tg.sStaticAdd(1, 2);
}
endTime = new Date();
console.log("1m static call 拷贝成addFunc Add using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
(0, utils_1.printStatus)(UE.TGUnitTestCallee.sStaticAdd);
console.log("UE has how many keys", Object.keys(UE).length);
console.log(JSON.stringify(Object.keys(UE)));
console.log(UE.TGUnitTestCallee);
console.log((0, utils_1.tracePrototypeChainOf)(UE.TGUnitTestCallee));
console.log("---------");
let sarr = testobj.sTArrayRet();
sarr.Add(100);
console.log(sarr.Num(), sarr.Get(0));
sarr.RemoveAt(0);
console.log(sarr.Num());
sarr.Add(100);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    sarr.Get(0);
}
endTime = new Date();
console.log("1m sarr.Get using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
let intRef = (0, puerts_1.$ref)(1024);
let strRef = (0, puerts_1.$ref)("B");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.IntRef(intRef);
}
endTime = new Date();
console.log("1m IntRef using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
console.log("int ref return " + (0, puerts_1.$unref)(intRef));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.IntPtr(intRef);
}
endTime = new Date();
console.log("1m IntPtr using " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
console.log("int ptr return " + (0, puerts_1.$unref)(intRef));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.StdStringRef(strRef);
}
endTime = new Date();
console.log("1m StdStringRef using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log("string ref return " + (0, puerts_1.$unref)(strRef));
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.StdStringPtr(strRef);
}
endTime = new Date();
console.log("1m StdStringPtr using " +
    (endTime.getTime() - beginTime.getTime()) + "ms");
console.log("string ptr return " + (0, puerts_1.$unref)(strRef));
//# sourceMappingURL=PerfTest.js.map