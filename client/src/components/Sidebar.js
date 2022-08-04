import React, { useEffect, useState } from 'react';
import { Card, Grid, Image, Tab } from 'semantic-ui-react'
import axios from 'axios';

const imageStyle = { margin: 'auto' };

function getPanes(data) {
    return [
        { menuItem: data[1].name, render: () => 
            <Tab.Pane>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={8} style={imageStyle}>
                        <Image 
                            className='rocketImg'
                            src='https://se-571-spacex.s3.amazonaws.com/falcon9-bg.png' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className='rocketDetails'>
                            <h1>{data[1].name}</h1>
                        <p className="sub-title">
                            {data[1].active === true ? "(active)" : "(inactive)" }
                        </p>
                            <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Height</Card.Header>
                                        <Card.Description>
                                        {data[1].height.meters}m | {data[1].height.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Diameter</Card.Header>
                                        <Card.Description>
                                        {data[1].diameter.meters}m | {data[1].diameter.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Mass</Card.Header>
                                        <Card.Description>
                                        {data[1].mass.kg.toLocaleString()}kg | {data[1].mass.lb.toLocaleString()}lbs
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Cost per launch</Card.Header>
                                        <Card.Description>
                                        ${data[1].cost_per_launch.toLocaleString()}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>                    
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane> },
        { menuItem: data[2].name, render: () => 
            <Tab.Pane>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={8} style={imageStyle}>
                        <Image 
                        className='rocketImg'
                        src='https://se-571-spacex.s3.amazonaws.com/falcon-heavy-bg.png'/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className='rocketDetails'>
                        <h1>{data[2].name}</h1>
                        <p className="sub-title">
                            {data[2].active === true ? "(active)" : "(inactive)" }
                        </p>
                        <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Height</Card.Header>
                                        <Card.Description>
                                        {data[2].height.meters}m | {data[2].height.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Diameter</Card.Header>
                                        <Card.Description>
                                        {data[2].diameter.meters}m | {data[2].diameter.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Mass</Card.Header>
                                        <Card.Description>
                                        {data[2].mass.kg.toLocaleString()}kg | {data[2].mass.lb.toLocaleString()}lbs
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Cost per launch</Card.Header>
                                        <Card.Description>
                                        ${data[2].cost_per_launch.toLocaleString()}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>                    
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane> },
        
        { menuItem: data[3].name, render: () => 
            <Tab.Pane>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={8} style={imageStyle}>
                        <Image 
                        className='rocketImg'
                        src='https://se-571-spacex.s3.amazonaws.com/starship-bg.png'/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className='rocketDetails'>
                        <h1>{data[3].name}</h1>
                        <p className="sub-title">
                            {data[3].active === true ? "(active)" : "(inactive)" }
                        </p>
                        <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Height</Card.Header>
                                        <Card.Description>
                                        {data[3].height.meters}m | {data[3].height.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Diameter</Card.Header>
                                        <Card.Description>
                                        {data[3].diameter.meters}m | {data[3].diameter.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Mass</Card.Header>
                                        <Card.Description>
                                        {data[3].mass.kg.toLocaleString()}kg | {data[3].mass.lb.toLocaleString()}lbs
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Cost per launch</Card.Header>
                                        <Card.Description>
                                        ${data[3].cost_per_launch.toLocaleString()}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>                    
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane> },

            { menuItem: data[0].name, render: () => 
            <Tab.Pane>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={8} style={imageStyle}>
                        <Image 
                        className='rocketImg'
                        src='https://se-571-spacex.s3.amazonaws.com/falcon1-bg.png'/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className='rocketDetails'>
                        <h1>{data[0].name}</h1>
                        <p className="sub-title">
                            {data[0].active === true ? "(active)" : "(inactive)" }
                        </p>
                        <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Height</Card.Header>
                                        <Card.Description>
                                        {data[0].height.meters}m | {data[0].height.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Diameter</Card.Header>
                                        <Card.Description>
                                        {data[0].diameter.meters}m | {data[0].diameter.feet}ft
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Mass</Card.Header>
                                        <Card.Description>
                                        {data[0].mass.kg.toLocaleString()}kg | {data[0].mass.lb.toLocaleString()}lbs
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>Cost per launch</Card.Header>
                                        <Card.Description>
                                        ${data[0].cost_per_launch.toLocaleString()}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>                    
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane> },
        ]
    }

    
function Sidebar(){

    const apiUrl = 'https://api.spacexdata.com/v4/rockets';
    const [data, setData] = useState(null);
    let content = null;

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            setData(response.data)
        })
    }, [apiUrl])

    if(data){
 
        const panes = getPanes(data);
    
        content = 
            <div>
                <Tab menu={{ 
                fluid: true, 
                vertical: true, 
                tabular: true
                }} 
                panes={panes} />
            </div>
      }

    return(
        <div>
            {content}
        </div>
    )
}

export default Sidebar;