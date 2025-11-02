# React Todo List Application

A modern, responsive Todo List application built with React and Bootstrap, featuring routing and local storage persistence.

## Features

- ✨ Create, Read, Update, and Delete (CRUD) todo items
- 🔄 Toggle todo completion status
- 💾 Persistent storage using localStorage
- 📱 Responsive design with Bootstrap
- 🛣️ Multiple routes (Home, About, Contact)
- 🔔 Alert notifications for actions

## Tech Stack

- React
- React Router v6
- React Bootstrap
- HTML5/CSS3
- localStorage API

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd todo-list
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

- **Add Todo**: Fill in the title and description fields in the form and click "Save"
- **Toggle Status**: Click the "Completed"/"Pending" button to toggle todo status
- **Delete Todo**: Click the "Delete" button to remove a todo
- **Navigation**: Use the navbar to switch between Home, About, and Contact pages

## Project Structure

```
src/
├── Components/
│   ├── About.js
│   ├── addtodo.js
│   ├── Contact.js
│   ├── footer.js
│   ├── nav.js
│   ├── todoitem.js
│   └── todos.js
├── App.css
├── App.js
├── index.css
└── index.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React.js team for the amazing framework
- React Bootstrap team for the UI components
- React Router team for the routing solution
