"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight,
  Check,
  X,
  Github,
  Chrome,
  Shield
} from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  // Calculate password strength
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return "from-red-500 to-red-600";
      case 2: return "from-orange-500 to-orange-600";
      case 3: return "from-yellow-500 to-yellow-600";
      case 4: return "from-green-500 to-green-600";
      case 5: return "from-emerald-500 to-emerald-600";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return "Weak";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Strong";
      case 5: return "Excellent";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Main container */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Logo section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-2xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Galaxy
          </h1>
          <p className="text-white/50 text-lg">
            {isLogin ? "Welcome back to the cosmos" : "Begin your cosmic journey"}
          </p>
        </div>

        {/* Auth form card */}
        <Card className="backdrop-blur-xl bg-white/5 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            {/* Tab switcher */}
            <div className="flex mb-8 bg-white/5 rounded-2xl p-1 backdrop-blur-sm">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-500 ${
                  isLogin
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-500 ${
                  !isLogin
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-6">
              {/* Form fields */}
              <div className="space-y-5">
                {!isLogin && (
                  <FormField
                    label="Full Name"
                    type="text"
                    icon={User}
                    value={formData.fullName}
                    onChange={(value) => handleInputChange('fullName', value)}
                    placeholder="Enter your full name"
                  />
                )}

                <FormField
                  label="Email"
                  type="email"
                  icon={Mail}
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="Enter your email address"
                />

                <div>
                  <FormField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    icon={Lock}
                    value={formData.password}
                    onChange={(value) => handleInputChange('password', value)}
                    placeholder="Enter your password"
                    showToggle={true}
                    isVisible={showPassword}
                    onToggleVisibility={() => setShowPassword(!showPassword)}
                  />
                  
                  {!isLogin && formData.password && (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/60">Strength</span>
                        <span className={`text-sm font-medium ${
                          passwordStrength >= 4 ? 'text-green-400' : 
                          passwordStrength >= 3 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getPasswordStrengthColor()} transition-all duration-500`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {!isLogin && (
                  <div>
                    <FormField
                      label="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      icon={Lock}
                      value={formData.confirmPassword}
                      onChange={(value) => handleInputChange('confirmPassword', value)}
                      placeholder="Confirm your password"
                      showToggle={true}
                      isVisible={showConfirmPassword}
                      onToggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    {formData.confirmPassword && (
                      <div className="mt-3 flex items-center space-x-2">
                        {formData.password === formData.confirmPassword ? (
                          <>
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-green-400">Passwords match</span>
                          </>
                        ) : (
                          <>
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <X className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-red-400">Passwords don't match</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Remember me / Forgot password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                      />
                      <div className="w-5 h-5 bg-white/10 border border-white/20 rounded group-hover:bg-white/20 transition-colors"></div>
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors">Remember me</span>
                  </label>
                  <button 
                    type="button" 
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 group border-0"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <span>{isLogin ? "Sign In" : "Create Account"}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 text-white/40 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                    or
                  </span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5 mr-3" />
                  Continue with GitHub
                </Button>
                <Button
                  type="button"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Chrome className="w-5 h-5 mr-3" />
                  Continue with Google
                </Button>
              </div>

              {/* Toggle link */}
              <p className="text-center text-white/60">
                {isLogin ? "New to Galaxy?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  {isLogin ? "Create account" : "Sign in"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FormField({ 
  label, 
  type, 
  icon: Icon, 
  value, 
  onChange, 
  placeholder,
  showToggle = false,
  isVisible = false,
  onToggleVisibility
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Icon className={`w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-purple-400' : 'text-white/40'
          }`} />
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-12 pr-${showToggle ? '12' : '4'} py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggleVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors duration-300"
          >
            {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
}