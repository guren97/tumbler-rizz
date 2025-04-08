// Import all tumbler images
import customizableTumbler2 from '@/assets/images/products/customizable_tumbler_2.webp';
import customizableTumbler from '@/assets/images/products/customizable_tumbler.webp';
import beerTumbler from '@/assets/images/products/beer_tumbler.webp';
import slideLidTumbler from '@/assets/images/products/slide_lid_tumbler.webp';
import screwTopTumbler from '@/assets/images/products/screw_top_tumbler.webp';
import screwCapTumbler from '@/assets/images/products/screw_cap_tumbler.webp';
import strawTumbler2 from '@/assets/images/products/straw_tumbler_2.webp';
import strawTumbler from '@/assets/images/products/straw_tumbler.webp';
import thermalTumbler2 from '@/assets/images/products/thermal_tumbler_2.webp';
import thermalTumbler from '@/assets/images/products/thermal_tumbler.webp';
import proteinShakeTumbler from '@/assets/images/products/protein_shake_tumbler.webp';
import shakerTumbler from '@/assets/images/products/shaker_tumbler.webp';
import infuserTumbler from '@/assets/images/products/infuser_tumbler.webp';
import infuserMug from '@/assets/images/products/infuser_mug.webp';
import selfStirringTumbler from '@/assets/images/products/self_stirring_tumbler.webp';
import collapsibleTumbler from '@/assets/images/products/collapsible_tumbler.webp';
import smartTumblerWithLedDisplay2 from '@/assets/images/products/smart_tumbler_with_led_display_2.webp';
import smartTumblerWithLedDisplay from '@/assets/images/products/smart_tumbler_with_led_display.webp';
import travelTumbler from '@/assets/images/products/travel_tumbler.webp';
import doubleWallInsulatedTumbler from '@/assets/images/products/double_wall_insulated_tumbler.webp';
import acrylicTumbler from '@/assets/images/products/acrylic_tumbler.webp';
import copperTumbler from '@/assets/images/products/copper_tumbler.webp';
import bambooTumbler from '@/assets/images/products/bamboo_tumbler.webp';
import ceramicTumbler from '@/assets/images/products/ceramic_tumbler.webp';
import insulatedDoubleWallPlasticTumbler from '@/assets/images/products/insulated_diuble_wall_plastic_tumbler.webp';
import plasticTumblers from '@/assets/images/products/plastic_tumblers.webp';
import glassTumbler from '@/assets/images/products/glass_tumbler.webp';
import stainlessSteelTumbler from '@/assets/images/products/stainless_steel_tumbler.webp';
import trekTumbler40Oz from '@/assets/images/products/trek_tumbler_40_oz.webp';
import insulatedTumblers from '@/assets/images/products/insulated_tumblers.webp';

export interface Product {
    id: string;
    name: string;
    category: 'insulated' | 'sports' | 'travel' | 'kids' | 'specialty';
    price: number;
    image: string;
    description: string;
    rating: {
      value: number;
      count: number;
    };
    stock: number;
    capacity?: string;
    features?: string[];
}

export const products: Product[] = [
    // Insulated Tumblers
    {
        id: "INS001",
        name: "Double Wall Insulated Tumbler",
        category: "insulated",
        price: 2515,
        image: doubleWallInsulatedTumbler,
        description: "Premium double-walled stainless steel tumbler with superior insulation",
        rating: { value: 4.7, count: 120 },
        stock: 15,
        capacity: "20oz",
        features: ["24-hour temperature retention", "Leak-proof lid", "BPA-free"]
    },
    {
        id: "INS002",
        name: "Copper Lined Tumbler",
        category: "insulated",
        price: 3515,
        image: copperTumbler,
        description: "Copper-lined tumbler for enhanced temperature control",
        rating: { value: 4.8, count: 85 },
        stock: 10,
        capacity: "16oz",
        features: ["Copper lining", "Sweat-proof", "Premium finish"]
    },
    {
        id: "INS003",
        name: "Bamboo Insulated Tumbler",
        category: "insulated",
        price: 3015,
        image: bambooTumbler,
        description: "Eco-friendly bamboo exterior with stainless steel insulation",
        rating: { value: 4.6, count: 95 },
        stock: 12,
        capacity: "18oz",
        features: ["Bamboo sleeve", "Sustainable design", "Leak-proof"]
    },
    {
        id: "INS004",
        name: "Stainless Steel Tumbler",
        category: "insulated",
        price: 2815,
        image: stainlessSteelTumbler,
        description: "Classic stainless steel tumbler with superior insulation",
        rating: { value: 4.5, count: 110 },
        stock: 18,
        capacity: "20oz",
        features: ["Double-walled", "Rust-resistant", "Easy to clean"]
    },
    {
        id: "INS005",
        name: "Ceramic Insulated Tumbler",
        category: "insulated",
        price: 3215,
        image: ceramicTumbler,
        description: "Elegant ceramic tumbler with stainless steel lining",
        rating: { value: 4.4, count: 75 },
        stock: 8,
        capacity: "16oz",
        features: ["Ceramic exterior", "Temperature retention", "Stylish design"]
    },
    {
        id: "INS006",
        name: "Thermal Tumbler Pro",
        category: "insulated",
        price: 2915,
        image: thermalTumbler,
        description: "Advanced thermal tumbler with extended temperature retention",
        rating: { value: 4.6, count: 90 },
        stock: 15,
        capacity: "20oz",
        features: ["Extended retention", "Vacuum sealed", "Premium finish"]
    },
    {
        id: "INS007",
        name: "Thermal Tumbler Plus",
        category: "insulated",
        price: 2715,
        image: thermalTumbler2,
        description: "Enhanced thermal tumbler with improved insulation",
        rating: { value: 4.5, count: 85 },
        stock: 12,
        capacity: "18oz",
        features: ["Improved insulation", "Ergonomic design", "Leak-proof"]
    },
    {
        id: "INS008",
        name: "Insulated Double Wall Plastic Tumbler",
        category: "insulated",
        price: 2015,
        image: insulatedDoubleWallPlasticTumbler,
        description: "Lightweight insulated plastic tumbler for everyday use",
        rating: { value: 4.3, count: 70 },
        stock: 25,
        capacity: "16oz",
        features: ["Lightweight", "BPA-free", "Dishwasher safe"]
    },

    // Sports Tumblers
    {
        id: "SPT001",
        name: "Protein Shake Tumbler",
        category: "sports",
        price: 2015,
        image: proteinShakeTumbler,
        description: "Perfect for post-workout protein shakes with mixing ball",
        rating: { value: 4.5, count: 150 },
        stock: 20,
        capacity: "24oz",
        features: ["Mixing ball included", "Leak-proof", "Wide mouth"]
    },
    {
        id: "SPT002",
        name: "Straw Tumbler",
        category: "sports",
        price: 1815,
        image: strawTumbler,
        description: "Sports tumbler with built-in straw for easy sipping",
        rating: { value: 4.4, count: 110 },
        stock: 18,
        capacity: "22oz",
        features: ["Built-in straw", "One-handed operation", "Sports grip"]
    },
    {
        id: "SPT003",
        name: "Shaker Bottle Tumbler",
        category: "sports",
        price: 2215,
        image: shakerTumbler,
        description: "Multi-purpose shaker bottle for protein shakes and supplements",
        rating: { value: 4.6, count: 95 },
        stock: 15,
        capacity: "20oz",
        features: ["Mixing grid", "Leak-proof", "Easy to clean"]
    },
    {
        id: "SPT004",
        name: "Trek 40oz Sports Bottle",
        category: "sports",
        price: 2815,
        image: trekTumbler40Oz,
        description: "Large capacity sports bottle for long workouts",
        rating: { value: 4.7, count: 85 },
        stock: 12,
        capacity: "40oz",
        features: ["Large capacity", "Sports cap", "Durable construction"]
    },
    {
        id: "SPT005",
        name: "Straw Tumbler Pro",
        category: "sports",
        price: 2015,
        image: strawTumbler2,
        description: "Advanced sports tumbler with enhanced straw design",
        rating: { value: 4.5, count: 80 },
        stock: 15,
        capacity: "24oz",
        features: ["Enhanced straw", "Sports grip", "Leak-proof"]
    },

    // Travel Tumblers
    {
        id: "TRV001",
        name: "Travel Mug with Slide Lid",
        category: "travel",
        price: 2515,
        image: slideLidTumbler,
        description: "Car-friendly travel mug with slide-open lid",
        rating: { value: 4.6, count: 130 },
        stock: 15,
        capacity: "16oz",
        features: ["Slide-open lid", "Car cup holder compatible", "Spill-resistant"]
    },
    {
        id: "TRV002",
        name: "Collapsible Travel Tumbler",
        category: "travel",
        price: 3015,
        image: collapsibleTumbler,
        description: "Space-saving collapsible design for travelers",
        rating: { value: 4.3, count: 75 },
        stock: 8,
        capacity: "16oz",
        features: ["Collapsible design", "Compact storage", "Leak-proof"]
    },
    {
        id: "TRV003",
        name: "Screw Cap Travel Mug",
        category: "travel",
        price: 2215,
        image: screwCapTumbler,
        description: "Classic screw-top travel mug for hot beverages",
        rating: { value: 4.5, count: 100 },
        stock: 20,
        capacity: "16oz",
        features: ["Screw-top lid", "Heat resistant", "Car friendly"]
    },
    {
        id: "TRV004",
        name: "Travel Tumbler Set",
        category: "travel",
        price: 3515,
        image: insulatedTumblers,
        description: "Set of insulated travel tumblers for the whole family",
        rating: { value: 4.7, count: 60 },
        stock: 10,
        capacity: "16oz each",
        features: ["Set of 2", "Matching design", "Travel case included"]
    },
    {
        id: "TRV005",
        name: "Premium Travel Tumbler",
        category: "travel",
        price: 2815,
        image: travelTumbler,
        description: "Premium travel tumbler with advanced features",
        rating: { value: 4.6, count: 90 },
        stock: 12,
        capacity: "20oz",
        features: ["Premium finish", "Temperature control", "Travel lock"]
    },
    {
        id: "TRV006",
        name: "Screw Top Travel Mug",
        category: "travel",
        price: 2315,
        image: screwTopTumbler,
        description: "Modern screw-top travel mug with improved design",
        rating: { value: 4.4, count: 85 },
        stock: 15,
        capacity: "16oz",
        features: ["Improved design", "Heat retention", "Easy to clean"]
    },

    // Specialty Tumblers
    {
        id: "SPC001",
        name: "Smart LED Display Tumbler",
        category: "specialty",
        price: 4515,
        image: smartTumblerWithLedDisplay,
        description: "Smart tumbler with temperature display and LED indicators",
        rating: { value: 4.7, count: 60 },
        stock: 5,
        capacity: "20oz",
        features: ["LED temperature display", "USB rechargeable", "Smart notifications"]
    },
    {
        id: "SPC002",
        name: "Self-Stirring Tumbler",
        category: "specialty",
        price: 3515,
        image: selfStirringTumbler,
        description: "Electric self-stirring tumbler for perfect mixing",
        rating: { value: 4.5, count: 45 },
        stock: 8,
        capacity: "16oz",
        features: ["Electric stirring", "Rechargeable", "Multiple speed settings"]
    },
    {
        id: "SPC003",
        name: "Infuser Tumbler",
        category: "specialty",
        price: 3015,
        image: infuserTumbler,
        description: "Tea and fruit infuser tumbler with built-in strainer",
        rating: { value: 4.6, count: 80 },
        stock: 12,
        capacity: "20oz",
        features: ["Built-in infuser", "Leak-proof", "Easy to clean"]
    },
    {
        id: "SPC004",
        name: "Beer Tumbler",
        category: "specialty",
        price: 2815,
        image: beerTumbler,
        description: "Specialized tumbler for keeping beer cold and fresh",
        rating: { value: 4.4, count: 65 },
        stock: 15,
        capacity: "16oz",
        features: ["Frosted glass effect", "Insulated", "Wide mouth"]
    },
    {
        id: "SPC005",
        name: "Glass Tumbler",
        category: "specialty",
        price: 2015,
        image: glassTumbler,
        description: "Elegant glass tumbler for premium beverages",
        rating: { value: 4.3, count: 90 },
        stock: 20,
        capacity: "12oz",
        features: ["Crystal clear", "Heat resistant", "Stylish design"]
    },
    {
        id: "SPC006",
        name: "Infuser Mug",
        category: "specialty",
        price: 2515,
        image: infuserMug,
        description: "Tea infuser mug with built-in strainer",
        rating: { value: 4.5, count: 75 },
        stock: 15,
        capacity: "12oz",
        features: ["Built-in infuser", "Heat resistant", "Easy to clean"]
    },
    {
        id: "SPC007",
        name: "Smart LED Tumbler Pro",
        category: "specialty",
        price: 4815,
        image: smartTumblerWithLedDisplay2,
        description: "Advanced smart tumbler with enhanced LED display",
        rating: { value: 4.8, count: 40 },
        stock: 6,
        capacity: "20oz",
        features: ["Enhanced display", "Bluetooth connectivity", "App integration"]
    },

    // Kids Tumblers
    {
        id: "KID001",
        name: "Customizable Character Tumbler",
        category: "kids",
        price: 2515,
        image: customizableTumbler,
        description: "Fun tumbler with customizable character designs",
        rating: { value: 4.5, count: 100 },
        stock: 15,
        capacity: "12oz",
        features: ["Customizable design", "Spill-proof", "Easy to hold"]
    },
    {
        id: "KID002",
        name: "Acrylic Kids Tumbler",
        category: "kids",
        price: 1515,
        image: acrylicTumbler,
        description: "Lightweight and colorful tumbler for kids",
        rating: { value: 4.3, count: 90 },
        stock: 20,
        capacity: "10oz",
        features: ["Lightweight", "Fun colors", "BPA-free"]
    },
    {
        id: "KID003",
        name: "Plastic Kids Tumbler Set",
        category: "kids",
        price: 2015,
        image: plasticTumblers,
        description: "Set of colorful plastic tumblers for kids",
        rating: { value: 4.4, count: 75 },
        stock: 25,
        capacity: "8oz each",
        features: ["Set of 3", "BPA-free", "Fun designs"]
    },
    {
        id: "KID004",
        name: "Customizable Tumbler Plus",
        category: "kids",
        price: 2815,
        image: customizableTumbler2,
        description: "Enhanced customizable tumbler with more design options",
        rating: { value: 4.6, count: 85 },
        stock: 12,
        capacity: "12oz",
        features: ["More designs", "Premium finish", "Spill-proof"]
    }
];