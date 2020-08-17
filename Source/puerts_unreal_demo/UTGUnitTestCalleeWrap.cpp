// Fill out your copyright notice in the Description page of Project Settings.


#include "JSClassRegister.h"
#include "CoreMinimal.h"
#include "TGUnitTestCallee.h"

template<typename T>
FORCEINLINE static T * GetPoninterFast(v8::Local<v8::Object> Object, int Index = 0)
{
    return Object->InternalFieldCount() > Index ?
        reinterpret_cast<T*>(Object->GetAlignedPointerFromInternalField(Index)) : nullptr;
}

static void NoArgNoRet(const v8::FunctionCallbackInfo<v8::Value>& Info)
{
    v8::Isolate* Isolate = Info.GetIsolate();
    v8::Isolate::Scope IsolateScope(Isolate);
    v8::HandleScope HandleScope(Isolate);
    v8::Local<v8::Context> Context = Isolate->GetCurrentContext();
    v8::Context::Scope ContextScope(Context);

    auto Self = GetPoninterFast<UTGUnitTestCallee>(Info.Holder());
    Self->NoArgNoRet();
}

static void RetInt(const v8::FunctionCallbackInfo<v8::Value>& Info)
{
    v8::Isolate* Isolate = Info.GetIsolate();
    v8::Isolate::Scope IsolateScope(Isolate);
    v8::HandleScope HandleScope(Isolate);
    v8::Local<v8::Context> Context = Isolate->GetCurrentContext();
    v8::Context::Scope ContextScope(Context);

    auto Self = GetPoninterFast<UTGUnitTestCallee>(Info.Holder());
    auto Res = Self->RetInt();
    Info.GetReturnValue().Set(Res);
}

static void IntArgIntRet(const v8::FunctionCallbackInfo<v8::Value>& Info)
{
    v8::Isolate* Isolate = Info.GetIsolate();
    v8::Isolate::Scope IsolateScope(Isolate);
    v8::HandleScope HandleScope(Isolate);
    v8::Local<v8::Context> Context = Isolate->GetCurrentContext();
    v8::Context::Scope ContextScope(Context);

    auto Self = GetPoninterFast<UTGUnitTestCallee>(Info.Holder());
    auto Arg1 = Info[0]->Int32Value(Context).ToChecked();

    auto Res = Self->IntArgIntRet(Arg1);

    Info.GetReturnValue().Set(Res);
}

static void StrArgIntRet(const v8::FunctionCallbackInfo<v8::Value>& Info)
{
    v8::Isolate* Isolate = Info.GetIsolate();
    v8::Isolate::Scope IsolateScope(Isolate);
    v8::HandleScope HandleScope(Isolate);
    v8::Local<v8::Context> Context = Isolate->GetCurrentContext();
    v8::Context::Scope ContextScope(Context);

    auto Self = GetPoninterFast<UTGUnitTestCallee>(Info.Holder());
    //auto Arg1 = UTF8_TO_TCHAR(*(v8::String::Utf8Value(Isolate, Info[0])));

    auto Arg1 = *(v8::String::Value(Isolate, Info[0]));

    auto Res = Self->StrArgIntRet((TCHAR*)Arg1);

    Info.GetReturnValue().Set(Res);
}

struct AutoRegisterForUTGUnitTestCallee
{
    AutoRegisterForUTGUnitTestCallee()
    {
        puerts::JSClassDefinition ClassDef = JSClassEmptyDefinition;
        static puerts::JSFunctionInfo Methods[] = {
            { "sNoArgNoRet", NoArgNoRet}, //为了便于在PerfTest.ts做对比测试，加了s前缀，正常情况下直接用原函数名即可
            { "sRetInt",  RetInt},
            { "sIntArgIntRet",  IntArgIntRet},
            { "sStrArgIntRet",  StrArgIntRet},
            { 0, 0,}
        };
        ClassDef.UStructName = "UTGUnitTestCallee";
        ClassDef.Methods = Methods;

        puerts::RegisterClass(ClassDef);
    }
};

AutoRegisterForUTGUnitTestCallee _AutoRegisterForUTGUnitTestCallee__;
