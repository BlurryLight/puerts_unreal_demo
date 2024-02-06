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
    constructor(_x, _y, _z) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }
}
;
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
    let v = new Point(1, 2, 3);
}
endTime = new Date();
console.log("1m CreateObj" + (endTime.getTime() - beginTime.getTime()) + "ms");
//# sourceMappingURL=PerfTest2.js.map