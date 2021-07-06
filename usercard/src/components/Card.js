import React from 'react'; 

class Card extends React.Component{

    render(){
        const {avatar_url, login, url, repos_url} = this.props;
        return(
            <section>
            <img src={avatar_url} alt={avatar_url} />
             <h3>{login}</h3>
             <h4>{url}</h4>
             <h4>{repos_url}</h4>
            </section>
        )
    }
}

export default Card; 