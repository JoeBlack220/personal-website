import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export class LoginButton extends Component {
    render() {
        return (
            <div style={{ float: "right" }}>
                <Button color='google plus'>
                    <Icon name='google' /> Google
            </Button>
            </div>

        );
    }
}
