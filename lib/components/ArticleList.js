import React, {PureComponent} from 'react';
import Article from './Article';

class ArticleList extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div>
                {Object.values(this.props.articles).map(article =>       
                    <Article 
                        key= {article.id}
                        article={article}
                    />
                )}
            </div>
        );
    }
}
 
export default ArticleList;