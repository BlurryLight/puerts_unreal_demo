"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
let testobj = new UE.TGUnitTestCallee();
const LOOP_COUNT = 100_0000;
let beginTime, endTime;
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sFVectorRet();
}
endTime = new Date();
console.log("1m sFVectorRet " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let v = testobj.sVP;
}
endTime = new Date();
console.log("1m FVector Getter " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
let x = (0, puerts_1.$ref)(undefined);
let y = (0, puerts_1.$ref)(undefined);
let z = (0, puerts_1.$ref)(undefined);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sFVectorRet2(x, y, z);
}
endTime = new Date();
console.log("1m sFVectorRet2 " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
let vec = (0, puerts_1.$ref)(undefined);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    testobj.sFVectorRet3(vec);
}
endTime = new Date();
console.log("1m sFVectorRet3 " + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    UE.TGUnitTestCallee.sStaticReturnVec();
}
endTime = new Date();
console.log("1m sStaticReturnVec" + (endTime.getTime() - beginTime.getTime()) +
    "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let v = {};
}
endTime = new Date();
console.log("1m empty obj" + (endTime.getTime() - beginTime.getTime()) + "ms");
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let v = {};
    v[0] = 1;
    v[1] = 1;
}
endTime = new Date();
console.log("1m obj add properties" +
    (endTime.getTime() - beginTime.getTime()) + "ms");
// hidden class optimization
class Point {
    constructor(...Args) {
        this.__tid__Point = true;
        this[0] = 0;
        this[1] = 0;
        this[2] = 0;
        // switch(Args.length)
        // {
        //   case 3:
        //     this.X = Args[0]
        //     this.Y = Args[1]
        //     this.Z = Args[2]
        //   case 2:
        //     this.X = Args[0]
        //     this.Y = Args[1]
        //     this.Z = 1;
        //   default:
        //     this.X = 0;
        //     this.Y = 0;
        //     this.Z = 0;
        // }
    }
    get X() { return this[0]; }
    set X(f) { this[0] = f; }
    get Y() { return this[1]; }
    set Y(f) { this[1] = f; }
    get Z() { return this[2]; }
    set Z(f) { this[2] = f; }
}
;
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let v = new Point(1, 2, 3);
}
endTime = new Date();
console.log("1m CreateObj" + (endTime.getTime() - beginTime.getTime()) + "ms");
//# sourceMappingURL=PerfTest2.js.map