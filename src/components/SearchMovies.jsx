import styled from "styled-components";
import PropTypes from 'prop-types';

const StyleInputSearch = styled.input`
  width: 230px;
  height: 30px;
  border: 1px solid black;
  outline: none;
  border-radius: 20px;
  padding-left: 15px;
`;


export function InputSearch(props){
 return(
    <StyleInputSearch type="text" placeholder="Search" value={props.value} onChange={props.onChange} />
 );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};