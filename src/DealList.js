import { Component } from "react";
import icon from './icon.png';

export class DealList extends Component {
    state = {
        inputUser:'',
        toDoArray:[]
    }

    userText(e) {
        this.setState({inputUser: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Пожалуйста, введите пункт')
        }

        else{
        let toDoList = this.state.toDoArray;
        toDoList.push(input);
        this.setState({toDoArray: toDoList, inputUser:''})
        }
    }

    deleteItem() {
        let toDoList = this.state.toDoArray;
        toDoList = [];
        this.setState({toDoArray: toDoList})
    }

    crossed(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className='parent' >
                    <input type='text' placeholder='Что планируете сделать?' 
                    onChange={(e) => {this.userText (e.target.value)}} value={this.state.inputUser}                        />
                </div>
                <div className='parent'>
                    <button className="btn btn-add" onClick={() => this.addItem(this.state.inputUser)}>ДОБАВИТЬ</button>
                </div>

                <div>
                    <ul>
                        {this.state.toDoArray.map((item, index) => (<li onClick={this.crossed} key={index}><img className="ico" src={icon} width='40px' alt='ico'/>{item}</li>))} 
                    </ul>
                </div>

                <div className='parent'>
                    <button className="btn btn-del" onClick={() => this.deleteItem(this.state.inputUser)}>УДАЛИТЬ</button>
                </div>
            </form>
            )
        }
    }