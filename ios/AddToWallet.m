//
//  AddToWallet.m
//  ReactNativePaperProject
//
//  Created by Rohan Malhotra on 7/18/24.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(AddToWallet, NSObject)

RCT_EXTERN_METHOD(addCardToWallet:(NSString *)name number:(NSString *)number expiry:(NSString *)expiry resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end

