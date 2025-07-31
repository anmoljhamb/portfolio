import { Project } from "../types";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    projectSummary:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
    projectReadme: `# E-Commerce Dashboard

## Overview
This project is a full-featured admin dashboard built for e-commerce platforms. It provides comprehensive tools for managing products, orders, customers, and analytics.

## Features
- Real-time sales analytics
- Product inventory management
- Customer relationship management
- Order processing and tracking
- Revenue forecasting
- Multi-store support

## Technical Implementation
The dashboard is built using React with TypeScript for type safety and better developer experience. The backend leverages Node.js with Express and MongoDB for data persistence. Real-time updates are implemented using Socket.io.

## Key Challenges Solved
- Optimized large dataset rendering with virtualization
- Implemented real-time notifications system
- Created responsive design that works across all devices
- Built secure authentication with role-based access control`,
    sourceCodeLink: "https://github.com/username/ecommerce-dashboard",
    demoLink: "https://ecommerce-dashboard-demo.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    dateMade: "2024-03-15",
  },
  {
    id: 2,
    name: "AI Chat Application",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
    projectSummary:
      "Real-time chat application with AI-powered responses and sentiment analysis.",
    projectReadme: `# AI Chat Application

## Overview
An intelligent chat application that combines real-time messaging with AI-powered features including automated responses, sentiment analysis, and conversation insights.

## Features
- Real-time messaging with WebSocket
- AI-powered chat responses
- Sentiment analysis of conversations
- Message translation
- File sharing capabilities
- Voice message support

## Architecture
Built with React and Next.js frontend, Express.js backend, and PostgreSQL database. Integrates with OpenAI API for AI features and uses Redis for session management.

## Innovation
- Custom sentiment analysis algorithm
- Smart message routing
- Adaptive AI personality based on conversation context`,
    sourceCodeLink: "https://github.com/username/ai-chat-app",
    demoLink: null,
    techStack: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Socket.io",
    ],
    dateMade: "2024-01-22",
  },
  {
    id: 3,
    name: "Mobile Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=240&fit=crop",
    projectSummary:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    projectReadme: `# Mobile Fitness Tracker

## Overview
A comprehensive fitness tracking application built with React Native, featuring workout logging, nutrition tracking, and health metrics visualization.

## Features
- Workout planning and tracking
- Nutrition logging with barcode scanning
- Progress visualization with charts
- Social features and challenges
- Integration with wearable devices
- Offline functionality

## Technical Highlights
- Cross-platform development with React Native
- Real-time data synchronization
- Local data persistence with SQLite
- Integration with health APIs (Apple Health, Google Fit)
- Custom animation library for smooth UX

## Impact
- 10,000+ downloads within first month
- 4.8-star rating on app stores
- Featured in "Best Health Apps" category`,
    sourceCodeLink: "https://github.com/username/fitness-tracker",
    demoLink: "https://fitness-tracker-demo.app",
    techStack: ["React Native", "TypeScript", "SQLite", "Firebase", "Chart.js"],
    dateMade: "2023-11-08",
  },
  {
    id: 4,
    name: "Blockchain Voting System",
    image: null,
    projectSummary:
      "Secure and transparent voting system built on blockchain technology.",
    projectReadme: `# Blockchain Voting System

## Overview
A decentralized voting platform that ensures transparency, security, and immutability of election results using blockchain technology.

## Features
- Secure voter authentication
- Immutable vote recording
- Real-time result tracking
- Audit trail functionality
- Multi-election support
- Mobile-responsive interface

## Blockchain Integration
Built on Ethereum using Solidity smart contracts. Implements custom voting logic with security measures against common attacks.

## Security Features
- End-to-end encryption
- Zero-knowledge proofs for privacy
- Multi-signature wallet integration
- Audit logging
- Anti-fraud mechanisms`,
    sourceCodeLink: "https://github.com/username/blockchain-voting",
    demoLink: null,
    techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    dateMade: "2023-09-14",
  },
  {
    id: 5,
    name: "Data Visualization Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    projectSummary:
      "Interactive platform for creating and sharing data visualizations and dashboards.",
    projectReadme: `# Data Visualization Platform

## Overview
A powerful web-based platform that allows users to create interactive data visualizations and dashboards without coding knowledge.

## Features
- Drag-and-drop chart builder
- Multiple data source connections
- Real-time data updates
- Collaborative editing
- Export capabilities
- Template library

## Technical Architecture
Built with Vue.js frontend and Python Django backend. Uses D3.js for custom visualizations and WebSocket for real-time updates.

## Supported Visualizations
- Bar charts, line graphs, pie charts
- Heat maps and scatter plots
- Geographic maps
- Custom SVG visualizations
- Interactive filtering and drill-down`,
    sourceCodeLink: "https://github.com/username/data-viz-platform",
    demoLink: "https://dataviz-platform-demo.com",
    techStack: [
      "Vue.js",
      "Django",
      "D3.js",
      "PostgreSQL",
      "WebSocket",
      "Python",
    ],
    dateMade: "2024-02-10",
  },
];
