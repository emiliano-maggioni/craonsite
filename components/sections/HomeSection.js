import React from "react";
import classes from "./HomeSection.module.scss"
import Button from "components/buttons/Button"

const HomeSection = () => {
    return(
        <div   className={classes.container}>
            <div   className={classes.textContainer}>
                <div className={classes.content}> 
                    <h2  className={classes.payoff}>Realizziamo</h2>
                    <p  className={classes.payoffText}>i tuoi progetti</p>
                    <Button text="contattaci" />
                </div>
            </div>        
        </div>
    );
}

export default HomeSection;