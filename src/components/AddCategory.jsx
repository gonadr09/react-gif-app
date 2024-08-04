import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ( {onNewCategory} ) => {
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ( {target} ) => {
    setInputValue(target.value)
  }
  
  const onSubmit = ( e ) => {
    e.preventDefault()
    const newInputValue = inputValue.trim()
    if ( newInputValue.length < 1 ) return
    onNewCategory( newInputValue )
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit} className="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
        <button type="submit" value="Buscar">Agregar</button>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}