"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function ChinaTownRestaurant() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
    });

    const testimonials = [
        { name: 'Sarah Chen', text: 'The best authentic Chinese food in town! The atmosphere is amazing and the staff is so welcoming.', rating: 5 },
        { name: 'Michael Wong', text: 'Absolutely love their dim sum! Reminds me of home. Highly recommended!', rating: 5 },
        { name: 'Emily Rodriguez', text: 'Beautiful restaurant with delicious food. The kung pao chicken is my favorite!', rating: 5 }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const menuItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Menu', id: 'menu' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'Reservation', id: 'reservation' },
        { name: 'Contact', id: 'contact' }
    ];

    const foodMenu = [
        { name: 'Spring Rolls', category: 'Starters', price: '$8.99', desc: 'Crispy rolls with fresh vegetables', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400' },
        { name: 'Dumplings', category: 'Dim Sum', price: '$12.99', desc: 'Handmade pork and shrimp dumplings', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400' },
        { name: 'Kung Pao Chicken', category: 'Main Course', price: '$16.99', desc: 'Spicy chicken with peanuts', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400' },
        { name: 'Sweet Sour Pork', category: 'Main Course', price: '$15.99', desc: 'Tender pork in tangy sauce', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400' },
        { name: 'Hot Sour Soup', category: 'Soups', price: '$6.99', desc: 'Traditional spicy soup', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400' },
        { name: 'Fried Rice', category: 'Main Course', price: '$11.99', desc: 'Classic Yangzhou fried rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400' },
        { name: 'Mango Pudding', category: 'Desserts', price: '$5.99', desc: 'Silky smooth mango dessert', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
        { name: 'Jasmine Tea', category: 'Drinks', price: '$3.99', desc: 'Fragrant traditional tea', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=400' }
    ];

    const categories = ['All', 'Starters', 'Main Course', 'Dim Sum', 'Soups', 'Desserts', 'Drinks'];

    const galleryImages = [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
        'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600'
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMenuOpen(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Reservation request submitted! We will confirm via email shortly.');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
    };

    const filteredMenu = selectedCategory === 'All' ? foodMenu : foodMenu.filter(item => item.category === selectedCategory);

    return (
        <div className="bg-black text-white">
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">中</div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">China Town</h1>
                                <p className="text-xs text-gray-400">Restaurant</p>
                            </div>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {menuItems.map((item) => (
                                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`transition-colors ${activeSection === item.id ? 'text-red-500' : 'text-white hover:text-red-500'}`}>{item.name}</button>
                            ))}
                        </div>

                        <button className="hidden md:block bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-full hover:from-red-700 hover:to-red-800 transition-all">Order Online</button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 bg-black/95 rounded-lg p-4">
                            {menuItems.map((item) => (
                                <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-3 hover:text-red-500 transition-colors">{item.name}</button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200" alt="Chinese food" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 text-center px-4">
                    <div className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">China Town</div>
                    <div className="text-xl md:text-3xl mb-4 text-yellow-400 font-light">Restaurant</div>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">Authentic Flavors from the Heart of China</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => scrollToSection('menu')} className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-full text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105">Explore Menu</button>
                        <button onClick={() => scrollToSection('reservation')} className="border-2 border-yellow-500 px-8 py-4 rounded-full text-lg hover:bg-yellow-500/20 transition-all">Book a Table</button>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <ChevronDown size={32} className="text-yellow-500" />
                </div>
            </section>

            <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Our Story</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600" alt="Restaurant interior" className="rounded-lg shadow-2xl" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg -z-10"></div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">Since 1995, China Town Restaurant has been serving authentic Chinese cuisine passed down through generations. Our master chefs bring traditional recipes from Sichuan, Canton, and Shanghai to create an unforgettable dining experience.</p>
                            <p className="text-lg text-gray-300 leading-relaxed">We believe in using only the finest ingredients, time-honored cooking techniques, and the warmth of Chinese hospitality to make every meal special. From our family to yours, we invite you to taste the true essence of China.</p>
                            <div className="grid grid-cols-3 gap-4 pt-6">
                                <div className="text-center"><div className="text-3xl font-bold text-yellow-500">28+</div><div className="text-sm text-gray-400">Years</div></div>
                                <div className="text-center"><div className="text-3xl font-bold text-yellow-500">50+</div><div className="text-sm text-gray-400">Dishes</div></div>
                                <div className="text-center"><div className="text-3xl font-bold text-yellow-500">10K+</div><div className="text-sm text-gray-400">Happy Guests</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="menu" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Our Menu</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg">Discover authentic Chinese flavors</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full transition-all ${selectedCategory === cat ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>{cat}</button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredMenu.map((item, idx) => (
                            <div key={idx} className="group bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative overflow-hidden h-48">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-sm text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <span className="text-yellow-500 font-bold">{item.price}</span>
                                    </div>
                                    <p className="text-xs text-gray-500">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all">View Full Menu</button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">What Our Guests Say</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto"></div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
                        <div className="flex justify-center mb-4">
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
                            ))}
                        </div>
                        <p className="text-xl text-gray-300 text-center mb-6 italic">{testimonials[currentTestimonial].text}</p>
                        <p className="text-center text-yellow-500 font-semibold">- {testimonials[currentTestimonial].name}</p>
                        <div className="flex justify-center mt-6 gap-2">
                            {testimonials.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentTestimonial(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentTestimonial ? 'bg-yellow-500 w-8' : 'bg-gray-600'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Gallery</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg">Experience our ambiance and cuisine</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-lg group cursor-pointer h-64">
                                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="reservation" className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Reserve a Table</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg">Book your dining experience today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Number of Guests</label>
                                <select value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white">
                                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Date</label>
                                <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Time</label>
                                <input type="time" required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors text-white" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105">Book Now</button>
                    </form>
                </div>
            </section>

            <section id="contact" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Contact Us</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
                        <p className="text-gray-400 text-lg">Visit us or get in touch</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-red-500 mt-1 flex-shrink-0" size={24} />
                                <div><h3 className="font-semibold mb-1">Address</h3><p className="text-gray-400">123 Dragon Street, Chinatown</p><p className="text-gray-400">New York, NY 10013</p></div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="text-red-500 mt-1 flex-shrink-0" size={24} />
                                <div><h3 className="font-semibold mb-1">Phone</h3><p className="text-gray-400">+1 (555) 123-4567</p></div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="text-red-500 mt-1 flex-shrink-0" size={24} />
                                <div><h3 className="font-semibold mb-1">Email</h3><p className="text-gray-400">info@chinatownrestaurant.com</p></div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="text-red-500 mt-1 flex-shrink-0" size={24} />
                                <div><h3 className="font-semibold mb-1">Opening Hours</h3><p className="text-gray-400">Mon - Thu: 11:00 AM - 10:00 PM</p><p className="text-gray-400">Fri - Sat: 11:00 AM - 11:00 PM</p><p className="text-gray-400">Sunday: 12:00 PM - 9:00 PM</p></div>
                            </div>
                            <div className="pt-6">
                                <h3 className="font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Facebook size={20} /></a>
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg overflow-hidden h-96">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sChinatown%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Restaurant Location"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-black py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-xl font-bold">中</div>
                                <div><h3 className="font-bold text-lg">China Town</h3><p className="text-xs text-gray-400">Restaurant</p></div>
                            </div>
                            <p className="text-gray-400 text-sm">Bringing authentic Chinese flavors to your table since 1995.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><button onClick={() => scrollToSection('home')} className="hover:text-red-500 transition-colors">Home</button></li>
                                <li><button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition-colors">About</button></li>
                                <li><button onClick={() => scrollToSection('menu')} className="hover:text-red-500 transition-colors">Menu</button></li>
                                <li><button onClick={() => scrollToSection('reservation')} className="hover:text-red-500 transition-colors">Reservations</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-red-500 transition-colors">Dine In</a></li>
                                <li><a href="#" className="hover:text-red-500 transition-colors">Takeaway</a></li>
                                <li><a href="#" className="hover:text-red-500 transition-colors">Delivery</a></li>
                                <li><a href="#" className="hover:text-red-500 transition-colors">Catering</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Newsletter</h4>
                            <p className="text-sm text-gray-400 mb-4">Subscribe for special offers and updates</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-yellow-500" />
                                <button className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded text-sm hover:from-red-700 hover:to-red-800 transition-all">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400 text-sm">&copy; 2024 China Town Restaurant. All rights reserved.</p>
                        <p className="text-gray-500 text-xs mt-2">Designed with passion for authentic Chinese cuisine</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}