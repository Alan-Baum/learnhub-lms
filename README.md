# LearnHub LMS

## Project Overview

LearnHub LMS is a full-stack Learning Management System built with Django REST Framework and React. The application allows teachers to create and manage courses while students can browse and enroll in available learning content.

The project demonstrates full-stack web development skills including authentication, API development, frontend routing, responsive UI design, accessibility improvements, CRUD functionality, role-based access control, automated testing, and deployment.

## Key Achievements

- Full-stack Django + React application
- REST API integration using Django REST Framework
- Token authentication and protected routes
- Student, Teacher, and Admin role workflows
- Full CRUD course management
- Enrollment system with real-time UI updates
- Responsive Material UI interface
- Lighthouse Accessibility Score: 100
- Automated backend and frontend testing
- Production deployment using Railway and Netlify
- Structured Git commit history and documentation

---

## Live Deployment

### Frontend

https://learnhub-lms-alan.netlify.app

### Backend API

https://learnhub-lms-production-985e.up.railway.app/api/courses/

---

## Demo Accounts

### Teacher Account

Username: teacher1
Password: password123

### Student Account

Username: student1
Password: password123

### Admin Account

Username: admin1
Password: password123

---

## Features

### Teacher Features

- Teacher login authentication
- Create new courses
- Edit existing courses
- Delete courses
- Teacher dashboard
- Course management tools

### Student Features

- Student login authentication
- Browse available courses
- Enroll in courses
- Unenroll from courses
- Student learning dashboard
- Continue Learning workflow

### Admin Features

- Admin login authentication
- Admin dashboard
- View all registered users
- Manage all courses
- Create courses
- Edit courses
- Delete courses

### General Features

- Protected routes
- Role-based access control
- Snackbar feedback notifications
- Responsive Material UI design
- Accessibility improvements
- Semantic HTML structure
- Production build testing
- Lighthouse accessibility optimisation

---

## Technologies Used

| Category       | Technologies                                      |
| -------------- | ------------------------------------------------- |
| Frontend       | React, Vite, React Router, Material UI            |
| Backend        | Django, Django REST Framework                     |
| Database       | SQLite                                            |
| Authentication | Token Authentication                              |
| Testing        | Vitest, React Testing Library, Django APITestCase |
| Tools          | Git, GitHub, Lighthouse, VS Code                  |

## External Libraries

The project uses several external libraries to improve development efficiency, user experience, and testing.

### Material UI (MUI)

Used to provide responsive, accessible, and professionally styled React components such as buttons, forms, cards, alerts, and navigation elements.

### React Router

Used for client-side routing and navigation between pages including login, dashboard, courses, and course detail views.

### Django REST Framework

Used to build RESTful API endpoints for authentication, users, courses, and enrollments.

### Vitest

Used to implement automated frontend component testing.

### React Testing Library

Used to test React components from the user's perspective and verify UI behaviour.

## Testing

### Automated Testing

#### Django API Tests

Implemented using Django REST Framework APITestCase.

Tests include:

- Course list endpoint returns data correctly
- Authenticated teacher can create a course

Result:

- 2 automated API tests passed successfully

#### React Component Testing

Implemented using:

- Vitest
- React Testing Library

Tests include:

- Login page renders correctly
- Username field renders
- Password field renders
- Login button renders

Result:

- 1 component test passed successfully

### Manual UI Testing

- Authentication testing
- Course CRUD workflow testing
- Enrollment testing
- Unenrollment testing
- Student dashboard testing
- Teacher dashboard testing
- Admin dashboard testing
- User management testing
- Protected route testing
- HTML structure validation
- CSS responsive layout testing
- Mobile device testing
- Accessibility testing
- Lighthouse accessibility testing
- Production deployment testing

### Test Results

All automated and manual tests completed successfully.

- Django API Tests: Passed
- React Component Tests: Passed
- Responsive Design Tests: Passed
- Accessibility Tests: Passed
- Authentication Tests: Passed
- CRUD Workflow Tests: Passed

### Tools

- Git
- GitHub
- Lighthouse
- VS Code

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Alan-Baum/learnhub-lms.git
cd learnhub-lms
```

### Backend Setup

```bash
cd backend
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## User Roles

### Teacher Account

Teachers can:

- Create courses
- Edit courses
- Delete courses
- Manage learning content

### Student Account

Students can:

- Browse courses
- Enroll in courses
- Unenroll from courses
- Access enrolled learning content

### Admin Account

Administrators can:

- View all registered users
- Manage all courses
- Create courses
- Edit courses
- Delete courses
- Access the Admin Dashboard

---

## Accessibility

Accessibility improvements were implemented throughout the application including:

- Semantic heading hierarchy
- Main landmark structure
- Improved button labels
- Dialog accessibility
- Snackbar feedback improvements
- Keyboard-friendly interactions

### Lighthouse Results

- Accessibility: 100
- Best Practices: 96

---

## Screenshots

### Login Page

![Login Page](screenshots/01-login-page.png)

---

### Teacher Dashboard

![Teacher Dashboard](screenshots/02-teacher-dashboard.png)

---

### Teacher Course Management

![Teacher Course Management](screenshots/03-teacher-course-management.png)

---

### Create Course Page

![Create Course Page](screenshots/04-creat-course-page.png)

---

### Edit Course Page

![Edit Course Page](screenshots/05-edit-course-page.png)

---

### Student Dashboard

![Student Dashboard](screenshots/06-student-dashboard.png)

---

### Course Detail Page

![Course Detail Page](screenshots/07-course-detail-page.png)

---

### Login Snackbar Feedback

![Login Snackbar](screenshots/08-login-snackbar.png)

---

### Course Detail Dashboard Navigation

![Course Detail Navigation](screenshots/09-course-detail-dashboard-navigation.png)

---

### Lighthouse Accessibility Audit

![Lighthouse Audit](screenshots/10-lighthouse-accessibility-audit.png)

---

### Lighthouse Accessibility Score

![Lighthouse Accessibility Score](screenshots/11-lighthouse-accessibility-100.png)

---

### Courses Page Polished Layout

![Courses Page](screenshots/12-courses-page-polished-layout.png)

---

### Student Dashboard Enrolled Courses

![Student Dashboard Enrolled](screenshots/13-student-dashboard-enrolled-courses.png)

---

### Teacher Dashboard Polished

![Teacher Dashboard Polished](screenshots/14-teacher-dashboard-polished.png)

---

### Green Enrolled Button State

![Green Enrolled Button](screenshots/15-green-enrolled-button-state.png)

---

### Centered Snackbar Feedback

![Centered Snackbar](screenshots/16-centered-snackbar-feedback.png)

---

### Admin Dashboard

![Admin Dashboard](screenshots/17-admin-dashboard.png)

---

### User Management

![User Management](screenshots/18-admin-user-management.png)

### Django REST API Production

![Django REST API](screenshots/19-django-rest-api-production.png)

---

### Production Teacher Dashboard

![Production Teacher Dashboard](screenshots/20-production-teacher-dashboard-live.png)

---

### Production Student Dashboard

![Production Student Dashboard](screenshots/21-production-student-dashboard-live.png)

---

### Full Stack Production Application

![Full Stack Production](screenshots/22-full-stack-production-working.png)

---

### Course CRUD Functionality

![Course CRUD Functionality](screenshots/23-production-course-crud-working.png)

---

### Responsive Mobile Production View

![Responsive Mobile Production View](screenshots/24-responsive-mobile-production-view.png)

---

### Admin Dashboard

![Admin Dashboard](screenshots/25-admin-dashboard.png)

---

### Admin User Management

![Admin User Management](screenshots/26-admin-user-management.png)

---

## Testing

### Automated Testing

#### Django API Tests

Implemented using Django REST Framework APITestCase.

Tests include:

- Course list endpoint returns data correctly
- Authenticated teacher can create a course

Result:

- 2 automated API tests passed successfully

#### React Component Testing

Implemented using:

- Vitest
- React Testing Library

Tests include:

- Login page renders correctly
- Username field renders
- Password field renders
- Login button renders

Result:

- 1 component test passed successfully

### Manual Testing

- CRUD workflow testing
- Authentication testing
- Enrollment testing
- Role-based dashboard testing
- Responsive layout testing
- Lighthouse accessibility testing
- Production build testing

---

## Future Improvements

- Course search functionality
- User profile management
- Progress tracking
- File uploads
- Instructor analytics
- Course categories

---

## Author

Alan Baum

Learning People Full Stack Software Development Student
