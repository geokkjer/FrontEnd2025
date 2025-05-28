# htmx-tailwind-gleam-app

This project is a simple web application that utilizes Gleam for the backend, and htmx and Tailwind CSS for the frontend. 

## Project Structure

```
htmx-tailwind-gleam-app
├── src
│   ├── app.gleam          # Main entry point for the Gleam backend application
│   └── web
│       └── router.gleam   # Defines the routes for the application
├── static
│   ├── index.html          # Main HTML file for the frontend
│   ├── styles.css          # Tailwind CSS styles
│   └── app.js              # JavaScript code for htmx interactions
├── gleam.toml              # Gleam project configuration
├── package.json            # npm configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd htmx-tailwind-gleam-app
   ```

2. **Install dependencies:**
   - For the Gleam backend, ensure you have the Gleam compiler installed. You can find installation instructions [here](https://gleam.run/getting-started/).
   - For the frontend, run:
     ```
     npm install
     ```

3. **Build Tailwind CSS:**
   - Make sure you have Tailwind CSS installed. You can find installation instructions [here](https://tailwindcss.com/docs/installation).
   - Build the CSS using:
     ```
     npx tailwindcss -i ./static/styles.css -o ./static/output.css --watch
     ```

4. **Run the Gleam server:**
   ```
   gleam run
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:YOUR_PORT` to view the application.

## Usage Guidelines

- The application uses htmx for dynamic content loading. You can modify the frontend JavaScript in `static/app.js` to add more interactions.
- Tailwind CSS is used for styling. You can customize the styles in `static/styles.css` or modify the Tailwind configuration in `tailwind.config.js`.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.