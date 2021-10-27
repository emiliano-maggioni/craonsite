import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./form-assistenza.module.scss";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from "components/buttons/Button";
import { FormControlLabel, TextareaAutosize, Checkbox } from "@material-ui/core";
import Link from 'next/link';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormAssistenza = ({ title, subtitle, icon }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    async function onSubmit(values) {

        console.log(values)

        let config = {
            method: 'POST',
            url: `/api/mailer`,
            headers: {
                'Content-type': 'application/json'
            },
            data: values,

        };

        // debugger

        try {
            const response = await axios(config);
            // debugger
            if (response.status == 200) {

                console.log('Success');

                /*  toast.success('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.', {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                  });
                      */
                alert('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.')
                reset();

            } else {
                alert('si è verificato un errore nell\'invio della email. \nPuò scrivereci all\'indirizzo info@craon.it, \noppure conttarci telefonicamente al 039.6612489.\nCi scusiamo per il disagio.')
            }
            console.log('response', response)

        } catch (error) {
            console.log('errore', error)
            alert('si è verificato un errore nell\'invio della email. \nPuò scrivereci all\'indirizzo info@craon.it, \noppure conttarci telefonicamente al 039.6612489.\nCi scusiamo per il disagio.')

        }

    }
    let msgerror = "Campo Obbligatorio";

    return (
        <div className={classes.containerForm}>
            <div className={classes.headerForm}>
                <div className={classes.titleForm} >
                    <img className={classes.iconForm} src={icon}></img>
                    {title}
                </div>

            </div>
            <div className={classes.contentForm}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        fullWidth
                        name="nome"
                        label="Nome *"
                        variant="outlined"
                        helperText={(!!errors.nome) ? msgerror : null}
                        {...register('nome', { required: true })}
                        error={!!errors.nome}
                        className="textField"

                    />

                    <TextField
                        fullWidth
                        name="cognome"
                        label="Cognome *"
                        variant="outlined"
                        helperText={(!!errors.cognome) ? msgerror : null}
                        {...register('cognome', { required: true })}
                        error={!!errors.cognome}
                        className="textField"

                    />

                    <TextField
                        fullWidth
                        name="azienda"
                        label="Azienda *"
                        variant="outlined"
                        helperText={(!!errors.azienda) ? msgerror : null}
                        {...register('azienda', { required: true })}
                        error={!!errors.azienda}
                        className="textField"

                    />

                    <TextField
                        fullWidth
                        name="email"
                        label="Email *"
                        variant="outlined"
                        helperText={!!errors.email ? "Inserire una email valida" : null}
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Inserire una email valida",
                            },
                        })}
                        error={!!errors.email}
                        className="textField"

                    />

                    <TextField
                        fullWidth
                        name="oggetto"
                        label="Oggetto *"
                        variant="outlined"
                        helperText={(!!errors.oggetto) ? msgerror : null}
                        {...register('oggetto', { required: true })}
                        error={!!errors.oggetto}
                        className="textField"

                    />

                    <TextareaAutosize

                        name="messaggio"
                        placeholder="Messaggio *"
                        className={`${classes.description} ${!!errors.messaggio && classes.errore}`}
                        {...register('messaggio', { required: true })}
                    //defaultValue={data?.oggetto}
                    />
                    <br></br>
                    {(!!errors.messaggio) && <div className="msgerror" >{msgerror}</div>}
                    <div className={classes.buttonArea}   >
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label={
                                <div>
                                    <span> * Ho letto  </span>
                                    <Link href={'/terminiecondizioni'}> la policy sulla privacy </Link>
                                </div>
                            }
                            labelPlacement="end"
                        />


                        <Button type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );

};

FormAssistenza.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
};

export default FormAssistenza;