import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => console.log(resp.data))
    }

    handleAdd() {
        const description = this.state.description

        axios.post( URL, { description })
            .then(resp => resp)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    render() {
        return (
            <div>
                <PageHeader name='Task`s' small='Register'/>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}