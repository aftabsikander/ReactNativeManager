import _ from 'lodash';
import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }

    shouldComponentUpdate(nextProps) {
        this.props.employees = nextProps;
        return true;
    }


    displayListRow(item) {
        return <ListItem employee={item}/>;
    }


    render() {
        console.log(this.props);
        return (
            <View>
                <FlatList
                    data={this.props.employees}
                    renderItem={({item}) => this.displayListRow(item)} // Only for test
                    keyExtractor={(item) => item.uid}
                />
            </View>

        );
    };
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (employee, uid) => ({
        ...employee, uid
    }));
    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);