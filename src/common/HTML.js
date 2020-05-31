import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Katex from './Katex';

class HTML extends Component {
    static propTypes = {
        tagName: PropTypes.string,
        html: PropTypes.any,
        /* Pass true to exclude MathJax logic */
        includeKatex: PropTypes.bool,
    };

    render() {
        const { tagName, html, ...restProps } = this.props;

        if (!html) return null;

        return (
            <Katex {...restProps} tagName={tagName} dangerouslySetInnerHTML={{ __html: html }}></Katex>
        )
    }
}

export default HTML;
