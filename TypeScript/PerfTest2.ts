import {$ref, $unref} from 'puerts';
import * as UE from 'ue'
import {printStatus, tracePrototypeChainOf} from './utils';

let testobj: UE.TGUnitTestCallee = new UE.TGUnitTestCallee();
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

let x = $ref(undefined);
let y = $ref(undefined);
let z = $ref(undefined);
beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
  testobj.sFVectorRet2(x, y, z);
}
endTime = new Date();

console.log("1m sFVectorRet2 " + (endTime.getTime() - beginTime.getTime()) +
            "ms");

let vec = $ref(undefined);
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
  let v = {}
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

class Point{
  // x: number;
  // y: number;
  // z: number;

  private __tid__Point:any;

  public constructor(...Args) {
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
  get X(): number { return this[0]; }
  set X(f: number) { this[0] = f; }
  get Y(): number { return this[1]; }
  set Y(f: number) { this[1] = f; }
  get Z(): number { return this[2]; }
  set Z(f: number) { this[2] = f; }
};


beginTime = new Date();
for (var i = 0; i < LOOP_COUNT; i++) {
  let v = new Point(1, 2, 3);
}
endTime = new Date();

console.log("1m CreateObj" + (endTime.getTime() - beginTime.getTime()) + "ms");