import React from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

import './Calculator.css';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "0", equalActive: false };
        this.clearDisplay = this.clearDisplay.bind(this);
        this.setDigit = this.setDigit.bind(this);
        this.executeOperation = this.executeOperation.bind(this);
    }

    clearDisplay () {
        this.setState({ value: "0", equalActive: false });
    }

    setDigit(digit) {
        if(this.state.equalActive) {
            this.clearDisplay();
            this.setState({ value: "0" })
        }

        if(this.state.value === "0") {
            this.setState({ value: digit });
        } else {
            this.setState(state => ({
                value: state.value.concat(digit)
            }));
        }
    }

    executeOperation() {
        let resultOperation = eval(this.state.value);
        
        if(resultOperation) {
            this.setState({ value: resultOperation.toString(), equalActive: true });
        } else {
            this.setState({ value: "Erro ao tentar executar a operação", equalActive: true });
        }
        
    }

    render() {
        return (
            <>
                <h1>Calculadora</h1>
                <div className="calculator">
                    <Display value={this.state.value} />
                    <Button label="AC" ButtonAc Transparency click={this.clearDisplay} />
                    <Button label="/" Transparency click={this.setDigit}/>
                    <Button label="7" click={this.setDigit} />
                    <Button label="8" click={this.setDigit} />
                    <Button label="9" click={this.setDigit} />
                    <Button label="*" Transparency click={this.setDigit} />
                    <Button label="4" click={this.setDigit} />
                    <Button label="5" click={this.setDigit} />
                    <Button label="6" click={this.setDigit} />
                    <Button label="-" Transparency click={this.setDigit} />
                    <Button label="1" click={this.setDigit} />
                    <Button label="2" click={this.setDigit} />
                    <Button label="3" click={this.setDigit} />
                    <Button label="+" Transparency click={this.setDigit} />
                    <Button label="0" click={this.setDigit} />
                    <Button label="." click={this.setDigit} />
                    <Button label="=" ButtonEqual click={this.executeOperation} />
                </div>
            </>
        );
    }
}