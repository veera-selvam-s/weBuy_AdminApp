import React from 'react';
import {Form} from 'react-bootstrap';
import { FormGroup, FormLabel,FormHelperText,FormControl,TextField } from '@material-ui/core';

const Input=(props)=> {
    return (
        
            <FormGroup className="mb-3" controlId="formBasicEmail">
                {/* <FormLabel style={{ fontWeight: "600" }}>{props.label}</FormLabel> */}
                {/* <Form.Control 
                    type={props.type}
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange}
                /> */}
                <TextField id="standard-basic" 
                label={props.label} 
                type={props.type}
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange}
                
                />

                <FormHelperText className="text-muted">
                    {props.errorMessage}
                </FormHelperText>
            </FormGroup>
        
    );
}

export default Input;
