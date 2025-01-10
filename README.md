# ExpenseManagement

**ExpenseManagement** is a web application designed for efficient expense management. It allows users to track, filter, and view their expenses, using categories and amount ranges. The project is built with **Laravel 11** for the backend and **React** for the frontend, with **Inertia.js** to provide a seamless experience between both. The user interface incorporates **Lucide** for icons and **Tailwind CSS** for styling.

## Technologies Used

- **Laravel 11**: PHP framework for the backend.
- **React**: JavaScript library for building the frontend user interface.
- **Inertia.js**: A library that enables seamless navigation between the backend and frontend.
- **Lucide**: Icon library used in the user interface.
- **Tailwind CSS**: CSS framework for responsive and custom design.

## Installation

### Prerequisites

Before starting, make sure you have the following installed:

- **PHP 8.1+** (for Laravel)
- **Node.js** (for React and Tailwind CSS)
- **Composer** (for managing PHP dependencies)
- **NPM or Yarn** (for managing JavaScript dependencies)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Deilons/ExpenseManagement.git
cd ExpenseManagement
```

### Install Backend Dependencies (Laravel)

Run the following command to install Laravel dependencies:

```bash
composer install
```

### Install Frontend Dependencies (React)

Navigate to the `frontend` folder and run:

```bash
npm install
```

### Configure the `.env` File

Copy the `.env.example` file and rename it to `.env`. Then, configure your environment variables, especially for the database connection:

```bash
cp .env.example .env
php artisan key:generate
```

Add the following database configuration to the `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST= bl5eqkbwii9ank6dqgi6-mysql.services.clever-cloud.com
DB_PORT= 3306
DB_DATABASE= bl5eqkbwii9ank6dqgi6
DB_USERNAME= uhb4wtwnr7opet7p
DB_PASSWORD= B0Bucxg0NnEJPc2LmdnZ
```

### Database Migration

The project includes migrations, run the following command to migrate the database:

```bash
php artisan migrate
```

### Running the Application

To run the application locally, first, start the Laravel server:

```bash
php artisan serve
```

Then, in another terminal, start the React development server:

```bash
npm run dev
```
Or use this conmand to run both servers:
```bash
composer run dev
```

Access the application at `http://localhost:8000`.

## Features

1. **User Registration and Login**: Users can register and log in to manage their expenses.
2. **Expense Management**: Users can add, edit, and delete their expenses.
3. **Expense Filters**: Expenses can be filtered by date, category, and amount range.
4. **Expense Summary**: Users can view a summary of their expenses, including visual charts representing the percentage of expenses by category.

## Project Structure

The project structure is as follows:

```
/ExpenseManagement
├── /app              # Backend logic (Laravel)
│   ├── /Http
│   └── /Models
├── /frontend         # Frontend logic (React)
│   ├── /components
│   └── /pages
├── /public           # Public files (CSS, JS, images)
└── /resources        # Laravel views and other resources
```

## Contribution

To contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/my-new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch to the remote repository (`git push origin feature/my-new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Author

**David Sánchez Castrillón**  
Developer and creator of the **ExpenseManagement** project.
