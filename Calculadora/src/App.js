import Button from './components/Button'
import Input from './components/Input'
import { Container, Content, Row } from './Styles'
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')

  };
  // Adicionar número na tela
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  // somar números
  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    };
  };

  // subtrair números
  const handleMinusNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      console.log('minus')
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('')
    }
  }
  //Multiplicação
  const handleMultipliedNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      console.log('multiplied')
      const multiplied = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplied));
      setOperation('')
    }
  }
  // Divisão
  const handleDividedNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      console.log('divided')
      const divided = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divided));
      setOperation('')
    }
  }
  // resultado
  const handleEquals = () => {

    if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '*':
          handleMultipliedNumber();
          break;
        case '/':
          handleDividedNumber();
          break;
        default: break;

      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="÷" onClick={handleDividedNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={handleMultipliedNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
