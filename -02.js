import React,{Component, Fragment} from 'react'
 class Xiaojiejie extends Component{
     constructor(props){
         super(props)
         this.state={
              inputValue:'',
              list:['写作业','打排位','买饭']
         }
     }
     render(){
         return(
             <Fragment>
                 <div>
                     <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                     <button onClick={this.addList.bind(this) }>获取服务</button>
                     <ul>
                        {
                            this.state.list.map((item,index)=>{
                                return <li key={item+index}>{item}</li>
                            })
                        }
                     </ul>
                 </div>
             </Fragment>
         )
     }
     inputChange(e){
         this.setState({
             inputValue:e.target.value
         })
     }
     addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
     }
 }
 export default Xiaojiejie