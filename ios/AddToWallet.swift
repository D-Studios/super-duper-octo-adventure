//
//  AddToWallet.swift
//  ReactNativePaperProject
//
//  Created by Rohan Malhotra on 7/18/24.
//

import PassKit
import React

@objc(AddToWallet)
class AddToWallet: NSObject, PKAddPaymentPassViewControllerDelegate {

  @objc func addCardToWallet(_ name: String, number: String, expiry: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    guard PKAddPaymentPassViewController.canAddPaymentPass() else {
      reject("error", "Cannot add payment pass", nil)
      return
    }

    guard let requestConfiguration = PKAddPaymentPassRequestConfiguration(encryptionScheme: .ECC_V2) else {
      reject("error", "Failed to create request configuration", nil)
      return
    }

    requestConfiguration.cardholderName = name
    requestConfiguration.primaryAccountSuffix = String(number.suffix(4))
    requestConfiguration.localizedDescription = "Add your card to Apple Wallet"

    guard let addPaymentPassViewController = PKAddPaymentPassViewController(requestConfiguration: requestConfiguration, delegate: self) else {
      reject("error", "Failed to create add payment pass view controller", nil)
      return
    }

    DispatchQueue.main.async {
      UIApplication.shared.keyWindow?.rootViewController?.present(addPaymentPassViewController, animated: true, completion: nil)
    }
  }

  func addPaymentPassViewController(_ controller: PKAddPaymentPassViewController, generateRequestWithCertificateChain certificates: [Data], nonce: Data, nonceSignature: Data, completionHandler handler: @escaping (PKAddPaymentPassRequest) -> Void) {
    let request = PKAddPaymentPassRequest()
    handler(request)
  }

  func addPaymentPassViewController(_ controller: PKAddPaymentPassViewController, didFinishAdding paymentPass: PKPaymentPass?, error: Error?) {
    controller.dismiss(animated: true, completion: nil)
    // Handle the result
  }
}
