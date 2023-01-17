const LanguageFilterItem = props => {
  const {languageDetails, isSelected, onSelecting} = props
  const {id, language} = languageDetails

  const clickButton = () => {
    onSelecting(id)
  }

  const buttonClassName = isSelected ? 'language-button' : 'selected-button'

  return (
    <li>
      <button className={buttonClassName} onClick={clickButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
