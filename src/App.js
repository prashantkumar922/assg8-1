import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Users from "./pages/Users";
import TodoApp from "./pages/TodoApp";
import ThemeSwitcher from "./pages/ThemeSwitcher";
import PasswordToggle from "./pages/PasswordToggle";
import UserGreeting from "./pages/UserGreeting";
import ToggleMessage from "./pages/ToggleMessage";
import Person from "./pages/Person";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/theme" element={<ThemeSwitcher />} />
      <Route path="/password" element={<PasswordToggle />} />
      <Route path="/greeting" element={<UserGreeting />} />
      <Route path="/toggle" element={<ToggleMessage />} />
      <Route path="/person" element={<Person name="Prashant" age={20} />} />
    </Routes>
  </Router>
);

export default App;
