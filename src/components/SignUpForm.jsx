import { Component } from 'react';
import { signUp } from '../utilities/users-service';

export default class SignUpForm extends Component {
    // Set state using class field approach
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        // Try submitting a copy of state (minus .confirm & .error)
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            // The signup service method puts the user object in the payload then resolves it as a JSON Web Token (JSWT)
            const user = await signUp(formData);
            console.log(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}