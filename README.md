# WasteToWealth - Connecting Farmers and Companies for Sustainable Waste Management

WasteToWealth is a web application that bridges the gap between farmers who produce agricultural waste and companies that can utilize this waste for various industrial purposes. This platform facilitates sustainable waste management by connecting waste producers with waste consumers.

## 🌱 Project Overview

This is a college-level Node.js web application built with Express.js that enables:
- **Farmers** to list their agricultural waste (crop residues, organic waste, etc.)
- **Companies** to post their waste requirements for raw materials
- **Matching System** that connects suitable farmer-company pairs based on waste type and location

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - Database for storing user data and listings
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Embedded JavaScript templating engine
- **CSS** - Styling (custom stylesheets)

### Authentication & Security
- **Passport.js** - Authentication middleware
- **Bcrypt** - Password hashing
- **Express-session** - Session management

### Additional Libraries
- **Multer** - File upload handling (for waste images)
- **Method-override** - Enable PUT/DELETE requests
- **Connect-flash** - Flash messaging

## 📁 Project Structure

```
wastetowealth/
├── models/                 # Mongoose schemas
│   ├── FarmersListing.js    # Farmer waste listings
│   ├── CompanyListing.js    # Company requirements
│   ├── farmerlogin.js       # Farmer user model
│   └── companylogin.js      # Company user model
├── routes/                 # Route handlers
│   ├── farmerRoutes.js      # Farmer-specific routes
│   └── companyRoutes.js     # Company-specific routes
├── middleware/             # Custom middleware
│   ├── farmerauth.js        # Farmer authentication
│   ├── companyauth.js       # Company authentication
│   └── ...                  # Other middleware
├── views/                  # EJS templates
│   ├── home.ejs             # Home page
│   ├── index.ejs            # Farmer listings view
│   ├── indexcompany.ejs     # Company listings view
│   └── ...                  # Other view templates
├── public/                 # Static assets
│   ├── css/                 # Stylesheets
│   └── uploads/             # Uploaded images
│   
├── app.js                  # Main application file
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on default port 27017)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wastetowealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   mongod
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npx nodemon app.js
   ```

5. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## 🔐 User Roles

### Farmers
- Register/Login with personal details
- Create listings for agricultural waste
- View company requirements
- Edit/delete their own listings
- Upload images of waste materials

### Companies
- Register/Login with business details
- Post requirements for specific waste types
- View available farmer listings
- Edit/delete their own requirements

## 📋 Core Features

### 1. User Authentication
- Separate login systems for farmers and companies
- Secure password hashing with bcrypt
- Session-based authentication

### 2. Listing Management
- **Farmers** can create listings with:
  - Waste type (organic, crop residue, etc.)
  - Quantity available
  - Location
  - Contact information
  - Images of waste material

- **Companies** can post requirements for:
  - Specific waste types needed
  - Required quantities
  - Location preferences
  - Business details

### 3. Matching System
- Automatic matching based on waste type
- Location-based filtering
- Similar listings suggestions
- Cross-reference between farmer and company needs

### 4. Search & Filter
- Browse all listings
- Filter by waste type
- Search by location
- View detailed listing information

## 🧪 Testing

The project includes comprehensive Selenium tests for end-to-end testing.

### Setup Testing Environment

1. **Install Python dependencies**
   ```bash
   cd tests
   pip install -r requirements.txt
   ```

2. **Run Tests**
   ```bash
   # Run all tests
   python run_tests.py
   
   # Run specific test file
   python improved_selenium_tests.py
   
   # Run with unittest
   python -m unittest improved_selenium_tests.WasteToWealthTests -v
   ```

### Test Coverage

✅ Home page navigation
✅ Farmer registration and login
✅ Company registration and login
✅ Creating and managing listings
✅ Viewing and browsing listings
✅ Logout functionality
✅ Form validation
✅ Error handling

## 🗄️ Database Schema

### Farmer Listings
```javascript
{
  farmerName: String,
  wastetype: String,
  quantity: Number,
  location: String,
  contactPhone: String,
  image: String,
  email: String,
  createdAt: Date
}
```

### Company Listings
```javascript
{
  companyName: String,
  wastetypeRequired: String,
  requiredQuantity: Number,
  location: String,
  contactEmail: String,
  contactPhone: String,
  description: String,
  createdAt: Date
}
```

## 🎯 Key Routes

### Public Routes
- `GET /` - Home page
- `GET /login` - Login selection page
- `GET /register` - Registration selection page

### Farmer Routes
- `GET /farmer/login` - Farmer login
- `GET /farmer/register` - Farmer registration
- `GET /farmers` - View all farmer listings
- `GET /farmers/new` - Create new listing
- `GET /farmers/:id` - View specific listing

### Company Routes
- `GET /company/login1` - Company login
- `GET /company/register` - Company registration
- `GET /companies` - View all company listings
- `GET /companies/new` - Create new requirement
- `GET /companies/:id` - View specific requirement

## 🤝 Contributing

This is a college project, but contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

