import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const feedbacks = Object.keys(options);
    return feedbacks.map(feedback => {
        return(
            <button
            key={feedback}
            type="button"
            className={css.optionBtn}
            name={feedback}
            onClick={onLeaveFeedback}
            >
                {feedback}
        </button>
        );
    }
    );
}


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}
