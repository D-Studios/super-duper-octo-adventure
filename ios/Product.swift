//
//  Product.swift
//  ReactNativePaperProject
//
//  Created by Rohan Malhotra on 7/23/24.
//

import Foundation

struct Product: Identifiable {
    let id = UUID()
    let name: String
    let description: String
    let price: Double
    let imageName: String
}

let sampleProducts = [
    Product(name: "Burrito Bowl", description: "Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, sour cream or cheese.", price: 9.25, imageName: "burrito-bowl"),
    Product(name: "Burrito", description: "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, sour cream or cheese.", price: 9.25, imageName: "burrito"),
    Product(name: "Chips and Guac", description: "Everything else you need to round out your meal.", price:4.55, imageName: "chips-guac"),
    Product(name: "Quesadilla", description: "Cheese in a Flour Tortilla with your choice of meat, sofritas or fajita veggies and three included sides.", price: 9.80, imageName: "quesadilla"),
    Product(name: "Tacos", description: "Your choice of freshly grilled meat, sofritas, or guacamole, and up to five toppings served in a tortilla.", price: 9.25, imageName: "tacos")
]
