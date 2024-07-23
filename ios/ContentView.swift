//
//  ContentView.swift
//  ReactNativePaperProject
//
//  Created by Rohan Malhotra on 7/23/24.
//

import SwiftUI
import React

struct ReactNativeView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController {
        #if DEBUG
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        #else
        let jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
        #endif

        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "React-Native-Paper-Project",
            initialProperties: nil,
            launchOptions: nil
        )

        let viewController = UIViewController()
        viewController.view = rootView
        return viewController
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        
    }
}

struct ContentView: View {
    var products: [Product] = sampleProducts
    @State private var showReactNativeView = false
    
    var body: some View {
        VStack {
            Text("Shopping App")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding()

            List(products) { product in
                HStack {
                    Image(product.imageName)
                        .resizable()
                        .frame(width: 80, height: 50)
                        .cornerRadius(5)
                    VStack(alignment: .leading) {
                        Text(product.name)
                            .font(.headline)
                        Text(product.description)
                            .font(.subheadline)
                        Spacer()
                        Text("$\(product.price, specifier: "%.2f")")
                            .font(.headline)
                    }
                }
                .padding(.vertical, 10)
            }
            .listStyle(PlainListStyle())
            .frame(height: 500)
            VStack(spacing: 20) {
                Button(action: {
                    // Checkout action
                }) {
                    Text("Checkout")
                        .font(.headline)
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(Color.green)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                }

                Button(action: {
                    showReactNativeView = true
                }) {
                    Text("Apply for Credit Card")
                        .font(.headline)
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                }
                .sheet(isPresented: $showReactNativeView) {
                    ReactNativeView()
                }
            }
            .padding()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(products: sampleProducts)
    }
}
