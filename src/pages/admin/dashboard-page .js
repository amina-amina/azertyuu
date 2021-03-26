import React, { Component } from 'react'
import Dash from '../../components/dash'
import AdminTheme from '../../theme/admin'
import AuthContext from "../../shared/auth/Auth-context"


export default class DashboardPage extends Component {
    render() {
        return (
            <AdminTheme>
<Dash></Dash>
            </AdminTheme>

        )
    }
}
DashboardPage.contextType = AuthContext

