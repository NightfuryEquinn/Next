import articleStyles from '../styles/Article.module.css'
import Articleitem from './Articleitem'

const Articlelist = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
            <Articleitem article={article} key={article.id} />
        ))}
    </div>
  )
}

export default Articlelist