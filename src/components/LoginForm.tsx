import * as React from 'react';

import check from '../assets/img/CheckIcon.svg';

import './LoginForm.scss';

interface ILoginFormState {
    highlightEmail: boolean;
    highlightPassword: boolean;
    email: string;
    password: string;
}

enum INPUT_TYPE {
    EMAIL = 'email',
    PASSWORD = 'current-password'
}

export class LoginForm extends React.Component<{}, ILoginFormState> {

    constructor(props: {}){
        super(props)
        this.state = {
            highlightEmail: false,
            highlightPassword: false,
            email: '',
            password: ''
        }
    }

    private inputClick = (e: React.FocusEvent) => {
        switch(e.currentTarget.getAttribute('name')) {
            case INPUT_TYPE.EMAIL:
                this.setState({highlightEmail: true, highlightPassword: false});
                break;
            case INPUT_TYPE.PASSWORD:
                this.setState({highlightEmail: false, highlightPassword: true});
                break;
            default: 
                this.setState({highlightEmail: false, highlightPassword: false});
        }
    }

    private unselectInput = (e : React.FocusEvent) => {
        switch(e.currentTarget.getAttribute('name')) {
            case INPUT_TYPE.EMAIL:
                this.setState({highlightEmail: false});
                break;
            case INPUT_TYPE.PASSWORD:
                this.setState({highlightPassword: false});
                break;
            default: 
        }
    }

    private inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.currentTarget.getAttribute('name')) {
            case INPUT_TYPE.EMAIL:
                this.setState({email: e.currentTarget.value});
                break;
            case INPUT_TYPE.PASSWORD:
                this.setState({password: e.currentTarget.value});
                break;
            default:
        }
    }

    private onSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log("triggered")
    }
    

    public render() {
        const emailClassLabel = this.state.highlightEmail ? "login-form-label highlight" : "login-form-label";
        const passwordClassLabel = this.state.highlightPassword ? "login-form-label highlight" : "login-form-label";

        const emailValidClass = !!this.state.email ? "valid" : "";
        const passwordValidClass = !!this.state.password ? "valid" : "";
        return (
            <>
                <form className="login-form" action="">
                    <label className={emailClassLabel} htmlFor="email">
                        <span>
                            Email
                        </span> 
                        <input
                            onFocus={this.inputClick}
                            onBlur={this.unselectInput}
                            onChange={this.inputOnChange}
                            className={"login-form-input"}
                            autoComplete="email"
                            type="email"
                            name="email"
                        />
                        <img src={check} alt="check" className={emailValidClass} />
                    </label>
                    <label className={passwordClassLabel} htmlFor="current-password">
                        <span>
                            Password
                        </span>
                        <input
                            type="password"
                            onFocus={this.inputClick}
                            onBlur={this.unselectInput}
                            onChange={this.inputOnChange}
                            className={"login-form-input"}
                            autoComplete="current-password"
                            name="current-password"
                        />
                        <img src={check} alt="check" className={passwordValidClass} />
                    </label>

                    <input className="login-form-submit" type="submit" onClick={this.onSubmit} value="Sign In Now"/>
                </form>
                <div className="login-form-password-reset" >
                    <span>
                        Forgot Password? 
                    </span>
                    <a href="#">Reset</a>
                </div>
            </>
        );
    }
}

export default LoginForm
