import "./App.css";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import About from "./About";
import Team from "./Team";
import Services from "./Services";
import GetInvolved from "./GetInvolved";
import Contact from "./Contact";
import Nav from "./Nav";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import QuickLinks from "./QuickLinks";
import NotFound from "./NotFound";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <Home />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PageWrapper>
                            <About />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/team"
                    element={
                        <PageWrapper>
                            <Team />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <PageWrapper>
                            <Services />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/join"
                    element={
                        <PageWrapper>
                            <GetInvolved />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <PageWrapper>
                            <Contact />
                        </PageWrapper>
                    }
                />
                <Route path="/links" element={<QuickLinks />} />
                <Route path='*' exact={true} element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function PageWrapper({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
}

function App() {
    const noLayout = ["/links"];
    const showLayout = !noLayout.includes(window.location.pathname);

    return (
        <div className="App">
            <Router>
                {showLayout && <Nav />}
                <AnimatedRoutes />
                {showLayout && <Footer />}
            </Router>
        </div>
    );
}

export default App;
