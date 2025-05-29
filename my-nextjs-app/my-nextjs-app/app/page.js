"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Heart, Search, Filter, Sparkles, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Galaxy Pencil",
    price: "$12.99",
    originalPrice: "$15.99",
    image: "/products/pencil1.png",
    rating: 4.8,
    reviews: 124,
    badge: "BESTSELLER",
    description: "Professional-grade pencil with cosmic-inspired design"
  },
  {
    id: 2,
    name: "Nebula Sketcher",
    price: "$14.49",
    originalPrice: "$17.99",
    image: "/products/pencil2.png",
    rating: 4.9,
    reviews: 89,
    badge: "NEW",
    description: "Ultra-smooth sketching experience with stellar precision"
  },
  {
    id: 3,
    name: "Meteor Marker",
    price: "$10.99",
    originalPrice: "$13.99",
    image: "/products/pencil3.png",
    rating: 4.7,
    reviews: 156,
    badge: "SALE",
    description: "Bold strokes that leave a lasting impression"
  },
  {
    id: 4,
    name: "Comet Graphite",
    price: "$9.99",
    originalPrice: "$12.99",
    image: "/products/pencil4.png",
    rating: 4.6,
    reviews: 203,
    badge: "POPULAR",
    description: "Classic graphite with interstellar quality"
  },
  {
    id: 5,
    name: "Starlight Lead",
    price: "$11.99",
    originalPrice: "$14.99",
    image: "/products/pencil5.png",
    rating: 4.8,
    reviews: 167,
    badge: "LIMITED",
    description: "Luminous writing experience that shines bright"
  },
];

export default function Home() {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "BESTSELLER": return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "NEW": return "bg-gradient-to-r from-green-400 to-emerald-500";
      case "SALE": return "bg-gradient-to-r from-red-400 to-pink-500";
      case "POPULAR": return "bg-gradient-to-r from-blue-400 to-cyan-500";
      case "LIMITED": return "bg-gradient-to-r from-purple-400 to-violet-500";
      default: return "bg-gray-400";
    }
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
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PENCIL GALAXY
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            <Search className="w-90 h-4 mr-2 rounded-3xl"/>
            Search
          </Button>
        <Link href="/auth">
  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
    Admin Login
  </Button>
</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center space-y-8 py-20">
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>New Collection Available</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              PENCIL
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Where creativity meets the cosmos. Discover our premium collection of writing instruments 
            inspired by the infinite beauty of space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-md">
              <Eye className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Stellar Collection
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Each pencil is crafted with precision and designed to inspire your creative journey through the universe of possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10`}>
                  {product.badge}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 z-10 bg-black/20 backdrop-blur-md rounded-full p-2 hover:bg-black/40 transition-all duration-300"
                >
                  <Heart
                    className={`w-4 h-4 transition-all duration-300 ${
                      favorites.has(product.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-white/60 hover:text-red-400'
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-40 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-white/60 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/60">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-white">
                          {product.price}
                        </span>
                        <span className="text-sm text-white/50 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                <Link href="/product1">
                  <Button
                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-xl shadow-lg transition-all duration-300 transform ${
                      hoveredProduct === product.id ? 'scale-105 shadow-purple-500/25' : ''
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-10" /> 
                    Buy now
                  </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8">
            <CardContent className="space-y-6">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-3xl font-bold text-white">
                Join the Cosmic Community
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Get exclusive access to new arrivals, special discounts, and creative inspiration delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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