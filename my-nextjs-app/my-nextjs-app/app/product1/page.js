"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  ArrowLeft, 
  Plus, 
  Minus,
  Check,
  Clock,
  Award,
  Sparkles,
  Eye,
  Gift
} from "lucide-react";

const products = [
  {
    id: "1",
    name: "MILTON Senior Flatmate Tiffin Box",
    price: "₹614",
    mrp: "₹765",
    discount: "20%",
    rating: 3.8,
    reviews: 1869,
    boughtCount: "400+",
    image: "/products/lunchbox.png",
    description:
      "Steel Kids Lunch Box with Inner Stainless Steel Insulated Containers. Clip Lock Lid. 700ml, Airtight & Leakproof. Perfect for School or Picnic.",
    delivery: "FREE delivery Saturday, 31 May",
    color: "Blue",
    features: [
      "Airtight & Leakproof Design",
      "Inner Stainless Steel Containers",
      "Clip Lock Lid System",
      "700ml Capacity",
      "BPA Free Materials",
      "Easy to Clean"
    ],
    specifications: {
      "Material": "Stainless Steel Interior, Plastic Exterior",
      "Capacity": "700ml",
      "Dimensions": "18 x 12 x 8 cm",
      "Weight": "450g",
      "Color": "Blue",
      "Brand": "MILTON"
    },
    images: [
      "/products/lunchbox.png",
      "/products/lunchbox.png",
      "/products/lunchbox.png",
      "/products/lunchbox.png"
    ]
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Button>
          <div className="h-6 w-px bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PENCIL GALAXY
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
          </Button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="relative w-full h-96 object-contain drop-shadow-2xl rounded-xl"
                  />
                  <button className="absolute top-4 right-4 bg-black/20 backdrop-blur-md rounded-full p-2 hover:bg-black/40 transition-all duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-purple-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain bg-white/10 backdrop-blur-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold text-white leading-tight">
                  {product.name}
                </h1>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="bg-black/20 backdrop-blur-md rounded-full p-3 hover:bg-black/40 transition-all duration-300"
                >
                  <Heart
                    className={`w-6 h-6 transition-all duration-300 ${
                      isFavorite
                        ? 'text-red-500 fill-red-500'
                        : 'text-white/60 hover:text-red-400'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/80">
                    {product.rating} ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <span className="text-green-400 text-sm font-medium">
                  {product.boughtCount} bought this month
                </span>
              </div>
            </div>

            {/* Pricing */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-3xl font-bold text-white">
                    {product.price}
                  </span>
                  <span className="text-xl text-white/60 line-through">
                    {product.mrp}
                  </span>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{product.discount} OFF
                  </div>
                </div>
                <p className="text-green-400 text-sm font-medium">
                  <Check className="w-4 h-4 inline mr-1" />
                  Inclusive of all taxes
                </p>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 rounded-full p-2">
                    <Truck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {product.delivery}
                    </p>
                    <p className="text-sm text-green-400">In stock - Ready to ship</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 rounded-full p-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">1 Year Warranty</p>
                    <p className="text-sm text-white/60">Manufacturer warranty included</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 rounded-full p-2">
                    <Gift className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Gift Wrapping Available</p>
                    <p className="text-sm text-white/60">Perfect for special occasions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Quantity:</span>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full p-1">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
          <CardContent className="p-0">
            <div className="flex border-b border-white/10">
              {["description", "features", "specifications"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-purple-400 bg-purple-500/10 border-b-2 border-purple-500'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-purple-400" />
                      <span className="text-white/80">Premium Quality Materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <span className="text-white/80">Safe & Non-Toxic</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-green-400" />
                      <span className="text-white/80">Long-lasting Durability</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-6 h-6 text-purple-400" />
                      <span className="text-white/80">Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white/5">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                      <span className="text-white/60 font-medium">{key}:</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
            {/* Footer */}
            <footer className="relative z-10 mt-20 py-12 backdrop-blur-md bg-black/20 border-t border-white/10">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-6 h-6 text-purple-400" />
                      <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        PENCIL GALAXY
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">
                      Crafting stellar writing instruments for creative minds across the universe.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Shop</h4>
                    <div className="space-y-2 text-sm text-white/60">
                      <div>New Arrivals</div>
                      <div>Best Sellers</div>
                      <div>Limited Edition</div>
                      <div>Gift Sets</div>
                    </div>
                  </div>
      
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Support</h4>
                    <div className="space-y-2 text-sm text-white/60">
                      <div>Help Center</div>
                      <div>Shipping Info</div>
                      <div>Returns</div>
                      <div>Contact Us</div>
                    </div>
                  </div>
      
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Connect</h4>
                    <div className="space-y-2 text-sm text-white/60">
                      <div>Instagram</div>
                      <div>Twitter</div>
                      <div>Facebook</div>
                      <div>Newsletter</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 text-center">
                  <p className="text-sm text-white/50">
                    © 2025 Pencil Galaxy. All rights reserved. Designed with ❤️ form @nearcult
                  </p>
                </div>
              </div>
            </footer>
    </main>
  );
}