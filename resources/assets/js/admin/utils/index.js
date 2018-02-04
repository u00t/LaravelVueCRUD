export function filterColor (value) {
  let c = value
  switch (value) {
    case 'primary':
      c = '#7872ff'
      break
    case 'info':
      c = '#2196f3'
      break
    case 'warning':
      c = '#ff9800'
      break
    case 'success':
      c = '#4caf50'
      break
    case 'danger':
      c = '#f44336'
      break
    default:
      break
  }
  return c
}

/**
 * Check a given item exists in an array
 * @param  {array} _array
 * @param  {mix} key             item to find
 * @param  {mix} [_default=null] default return value
 * @return {mix}                 exists item or default value
 */
export function arrayHas (_array, key, _default = null) {
  let result = _default
  let len = _array.length
  
  for (let i = 0; i < len; i++) {
    if (_array[i] === key) {
      result = _array[i]
      break
    }
  }

  return result
}

/**
 * Converts string to camel case
 */
 /**
  * A simple function to convert string into camelCase
  * @param  {string} str
  * @return {string}
  */
export function camelCase (str) {
  return str.toLowerCase().replace(/-(.)/g, (match, group1) => {
    return group1.toUpperCase()
  })
}
