import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import MainLayout from "./components/MainLayout/MainLayout.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import "./App.css";
function App() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <MainLayout />
    </ErrorBoundary>
  );
}

export default App;
