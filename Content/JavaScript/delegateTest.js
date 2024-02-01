"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
//引擎方法
console.log("--------------------------14--------------------------");
//在FJsEnv启动，调用Start时传入的参数可以通过argv获取。如果是继承ue类方式，这里的argv是空的
let gameInstance = puerts_1.argv.getByName("GameInstance");
let actor = UE.GameplayStatics.BeginDeferredActorSpawnFromClass(gameInstance, UE.PuertsTestActor.StaticClass(), undefined);
UE.GameplayStatics.FinishSpawningActor(actor, undefined);
actor.OnFireDelegate.Bind(() => { console.log("Foo"); return undefined; });
actor.OnFireDelegate.Bind(() => { console.log("Bar"); return undefined; });
actor.OnFireDelegate.Execute();
// actor.Fire();
//# sourceMappingURL=delegateTest.js.map