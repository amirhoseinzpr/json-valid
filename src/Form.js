import React, { useState } from 'react';
import { TextField } from '@mui/material';
import JsonViewer from 'react-json-prettify';
import styles from './form.module.css'

const Form = () => {
  const [code, setCode] = useState('');
  const [isJSONValid, setJSONValid] = useState(true);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setJSONValid(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    try {
      JSON.parse(code);
      setJSONValid(true);
    } catch (error) {
      setJSONValid(false);
    }

  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
        <TextField onChange={handleCodeChange} id="outlined-multiline-static" label="JSON TEXT" multiline fullWidth rows={20} value={code}/>
        </label>
        <button type="submit" className={styles.button}>Check</button>
      </form>
      {isJSONValid ? (
          <JsonViewer json={code}/>
          ) : (
              <p className={styles.text}>The entered code is not a valid JSON!</p>
        )}
    </div>
  );
};

export default Form;