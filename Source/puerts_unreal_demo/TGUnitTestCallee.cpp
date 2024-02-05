// Fill out your copyright notice in the Description page of Project Settings.

#include "TGUnitTestCallee.h"

void UTGUnitTestCallee::NoArgNoRet()
{
}

int UTGUnitTestCallee::RetInt()
{
    return 1024;
}

int UTGUnitTestCallee::IntArgIntRet(int Arg) 
{
    return Arg;
}

int UTGUnitTestCallee::StrArgIntRet(FString Arg)
{
    return Arg.Len();
}

int UTGUnitTestCallee::TArrayRefIntRet(TArray<FVector>& Data)
{
    return Data.Num();
}

int UTGUnitTestCallee::ConstTArrayRefIntRet(const TArray<FVector>& Data)
{
    return Data.Num();
}

TArray<int> UTGUnitTestCallee::TArrayRet()
{
    return {};
}

void UTGUnitTestCallee::CustomStructRefNoRet(FCustomStruct& Data)
{
    UE_LOG(LogTemp, Warning, TEXT("CustomStructRefNoRet(%p)"), &Data);
}


FVector UTGUnitTestCallee::FVectorRet()
{
    return VP;
}

void UTGUnitTestCallee::FVectorRet2(double& OutX, double& OutY, double& OutZ)
{
    OutX = VP.X;
    OutY = VP.Y;
    OutZ = VP.Z;
}

void UTGUnitTestCallee::FVectorRet3(FVector& OutVec)
{
    OutVec = VP;
}

int UTGUnitTestCallee::Add(int a, int b)
{
    return a + b;
}

int UTGUnitTestCallee::StaticAdd(int a, int b)
{
    return a + b;
}

FVector UTGUnitTestCallee::StaticReturnFVector()
{
    return FVector(0,1,2);
}

void APuertsTestActor::Fire()
{
    this->OnFireDelegate.Execute();
}
