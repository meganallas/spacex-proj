import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Grid, Icon, Menu, Sidebar, } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';

function MobileMenu() {

    const { user, logout } = useContext(AuthContext);
    const [visible, setVisible] = React.useState(false)


    const mobileMenu = user ? (
      <Grid columns={1}>
        <Grid.Column>
          <Button icon
            className='mobileMenu'
            active={visible}
            onClick={() => setVisible(true)} 
            >
            <Icon name='bars' />
          </Button>
        </Grid.Column>
  
        <Grid.Column>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
            >
                <Menu.Item
                  name='spacex'
                  as = {Link}
                  to = "/">
                  {/* <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png' /> */}
              </Menu.Item>
              <Menu.Item
                  name='rockets'
                  as = {Link}
                  to = "/rockets"
              />
              <Menu.Item
                  name='forum'
                  as = {Link}
                  to = "/forum"
              />
              <Menu.Item
                  name='logout'
                  onClick={logout}
              />
              
              {/* <Menu.Item
                  name={user.username}
                  id="user"
              /> */}
            </Sidebar>
        </Grid.Column>
      </Grid>
    ) : (
      <Grid columns={1}>
        <Grid.Column>
        <Button icon
            className='mobileMenu'
            active={visible}
            onClick={() => setVisible(true)} 
            >
            <Icon name='bars' />
          </Button>
        </Grid.Column>
  
        <Grid.Column>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
            >
                <Menu.Item
                  name='spacex'
                  as = {Link}
                  to = "/">
                  {/* <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png' /> */}
              </Menu.Item>
              <Menu.Item
                  name='rockets'
                  as = {Link}
                  to = "/rockets"
              />
              <Menu.Item
                  name='forum'
                  as = {Link}
                  to = "/forum"
              />
              <Menu.Item
                  name='login'
                  as = {Link}
                  to = "/login"
              />
              <Menu.Item
                  name='register'
                  as = {Link}
                  to = "/register"
              />
            </Sidebar>
        </Grid.Column>
      </Grid>
    );

    return mobileMenu;
}


export default MobileMenu;