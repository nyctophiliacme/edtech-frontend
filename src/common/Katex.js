import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Katex extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        tagName: PropTypes.string,
        renderOptions: PropTypes.object,
    };

    componentDidMount() {
        this.katex();
    }

    componentDidUpdate(props, state) {
        this.katex();
    }

    katex = () => {
        const { children, renderOptions } = this.props;

        if (window.renderMathInElement) {
            window.renderMathInElement(this.container, {
                delimiters: [
                    { left: '$', right: '$', display: false },
                    { left: '\(', right: '\)', display: true },
                    { left: '\[', right: '\]', display: true }
                ],
                ...renderOptions,
            });
        } else {
            if (window.katex) {
                window.katex.render(children, this.container, {
                    throwOnError: false,
                });
            }
        }
    };

    render() {
        const { tagName, children, ...restProps } = this.props;
        const TagName = tagName || 'div';
        console.log(TagName);
        return (
            <TagName {...restProps} ref={(node) => this.container = node}>
                {children ? children : null}
            </TagName>
        );
    }
}

export default Katex;
