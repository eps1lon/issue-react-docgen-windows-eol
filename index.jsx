import * as PropTypes from 'prop-types'

/**
 * A Text component
 * with a newline comment
 */
function Text(props) {
    return <span>{props.value}</span> 
}

Text.propTypes = {
    /**
     * the actual text
     * and here is a newline comment
     */
    value: PropTypes.string.isRequired,
}

export default Text;