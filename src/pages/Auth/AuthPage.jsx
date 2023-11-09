import SignUpForm from "../../components/SignUp/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
    return (
        <main>
            <h1>AuthPage</h1>
            < SignUpForm />
            < LoginForm setUser={ setUser} />
        </main>
    );
}