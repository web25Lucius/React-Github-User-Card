import React from 'react'; 
import axios from 'axios';
import Card from './Card';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friendList: [{}]
          }
        }
   componentDidMount(){
   axios.get('https://api.github.com/users/web25Lucius/followers')
        .then(res => { 
            console.log (res.data[0]);
            const f = [];
            this.setState({f});
            console.log("the friends list", this.state.friendList)
            return res.data(f)
          })
        .catch((err)=> console.log(`error message: ${err}`))
   }

   componentDidUpdate(){
    
   }


    render(){
        return(
            <div>
        {this.state.friendList.map((e =>{
            return <Card key={e.login} avatar_url={e.avatar_url} login={e.login} url={e.url} repos_url={e.repos_url}/>
        }))}
            </div>
        )
    }

}
export default List; 