import React, {Component} from 'react';
import {connect} from 'react-redux';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';

import FormHorizontalLayout from '@imports/Layout/FormHorizontalLayout';
import {FormHorizontalInput, FormButtonSet} from '@imports/components/Common'
import * as Utils from '@imports/utils';
import UsersText from './users.text';
import Repos from '@imports/components/Repos/Repos'
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./index.css";
import * as GithubActions from './users.actions'
class Users extends Component {



    componentDidMount() {
        const {getRepos} = this.props
        getRepos()
    }

    render() {
        const {repos} = this.props
        console.log("sdsds",repos.data);
        const usersText = Utils.checkLanguage(UsersText);
        const data = [{repos}]

        const columns = [{
            Header: 'Name',
            accessor: 'name', // String-based value accessors!
            className: "center"
          },{
            Header: 'Lastname',
            accessor: 'lastname', 
            className: "center"
          }
          ,{
            Header: 'Telephone',
            accessor: 'telephone', 
            className: "center"
          }
          ,{
            Header: 'Gender',
            accessor: 'gender', 
            className: "center"
          }]
        
        return (
            <DashBoard {...this.props}>
                <CardBox title={usersText.title}>
                    <Repos />
                    <ReactTable data={data} columns={columns}/>
                </CardBox>

            </DashBoard>
        );
    }
}

const mapStateToProps = (state) => ({repos: state.repos})

const mapDispatchToProps = {
    ...GithubActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)