
import React from "react";
import css from './Container.module.css';

export const Container = ({children}) => (
    <div className= {css.feedbackContainer}>
        {children}
    </div>
);
