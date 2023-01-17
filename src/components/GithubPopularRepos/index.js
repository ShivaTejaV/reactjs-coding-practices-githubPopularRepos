import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {language: languageFiltersData[2].id}
  /*
  componentDidMount() {
    this.getRepos()
  }
  
  getRepos = async () => {
    const {language} = this.state
    const APIurl = `https://apis.ccbp.in/popular-repos?language=${language}`
    console.log(APIurl)
    const response = await fetch(APIurl)
   
    if (response.ok){
         const data = await response.json()
         const formattedData=data.map(each=>{
             name:each.name,
             id:each.id,
             issuesCount:each.issues_count,
             forksCount:each.forks_count,
             starsCount:each.stars_count,
             avatarUrl:each.avatar_url
         })
    }
    console.log(formattedData)
  }
  */

  onSelectLanguage = id => {
    this.setState({language: id})
  }

  renderLanguageOptions = () => {
    const {language} = this.state
    return (
      <ul className="language-list">
        {languageFiltersData.map(eachLanguage => (
          <LanguageFilterItem
            key={eachLanguage.id}
            languageDetails={eachLanguage}
            isSelected={language === eachLanguage.language}
            onSelecting={this.onSelectLanguage}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg">
        <h1 className="heading">Popular</h1>
      </div>
    )
  }
}

export default GithubPopularRepos
