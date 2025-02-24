# Software Requirements Specification (SRS)

## 1. Introduction
### 1.1 Purpose
This document specifies the functional and non-functional requirements for the Book Buddy Library Management System.

### 1.2 System Overview
The system provides an online library management solution, allowing users to browse, rent, and review books while giving administrators tools to manage inventory and rental records.

### 1.3 System Scope
- Web-based application with user and admin access.
- Secure login with Google authentication.
- Book rental and return tracking.
- Review and rating system.
- Automated email reminders for due books.
- Payment processing for rentals.

## 2. Functional Requirements
(As outlined in the FRD)

## 3. Non-Functional Requirements
- **NFR-1**: The system must handle at least 1,000 concurrent users.
- **NFR-2**: The system must have an uptime of 99.9%.
- **NFR-3**: User data must be encrypted and stored securely.
- **NFR-4**: The system must be responsive across different devices.
- **NFR-5**: The application must comply with GDPR data privacy regulations.

## 4. System Design Constraints
- **Technology Stack**: Next.js, React, Tailwind CSS, MongoDB.
- **Database Management**: Mongoose for structured data handling.
- **Hosting & Deployment**: Vercel for front-end hosting, MongoDB Atlas for database storage.
- **Containerization**: Docker for application deployment.

## 5. Assumptions & Dependencies
- Google authentication must be available.
- Users must have internet access.
- Payment gateway services (e.g., Stripe) must be operational.

## 6. Future Enhancements
- AI-based book recommendations.
- Mobile application integration.
- Advanced analytics for user reading patterns.

